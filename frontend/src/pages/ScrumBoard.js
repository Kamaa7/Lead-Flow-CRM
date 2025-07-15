import React from 'react';
import { ViewColumnsIcon } from '@heroicons/react/24/outline';

const ScrumBoard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Scrum Board</h1>
          <p className="text-gray-600">Visual deal tracking and pipeline management</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center py-12">
          <ViewColumnsIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Scrum Board</h3>
          <p className="text-gray-600">
            Kanban-style deal tracking with drag-and-drop functionality and AI insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrumBoard;