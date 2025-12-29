import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import ListenLive from '@/pages/ListenLive';
import PrayerTower from '@/pages/PrayerTower';
import Testimonies from '@/pages/Testimonies';
import LivePrograms from '@/pages/LivePrograms';
import Podcasts from '@/pages/Podcasts';
import MediaGuidance from '@/pages/MediaGuidance';
import BibleQuiz from '@/pages/BibleQuiz';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listen-live" element={<ListenLive />} />
            <Route path="/prayer-tower" element={<PrayerTower />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/live-programs" element={<LivePrograms />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/media-guidance" element={<MediaGuidance />} />
            <Route path="/bible-quiz" element={<BibleQuiz />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;