import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

const checkVariants = {
  initial: {
    color: '#fff',
  },
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
};

const boxVariants = {
  checked: {
    background: '#9333ea',
    transition: { duration: 0.1 },
  },
  unchecked: { background: '#e5e7eb', transition: { duration: 0.1 } },
};

function CheckButton({ checked, handleCheck }) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      animate={checked ? 'checked' : 'unchecked'}
      className="w-6 h-6 rounded-md flex items-center justify-center cursor-pointer border border-gray-300"
      variants={boxVariants}
      onClick={() => handleCheck()}
    >
      <motion.svg
        className="w-4 h-4"
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? 'checked' : 'unchecked'}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="white"
        />
      </motion.svg>
    </motion.div>
  );
}

export default CheckButton;

