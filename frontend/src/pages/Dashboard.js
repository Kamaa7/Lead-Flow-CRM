import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardStats } from '../store/analyticsSlice';
import { 
  UsersIcon, 
  BuildingOfficeIcon, 
  CheckCircleIcon, 
  TrendingUpIcon,
  TrendingDownIcon,
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboardStats, loading } = useSelector((state) => state.analytics);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  // Mock data for charts
  const monthlyLeadsData = [
    { month: 'Jan', leads: 65, converted: 12 },
    { month: 'Feb', leads: 78, converted: 15 },
    { month: 'Mar', leads: 90, converted: 18 },
    { month: 'Apr', leads: 81, converted: 16 },
    { month: 'May', leads: 95, converted: 22 },
    { month: 'Jun', leads: 112, converted: 28 },
  ];

  const leadsByStatusData = [
    { name: 'New', value: 45, color: '#3B82F6' },
    { name: 'Contacted', value: 32, color: '#10B981' },
    { name: 'Qualified', value: 18, color: '#F59E0B' },
    { name: 'Converted', value: 25, color: '#EF4444' },
  ];

  const tasksByPriorityData = [
    { priority: 'High', count: 12, color: '#EF4444' },
    { priority: 'Medium', count: 25, color: '#F59E0B' },
    { priority: 'Low', count: 18, color: '#10B981' },
  ];

  const stats = [
    {
      name: 'Total Leads',
      value: dashboardStats.totalLeads || 245,
      change: '+12%',
      changeType: 'positive',
      icon: UsersIcon,
      color: 'bg-blue-500',
    },
    {
      name: 'Properties',
      value: dashboardStats.totalProperties || 67,
      change: '+8%',
      changeType: 'positive',
      icon: BuildingOfficeIcon,
      color: 'bg-green-500',
    },
    {
      name: 'Tasks',
      value: dashboardStats.totalTasks || 34,
      change: '-2%',
      changeType: 'negative',
      icon: CheckCircleIcon,
      color: 'bg-yellow-500',
    },
    {
      name: 'Conversion Rate',
      value: dashboardStats.leadConversionRate || '24%',
      change: '+5%',
      changeType: 'positive',
      icon: TrendingUpIcon,
      color: 'bg-purple-500',
    },
  ];

  const aiInsights = [
    {
      icon: SparklesIcon,
      title: 'AI Recommendation',
      description: 'Focus on leads from referrals - they have 34% higher conversion rate',
      action: 'View Details',
      color: 'bg-indigo-500',
    },
    {
      icon: BoltIcon,
      title: 'Hot Lead Alert',
      description: '5 leads are showing high engagement and need immediate follow-up',
      action: 'Follow Up',
      color: 'bg-red-500',
    },
    {
      icon: ChartBarIcon,
      title: 'Performance Insight',
      description: 'Your email open rate increased by 18% this week',
      action: 'Analyze',
      color: 'bg-green-500',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'lead',
      title: 'New lead: John Smith',
      description: 'From website contact form',
      time: '2 minutes ago',
      icon: UsersIcon,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      type: 'task',
      title: 'Task completed: Follow up with Sarah',
      description: 'Call scheduled for tomorrow',
      time: '15 minutes ago',
      icon: CheckCircleIcon,
      color: 'bg-green-500',
    },
    {
      id: 3,
      type: 'property',
      title: 'Property updated: 123 Main St',
      description: 'Price reduced to $450,000',
      time: '1 hour ago',
      icon: BuildingOfficeIcon,
      color: 'bg-yellow-500',
    },
    {
      id: 4,
      type: 'email',
      title: 'Email campaign sent',
      description: 'Monthly newsletter to 1,234 contacts',
      time: '2 hours ago',
      icon: EnvelopeIcon,
      color: 'bg-purple-500',
    },
  ];

  const quickActions = [
    { name: 'Add New Lead', icon: PlusIcon, color: 'bg-blue-500', href: '/leads/new' },
    { name: 'Schedule Task', icon: CalendarDaysIcon, color: 'bg-green-500', href: '/tasks/new' },
    { name: 'Send Email', icon: EnvelopeIcon, color: 'bg-purple-500', href: '/email-center/compose' },
    { name: 'Add Property', icon: BuildingOfficeIcon, color: 'bg-yellow-500', href: '/properties/new' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user?.full_name?.split(' ')[0]}!</h1>
            <p className="text-primary-100 mt-1">
              Here's what's happening with your business today.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold">28</div>
                <div className="text-sm text-primary-100">This Month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-primary-100">This Week</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-primary-100">Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <div className="flex items-center mt-1">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <div className={`ml-2 flex items-center text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.changeType === 'positive' ? (
                      <ArrowUpIcon className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4 mr-1" />
                    )}
                    {stat.change}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Leads Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Leads & Conversions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyLeadsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="leads" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="converted" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Leads by Status Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leads by Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadsByStatusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {leadsByStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {leadsByStatusData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Insights */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <SparklesIcon className="h-5 w-5 mr-2 text-purple-500" />
            AI Insights
          </h3>
          <div className="space-y-4">
            {aiInsights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <div className={`p-2 rounded-lg ${insight.color}`}>
                  <insight.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{insight.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                  <button className="text-sm text-primary-600 hover:text-primary-700 mt-2">
                    {insight.action} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
              >
                <div className={`p-3 rounded-lg ${action.color} mb-2`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">{action.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <activity.icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;