import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { MessageSquare, Heart, Send, ChevronLeft, ChevronRight, Play, Video } from 'lucide-react';

const TestimonyCard = ({ testimony, index }) => {
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % testimony.gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + testimony.gallery.length) % testimony.gallery.length);
  };

  const handleVideoClick = () => {
    toast({
      title: "Opening Video Player...",
      description: "We're loading the video testimony for you. Please wait a moment! 🎥",
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Image Gallery */}
      <div className="relative h-56 bg-gray-100 overflow-hidden group">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentImageIndex}
            src={testimony.gallery[currentImageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full object-cover"
            alt={`${testimony.name}'s testimony photo ${currentImageIndex + 1}`}
          />
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        {testimony.gallery.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {testimony.gallery.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'bg-white w-3' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-blue-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide">
            {testimony.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{testimony.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow">{testimony.testimony}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={testimony.avatar} 
                alt={testimony.name} 
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm">{testimony.name}</p>
                <p className="text-xs text-gray-500">{testimony.date}</p>
              </div>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2 h-auto"
              onClick={handleVideoClick}
            >
              <Video className="w-4 h-4 mr-1.5" />
              <span className="text-xs font-semibold">Watch</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonies = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    testimony: ''
  });

  const testimonies = [
    {
      name: 'Sarah Johnson',
      title: 'Healed from Depression',
      testimony: 'After years of struggling with depression, I found hope through Faith Radio. The daily devotionals and prayer support helped me find my way back to God. Today, I am free and living with joy! The community support has been overwhelming.',
      date: 'December 2025',
      category: 'Healing',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80'
      ]
    },
    {
      name: 'Michael Davis',
      title: 'Marriage Restored',
      testimony: 'My marriage was on the brink of divorce. Through the prayers of the Virtual Prayer Tower and the wisdom shared on the programs, God worked a miracle. We are now stronger than ever!',
      date: 'November 2025',
      category: 'Family',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1516575334481-f85287c2c81d?w=800&q=80',
        'https://images.unsplash.com/photo-1623366302587-bdbd9a1a4cda?w=800&q=80'
      ]
    },
    {
      name: 'Emily Rodriguez',
      title: 'Financial Breakthrough',
      testimony: 'I was drowning in debt with no way out. After submitting my prayer request and trusting God, doors opened that I never imagined. God provided beyond my expectations!',
      date: 'October 2025',
      category: 'Financial',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80',
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
      ]
    },
    {
      name: 'David Chen',
      title: 'Found Purpose in Life',
      testimony: 'I felt lost and without direction. The teachings on Faith Radio helped me discover my calling. Now I am serving in ministry and living with purpose!',
      date: 'September 2025',
      category: 'Spiritual',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
        'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80'
      ]
    },
    {
      name: 'Jennifer Williams',
      title: 'Healing from Cancer',
      testimony: 'Diagnosed with stage 3 cancer, I turned to God and this community for prayer. After months of treatment and countless prayers, my latest scan showed no sign of cancer. God is faithful!',
      date: 'August 2025',
      category: 'Healing',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1535726143961-a07353384ce7?w=800&q=80',
        'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80'
      ]
    },
    {
      name: 'Robert Martinez',
      title: 'Delivered from Addiction',
      testimony: 'I struggled with addiction for 15 years. Through the power of prayer and God\'s grace, I am now 2 years clean and helping others find freedom! I am so grateful for this ministry.',
      date: 'July 2025',
      category: 'Deliverance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80'
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingTestimonies = JSON.parse(localStorage.getItem('testimonies') || '[]');
    const newTestimony = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'pending',
      avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop', // Default avatar for new submissions
      gallery: ['https://images.unsplash.com/photo-1448375240586-dfd8f3793371?w=800&q=80'] // Default gallery image
    };
    existingTestimonies.push(newTestimony);
    localStorage.setItem('testimonies', JSON.stringify(existingTestimonies));

    toast({
      title: "Testimony Submitted! 🙏",
      description: "Thank you for sharing your story. It will bless many others!",
    });

    setFormData({
      name: '',
      email: '',
      title: '',
      testimony: ''
    });
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Testimonies - Stories of Faith & Miracles | Faith Radio</title>
        <meta name="description" content="Read inspiring testimonies of healing, restoration, and miracles from our Faith Radio community. Share your own testimony and encourage others!" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <MessageSquare className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonies of Faith</h1>
            <p className="text-xl text-blue-100 mb-8">
              Real stories of God's faithfulness and miraculous works in the lives of our community
            </p>
            <Button
              onClick={() => setShowForm(true)}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl"
            >
              <Heart className="w-5 h-5 mr-2" />
              Share Your Testimony
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonies Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonies.map((testimony, index) => (
              <TestimonyCard key={index} testimony={testimony} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimony Submission Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Share Your Testimony</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-semibold">Your Name</Label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address</Label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-700 font-semibold">Testimony Title</Label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                    placeholder="e.g., Healed from Illness"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="testimony" className="text-gray-700 font-semibold">Your Testimony</Label>
                  <textarea
                    id="testimony"
                    name="testimony"
                    value={formData.testimony}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Share how God has worked in your life..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Testimony
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setShowForm(false)}
                    variant="outline"
                    className="px-8"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Story Matters
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Every testimony is a reminder of God's faithfulness. Share your story and inspire others to believe for their own miracle!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonies;