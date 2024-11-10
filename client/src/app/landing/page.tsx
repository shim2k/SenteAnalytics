'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const LandingPage: React.FC = () => {
    return (
        <div id="hero" className="bg-gray-100 text-gray-800">
            {/* Header */}
            <header className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-blue-600 cursor-pointer"
                    >
                        <Link to="hero" smooth={true} duration={800}>Sente Analytics</Link>
                    </motion.h1>
                    <nav>
                        <Link to="features" smooth={true} duration={800} className="text-gray-700 mx-4 hover:text-blue-600 cursor-pointer">Key Features</Link>
                        <Link to="signup" smooth={true} duration={800} className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 cursor-pointer">Get Early Access</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-bg text-white min-h-[50vh] py-20 flex items-center" style={{
                backgroundImage: 'url(/images/hero-background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backgroundBlendMode: 'overlay',
            }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="container mx-auto px-6 text-center"
                >
                    <h2 className="text-5xl font-bold mb-6 text-white">Turn Online Conversations Into Your Competitive Edge</h2>
                    <p className="mb-8 text-xl text-gray-300">Tap into authentic discussions to truly understand your customers.</p>

                    <Link to="signup" smooth={true} duration={800} className="bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-600 cursor-pointer">
                        Get Started Today
                    </Link>
                </motion.div>
            </section>

            {/* Features Section */}
            <section id="features" className="pt-20 flex items-center">
                <div className="container mx-auto px-6">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold text-center mb-12 text-blue-700"
                    >
                        Your Customers Are Talking. Are You Listening?
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8 text-xl text-gray-700">
                        Gain deep insights into customer sentiment, key frustrations, and desired features.
                    </motion.p>
                    <div className="flex flex-wrap -mx-4">
                        {['What Customers Love', 'What They’re Frustrated About', 'Features They Dream Of'].map((title, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="w-full md:w-1/3 px-4 mb-8 flex"
                            >
                                <div className="bg-white shadow-card rounded-lg p-8 text-center flex-grow flex flex-col justify-between h-[300px]">
                                    <div className="mb-4 text-blue-600">
                                        {index === 0 && <i className="fas fa-heart fa-3x"></i>}
                                        {index === 1 && <i className="fas fa-exclamation-circle fa-3x"></i>}
                                        {index === 2 && <i className="fas fa-lightbulb fa-3x"></i>}
                                    </div>
                                    <h4 className="font-bold text-2xl mb-4 text-blue-600">{title}</h4>
                                    <p className="text-gray-700 flex-grow">
                                        {title === 'What Customers Love' && 'Identify what makes your customers excited and keep building on it.'}
                                        {title === 'What They’re Frustrated About' && 'Discover recurring issues and pain points to focus on improvements that truly matter.'}
                                        {title === 'Features They Dream Of' && 'Uncover the features your customers are craving to shape your product roadmap.'}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="bg-gray-200 min-h-[35vh] pb-20 flex items-center">
                <div className="container mx-auto px-6">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold text-center mb-12 text-blue-700"
                    >
                        How It Works
                    </motion.h3>
                    <div className="bg-white shadow-card rounded-lg p-8">
                        <div className="flex flex-wrap -mx-4">
                            {[{
                                title: 'Target Subreddits',
                                description: 'Pinpoint the subreddits where your customers are most active, giving you real-time insights straight from the community.'
                            }, {
                                title: 'Automatic Analysis',
                                description: 'Let our advanced AI handle the hard work, analyzing discussions, extracting sentiment, and highlighting key topics effortlessly.'
                            }, {
                                title: 'Insights Delivered',
                                description: 'Receive easy-to-digest visual reports that summarize sentiment, pain points, and feature requests—empowering your next move.'
                            }].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="w-full md:w-1/3 px-4 mb-8"
                                >
                                    <div className="text-center">
                                        <div className="mb-4 text-blue-600">
                                            {index === 0 && <i className="fas fa-search fa-3x"></i>}
                                            {index === 1 && <i className="fas fa-magic fa-3x"></i>}
                                            {index === 2 && <i className="fas fa-chart-bar fa-3x"></i>}
                                        </div>
                                        <h4 className="font-bold text-2xl mb-2 text-blue-600">{index + 1}. {step.title}</h4>
                                        <p className="text-gray-700">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Signup Section */}
            <section id="signup" className="bg-blue-600 text-white min-h-[70vh] py-20 flex items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="container mx-auto px-6 text-center"
                >
                    <h3 className="text-4xl font-bold mb-6">Ready to Unlock Real Customer Insights?</h3>
                    <p className="mb-8 text-xl">Sign up for early access and turn online feedback into actionable product improvements.</p>
                    <form className="max-w-lg mx-auto">
                        <div className="flex flex-col md:flex-row">
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                placeholder="Enter your email"
                                className="text-black	 w-full p-4 rounded-md text-gray-800 mb-4 md:mb-0 md:mr-4"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-white text-blue-600 font-bold py-4 px-6 rounded-md shadow-lg hover:bg-gray-100"
                            >
                                Sign Up
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="min-h-[50vh] py-20 flex items-center bg-gradient-to-r from-blue-100 to-blue-200">
                <div className="container mx-auto px-6">
                    <h3 className="text-4xl font-bold text-center mb-12 text-blue-700">What Our Customers Are Saying</h3>
                    <div className="flex flex-wrap justify-center">
                        {[{
                            text: "“This tool has been a game changer for our product team. We can finally see what our users are struggling with and prioritize effectively.”",
                            author: "Sarah J, Product Manager"
                        }, {
                            text: "“Sente Analytics has allowed us to turn feedback into actionable improvements. It's like having a direct line to our customers’ minds.”",
                            author: "Alex P, Head of Product"
                        }, {
                            text: "“The insights we’ve gained from this tool are incredible. We know exactly what features to focus on for the next release.”",
                            author: "David A, UX Researcher"
                        }].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="w-full md:w-1/3 px-4 mb-8 flex"
                            >
                                <div className="bg-white shadow-card rounded-lg p-8 text-center flex-grow flex flex-col items-center">
                                    <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                                    <footer className="mt-4 text-blue-600 font-bold">{testimonial.author}</footer>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Call to Action Section */}
            <section id="final-cta" className="bg-blue-600 text-white min-h-[50vh] py-20 flex items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="container mx-auto px-6 text-center"
                >
                    <h3 className="text-4xl font-bold mb-6">Stay Ahead of the Competition</h3>
                    <p className="mb-8 text-xl">Join the waitlist today and leverage insights to build better products.</p>
                    <div className="flex flex-col md:flex-row justify-center">
                        <Link to="signup" smooth={true} duration={800} className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer mb-4 md:mb-0 md:mr-4">
                            Join the Waitlist
                        </Link>
                        <Link to="signup" smooth={true} duration={800} className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-white hover:text-blue-600 cursor-pointer">
                            Request a Demo
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
                    <p>&copy; 2024 Sente Analytics. All rights reserved.</p>
                </motion.div>
            </footer>
        </div>
    );
};

export default LandingPage;
