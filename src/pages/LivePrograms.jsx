import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const LivePrograms = () => {
  const { toast } = useToast();

  const upcomingEvents = [
    {
      title: 'Sunday Worship Service',
      date: 'December 8, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for powerful worship, inspiring preaching, and fellowship with believers.',
      host: 'Pastor James Williams',
      image: 'Church congregation worshiping with hands raised'
    },
    {
      title: 'Midweek Bible Study',
      date: 'December 11, 2025',
      time: '7:00 PM - 8:30 PM',
      location: 'Fellowship Hall',
      description: 'Deep dive into the Word of God with interactive discussion and prayer.',
      host: 'Dr. Rachel White',
      image: 'People studying Bible together in small group'
    },
    {
      title: 'Youth Night Live',
      date: 'December 13, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Youth Center',
      description: 'High-energy worship, games, and relevant teaching for teenagers and young adults.',
      host: 'David Martinez',
      image: 'Young people at youth group event'
    },
    {
      title: 'Prayer & Fasting Summit',
      date: 'December 15, 2025',
      time: '6:00 AM - 6:00 PM',
      location: 'Prayer Chapel',
      description: 'A day dedicated to seeking God through prayer and fasting for breakthrough.',
      host: 'Pastor Emily Thompson',
      image: 'People praying together in chapel'
    },
    {
      title: 'Christmas Concert',
      date: 'December 20, 2025',
      time: '7:00 PM - 9:00 PM',
      location: 'Main Sanctuary',
      description: 'Celebrate the birth of Jesus with special music, choir performances, and testimonies.',
      host: 'Sarah Johnson & Worship Team',
      image: 'Christmas choir performance in church'
    },
    {
      title: 'New Year\'s Eve Service',
      date: 'December 31, 2025',
      time: '10:00 PM - 12:30 AM',
      location: 'Main Sanctuary',
      description: 'Ring in the new year with worship, prayer, and dedication to God.',
      host: 'Pastor James Williams',
      image: 'New Year celebration in church'
    }
  ];

  const handleRegister = (eventTitle) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Live Programs & Events - Join Us | Faith Radio</title>
        <meta name="description" content="Discover upcoming live programs, worship services, Bible studies, and special events at Faith Radio. Join our vibrant community of believers!" />
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
                <Calendar className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Programs & Events</h1>
            <p className="text-xl text-blue-100">
              Join us for inspiring worship services, Bible studies, and special events throughout the year
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mark your calendar and join us for these exciting gatherings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    alt={event.title}
                   src="https://images.unsplash.com/photo-1509930854872-0f61005b282e" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                    {event.date}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Hosted by {event.host}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleRegister(event.title)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Register for Event
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Weekly Schedule</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Regular programs you can join every week
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { day: 'Sunday', time: '10:00 AM', program: 'Morning Worship Service' },
              { day: 'Sunday', time: '6:00 PM', program: 'Evening Service' },
              { day: 'Tuesday', time: '7:00 PM', program: 'Prayer Meeting' },
              { day: 'Wednesday', time: '7:00 PM', program: 'Bible Study' },
              { day: 'Friday', time: '6:00 PM', program: 'Youth Service' },
              { day: 'Saturday', time: '9:00 AM', program: "Men's Fellowship" },
              { day: 'Saturday', time: '2:00 PM', program: "Women's Fellowship" }
            ].map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                      {schedule.day}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">{schedule.program}</p>
                      <p className="text-gray-600">{schedule.time}</p>
                    </div>
                  </div>
                  <Clock className="w-6 h-6 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Don't Miss Out!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Stay connected with our community and never miss an event. Subscribe to our calendar updates.
            </p>
            <Button
              onClick={() => toast({
                title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
              })}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl"
            >
              Subscribe to Calendar
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LivePrograms;