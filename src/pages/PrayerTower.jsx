import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Heart, Send, Users, Clock } from 'lucide-react';

const PrayerTower = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prayerType: 'personal',
    request: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in localStorage
    const existingRequests = JSON.parse(localStorage.getItem('prayerRequests') || '[]');
    const newRequest = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    existingRequests.push(newRequest);
    localStorage.setItem('prayerRequests', JSON.stringify(existingRequests));

    toast({
      title: "Prayer Request Submitted ✝️",
      description: "Your request has been received. Our prayer team will lift you up in prayer.",
    });

    setFormData({
      name: '',
      email: '',
      prayerType: 'personal',
      request: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const stats = [
    { icon: Heart, label: 'Prayers Answered', value: '10,247' },
    { icon: Users, label: 'Prayer Warriors', value: '1,850' },
    { icon: Clock, label: 'Hours in Prayer', value: '24/7' }
  ];

  return (
    <>
      <Helmet>
        <title>Virtual Prayer Tower - Submit Prayer Requests | Faith Radio</title>
        <meta name="description" content="Submit your prayer requests to Faith Radio's Virtual Prayer Tower. Our community of believers will join you in prayer for healing, guidance, and blessings." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <Heart className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Virtual Prayer Tower</h1>
            <p className="text-xl text-purple-100">
              Submit your prayer requests and join our community in lifting each other up
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit a Prayer Request</h2>
                <p className="text-gray-600">
                  Share your heart with us. We believe in the power of prayer and are honored to pray with you.
                </p>
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
                  <Label htmlFor="prayerType" className="text-gray-700 font-semibold">Prayer Category</Label>
                  <select
                    id="prayerType"
                    name="prayerType"
                    value={formData.prayerType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                  >
                    <option value="personal">Personal Needs</option>
                    <option value="health">Health & Healing</option>
                    <option value="family">Family & Relationships</option>
                    <option value="financial">Financial Blessing</option>
                    <option value="spiritual">Spiritual Growth</option>
                    <option value="thanksgiving">Thanksgiving & Praise</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="request" className="text-gray-700 font-semibold">Your Prayer Request</Label>
                  <textarea
                    id="request"
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Share your prayer request with us..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Prayer Request
                </Button>
              </form>

              <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                <p className="text-center text-gray-700 italic">
                  "The prayer of a righteous person is powerful and effective." - James 5:16
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You Are Not Alone
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our dedicated prayer team commits to praying for each request received. We believe God hears every prayer and answers according to His perfect will.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                Join Prayer Team
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-900">
                View Prayer Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrayerTower;