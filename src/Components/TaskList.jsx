import { useState } from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../Context/TaskContext";
import Model from "./Model";
import EditTaskForm from "./EditTaskForm";

const TaskList = () => {
  const {
    filter,
    setFilter,
    getFilteredTasks,
    deleteTask,
    toggleTask,
    search,
    setSearch,
    sortOrder,
    setSortOrder,
  } = useTasks();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const tasks = getFilteredTasks();
  //open edit model
  const handleEdit = (task) => {
    setEditingTask(task);
    setIsEditOpen(!isEditOpen);
  };

  return (
    <section className="p-4 space-y-4">
             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white p-4 rounded-xl shadow">
          {/* Search filter */}
          <div>
            <input
              type="text"
              placeholder="Search Tasks...."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>
          {/* Fitler Buttons */}
          <div className="flex gap-3 my-5">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md ${
                filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-md ${
                filter === "completed"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded-md ${
                filter === "pending"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Pending
            </button>
          </div>

          {/*  Sort order */}
          <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-3 py-1 rounded border"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>


      {/* Show Tasks, all, completed or pending */}
      <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </ul>

      {/* EDIT MODEL */}
      {editingTask && (
        <Model isOpen={isEditOpen} isClose={() => setIsEditOpen(false)}>
          <EditTaskForm
            close={() => setIsEditOpen(!isEditOpen)}
            task={editingTask}
          />
        </Model>
      )}
    </section>
  );
};

export default TaskList;
