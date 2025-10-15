import React from "react";

function SettingsDrawerContent({ user }) {
  return (
    <div className="font-display space-y-4">
      <h2 className="text-lg font-bold text-gray-800">
        Welcome, {user?.name || "Guest"}
      </h2>
     
    </div>
  );
}

export default SettingsDrawerContent;
