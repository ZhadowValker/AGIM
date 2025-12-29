import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Radio, Heart, BookOpen, PlayCircle, Calendar, MessageSquare } from 'lucide-react';

const Home = () => {
  const pillars = [
    {
      icon: Radio,
      title: 'Radio & Shows',
      description: 'Listen to uplifting Christian music and inspiring programs 24/7',
      link: '/listen-live',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: Heart,
      title: 'Virtual Prayer Tower',
      description: 'Submit your prayer requests and join our community in prayer',
      link: '/prayer-tower',
      gradient: 'from-purple-600 to-purple-400'
    },
    {
      icon: BookOpen,
      title: 'Media Guidance',
      description: 'Access biblical resources and church media guidance',
      link: '/media-guidance',
      gradient: 'from-pink-600 to-pink-400'
    }
  ];

  const testimonies = [
    {
      name: 'Sarah Johnson',
      text: 'AGIM~🕴🏻 transformed my morning commute into a time of worship and reflection. The programs are truly inspiring!',
      date: 'December 2025'
    },
    {
      name: 'Michael Davis',
      text: 'The Virtual Prayer Tower connected me with believers worldwide. I felt the power of prayer during my difficult time.',
      date: 'November 2025'
    },
    {
      name: 'Emily Rodriguez',
      text: 'The podcast series on faith and family blessed our household tremendously. Thank you for this ministry!',
      date: 'October 2025'
    }
  ];

  const podcasts = [
    {
      title: 'Morning Devotional',
      host: 'Pastor James',
      duration: '30 min',
      image: 'Pastor speaking into microphone during morning broadcast'
    },
    {
      title: 'Faith & Family Hour',
      host: 'Dr. Rachel White',
      duration: '45 min',
      image: 'Family listening to radio together'
    },
    {
      title: 'Youth Connection',
      host: 'David Martinez',
      duration: '25 min',
      image: 'Young people in radio studio'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AGIM - Broadcasting Love of God to the World</title>
        <meta name="description" content="AGIM brings you inspiring programs, virtual prayer tower, Join our community of believers today!" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Broadcasting Love of God to the World
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Join thousands of believers tuning in to uplifting Christian music, inspiring teachings, and powerful prayer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/listen-live">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Radio className="w-5 h-5 mr-2" />
                  Listen Live Now
                </Button>
              </Link>
              <Link to="/prayer-tower">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 shadow-xl transition-all duration-300">
                  <Heart className="w-5 h-5 mr-2" />
                  Send Prayer Request
                </Button>
              </Link>
            </motion.div>

            {/* Now Playing Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mt-12 border border-white/20"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm uppercase tracking-wider">Now Playing</span>
              </div>
              <p className="text-2xl font-bold">Praise & Worship Hour</p>
              <p className="text-blue-200 mt-1">with Pastor James Williams</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Ministry Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the three core ways we serve and connect with our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={pillar.link} className="block group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full group-hover:-translate-y-2">
                    <div className={`bg-gradient-to-br ${pillar.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                    <div className="mt-6 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonies */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimonies of Faith
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear how God is working through our ministry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonies.map((testimony, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimony.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimony.name}</p>
                  <p className="text-sm text-gray-600">{testimony.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonies">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Read More Testimonies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Podcasts Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Podcasts & Shows
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Catch up on your favorite programs anytime, anywhere
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {podcasts.map((podcast, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={podcast.title}
                   src="https://images.unsplash.com/photo-1511792962219-5d2d76ebf3ab" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{podcast.title}</h3>
                <p className="text-gray-600">Hosted by {podcast.host}</p>
                <p className="text-sm text-gray-500 mt-1">{podcast.duration}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/podcasts">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <PlayCircle className="w-5 h-5 mr-2" />
                View All Podcasts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the power of faith-based broadcasting and connect with believers around the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/listen-live">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  <Radio className="w-5 h-5 mr-2" />
                  Start Listening
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;