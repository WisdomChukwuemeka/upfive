import { useState } from "react";
import { Heart, Star, Clock, Users, CheckCircle } from "lucide-react";
import image from '../image/girlone.png';
export const Courses = () => {
  // Simple state to track which courses are liked - using course IDs
  const [likedCourses, setLikedCourses] = useState([]);

  // Simple function to toggle like for a specific course
  const handleLikeClick = (courseId) => {
    if (likedCourses.includes(courseId)) {
      // Remove from liked courses
      setLikedCourses(likedCourses.filter(id => id !== courseId));
    } else {
      // Add to liked courses
      setLikedCourses([...likedCourses, courseId]);
    }
  };

  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Complete Web Development",
      description: "Learn HTML, CSS, JavaScript, React from scratch",
      price: '300000',
      originalPrice: '400000',
      rating: 4.9,
      students: 15430,
      duration: "4 months",
      image: ("upfive/images/html.png"),
      features: ["HTML5 & CSS3", "React.js", "Python", 'Django']
    },
    {
      id: 2,
      title: "Python",
      description: "Master Python programming",
      price: '200000',
      originalPrice: '350000',
      rating: 4.8,
      students: 12850,
      duration: "2 months",
      image: ("upfive/images/futuristic-portrait-young-girl-with-high-tech.png"),
      features: ["Python"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Build iOS and Android apps with React Native and Flutter",
      price: '500000',
      originalPrice: '550000',
      rating: 4.7,
      students: 8920,
      duration: "45 hours",
      image: ("upfive/images/representation-user-experience-interface-design.png"),
      features: ["React Native", "Flutter", "Firebase", "App Store Deploy"]
    },
    {
      id: 4,
      title: "Digital Marketing Mastery",
      description: "Full guide to marketing, social media, and advertising",
      price: '150000',
      originalPrice: '200000',
      rating: 4.6,
      students: 18750,
      duration: "1 month",
      image: ("upfive/images/portrait-woman-surrounded-by-money (1).png"),
      features: ["Social Media", "Google Ads", "Analytics"]
    },
    {
      id: 5,
      title: "UI/UX Design Complete",
      description: "Learn design principles, Figma, and user experience",
      price: '150000',
      originalPrice: '200000',
      rating: 4.8,
      students: 11200,
      duration: "2 months",
      image: ("upfive/images/Gemini_Generated_Image_51390e51390e5139.png"),
      features: ["Design Principles", "Figma", "User Research", "Prototyping"]
    },
    {
      id: 6,
      title: "Cloud Computing AWS",
      description: "Master Amazon Web Services and cloud infrastructure",
      price: '300000',
      originalPrice: '400000',
      rating: 4.9,
      students: 7640,
      duration: "2 months",
      image: ("upfive/images/classroom.png"),
      features: ["AWS Services", "Cloud Architecture", "DevOps", "Security"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Popular Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of high-quality courses and start learning today
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            // Check if this course is liked
            const isLiked = likedCourses.includes(course.id);
            
            return (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Course Image */}
                <div className="h-48 bg-gradient-to-r from-red-700 to-black flex items-center justify-center relative">
                  <div className="text-6xl">
                    <img class='aspect-[16/9]' src={image} alt="" />
                  </div>
                  
                  {/* Like Button - positioned in top right */}
                  <button
                    onClick={() => handleLikeClick(course.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full text-white transition-all duration-200 ₦{
                      isLiked 
                        ? 'bg-red-500 shadow-lg' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    <Heart 
                      className={`w-5 h-5 ₦{isLiked ? 'fill-current' : ''}`} 
                    />
                  </button>
                </div>

                <div className="p-6">
                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  
                  {/* Course Description */}
                  <p className="text-gray-600 mb-4 text-sm">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Course Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Subscribe */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-gray-800">
                          ₦{course.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₦{course.originalPrice}
                        </span>
                        <div className="text-xs text-gray-500">per month</div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Liked Courses Counter */}
        {likedCourses.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-6 py-3 rounded-full">
              <Heart className="w-5 h-5 fill-current" />
              <span>
                You liked {likedCourses.length} course{likedCourses.length !== 1 ? 's' : ''}!
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}