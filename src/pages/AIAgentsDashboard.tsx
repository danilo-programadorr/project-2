import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  TrendingUp,
  DollarSign,
  Target,
  BarChart2,
  LineChart,
  PieChart,
  Download,
  RefreshCw,
  Send,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const tabs = [
  { id: 'innovation', label: 'Innovation & Competition', icon: Brain },
  { id: 'indicators', label: 'Indicators', icon: TrendingUp },
  { id: 'financial', label: 'Financial', icon: DollarSign },
  { id: 'marketing', label: 'Smart Marketing', icon: Target },
];

// Sample data for charts
const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
];

const barData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 600 },
  { name: 'Product D', value: 200 },
];

const pieData = [
  { name: 'Social', value: 400 },
  { name: 'Email', value: 300 },
  { name: 'Direct', value: 300 },
  { name: 'Organic', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AIAgentsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('innovation');
  const [loading, setLoading] = useState(false);

  const handleAction = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
  };

  const renderTabContent = (tabId: string) => {
    switch (tabId) {
      case 'innovation':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">Market Trends</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Competitor Analysis</h3>
                <div className="space-y-4">
                  {['Competitor A', 'Competitor B', 'Competitor C'].map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{competitor}</span>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">+{Math.floor(Math.random() * 30)}%</span>
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Latest Insights</h3>
                <div className="space-y-4">
                  {['New market opportunity detected', 'Competitor launched feature', 'Industry trend alert'].map((insight, index) => (
                    <div key={index} className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-end space-x-4"
            >
              <button
                onClick={handleAction}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                {loading ? (
                  <>
                    <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Generate Report
                  </>
                )}
              </button>
            </motion.div>
          </div>
        );

      case 'indicators':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Retention Rate</span>
                    <span className="text-green-500">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>User Engagement</span>
                    <span className="text-blue-500">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Growth Rate</span>
                    <span className="text-purple-500">+23%</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">Weekly Progress</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
                <div className="space-y-4">
                  {['Unusual activity detected', 'Performance milestone reached', 'System update required'].map((alert, index) => (
                    <div key={index} className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm">{alert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'financial':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Financial Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Revenue</span>
                    <span className="text-green-500">$50,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Expenses</span>
                    <span className="text-red-500">$30,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Profit</span>
                    <span className="text-blue-500">$20,000</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">Expense Categories</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
                <div className="space-y-4">
                  {[
                    { desc: 'Software License', amount: -2500 },
                    { desc: 'Client Payment', amount: 5000 },
                    { desc: 'Office Supplies', amount: -150 },
                  ].map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{transaction.desc}</span>
                      <span className={transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}>
                        ${Math.abs(transaction.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'marketing':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Campaign Performance</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Social Media', performance: 92 },
                    { name: 'Email', performance: 87 },
                    { name: 'Content', performance: 78 },
                  ].map((campaign, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{campaign.name}</span>
                        <span className="text-green-500">{campaign.performance}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${campaign.performance}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">Conversion Funnel</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Active Campaigns</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Summer Sale', status: 'Active', time: '2d remaining' },
                    { name: 'Email Series', status: 'Scheduled', time: 'Starts in 3d' },
                    { name: 'Social Ads', status: 'Active', time: '5d remaining' },
                  ].map((campaign, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-500 mr-2" />
                        <div>
                          <p className="font-medium">{campaign.name}</p>
                          <p className="text-sm text-gray-500">{campaign.time}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">AI Agents Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Monitor and manage your AI agents' performance and insights
        </p>
      </div>

      <div className="mb-8">
        <nav className="flex space-x-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {renderTabContent(activeTab)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AIAgentsDashboard;