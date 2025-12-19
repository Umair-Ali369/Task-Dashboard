import { useState } from "react";
import { useTasks } from "../Context/TaskContext";
import { motion, AnimatePresence } from "framer-motion";

const EditTaskForm = ({ close, task }) => {
  const [title, setTitle] = useState(task?.title || "");
  const { editTask } = useTasks();

  const handleSumbit = (e) => {
    e.preventDefault();
    editTask(task.id, title);
    close();
  };
  return (
    <AnimatePresence>
      <motion.div
      initial={{opacity : 0}}
      animate={{opacity : 1}}
      exit={{opacity : 0}}
      >

      <motion.form
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180 }}
        onSubmit={handleSumbit}
        className="space-y-4 mt-4"
      >
        <h2 className="text-xl font-bold"> Add New Task </h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded-md"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-600 w-full text-white px-4 py-2 rounded-md "
          >
            Update
          </button>
          <button
            onClick={close}
            className="bg-gray-600 w-full text-white px-4 py-2 rounded-md "
          >
            Cancel
          </button>
        </div>
      </motion.form>
      </motion.div>
    </AnimatePresence>
  );
};

export default EditTaskForm;
