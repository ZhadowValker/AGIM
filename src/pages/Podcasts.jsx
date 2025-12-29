import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { PlayCircle, Headphones, Clock, Download } from 'lucide-react';

const Podcasts = () => {
  const { toast } = useToast();

  const shows = [
    {
      title: 'Morning Devotional',
      host: 'Pastor James Williams',
      description: 'Start your day with inspiring Scripture and powerful prayers to set your heart right with God.',
      episodes: 156,
      duration: '30 min',
      category: 'Daily',
      image: 'Pastor speaking into microphone during morning broadcast'
    },
    {
      title: 'Faith & Family Hour',
      host: 'Dr. Rachel White',
      description: 'Biblical wisdom for building strong families and raising children in the faith.',
      episodes: 89,
      duration: '45 min',
      category: 'Weekly',
      image: 'Family listening to radio together'
    },
    {
      title: 'Youth Connection',
      host: 'David Martinez',
      description: 'Relevant teaching and real talk for teens navigating faith in the modern world.',
      episodes: 124,
      duration: '25 min',
      category: 'Weekly',
      image: 'Young people in radio studio'
    },
    {
      title: 'Worship Experience',
      host: 'Sarah Johnson',
      description: 'Deep worship sessions with contemporary Christian music and heartfelt praise.',
      episodes: 201,
      duration: '60 min',
      category: 'Daily',
      image: 'Worship leader singing with band'
    },
    {
      title: 'Bible Deep Dive',
      host: 'Dr. John Smith',
      description: 'Verse-by-verse study of Scripture with historical context and practical application.',
      episodes: 67,
      duration: '50 min',
      category: 'Weekly',
      image: 'Teacher studying Bible with notes'
    },
    {
      title: 'Testimony Time',
      host: 'Emily Thompson',
      description: 'Hear real stories of God\'s faithfulness and miracles in the lives of believers.',
      episodes: 143,
      duration: '35 min',
      category: 'Weekly',
      image: 'Person sharing testimony in studio'
    }
  ];

  const recentEpisodes = [
    {
      show: 'Morning Devotional',
      title: 'Walking in Faith, Not Fear',
      date: 'December 6, 2025',
      duration: '28 min'
    },
    {
      show: 'Faith & Family Hour',
      title: 'Raising Godly Children in a Digital Age',
      date: 'December 5, 2025',
      duration: '47 min'
    },
    {
      show: 'Youth Connection',
      title: 'Finding Identity in Christ',
      date: 'December 4, 2025',
      duration: '26 min'
    },
    {
      show: 'Worship Experience',
      title: 'Songs of Thanksgiving',
      date: 'December 3, 2025',
      duration: '62 min'
    }
  ];

  const handlePlay = (title) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Podcasts & Shows - Listen On Demand | Faith Radio</title>
        <meta name="description" content="Listen to Faith Radio podcasts and shows on demand. Catch up on your favorite programs including devotionals, worship, Bible studies, and more!" />
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
                <Headphones className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Podcasts & Shows</h1>
            <p className="text-xl text-blue-100">
              Listen to your favorite Christian programs anytime, anywhere
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Shows */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Shows</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover inspiring content for every area of your faith journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows.map((show, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={show.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                    <div className="w-full">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {show.category}
                        </span>
                        <span className="text-white text-sm">{show.episodes} Episodes</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePlay(show.title)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    <PlayCircle className="w-12 h-12 text-blue-600" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{show.title}</h3>
                  <p className="text-gray-600 mb-4">Hosted by {show.host}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{show.description}</p>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{show.duration} per episode</span>
                  </div>
                  <Button
                    onClick={() => handlePlay(show.title)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Listen Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Episodes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Episodes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Catch up on the latest episodes from our programs
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {recentEpisodes.map((episode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => handlePlay(episode.title)}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">{episode.show}</p>
                      <p className="text-xl font-bold text-gray-900 mb-1">{episode.title}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{episode.date}</span>
                        <span>•</span>
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
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
              Never Miss an Episode
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to your favorite shows and get notified when new episodes are released
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handlePlay('subscribe')}
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
              <Button
                onClick={() => handlePlay('rss')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900"
              >
                Get RSS Feed
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Podcasts;