import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import {
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ViewColumnsIcon,
  EnvelopeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  SparklesIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Leads', href: '/leads', icon: UsersIcon, current: false },
  { name: 'Properties', href: '/properties', icon: BuildingOfficeIcon, current: false },
  { name: 'Tasks', href: '/tasks', icon: CheckCircleIcon, current: false },
  { name: 'Scrum Board', href: '/scrum-board', icon: ViewColumnsIcon, current: false },
  { name: 'Email Center', href: '/email-center', icon: EnvelopeIcon, current: false },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon, current: false },
  { name: 'Paperless Office', href: '/paperless-office', icon: DocumentTextIcon, current: false },
  { name: 'API Integration', href: '/api-integration', icon: CodeBracketIcon, current: false },
];

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 px-6 py-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <SparklesIcon className="w-5 h-5 text-white" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-900">LeadFlow</h1>
            <p className="text-xs text-gray-500">AI-Powered CRM</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pb-4 space-y-6">
        {/* Main Navigation */}
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main
          </h3>
          <div className="mt-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  clsx(
                    isActive
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-l-md transition-colors duration-200'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={clsx(
                        isActive ? 'text-primary-600' : 'text-gray-400',
                        'mr-3 h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Tools & Integration
          </h3>
          <div className="mt-2 space-y-1">
            <NavLink
              to="/paperless-office"
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-l-md transition-colors duration-200'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <ClipboardDocumentListIcon
                    className={clsx(
                      isActive ? 'text-primary-600' : 'text-gray-400',
                      'mr-3 h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  Document Merge
                </>
              )}
            </NavLink>
            <NavLink
              to="/api-integration"
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-l-md transition-colors duration-200'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <CodeBracketIcon
                    className={clsx(
                      isActive ? 'text-primary-600' : 'text-gray-400',
                      'mr-3 h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  API & Zapier
                </>
              )}
            </NavLink>
          </div>
        </div>

        {/* AI Features */}
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            AI Features
          </h3>
          <div className="mt-2 space-y-1">
            <div className="text-gray-700 group flex items-center px-3 py-2 text-sm font-medium rounded-l-md">
              <SparklesIcon
                className="text-gray-400 mr-3 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-gray-500">Coming Soon</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Settings */}
      <div className="px-4 pb-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            clsx(
              isActive
                ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
              'group flex items-center px-3 py-2 text-sm font-medium rounded-l-md transition-colors duration-200'
            )
          }
        >
          {({ isActive }) => (
            <>
              <Cog6ToothIcon
                className={clsx(
                  isActive ? 'text-primary-600' : 'text-gray-400',
                  'mr-3 h-5 w-5 flex-shrink-0'
                )}
                aria-hidden="true"
              />
              Settings
            </>
          )}
        </NavLink>
      </div>

      {/* Help Section */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4">
          <div className="flex items-center">
            <DocumentTextIcon className="h-6 w-6 text-primary-600" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-primary-900">Documentation</h3>
              <p className="text-xs text-primary-600">API guides & tutorials</p>
            </div>
          </div>
          <div className="mt-3 flex space-x-2">
            <button 
              onClick={() => window.open('/api-integration', '_blank')}
              className="text-xs bg-primary-600 text-white px-3 py-1 rounded-md hover:bg-primary-700"
            >
              API Docs
            </button>
            <button className="text-xs border border-primary-600 text-primary-600 px-3 py-1 rounded-md hover:bg-primary-50">
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <SidebarContent />
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <SidebarContent />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
              >
                <item.icon
                  className="text-gray-400 mr-3 h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Settings */}
      <div className="px-4 pb-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            clsx(
              isActive
                ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
              'group flex items-center px-3 py-2 text-sm font-medium rounded-l-md transition-colors duration-200'
            )
          }
        >
          {({ isActive }) => (
            <>
              <Cog6ToothIcon
                className={clsx(
                  isActive ? 'text-primary-600' : 'text-gray-400',
                  'mr-3 h-5 w-5 flex-shrink-0'
                )}
                aria-hidden="true"
              />
              Settings
            </>
          )}
        </NavLink>
      </div>

      {/* Help Section */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4">
          <div className="flex items-center">
            <QuestionMarkCircleIcon className="h-6 w-6 text-primary-600" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-primary-900">Need Help?</h3>
              <p className="text-xs text-primary-600">Get support and tutorials</p>
            </div>
          </div>
          <div className="mt-3 flex space-x-2">
            <button className="text-xs bg-primary-600 text-white px-3 py-1 rounded-md hover:bg-primary-700">
              Support
            </button>
            <button className="text-xs border border-primary-600 text-primary-600 px-3 py-1 rounded-md hover:bg-primary-50">
              Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <SidebarContent />
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <SidebarContent />
        </div>
      </div>
    </>
  );
};

export default Sidebar;