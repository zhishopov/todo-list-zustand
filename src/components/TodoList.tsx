export default function TodoList() {
    const todos = [{
        id: 1,
        title: "Task 1",
        status: "Completed"
    }, {
        id: 2,
        title: "Task 2",
        status: "Completed"
    }, {
        id: 3,
        title: "Task 3",
        status: "Completed"
    }]
    return (
        <div className="w-full max-w-md rounded-2xl shadow sm:p-6 space-y-4 bg-blue-300">
            <h1 className="font-bold text-lg">Todos</h1>
            <div>
                <input type="text"  placeholder="Add a new task" className="border border-red-500 rounded-2xl mr-2 p-2"/>
                <button className="border border-blue-600 rounded-2xl p-2 hover:bg-blue-500">Add Task</button>
            </div>
            <div className="flex items-center justify-center gap-6 bg-blue-400 rounded-2xl p-2 w-73">
                <button className="hover:bg-blue-500 p-2">All</button>
                <button className="hover:bg-blue-500 p-2">Active</button>
                <button className="hover:bg-blue-500 p-2">Completed</button>
            </div>
            <div>
                {todos.map((todo) => (
                    <ul>
                        <li>
                            <input type="checkbox" /> {todo.title}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}