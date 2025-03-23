import React, { useRef } from 'react'; // ✅ Needed
import ActionButton from '../components/ActionButton'; // ✅ If it's in a separate file


export default function Panel({ onSendEmail, onGenerateReport }) {
    const secondButtonRef = useRef(null);
  
    return (
      <div
        onClick={() => alert("📦 Panel clicked (default background action)")}
        className="p-6 bg-gray-200 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold mb-4">📊 Dashboard Panel</h3>
  
        <div className="flex gap-4">
          {/* First button will trigger the second button's click */}
          <ActionButton
            onAction={() => {
              secondButtonRef.current?.click(); // Trigger second button's click
            }}
          >
            ✉️ Send Email
          </ActionButton>
  
          {/* Second button with ref */}
          <ActionButton
            onAction={onGenerateReport}
            buttonRef={secondButtonRef}
          >
            📈 Generate Report
          </ActionButton>
        </div>
      </div>
    );
  }