'use client';
import React, { ReactNode } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between items-center">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9l-6 6m0-6l6 6M4 4l6 6m-6 6l6-6"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 py-5 sm:p-6">{children}</div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end">
          <button
            onClick={handleClose}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
