import React, { useState, useEffect } from 'react';
import { Search, MessageCircle, Phone, Mail, BookOpen, Video, FileText, Clock, CheckCircle, AlertCircle, User, Star, ChevronRight, ChevronDown, Send, Headphones } from 'lucide-react';

export const Support = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: '',
    priority: 'medium',
    description: ''
  });

  const supportStats = [
    { label: 'Average Response Time', value: '< 2 hours', icon: Clock },
    { label: 'Resolution Rate', value: '98.5%', icon: CheckCircle },
    { label: 'Student Satisfaction', value: '4.9/5', icon: Star },
    { label: 'Support Agents Online', value: '24/7', icon: Headphones }
  ];

  const faqData = [
    {
      category: 'Course Access',
      questions: [
        {
          q: 'How do I access my enrolled courses?',
          a: 'Log into your student dashboard and click on "My Courses". All your enrolled courses will be displayed with progress indicators and direct access links.'
        },
        {
          q: "Why can\'t I see my course materials?",
          a: 'This could be due to: 1) Course hasn\'t started yet, 2) Payment pending, 3) Browser cache issues. Try clearing your browser cache or contact support.'
        },
        {
          q: 'Can I download course videos for offline viewing?',
          a: 'Yes! Premium students can download videos through our mobile app. Go to Settings > Download Quality to customize your preferences.'
        }
      ]
    },
    {
      category: 'Technical Issues',
      questions: [
        {
          q: 'The video player is not working properly',
          a: 'Try these steps: 1) Refresh the page, 2) Clear browser cache, 3) Disable ad blockers, 4) Try a different browser. If issues persist, submit a technical support ticket.'
        },
        {
          q: 'I\'m having trouble with the coding environment',
          a: 'Our cloud IDE works best with Chrome or Firefox. Ensure pop-ups are enabled and try incognito mode. For persistent issues, check our system requirements guide.'
        }
      ]
    },
    {
      category: 'Certification',
      questions: [
        {
          q: 'How do I get my course certificate?',
          a: 'Complete all course modules and pass the final assessment with 80% or higher. Certificates are automatically generated and available in your profile within 24 hours.'
        },
        {
          q: 'Are certificates industry recognized?',
          a: 'Yes! Our certificates are recognized by 500+ partner companies and include verification QR codes and blockchain verification for authenticity.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      available: true,
      responseTime: 'Usually within 5 minutes',
      bgGradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Video Call Support',
      description: 'Screen sharing and face-to-face assistance',
      icon: Video,
      available: true,
      responseTime: 'Schedule within 30 minutes',
      bgGradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Email Support',
      description: 'Detailed technical assistance',
      icon: Mail,
      available: true,
      responseTime: 'Within 2 hours',
      bgGradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Phone Support',
      description: 'Direct phone assistance',
      icon: Phone,
      available: false,
      responseTime: 'Available 9 AM - 6 PM',
      bgGradient: 'from-gray-400 to-gray-600'
    }
  ];

  const filteredFaqs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    alert('Support ticket submitted successfully! You will receive a confirmation email shortly.');
    setTicketForm({ subject: '', category: '', priority: 'medium', description: '' });
  };

  const handleChatSend = () => {
    if (chatMessage.trim()) {
      alert(`Message sent: ${chatMessage}`);
      setChatMessage('');
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br to-slate-900">
      {/* Hero Section */}
      <div class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div class="relative max-w-7xl mx-auto px-6 py-16">
          <div class="text-center">
            <h1 class="text-5xl font-bold mb-6 bg-white bg-clip-text text-transparent">
              Coming Support Center
            </h1>
            <p class="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Get the help you need to succeed in your learning journey. Our expert support team is here 24/7.
            </p>
            
            {/* Search Bar */}
            <div class="relative max-w-2xl mx-auto mb-12">
              <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or common issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                class="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Support Stats */}
      <div class="max-w-7xl mx-auto px-6 -mt-8 mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportStats.map((stat, index) => (
            <div key={index} class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <stat.icon class="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div class="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div class="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Channels */}
      <div class="max-w-7xl mx-auto px-6 mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Choose Your Support Channel</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <div 
              key={index} 
              class={`relative overflow-hidden rounded-2xl p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                channel.available ? 'hover:shadow-2xl' : 'opacity-60 cursor-not-allowed'
              }`}
            >
              <div class={`absolute inset-0 bg-gradient-to-br ${channel.bgGradient}`}></div>
              <div class="relative z-10">
                <channel.icon class="w-8 h-8 mb-4" />
                <h3 class="text-xl font-bold mb-2">{channel.title}</h3>
                <p class="text-sm opacity-90 mb-3">{channel.description}</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs opacity-75">{channel.responseTime}</span>
                  {channel.available && (
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Tabs */}
      <div class="max-w-7xl mx-auto px-6 mb-16">
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden">
          {/* Tab Navigation */}
          <div class="flex border-b border-white/20">
            {[
              { id: 'faq', label: 'FAQ', icon: BookOpen },
              { id: 'chat', label: 'Live Chat', icon: MessageCircle },
              { id: 'ticket', label: 'Submit Ticket', icon: FileText }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                class={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-400 border-b-2 border-blue-400 bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon class="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div class="p-8">
            {activeTab === 'faq' && (
              <div>
                <h3 class="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                {filteredFaqs.length === 0 ? (
                  <div class="text-center py-12">
                    <AlertCircle class="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p class="text-gray-400">No FAQs found matching your search.</p>
                  </div>
                ) : (
                  <div class="space-y-6">
                    {filteredFaqs.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h4 class="text-lg font-semibold text-blue-400 mb-4">{category.category}</h4>
                        <div class="space-y-3">
                          {category.questions.map((faq, faqIndex) => (
                            <div 
                              key={faqIndex}
                              class="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                            >
                              <button
                                onClick={() => setExpandedFaq(expandedFaq === `${categoryIndex}-${faqIndex}` ? null : `${categoryIndex}-${faqIndex}`)}
                                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                              >
                                <span class="text-white font-medium">{faq.q}</span>
                                {expandedFaq === `${categoryIndex}-${faqIndex}` ? 
                                  <ChevronDown class="w-5 h-5 text-gray-400" /> : 
                                  <ChevronRight class="w-5 h-5 text-gray-400" />
                                }
                              </button>
                              {expandedFaq === `${categoryIndex}-${faqIndex}` && (
                                <div class="px-6 pb-4 text-gray-300 leading-relaxed">
                                  {faq.a}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'chat' && (
              <div>
                <h3 class="text-2xl font-bold text-white mb-6">Live Chat Support</h3>
                <div class="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div class="flex items-center mb-4">
                    <div class="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                      <User class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div class="text-white font-medium">Support Agent Sarah</div>
                      <div class="text-green-400 text-sm flex items-center">
                        <div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        Online - Average response time: 3 minutes
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-white/5 rounded-lg p-4 mb-4 min-h-[200px] border border-white/10">
                    <div class="text-gray-400 text-sm mb-4">Chat will appear here...</div>
                  </div>
                  
                  <div class="flex">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Type your message..."
                      class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                    />
                    <button
                      onClick={handleChatSend}
                      class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-xl hover:from-blue-600 hover:to-purple-700 transition-colors"
                    >
                      <Send class="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ticket' && (
              <div>
                <h3 class="text-2xl font-bold text-white mb-6">Submit Support Ticket</h3>
                <form onSubmit={handleTicketSubmit} class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-white font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        value={ticketForm.subject}
                        onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                        class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Brief description of your issue"
                        required
                      />
                    </div>
                    <div>
                      <label class="block text-white font-medium mb-2">Category</label>
                      <select
                        value={ticketForm.category}
                        onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                        class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="technical">Technical Issues</option>
                        <option value="course">Course Access</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="certification">Certification</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-white font-medium mb-2">Priority</label>
                    <div class="flex space-x-4">
                      {['low', 'medium', 'high', 'urgent'].map((priority) => (
                        <label key={priority} class="flex items-center">
                          <input
                            type="radio"
                            name="priority"
                            value={priority}
                            checked={ticketForm.priority === priority}
                            onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                            class="mr-2"
                          />
                          <span class="text-white capitalize">{priority}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-white font-medium mb-2">Description</label>
                    <textarea
                      value={ticketForm.description}
                      onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                      rows={6}
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Please provide detailed information about your issue..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    class="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-colors"
                  >
                    Submit Support Ticket
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer class="bg-black/20 backdrop-blur-md border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 py-8">
          <div class="text-center">
            <p class="text-gray-400 mb-4">
              Need immediate assistance? Our support team is available 24/7
            </p>
            <div class="flex justify-center space-x-6">
              <span class="text-gray-300">📧 support@coming.edu</span>
              <span class="text-gray-300">📞 1-800-Coming</span>
              <span class="text-gray-300">💬 Live Chat Always Open</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
