'use client';
import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (indexToDelete: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold">My To-Do App 📝</h1>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 rounded-xl border px-4 py-2"
          />
          <button
            onClick={addTask}
            className="rounded-xl bg-black px-4 py-2 text-white"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between rounded-xl border p-3"
            >
              {t}
              <button
                onClick={() => deleteTask(index)}
                className="rounded bg-red-500 px-2 text-white"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
