import React from 'react'

export default function ActionButton({ onAction, children }) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent Panel's click
          onAction(); // Call the passed custom action
        }}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        {children}
      </button>
    );
  }
  