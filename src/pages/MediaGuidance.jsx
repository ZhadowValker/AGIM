import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { BookOpen, Video, FileText, Download, BookMarked, Music } from 'lucide-react';

const MediaGuidance = () => {
  const { toast } = useToast();

  const resources = [
    {
      icon: BookOpen,
      title: 'Bible Study Guides',
      description: 'Comprehensive study materials for personal or group Bible study sessions.',
      items: ['New Testament Survey', 'Old Testament Heroes', 'Book of Psalms Study', 'Gospel of John Deep Dive'],
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: Video,
      title: 'Teaching Videos',
      description: 'Video teachings and sermons from our pastors and guest speakers.',
      items: ['Sunday Sermon Series', 'Topical Teachings', 'Conference Messages', 'Testimony Videos'],
      gradient: 'from-purple-600 to-purple-400'
    },
    {
      icon: FileText,
      title: 'Sermon Notes',
      description: 'Downloadable sermon outlines and study notes from recent messages.',
      items: ['Weekly Sermon Notes', 'Special Series Outlines', 'Discussion Questions', 'Memory Verses'],
      gradient: 'from-pink-600 to-pink-400'
    },
    {
      icon: BookMarked,
      title: 'Devotional Materials',
      description: 'Daily devotionals and spiritual growth resources for your faith journey.',
      items: ['30-Day Prayer Guide', 'Fasting Devotional', 'Youth Devotionals', 'Family Devotions'],
      gradient: 'from-indigo-600 to-indigo-400'
    },
    {
      icon: Music,
      title: 'Worship Resources',
      description: 'Sheet music, chord charts, and worship leading materials.',
      items: ['Song Lyrics & Chords', 'Worship Setlists', 'Musicians Guide', 'Backing Tracks'],
      gradient: 'from-cyan-600 to-cyan-400'
    },
    {
      icon: Download,
      title: 'Church Media Kit',
      description: 'Graphics, templates, and media assets for ministry use.',
      items: ['Social Media Templates', 'Bulletin Inserts', 'PowerPoint Backgrounds', 'Logo Files'],
      gradient: 'from-teal-600 to-teal-400'
    }
  ];

  const featuredContent = [
    {
      title: 'The Power of Prayer',
      type: 'PDF Guide',
      size: '2.5 MB',
      description: 'Learn effective prayer strategies and develop a deeper prayer life.',
      image: 'Person praying with Bible open'
    },
    {
      title: 'Building Strong Families',
      type: 'Video Series',
      size: '6 Episodes',
      description: 'Biblical principles for creating healthy, God-honoring family relationships.',
      image: 'Happy Christian family together'
    },
    {
      title: 'Faith Foundations',
      type: 'Study Guide',
      size: '48 Pages',
      description: 'Essential doctrines and beliefs every Christian should understand.',
      image: 'Bible with study materials'
    }
  ];

  const handleDownload = (title) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Media Guidance & Resources - Free Christian Materials | Faith Radio</title>
        <meta name="description" content="Access free Christian media resources including Bible study guides, sermon notes, teaching videos, devotionals, and worship materials from Faith Radio." />
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
                <BookOpen className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Guidance & Resources</h1>
            <p className="text-xl text-blue-100">
              Free Christian resources to help you grow in faith and serve effectively
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resource Library</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our collection of free Christian resources for personal and ministry use
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${resource.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{resource.description}</p>
                <ul className="space-y-2 mb-6">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleDownload(resource.title)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Browse Resources
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Popular downloads from our media library
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredContent.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={content.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
                    {content.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{content.title}</h3>
                  <p className="text-gray-600 mb-4">{content.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{content.size}</span>
                  </div>
                  <Button
                    onClick={() => handleDownload(content.title)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Resource Usage Guidelines</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Free for Ministry Use:</strong> All resources are free to download and use for personal study, small groups, and ministry purposes.
                </p>
                <p>
                  <strong className="text-gray-900">Attribution Required:</strong> Please credit Faith Radio when using our materials in public settings or publications.
                </p>
                <p>
                  <strong className="text-gray-900">No Commercial Use:</strong> These resources may not be sold or used for commercial purposes without written permission.
                </p>
                <p>
                  <strong className="text-gray-900">Share Freely:</strong> Feel free to share these resources with others who might benefit from them.
                </p>
                <p>
                  <strong className="text-gray-900">Modifications:</strong> You may adapt materials for your specific context while maintaining doctrinal integrity.
                </p>
              </div>
            </motion.div>
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
              Need Custom Resources?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us if you need specific materials or have questions about our resources
            </p>
            <Button
              onClick={() => handleDownload('contact')}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl"
            >
              Contact Resource Team
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MediaGuidance;