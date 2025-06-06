import React from 'react';
import { 
  Code, 
  Users, 
  Award, 
  Target, 
  Lightbulb, 
  Heart, 
  TrendingUp, 
  Globe,
  BookOpen,
  Briefcase,
  Star,
  CheckCircle
} from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { number: "50K+", label: "Students Trained", icon: Users },
    { number: "95%", label: "Job Placement Rate", icon: Briefcase },
    { number: "200+", label: "Industry Partners", icon: Globe },
    { number: "4.9/5", label: "Student Rating", icon: Star }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education and student outcomes."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and modern teaching methodologies."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a supportive ecosystem where learners and educators thrive together."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous improvement and adaptation to industry needs and trends."
    }
  ];

  const features = [
    "Industry-experienced instructors",
    "Hands-on project-based learning",
    "Career placement assistance",
    "Flexible learning schedules",
    "Real-world case studies",
    "Mentorship programs"
  ];

  return (
    <div class="bg-gray-50 py-16 px-4">
      <div class="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div class="text-center mb-16">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Code class="w-10 h-10 text-white" />
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Coming
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of tech professionals through innovative education, 
            hands-on training, and industry-focused curriculum.
          </p>
        </div>

        {/* Stats Section */}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} class="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <stat.icon class="w-6 h-6 text-blue-600" />
              </div>
              <div class="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div class="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <BookOpen class="w-8 h-8 text-blue-600 mr-3" />
              <h2 class="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2018, Coming emerged from a simple yet powerful vision: 
                to bridge the gap between traditional education and the rapidly evolving tech industry.
              </p>
              <p>
                What started as a small coding bootcamp has grown into a comprehensive tech education 
                platform, serving thousands of students worldwide. Our founders, seasoned tech veterans 
                from Silicon Valley, recognized the need for practical, industry-relevant training.
              </p>
              <p>
                Today, we're proud to be a leading institution in tech education, with partnerships 
                across major tech companies and a track record of transforming careers.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div class="space-y-6">
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="flex items-center mb-4">
                <Target class="w-6 h-6 text-purple-600 mr-3" />
                <h3 class="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p class="text-gray-600 leading-relaxed">
                To democratize access to high-quality tech education and empower individuals 
                to build successful careers in technology through practical, industry-aligned learning experiences.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="flex items-center mb-4">
                <Globe class="w-6 h-6 text-green-600 mr-3" />
                <h3 class="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p class="text-gray-600 leading-relaxed">
                To be the global leader in tech education, creating a world where anyone, 
                regardless of background, can access the skills and opportunities needed to thrive in the digital economy.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div class="mb-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the learning experience we provide.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p class="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              We're not just another tech school. Here's what makes our approach unique and effective.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Preview */}
        <div class="text-center mb-16">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <Award class="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 class="text-3xl font-bold mb-4">Led by Industry Experts</h2>
            <p class="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-6">
              Our leadership team brings decades of experience from top tech companies including 
              Google, Microsoft, Amazon, and leading startups. They've built products used by millions 
              and now dedicate their expertise to shaping the next generation of tech talent.
            </p>
            <div class="text-lg opacity-80">
              "Education is the most powerful weapon which you can use to change the world of technology."
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div class="text-center">
          <div class="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 class="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who've launched their tech careers with us. 
              Your journey in technology starts here.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Explore Programs
              </button>
              <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}