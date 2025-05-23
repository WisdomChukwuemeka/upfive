import React, { useState } from 'react';
import { 
  User, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  DollarSign, 
  CreditCard, 
  Bell,
  Settings,
  LogOut,
  Play,
  Calendar,
  Award,
  TrendingUp,
  AlertCircle,
  Download
} from 'lucide-react';

export const Profile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const [studentData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    studentId: 'TA-2025-001',
    joinDate: 'May 2025',
    totalSpent: 950000,
    accountBalance: 50000,
    coursesCompleted: 3,
    totalCourses: 8
  });

  const [pendingCourses] = useState([
    {
      id: 1,
      title: 'Advanced React Development',
      instructor: 'Wisdom Lugard',
      price: 300000,
      duration: '8 weeks',
      startDate: '2024-06-01',
      level: 'Advanced',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Django Backend Mastery',
      instructor: 'Lisa Rodriguez',
      price: 300000,
      duration: '8 weeks',
      startDate: '2024-06-15',
      level: 'Intermediate',
      status: 'pending'
    },
    {
      id: 3,
      title: 'DevOps & Cloud Computing',
      instructor: 'David Park',
      price: 300000,
      duration: '12 weeks',
      startDate: '2024-07-01',
      level: 'Advanced',
      status: 'pending'
    }
  ]);

  const [approvedCourses] = useState([
    {
      id: 4,
      title: 'JavaScript Fundamentals',
      instructor: 'John Smith',
      price: '200000',
      paidAmount: '200000',
      progress: 100,
      completedDate: '2024-03-15',
      status: 'completed',
      certificate: true
    },
    {
      id: 5,
      title: 'React Basics',
      instructor: 'Emily Davis',
      price: '300000',
      paidAmount: '300000',
      progress: 100,
      completedDate: '2024-04-20',
      status: 'completed',
      certificate: true
    },
    {
      id: 6,
      title: 'Python for Web Development',
      instructor: 'Alex Thompson',
      price: '300000',
      paidAmount: '300000',
      progress: 75,
      status: 'in_progress',
      certificate: false
    },
    
    {
      id: 8,
      title: 'UI/UX Design Principles',
      instructor: 'Tom Wilson',
      price: '150000',
      paidAmount: '150000',
      progress: 30,
      status: 'in_progress',
      certificate: false
    }
  ]);

  const getStatusBadge = (status, progress) => {
    if (status === 'completed') {
      return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
        <CheckCircle className="w-3 h-3" />
        Completed
      </span>;
    } else if (status === 'in_progress') {
      return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full flex items-center gap-1">
        <Play className="w-3 h-3" />
        In Progress ({progress}%)
      </span>;
    } else {
      return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full flex items-center gap-1">
        <Clock className="w-3 h-3" />
        Pending
      </span>;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">UA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Coming</h1>
                <p className="text-sm text-gray-500">Student Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-red-900 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome back, {studentData.name}!</h2>
              <p className="text-blue-100">Continue your learning journey</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-100">Student ID</p>
              <p className="font-mono font-semibold">{studentData.studentId}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">₦{studentData.totalSpent}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Balance</p>
                <p className="text-2xl font-bold text-gray-900">₦{studentData.accountBalance}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Courses Enrolled</p>
                <p className="text-2xl font-bold text-gray-900">{studentData.totalCourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{studentData.coursesCompleted}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Courses */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  Pending Courses ({pendingCourses.length})
                </h3>
                <span className="text-sm text-gray-500">Awaiting Payment</span>
              </div>
            </div>
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {pendingCourses.map((course) => (
                <div key={course.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{course.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ₦{getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Instructor: {course.instructor}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <p>{course.duration} • Starts {course.startDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">₦{course.price}</p>
                      <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approved/Enrolled Courses */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  My Courses ({approvedCourses.length})
                </h3>
                <span className="text-sm text-gray-500">Paid & Active</span>
              </div>
            </div>
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {approvedCourses.map((course) => (
                <div key={course.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{course.title}</h4>
                    {getStatusBadge(course.status, course.progress)}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Instructor: {course.instructor}</p>
                  
                  {course.status === 'in_progress' && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `₦{course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-gray-500">Paid: </span>
                      <span className="font-semibold text-green-600">₦{course.paidAmount}</span>
                    </div>
                    <div className="flex gap-2">
                      {course.certificate && (
                        <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full hover:bg-green-200 transition-colors flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          Certificate
                        </button>
                      )}
                      {course.status === 'in_progress' && (
                        <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors">
                          Continue
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Payment Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Total Course Value</p>
              <p className="text-2xl font-bold text-gray-900">
                ₦{approvedCourses.reduce((sum, course) => sum + Number(course.paidAmount), 0)}
                </p>

            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600 mb-1">Amount Paid</p>
              <p className="text-2xl font-bold text-green-700">₦{studentData.totalSpent}</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600 mb-1">Pending Payment</p>
              <p className="text-2xl font-bold text-blue-700">
                ₦{pendingCourses.reduce((sum, course) => sum + course.price, 0)}
              </p>
            </div>
          </div>
          
          {studentData.accountBalance < pendingCourses.reduce((sum, course) => sum + course.price, 0) && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Insufficient Balance</p>
                <p className="text-xs text-yellow-700">
                  Please add funds to your account to enroll in pending courses.
                </p>
              </div>
              <button className="ml-auto bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-700 transition-colors">
                Add Funds
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}