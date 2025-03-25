import React, { useState } from 'react';
import ActionButton from '../components/ActionButton';

export default function Panel({ onSendEmail, onGenerateReport }) {
  const [activeAction, setActiveAction] = useState(null); // 'email' or 'report'

  // Trigger the action manually when activeAction changes
  React.useEffect(() => {
    if (activeAction === 'email') {
      onSendEmail();
    } else if (activeAction === 'report') {
      onGenerateReport();
    }
    // Optionally reset it so it doesn't repeat
    setActiveAction(null);
  }, [activeAction]);

  return (
    <div
      onClick={() => alert("📦 Panel clicked (default background action)")}
      className="p-6 bg-gray-200 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold mb-4">📊 Dashboard Panel</h3>

      <div className="flex gap-4">
        <ActionButton onAction={() => setActiveAction('report')}>
          ✉️ Send Email
        </ActionButton>

        <ActionButton onAction={() => setActiveAction('report')}>
          📈 Generate Report
        </ActionButton>
      </div>
    </div>
  );
}
