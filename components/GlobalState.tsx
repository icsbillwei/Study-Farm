import React, { createContext, useState, ReactNode, useContext } from 'react';

export interface TimelineObject {
  id: number;
  name: string;
  percentage: number;
  dueDate: Date;
  done: boolean;
}

export interface User {
  username: string;
  password: string;
}

interface GlobalState {
  tasks: TimelineObject[];
  user: User | null;
  addTask: (task: TimelineObject) => void;
  removeTask: (taskId: number) => void;
  clearTasks: () => void;
  setUser: (user: User) => void;
  clearUser: () => void;
  toggleDone: (taskId: number) => void;
  getString: () => string;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TimelineObject[]>([
    { id: 2, name: 'Assignment 1', percentage: 5, dueDate: new Date(2024, 4, 18), done: false },
    { id: 3, name: 'Quiz 1', percentage: 10, dueDate: new Date(2024, 4, 19), done: false },
    { id: 4, name: 'Assignment 2', percentage: 5, dueDate: new Date(2024, 4, 20), done: false },
    { id: 5, name: '💀 Midterm', percentage: 30, dueDate: new Date(2024, 4, 25), done: false },
    { id: 6, name: 'Assignment 3', percentage: 5, dueDate: new Date(2024, 4, 20), done: false },
  ]);
  const [user, setUser] = useState<User | null>(null);

  const addTask = (task: TimelineObject) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const clearTasks = () => {
    setTasks([]);
  };
  
  const clearUser = () => {
    setUser(null);
  };

  const toggleDone = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const getString = () => {
    console.log(tasks);
    return JSON.stringify(tasks);
  };

  return (
    <GlobalStateContext.Provider value={{ tasks, user, addTask, removeTask, clearTasks, setUser, clearUser, toggleDone, getString }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
