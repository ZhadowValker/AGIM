import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BRANDING } from "@/config/branding";
import { motion } from 'framer-motion';
import { Radio, Clock, Calendar } from 'lucide-react';

const ListenLive = () => {
  const [currentDay, setCurrentDay] = useState('monday');

  const schedule = {
    monday: [
      { time: '6:00 AM', program: 'Morning Devotional', host: 'Pastor James' },
      { time: '9:00 AM', program: 'Praise & Worship', host: 'Sarah Johnson' },
      { time: '12:00 PM', program: 'Midday Message', host: 'Dr. Rachel White' },
      { time: '3:00 PM', program: 'Faith & Family', host: 'Michael Davis' },
      { time: '6:00 PM', program: 'Evening Prayer', host: 'Pastor Emily' },
      { time: '9:00 PM', program: 'Night Worship', host: 'David Martinez' }
    ],
    tuesday: [
      { time: '6:00 AM', program: 'Morning Devotional', host: 'Pastor James' },
      { time: '9:00 AM', program: 'Bible Study Hour', host: 'Dr. John Smith' },
      { time: '12:00 PM', program: 'Worship Hour', host: 'Sarah Johnson' },
      { time: '3:00 PM', program: 'Youth Connection', host: 'David Martinez' },
      { time: '6:00 PM', program: 'Evening Reflection', host: 'Pastor Emily' },
      { time: '9:00 PM', program: 'Night Prayers', host: 'Michael Davis' }
    ],
    wednesday: [
      { time: '6:00 AM', program: 'Morning Glory', host: 'Pastor James' },
      { time: '9:00 AM', program: 'Praise Sessions', host: 'Sarah Johnson' },
      { time: '12:00 PM', program: 'Midweek Service', host: 'Dr. Rachel White' },
      { time: '3:00 PM', program: 'Teen Talk', host: 'David Martinez' },
      { time: '6:00 PM', program: 'Family Hour', host: 'Michael Davis' },
      { time: '9:00 PM', program: 'Worship Night', host: 'Pastor Emily' }
    ],
    thursday: [
      { time: '6:00 AM', program: 'Morning Devotional', host: 'Pastor James' },
      { time: '9:00 AM', program: 'Hymns & Harmony', host: 'Sarah Johnson' },
      { time: '12:00 PM', program: 'Gospel Hour', host: 'Dr. John Smith' },
      { time: '3:00 PM', program: 'Faith Talk', host: 'Dr. Rachel White' },
      { time: '6:00 PM', program: 'Evening Worship', host: 'Pastor Emily' },
      { time: '9:00 PM', program: 'Night Devotion', host: 'Michael Davis' }
    ],
    friday: [
      { time: '6:00 AM', program: 'Morning Prayer', host: 'Pastor James' },
      { time: '9:00 AM', program: 'Praise Party', host: 'Sarah Johnson' },
      { time: '12:00 PM', program: 'Lunchtime Worship', host: 'David Martinez' },
      { time: '3:00 PM', program: 'Testimony Time', host: 'Dr. Rachel White' },
      { time: '6:00 PM', program: 'Friday Night Live', host: 'Pastor Emily' },
      { time: '9:00 PM', program: 'Worship Experience', host: 'Michael Davis' }
    ],
    saturday: [
      { time: '6:00 AM', program: 'Saturday Morning Worship', host: 'Pastor James' },
      { time: '9:00 AM', program: 'Family Time', host: 'Dr. Rachel White' },
      { time: '12:00 PM', program: 'Gospel Music Hour', host: 'Sarah Johnson' },
      { time: '3:00 PM', program: 'Weekend Praise', host: 'David Martinez' },
      { time: '6:00 PM', program: 'Saturday Service', host: 'Pastor Emily' },
      { time: '9:00 PM', program: 'Night of Worship', host: 'Michael Davis' }
    ],
    sunday: [
      { time: '6:00 AM', program: 'Sunday Morning Glory', host: 'Pastor James' },
      { time: '9:00 AM', program: 'Sunday Service Live', host: 'Dr. John Smith' },
      { time: '12:00 PM', program: 'Gospel Hour', host: 'Sarah Johnson' },
      { time: '3:00 PM', program: 'Sunday Praise', host: 'Dr. Rachel White' },
      { time: '6:00 PM', program: 'Evening Service', host: 'Pastor Emily' },
      { time: '9:00 PM', program: 'Sunday Night Worship', host: 'David Martinez' }
    ]
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <>
      <Helmet>
        <title>{BRANDING.shortName} | Watch Live</title>
        <meta name="description" content={BRANDING.description} />
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
                <Radio className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Listen Live</h1>
            <p className="text-xl text-blue-100">
              Tune in to 24/7 Christian broadcasting bringing hope and faith to your day
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-xl text-gray-900">LIVE NOW</span>
              </div>
              
              {/* YouTube Embedded Player */}
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl mb-6">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Gg10Mt7QJSs?autoplay=1&mute=0"
                  title="AGIM USA Live Service"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Now Playing</p>
                    <p className="text-2xl font-bold text-gray-900">Praise & Worship Hour</p>
                    <p className="text-gray-600">with Pastor James Williams</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">9:00 AM - 12:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Schedule</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out our weekly programming and tune in to your favorite shows
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Day Selector */}
            <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setCurrentDay(day)}
                  className={`px-6 py-3 rounded-xl font-semibold capitalize whitespace-nowrap transition-all duration-300 ${
                    currentDay === day
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Schedule List */}
            <motion.div
              key={currentDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {schedule[currentDay].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                        {item.time}
                      </div>
                      <div>
                        <p className="text-xl font-bold text-gray-900">{item.program}</p>
                        <p className="text-gray-600">Hosted by {item.host}</p>
                      </div>
                    </div>
                    <Calendar className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListenLive;