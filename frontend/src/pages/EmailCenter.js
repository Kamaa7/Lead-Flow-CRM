import React from 'react';
import { EnvelopeIcon, PlusIcon } from '@heroicons/react/24/outline';

const EmailCenter = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email Center</h1>
          <p className="text-gray-600">Email campaigns and auto-responders</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <PlusIcon className="h-5 w-5" />
          <span>Compose Email</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center py-12">
          <EnvelopeIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Email Center</h3>
          <p className="text-gray-600">
            AI-powered email automation with smart templates and personalization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailCenter;