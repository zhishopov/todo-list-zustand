import React, { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export default function TodoList() {
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const [inputText, setInputText] = useState<string>("");

    function addTodoHandler(event: React.FormEvent) {
        event.preventDefault();
        if(inputText.length === 0) return;

        addTodo(inputText);
        setInputText("");
    }
  
    return (
        <div className="min-h-screen bg-slate-100 flex items-start justify-center p-6">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-4">
            <h1 className="text-2xl font-bold">Todos</h1>
            <form onSubmit={addTodoHandler} className="flex gap-2">
              <input
                type="text"
                placeholder="Add a new task"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                disabled={inputText.length === 0}
              >
                Add Task
              </button>
            </form>
            <div className="flex items-center justify-between">
              <div className="inline-flex rounded-xl border border-slate-200 overflow-hidden">
                <button className="px-3 py-1 text-sm bg-slate-900 text-white" type="button">
                  All
                </button>
                <button className="px-3 py-1 text-sm hover:bg-slate-50" type="button">
                  Active
                </button>
                <button className="px-3 py-1 text-sm hover:bg-slate-50" type="button">
                  Completed
                </button>
              </div>
            </div>
            <ul className="divide-y divide-slate-200">
              {todos.map((todo) => (
                <li key={todo.id} className="flex items-center gap-3 py-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <label
                    className={
                      todo.isCompleted
                        ? "select-none text-slate-400 line-through"
                        : "select-none text-slate-800"
                    }
                  >
                    {todo.title}
                  </label>
    
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="ml-auto text-sm opacity-70 hover:opacity-100"
                    type="button"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
  }