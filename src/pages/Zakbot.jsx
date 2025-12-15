// import React from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/sections/Hero';
// import ChatDemo from '../components/specific/ChatDemo';
// import SEO from '../components/common/SEO';
// import { FaLightbulb, FaBook, FaChartLine, FaBrain, FaLanguage, FaGlobe, FaChartBar, FaHandshake, FaLock } from 'react-icons/fa';
// import GlobalStats from '../components/specific/GlobalStats';

// const Zakbot = () => {
//   return (
//     <div className="min-h-screen bg-transparent dark:bg-gray-900">
//       <SEO title="Zakbot - Your AI Assistant" description="Meet Zakbot — Your AI Assistant That Works 24/7" />

//       {/* Hero Section */}
//       {/* Live Demo Sandbox Integration */}
//       <section id="live-demo" className="section-padding bg-gray-50 dark:bg-gray-900">
//         <div className="container">
//           {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Try Zakbot Live</h2> */}
//           {/* <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
//             Experience the power of Zakbot firsthand. Interact with our live demo to see how it can transform your operations.
//           </p> */}
//           <ChatDemo /> {/* Assuming ChatDemo is the existing live demo sandbox component */}
//         </div>
//       </section>
//       <section id="stats-dashboard" className="section-padding h-auto flex item-center justify-center bg-white dark:bg-gray-800">
//         <GlobalStats />
//       </section>
//       {/* <Hero
//         headline="Meet Zakbot — Your AI Assistant That Works 24/7"
//         subheadline="Trained on your business data, Zakbot handles support, customer queries, and content — so your team can focus on growth."
//         primaryCtaText="Try Zakbot Live"
//         primaryCtaLink="#live-demo"
//         secondaryCtaText="Contact Us"
//         secondaryCtaLink="/contact"
//         visual="animated-zakbot-demo.gif" // Placeholder for animated demo
//       /> */}

//       {/* The Problems Section */}
//       <section className="section-padding bg-white dark:bg-gray-900">
//         <div className="container">
//           <h2 className="text-3xl font-bold text-left mb-12 text-gray-800 dark:text-white">The Problems We Solve</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="card text-left">
//               <FaLightbulb className="mx-auto mb-8 w-16 h-16 text-zakbot-blue" />
//               <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Overloaded Support Teams</h3>
//               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                 <li>High volume of repetitive queries</li>
//                 <li>Slow response times leading to customer frustration</li>
//                 <li>Staff burnout and high turnover</li>
//               </ul>
//             </div>
//             <div className="card text-left">
//               <FaBook className="mx-auto mb-8 w-16 h-16 text-zakbot-teal" />
//               <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Content & Exam Bottlenecks</h3>
//               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                 <li>Manual creation of course materials and exams</li>
//                 <li>Inconsistent content quality and formatting</li>
//                 <li>Time-consuming updates and revisions</li>
//               </ul>
//             </div>
//             <div className="card text-left">
//               <FaChartLine className="mx-auto mb-8 w-16 h-16 text-zakbot-purple" />
//               <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Missed Growth Opportunities</h3>
//               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                 <li>Lack of 24/7 customer engagement</li>
//                 <li>Inefficient lead qualification processes</li>
//                 <li>Limited ability to scale operations without increasing headcount</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* The Solution: Zakbot for EdTechs & SMEs Section */}
//       <section className="section-padding bg-gray-50 dark:bg-gray-800">
//         <div className="container">
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">The Solution: Zakbot for EdTechs & SMEs</h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
//             Zakbot is your 24/7 assistant—trained to handle your institution’s real needs.
//           </p>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="card dark:bg-gray-700">
//               <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">AI-Powered Student & Customer Support</h3>
//               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                 <li>Instant answers to common questions</li>
//                 <li>24/7 availability, reducing wait times</li>
//                 <li>Personalized support based on user history</li>
//                 <li>Seamless escalation to human agents when needed</li>
//               </ul>
//             </div>
//             <div className="card dark:bg-gray-700">
//               <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Dynamic Learning Content Generation</h3>
//               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                 <li>Quiz Generation: Create quizzes from any content</li>
//                 <li>Course Material: Generate summaries, notes, and study guides</li>
//                 <li>Exam Formatting: Automate formatting for various exam types</li>
//               </ul>
//             </div>
//             <div className="card dark:bg-gray-700">
//               <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Lead Nurture & Engagement</h3>
//               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                 <li>Engage prospects with interactive conversations</li>
//                 <li>Qualify leads efficiently with automated questions</li>
//                 <li>Provide instant information on products/services</li>
//               </ul>
//             </div>
//           </div>
//           <p className="text-center text-gray-600 dark:text-gray-400 mt-8">Showcase Plan demo description here.</p>
//         </div>
//       </section>

//       {/* Key Features Section */}
//       <section className="section-padding bg-white dark:bg-gray-900">
//         <div className="container">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Key Features</h2>
//           <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
//             {[
//               { title: "Custom Knowledge Training", icon: <FaBrain /> },
//               { title: "Multi-Language Support", icon: <FaLanguage /> },
//               { title: "Omnichannel Deployment", icon: <FaGlobe /> },
//               { title: "Analytics Dashboard", icon: <FaChartBar /> },
//               { title: "Handoff to Human", icon: <FaHandshake /> },
//               { title: "Secure & Private", icon: <FaLock /> },
//             ].map((feature, index) => (
//               <div key={index} className="feature-card text-center">
//                 <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center text-zakbot-blue">
//                   {feature.icon && React.cloneElement(feature.icon, { className: 'w-16 h-16' })}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
//               </div>
//             ))}</div>
//         </div>
//       </section>

      

//       {/* Closing CTA Section */}
//       <section className="section-padding bg-zakbot-blue text-white dark:bg-zakbot-blue-dark">
//         <div className="container text-center">
//           <h2 className="text-4xl font-bold mb-6">Transform how your institution operates—free up teachers, empower staff, and give students faster support.</h2>
//           <div className="flex justify-center space-x-4">
//             <Link to="/contact" className="btn-primary">
//               Request a Free Local Demo
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Zakbot;

import React from "react";

const Zakbot = () => {
  return (
    <div className="min-h-screen bg-transparent dark:bg-gray-900">
      <div className="section-padding bg-white dark:bg-gray-900">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            ZakBot Messenger Assistant Compliance
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Privacy Policy
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              ZakBot responds to messages that users voluntarily send to our Facebook Page.
              It is developed and maintained by a single developer and is not used for advertising or promotions.
            </p>

            <div className="card mb-6 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Data We Collect
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Facebook Messenger ID (sender ID)</li>
                <li>Message content</li>
                <li>User name (first and last name via Graph API)</li>
                <li>Chat history for session context</li>
              </ul>
            </div>

            <div className="card mb-6 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                How We Use Your Data
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>To generate replies to your messages</li>
                <li>To detect order requests and confirm them</li>
                <li>To notify the Page owner via Telegram when an order is placed</li>
              </ul>
            </div>

            <div className="card mb-6 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Data Retention
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Messages and chat history are stored temporarily for processing and for the last 10 message exchanges per user.
                Data is automatically deleted when no longer needed.
              </p>
            </div>

            <div className="card mb-6 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Data Sharing
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We do not sell, share, or distribute your message data. Telegram notifications only include order details
                (product name, quantity, and your name) for the purpose of fulfilling orders.
              </p>
            </div>

            <div className="card dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                User Rights
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                You have the right to request deletion of any message data collected by ZakBot.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Data Deletion
            </h2>
            <div className="card dark:bg-gray-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                You can delete your Messenger data collected by ZakBot by following these:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                <li>Message us to delete your data in Facebook Page.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                That's it... All data will be permanently deleted within 24 hours.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                Note: Messages are only stored temporarily for processing and session context.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Transparency / Source Code
            </h2>
            <div className="card dark:bg-gray-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                For transparency, the ZakBot source code is publicly available at:{" "}
                <a 
                  href="https://github.com/shfahimdev/FAQ_Manager" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zakbot-blue hover:underline dark:text-zakbot-teal"
                >
                  GitHub Repository
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                The source code is provided for transparency purposes only; reviewers are not required to audit or run the code.
              </p>
            </div>
          </section>

          <section className="section-padding bg-zakbot-blue text-white dark:bg-zakbot-blue-dark rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Contact</h2>
              <p className="text-lg">
                If you have any questions regarding this policy or your data, please contact:{" "}
                <a 
                  href="mailto:cto@zaktomate.com" 
                  className="underline hover:text-gray-200"
                >
                  cto@zaktomate.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Zakbot;
