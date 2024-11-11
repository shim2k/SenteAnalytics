'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  FaHeart,
  FaExclamationCircle,
  FaLightbulb,
  FaSearch,
  FaRobot,
  FaChartLine,
} from 'react-icons/fa';

const LandingPage: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div id="hero" className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-blue-600 cursor-pointer"
          >
            <Link to="hero" smooth={true} duration={800}>
              Sente AI
            </Link>
          </motion.h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="features"
              smooth={true}
              offset={-70}
              duration={800}
              className="text-gray-700 hover:text-blue-600 cursor-pointer text-lg"
            >
              Features
            </Link>
            <Link
              to="how-it-works"
              smooth={true}
              offset={-70}
              duration={800}
              className="text-gray-700 hover:text-blue-600 cursor-pointer text-lg"
            >
              How It Works
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              offset={-70}
              duration={800}
              className="text-gray-700 hover:text-blue-600 cursor-pointer text-lg"
            >
              Testimonials
            </Link>
            <Link
              to="signup"
              smooth={true}
              offset={-15}
              duration={1000}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 cursor-pointer text-lg"
            >
              Request Access
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-blue-600 focus:outline-none"
            >
              {navOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {navOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg overflow-hidden"
            >
              <ul className="py-4 space-y-4 text-center">
                <li>
                  <Link
                    to="features"
                    smooth={true}
                    offset={-240}
                    duration={800}
                    onClick={() => setNavOpen(false)}
                    className="text-gray-700 hover:text-blue-600 cursor-pointer text-lg"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="how-it-works"
                    smooth={true}
                    offset={-240}
                    duration={800}
                    onClick={() => setNavOpen(false)}
                    className="text-gray-700 hover:text-blue-600 cursor-pointer text-lg"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonials"
                    smooth={true}
                    offset={-240}
                    duration={800}
                    onClick={() => setNavOpen(false)}
                    className="text-gray-700 hover:text-blue-600 cursor-pointer text-lg"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="signup"
                    smooth={true}
                    offset={-125}
                    duration={800}
                    onClick={() => setNavOpen(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 cursor-pointer text-lg"
                  >
                    Request Access
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        className="hero-bg text-white min-h-screen flex items-center relative"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-transparent opacity-75"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 text-center relative z-10 mb-45"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            <span>Transform Community Conversations</span><br />
            <span>into Powerful Insights</span>
          </h2>
          <p className="mb-8 text-xl md:text-2xl text-gray-200">
            Leverage authentic customer dialogues to drive informed decisions.
          </p>

          {/* Mobile Version */}
          <Link
            to="signup"
            smooth={true}
            offset={100} // Mobile offset
            duration={800}
            className="bg-blue-500 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-blue-600 cursor-pointer text-xl block md:hidden"
          >
            Start Unlocking Insights
          </Link>
          {/* Desktop Version */}
          <Link
            to="signup"
            smooth={true}
            offset={-10} // Desktop offset
            duration={800}
            className="bg-blue-500 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-blue-600 cursor-pointer text-xl hidden md:inline-block"
          >
            Start Unlocking Insights
          </Link>

        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Top Wave Background */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
          <svg
            className="relative block w-full h-[150px]"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#f8fafc"
              d="M0,192L80,192C160,192,320,192,480,181.3C640,171,800,149,960,144C1120,139,1280,149,1360,154.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700"
          >
            Your Customers Are Talking. It's Time to Listen.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 text-xl md:text-2xl text-gray-600"
          >
            Gain profound insights into customer sentiments, pain points, and feature requests.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                title: 'Focus on What Your Customers Value Most',
                description:
                  'Identify what excites your customers and enhance those aspects to boost loyalty.',
                icon: <FaHeart size={48} className="text-blue-400 transition duration-300 ease-in-out transform hover:scale-105" aria-label="Heart Icon" />,
                bg: 'bg-white',
              },
              {
                title: 'Reduce User Frustrations Effectively',
                description:
                  'Discover pain points to remove obstacles and improve user satisfaction.',
                icon: <FaExclamationCircle size={48} className="text-blue-600 transition duration-300 ease-in-out transform hover:scale-105" aria-label="Exclamation Icon" />,
                bg: 'bg-white',
              },
              {
                title: 'Prioritize Features That Matter',
                description:
                  'Uncover customer aspirations to prioritize impactful features.',
                icon: <FaLightbulb size={48} className="text-blue-800 transition duration-300 ease-in-out transform hover:scale-105" aria-label="Lightbulb Icon" />,
                bg: 'bg-white',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-full md:w-1/3 flex justify-center"
              >
                <div
                  className={`${feature.bg} shadow-lg rounded-xl p-8 w-full transform transition duration-500 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center`}
                >
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  {/* Title */}
                  <h4 className="font-bold text-2xl mb-4 text-blue-800">
                    {feature.title}
                  </h4>
                  {/* Description */}
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>


      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-100 py-16 flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-10 text-blue-700"
          >
            How It Works
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 text-xl md:text-2xl text-gray-600"
          >
            Our three-step process simplifies transforming conversations into strategies
          </motion.p>
          <div className="relative">
            <div className="flex flex-col items-center">

              {/* Background Accent Line */}
              <div className="absolute inset-0 flex justify-center">
                <div className="h-full w-1 bg-gradient-to-b from-blue-600 via-blue-300 to-blue-100 rounded-full"></div>
              </div>

              {[
                {
                  title: 'Locate Engaged Communities',
                  description: 'Discover where your audience is most active online to tap into authentic conversations that matter.',
                  icon: <FaSearch size={48} className="text-blue-600" aria-label="Search Icon" />,
                  image: '/images/step-1.png',
                },
                {
                  title: 'Analyze Conversations with AI',
                  description: 'Leverage AI to extract meaningful trends and sentiments from customer discussions.',
                  icon: <FaRobot size={48} className="text-blue-600" aria-label="Robot Icon" />,
                  image: '/images/step-2.png',
                },
                {
                  title: 'Receive Insightful Reports',
                  description: 'Get clear, actionable reports that empower confident strategic decisions.',
                  icon: <FaChartLine size={48} className="text-blue-600" aria-label="Chart Line Icon" />,
                  image: '/images/step-3.png',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`w-full md:w-2/3 lg:w-3/4 mb-16 relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Step Image */}
                  <div className={`w-1/3 p-3 relative ${index % 2 === 0 ? '-ml-8' : '-mr-8'} transform -translate-y-4`}>
                    {/* <img
                      src={step.image}
                      alt={`${step.title} illustration`}
                      loading="lazy"
                      className="w-full transform transition duration-500 hover:scale-105"
                    /> */}
                  </div>

                  {/* Step Content */}
                  <div className={`bg-white shadow-md rounded-lg p-6 w-2/3 transform transition duration-500 hover:scale-105 hover:shadow-xl m-6 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
                    <div className="mb-3 text-blue-600 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h4 className="font-semibold text-xl mb-1 text-blue-600 text-center">
                      {index + 1}. {step.title}
                    </h4>
                    <p className="text-gray-700 text-center">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Dot */}
                  {index !== 2 && (
                    <div className="w-4 h-4 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2 -bottom-8 border-4 border-white"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Signup Section */}
      <section
        id="signup"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-60 flex items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 text-center"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Transform Customer Conversations into Growth?
          </h3>
          <p className="mb-10 text-xl md:text-2xl">
            Sign up for early access and start making data-driven decisions.
          </p>
          <form className="max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-md text-gray-800 mb-4 md:mb-0 md:mr-4"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-600 font-bold py-4 px-6 rounded-md shadow-lg hover:bg-gray-100"
              >
                Get Early Access
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 flex items-center bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700">
            Trusted by Professionals
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                text:
                  '“Sente AI has been a game changer for our product team. We can finally see what our users are struggling with and prioritize effectively.”',
                author: 'Alex P, Product Manager',
              },
              {
                text:
                  '“Sente AI has helped us understand what resonates with our audience and adjust our marketing strategy accordingly. The insights are invaluable.”',
                author: 'Jessica K, Marketing Strategist',
              },
              {
                text:
                  '“The insights we\'ve gained from Sente have provided clear direction on what features to focus on. It’s incredibly helpful for our roadmap planning.”',
                author: 'David R, Lead Product Manager',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                  <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                  <footer className="mt-4 text-blue-700 font-bold">
                    {testimonial.author}
                  </footer>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section
        id="final-cta"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 flex items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 text-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Lead the Market with Actionable Insights
          </h3>
          <p className="mb-10 text-xl md:text-2xl">
            Join our waitlist now and start building products your customers love.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Join the Waitlist Button */}
            {/* Mobile Version */}
            <Link
              to="signup"
              smooth={true}
              offset={80} // Mobile offset
              duration={800}
              className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer text-xl block md:hidden"
            >
              Join the Waitlist
            </Link>
            {/* Desktop Version */}
            <Link
              to="signup"
              smooth={true}
              offset={-10} // Desktop offset
              duration={800}
              className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer text-xl hidden md:inline-block"
            >
              Join the Waitlist
            </Link>

            {/* Schedule a Demo Button */}
            {/* Mobile Version */}
            <Link
              to="signup"
              smooth={true}
              offset={80} // Mobile offset
              duration={800}
              className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-white hover:text-blue-600 cursor-pointer text-xl block md:hidden"
            >
              Schedule a Demo
            </Link>
            {/* Desktop Version */}
            <Link
              to="signup"
              smooth={true}
              offset={-10} // Desktop offset
              duration={800}
              className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-white hover:text-blue-600 cursor-pointer text-xl hidden md:inline-block"
            >
              Schedule a Demo
            </Link>
          </div>
        </motion.div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 text-center"
        >
          <p>&copy; 2024 Sente AI. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default LandingPage;