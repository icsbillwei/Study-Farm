import express from 'express';
import db from "../db/connection.mjs";
var router = express.Router();
import Task from "../models/task.mjs"
import users from "./users.mjs";
import { findUserByUsername } from '../queries/user_queries.mjs';
import {deleteTask, findTaskById, findTasksByUsername, insertTask} from "../queries/task_queries.mjs";

// get tasks
router.get('/:username', async function(req, res, next) {
    const username = req.params.username
    const tasks = await findTasksByUsername(username);
    res.status(200).send(tasks);
});

// insert tasks
router.post('/:username', async function(req, res) {
    const task = req.body;
    const username = req.params.username;
    if (task.username !== username) {
        return res.status(400).send("URL username should match the one of task field");
    }

    let user = await findUserByUsername(username);
    if (!user) {
        res.status(400).send("User not found");
    } else {
        await insertTask(task);
        return res.status(200).send("Task added");
    }
});

// delete tasks
router.delete('/:taskId', async function(req, res) {
    const taskId = req.params.taskId;
    let task = findTaskById(taskId);
    if (!task) {
        return res.status(400).send("Task not found");
    } else {
        await deleteTask(taskId);
        return res.status(200).send("Task deleted");
    }
});



router.post('/conversation', async function(req, res, next) {
    try {
        // You would get these from the request body, ensuring they are properly validated
        const { userInfo, today } = req.body;
    
        // Call your conversation function here
        const conversationResult = await runConversation(userInfo, today);
    
        // Send the result back to the client
        res.json(conversationResult);
      } catch (error) {
        console.error('Error during conversation:', error);
        res.status(500).send('An error occurred while generating the summary: ' + error);
      }
});


async function runConversation(userInfo, today) {
    // Step 1: send the conversation and available functions to the model
    const messages = [
      { role: "user", content: `Generate a three-tier priority ranking of the user's upcoming tasks for today (${today}). The user's data will be in the format of multiple tasks, their due dates, their weightings in percentage and a boolean for if it is completed or not. the user info is: ${userInfo}  Format your response very briefly` },
    ];
    const tools = [
      {
        type: "function",
        function: {
          name: "summaryFunctionCall",
          description: "Generate a three-tier priority ranking of the user's upcoming tasks for today, with str1 (three stars) being the highest priority task, and str3 (one star) being the lowest priority task.",
          parameters: {
            type: "object",
            properties: {
              str1: {type: "string", description: "Highest priority task(s)"},
              str2: { type: "string", description: "Medium priority task(s)" },
              str3: { type: "string", description: "Low priority task(s)" },
            },
            required: ["str1", "str2", "str3"],
          },
        },
      },
    ];

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: messages,
        tools: tools,
        tool_choice: "auto", // auto is default, but we'll be explicit
      });
      const responseMessage = response.choices[0].message;
    
      // Step 2: check if the model wanted to call a function
      const toolCalls = responseMessage.tool_calls;
      console.log(responseMessage)
      if (responseMessage.tool_calls) {
        // Step 3: call the function
        // Note: the JSON response may not always be valid; be sure to handle errors
        const availableFunctions = {
          summary_function_call: summaryFunctionCall,
        }; // only one function in this example, but you can have multiple
        messages.push(responseMessage); // extend conversation with assistant's reply
        for (const toolCall of toolCalls) {
          const functionName = toolCall.function.name;
          const functionToCall = availableFunctions[functionName];
          const functionArgs = JSON.parse(toolCall.function.arguments);
          const functionResponse = functionToCall(
            functionArgs.str1,
            functionArgs.str2,
            functionArgs.str3,
          );
          return functionResponse;
        }
        return null;
      }
}


export default router;