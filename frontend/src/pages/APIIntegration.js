import React, { useState } from 'react';
import { 
  CodeBracketIcon, 
  KeyIcon,
  LinkIcon,
  DocumentTextIcon,
  CogIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/outline';
import Modal from '../components/Modal';
import toast from 'react-hot-toast';

const APIIntegration = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: 'Production API Key',
      key: 'lf_prod_****************************',
      created: '2024-01-15',
      lastUsed: '2024-01-20',
      status: 'active'
    },
    {
      id: 2,
      name: 'Development API Key',
      key: 'lf_dev_****************************',
      created: '2024-01-10',
      lastUsed: '2024-01-19',
      status: 'active'
    }
  ]);

  const integrations = [
    {
      id: 1,
      name: 'Zapier',
      description: 'Connect LeadFlow with 5000+ apps',
      status: 'connected',
      icon: '⚡',
      endpoint: '/zapier/new-leads',
      method: 'GET'
    },
    {
      id: 2,
      name: 'Webhook',
      description: 'Real-time data synchronization',
      status: 'available',
      icon: '🔗',
      endpoint: '/webhooks/leads',
      method: 'POST'
    },
    {
      id: 3,
      name: 'REST API',
      description: 'Full programmatic access',
      status: 'available',
      icon: '🔧',
      endpoint: '/api/v1',
      method: 'ALL'
    }
  ];

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/leads',
      description: 'Retrieve all leads',
      parameters: 'page, limit, search'
    },
    {
      method: 'POST',
      endpoint: '/api/leads',
      description: 'Create a new lead',
      parameters: 'name, email, phone, company'
    },
    {
      method: 'GET',
      endpoint: '/api/leads/{id}',
      description: 'Get specific lead',
      parameters: 'id (required)'
    },
    {
      method: 'PUT',
      endpoint: '/api/leads/{id}',
      description: 'Update lead information',
      parameters: 'id (required), data fields'
    },
    {
      method: 'DELETE',
      endpoint: '/api/leads/{id}',
      description: 'Delete a lead',
      parameters: 'id (required)'
    },
    {
      method: 'GET',
      endpoint: '/api/properties',
      description: 'Retrieve all properties',
      parameters: 'page, limit, search'
    },
    {
      method: 'POST',
      endpoint: '/api/properties',
      description: 'Create a new property',
      parameters: 'title, address, price, type'
    },
    {
      method: 'GET',
      endpoint: '/zapier/new-leads',
      description: 'Zapier polling endpoint',
      parameters: 'Bearer token authentication'
    }
  ];

  const codeExamples = {
    javascript: `// JavaScript Example
const response = await fetch('https://api.leadflow.com/api/leads', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const leads = await response.json();
console.log(leads);`,
    
    python: `# Python Example
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.leadflow.com/api/leads', headers=headers)
leads = response.json()
print(leads)`,
    
    curl: `# cURL Example
curl -X GET "https://api.leadflow.com/api/leads" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
  };

  const generateApiKey = () => {
    const newKey = {
      id: apiKeys.length + 1,
      name: 'New API Key',
      key: 'lf_' + Math.random().toString(36).substring(2, 15) + '**********************',
      created: new Date().toISOString().split('T')[0],
      lastUsed: 'Never',
      status: 'active'
    };
    setApiKeys([...apiKeys, newKey]);
    setIsKeyModalOpen(false);
    toast.success('API key generated successfully!');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: DocumentTextIcon },
    { id: 'endpoints', name: 'API Endpoints', icon: CodeBracketIcon },
    { id: 'keys', name: 'API Keys', icon: KeyIcon },
    { id: 'integrations', name: 'Integrations', icon: LinkIcon },
    { id: 'examples', name: 'Code Examples', icon: ClipboardDocumentIcon }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">API & Integrations</h1>
          <p className="text-gray-600">Developer tools and third-party integrations</p>
        </div>
        <button onClick={() => setIsKeyModalOpen(true)} className="btn-primary flex items-center space-x-2">
          <KeyIcon className="h-5 w-5" />
          <span>Generate API Key</span>
        </button>
      </div>

      {/* Integration Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-500">
              <CodeBracketIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">API Calls Today</p>
              <p className="text-2xl font-semibold text-gray-900">1,234</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-500">
              <KeyIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Keys</p>
              <p className="text-2xl font-semibold text-gray-900">{apiKeys.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-500">
              <LinkIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Integrations</p>
              <p className="text-2xl font-semibold text-gray-900">{integrations.filter(i => i.status === 'connected').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-yellow-500">
              <CogIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Rate Limit</p>
              <p className="text-2xl font-semibold text-gray-900">1000/hr</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">API Overview</h3>
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4">
                    The LeadFlow API provides programmatic access to your CRM data. Use our RESTful API to integrate 
                    LeadFlow with your existing systems, build custom applications, or automate workflows.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Base URL</h4>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        https://api.leadflow.com
                      </code>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Authentication</h4>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        Bearer Token
                      </code>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Rate Limit</h4>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        1000 requests/hour
                      </code>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Response Format</h4>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        JSON
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Available Integrations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {integrations.map((integration) => (
                    <div key={integration.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{integration.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-900">{integration.name}</h4>
                            <p className="text-sm text-gray-500">{integration.description}</p>
                          </div>
                        </div>
                        {integration.status === 'connected' ? (
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        ) : (
                          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        <code>{integration.method} {integration.endpoint}</code>
                      </div>
                      <button className={`text-sm font-medium ${
                        integration.status === 'connected' 
                          ? 'text-green-600 hover:text-green-700' 
                          : 'text-primary-600 hover:text-primary-700'
                      }`}>
                        {integration.status === 'connected' ? 'Configure' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'endpoints' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">API Endpoints</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Method
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Endpoint
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Parameters
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {apiEndpoints.map((endpoint, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <code className="text-sm text-gray-900">{endpoint.endpoint}</code>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {endpoint.description}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {endpoint.parameters}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'keys' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">API Keys</h3>
                <button onClick={() => setIsKeyModalOpen(true)} className="btn-primary">
                  Generate New Key
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        API Key
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Used
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {apiKeys.map((key) => (
                      <tr key={key.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {key.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <code className="text-sm text-gray-600">{key.key}</code>
                            <button
                              onClick={() => copyToClipboard(key.key)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <ClipboardDocumentIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {key.created}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {key.lastUsed}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            key.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {key.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-red-600 hover:text-red-900">
                            Revoke
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Code Examples</h3>
              
              {Object.entries(codeExamples).map(([language, code]) => (
                <div key={language} className="border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
                    <h4 className="font-medium text-gray-900 capitalize">{language}</h4>
                    <button
                      onClick={() => copyToClipboard(code)}
                      className="text-sm text-primary-600 hover:text-primary-700 flex items-center space-x-1"
                    >
                      <ClipboardDocumentIcon className="h-4 w-4" />
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre className="p-4 text-sm text-gray-800 overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Generate API Key Modal */}
      <Modal
        isOpen={isKeyModalOpen}
        onClose={() => setIsKeyModalOpen(false)}
        title="Generate API Key"
        size="max-w-md"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Name
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="e.g., Production API Key"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Permissions
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Read leads</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Write leads</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Read properties</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-700">Write properties</span>
              </label>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setIsKeyModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={generateApiKey}
              className="btn-primary"
            >
              Generate Key
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default APIIntegration;