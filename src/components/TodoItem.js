import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <motion.div 
        className={`mb-4 border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ${
          checked ? 'bg-gradient-to-b from-purple-100 to-purple-50 border-purple-300' : 'bg-gray-50 border-gray-300'
        }`}
        variants={child}
      >
        <div className="py-5 px-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <CheckButton checked={checked} handleCheck={handleCheck} />
              <div className="flex-1">
                <p
                  className={`text-gray-800 font-semibold mb-2 ${
                    checked ? 'line-through opacity-60' : ''
                  }`}
                >
                  {todo.title}
                </p>
                <p className="text-gray-500 text-sm">
                  {format(new Date(todo.time), 'p, MM/dd/yyyy')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                onClick={() => handleDelete()}
                onKeyDown={() => handleDelete()}
                className="text-red-500 hover:text-red-600 transition-colors p-2 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Delete todo"
              >
                <MdDelete size={20} />
              </div>
              <div
                onClick={() => handleUpdate()}
                onKeyDown={() => handleUpdate()}
                className="text-blue-500 hover:text-blue-600 transition-colors p-2 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Edit todo"
              >
                <MdEdit size={20} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
}

export default TodoItem;

