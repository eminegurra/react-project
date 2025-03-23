'use client';
import React from 'react';
import Panel from '../components/Panel';


export default function Playground() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        🛠️ Custom Event Handling Demo
      </h2>

      <Panel
        onSendEmail={() => alert("✅ Email sent to client!")}
        onGenerateReport={() => alert("📊 Report generated successfully!")}
      />
    </div>
  );
}
