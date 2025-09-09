import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TodoStore {
  todos: Todo[];

  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (text: string) => {
    if (text.length === 0) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: text,
      isCompleted: false,
    };

    set((state) => ({
      todos: [newTodo, ...state.todos],
    }));
  },

  toggleTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  },

  deleteTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));