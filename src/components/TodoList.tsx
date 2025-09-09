export default function TodoList() {
    const todos = [
      { id: 1, title: "Task 1", status: "Completed" },
      { id: 2, title: "Task 2", status: "Completed" },
      { id: 3, title: "Task 3", status: "Completed" },
    ];
  
    return (
      <div className="min-h-screen bg-slate-100 flex items-start justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-4">
          <h1 className="text-2xl font-bold">Todos</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a new task"
              className="flex-1 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
              Add Task
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-flex rounded-xl border border-slate-200 overflow-hidden">
              <button className="px-3 py-1 text-sm bg-slate-900 text-white">All</button>
              <button className="px-3 py-1 text-sm hover:bg-slate-50">Active</button>
              <button className="px-3 py-1 text-sm hover:bg-slate-50">Completed</button>
            </div>
          </div>
          <ul className="divide-y divide-slate-200">
            {todos.map((todo) => (
              <li key={todo.id} className="flex items-center gap-3 py-3">
                <input type="checkbox" className="h-4 w-4" />
                <label className="select-none text-slate-800">{todo.title}</label>
                <button className="ml-auto opacity-70 hover:opacity-100">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }