import React, { createContext, useState, ReactNode, useContext } from 'react';

export interface TimelineObject {
  id: number;
  name: string;
  percentage: number;
  dueDate: Date;
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
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TimelineObject[]>([
    { id: 1, name: 'Intro Quiz', percentage: 5, dueDate: new Date(2024, 4, 17) },
    { id: 2, name: 'Assignment 1', percentage: 5, dueDate: new Date(2024, 4, 18) },
    { id: 3, name: 'Quiz 1', percentage: 20, dueDate: new Date(2024, 4, 19) },
    { id: 4, name: 'Assignment 2', percentage: 5, dueDate: new Date(2024, 4, 20) },
    { id: 5, name: '💀 Exam', percentage: 60, dueDate: new Date(2024, 4, 25) },
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

  return (
    <GlobalStateContext.Provider value={{ tasks, user, addTask, removeTask, clearTasks, setUser, clearUser }}>
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
