import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Radio, Heart, Users, Globe, Target, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Faith-Centered',
      description: 'Every aspect of our ministry is rooted in biblical truth and devotion to Christ.'
    },
    {
      icon: Users,
      title: 'Community-Focused',
      description: 'We believe in the power of Christian fellowship and connecting believers worldwide.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Broadcasting hope and faith to communities across nations and cultures.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to quality programming that honors God and serves His people.'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Faith Radio was born from a vision to reach souls through Christian broadcasting.'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Launched 24/7 streaming and expanded programming to include multiple shows.'
    },
    {
      year: '2020',
      title: 'Virtual Prayer Tower',
      description: 'Introduced our online prayer platform connecting believers in intercession.'
    },
    {
      year: '2025',
      title: 'Today',
      description: 'Serving thousands daily through radio, podcasts, and digital ministry.'
    }
  ];

  const team = [
    {
      name: 'Pastor James Williams',
      role: 'Senior Pastor & Host',
      image: 'Pastor speaking at pulpit'
    },
    {
      name: 'Dr. Rachel White',
      role: 'Teaching Pastor',
      image: 'Female pastor teaching'
    },
    {
      name: 'David Martinez',
      role: 'Youth Pastor',
      image: 'Young pastor with youth group'
    },
    {
      name: 'Sarah Johnson',
      role: 'Worship Director',
      image: 'Worship leader singing'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Our Vision & Story | Faith Radio</title>
        <meta name="description" content="Learn about Faith Radio's mission to spread the Gospel through Christian broadcasting. Discover our story, values, and the team behind the ministry." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <Radio className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Faith Radio</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Broadcasting hope, spreading faith, and transforming lives through the power of Christian media
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be a leading Christian radio ministry that reaches every corner of the globe with the transformative message of Jesus Christ, inspiring believers to live out their faith boldly and bringing hope to those who are searching.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <Heart className="w-12 h-12 text-purple-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To proclaim the Gospel of Jesus Christ through quality Christian broadcasting, provide spiritual guidance and support through our Virtual Prayer Tower, and equip believers with biblical resources for personal and ministry growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a global ministry
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 flex-grow bg-gradient-to-b from-blue-600 to-purple-600 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated servants committed to spreading the Gospel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover"
                    alt={member.name}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
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
              Join Us in This Mission
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether through listening, praying, or partnering with us, you can be part of spreading hope to millions
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;