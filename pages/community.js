'use client';

import React from 'react';
import Navbar from '@/components/user-navbar';
import Footer from '@/components/Footer';

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">

        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            AI-Powered{" "}
            <span className="text-red-600 font-poppins">Community{" "}</span>
            & Engagement
          </p>
        </div>

        {/* Subtext */}
        <div className="max-w-[980px] mx-auto text-center font-poppins text-gray-700 leading-relaxed mb-12">
          We strive to provide the best features and services possible. However, due to time constraints, it is not feasible to build the full end-to-end product at this stage. Therefore, our current focus is on developing the major pages and core features of this website.

          <br /><br />

          The information provided below pertains specifically to this page’s features, resources, user flow, and expected results. We are confident that these features are practically achievable, and we are committed to ensuring that they can be developed further in the next stage of the project.
        </div>

        {/* AI-Based Features */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">1. AI-Based Features for Community Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>User Engagement Analysis:</strong> AI tracks participation, posts, and interactions to identify active users and trending topics.</li>
            <li><strong>Personalized Content Feed:</strong> Suggests posts, discussions, or groups based on user interests and past behavior.</li>
            <li><strong>Smart Moderation:</strong> Automatically detects spam, inappropriate content, or abusive language and flags for review.</li>
            <li><strong>Recommendation of Connections:</strong> Suggests friends, groups, or communities based on shared interests and activities.</li>
            <li><strong>Event & Activity Notifications:</strong> Alerts users about upcoming community events or collaborative opportunities.</li>
            <li><strong>Sentiment Analysis:</strong> Gauges community mood and feedback trends from discussions and posts.</li>
            <li><strong>Topic Clustering & Trends:</strong> Identifies trending discussions, topics, and common issues to highlight for users.</li>
            <li><strong>Gamification & Rewards Insights:</strong> Tracks achievements, badges, and contributions to encourage participation.</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">2. Resources Needed</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Data Sources:</strong> User activity logs, posts, comments, group data, event schedules, and social media integration.</li>
            <li><strong>AI/ML Models:</strong> NLP for moderation and sentiment analysis, recommendation engines for feeds and connections, clustering for trends, predictive models for engagement.</li>
            <li><strong>Infrastructure:</strong> Scalable backend for user activity, real-time notifications, cloud services for AI computations.</li>
            <li><strong>Frontend:</strong> Interactive feed, discussion boards, group management UI, notifications, and activity dashboards.</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">3. User Flow for Community Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>User Access:</strong> User logs in and navigates to the Community page.</li>
            <li><strong>Explore Content & Groups:</strong> Browse posts, discussions, and groups; AI recommends content based on interests.</li>
            <li><strong>Participate:</strong> Create posts, comment, like, or join groups.</li>
            <li><strong>Receive AI-Powered Suggestions:</strong> Personalized recommendations for content, connections, or events.</li>
            <li><strong>Moderation & Alerts:</strong> AI flags inappropriate content, spam, or abusive behavior.</li>
            <li><strong>Event Participation:</strong> Register for events, get reminders, and track participation.</li>
            <li><strong>Feedback Loop:</strong> User engagement and feedback refine AI recommendations and moderation.</li>
          </ul>

         
        </div>

        {/* Expected Results / Benefits */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">4. Expected Results / Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Enhanced Engagement:</strong> Personalized feeds and recommendations keep users active and involved.</li>
            <li><strong>Safer Community:</strong> AI moderation reduces spam, abuse, and inappropriate content.</li>
            <li><strong>Better Connection:</strong> Users discover relevant groups, events, and people with shared interests.</li>
            <li><strong>Insightful Analytics:</strong> Trends, sentiment, and engagement patterns help improve community strategy.</li>
            <li><strong>Proactive Event Management:</strong> Predictive notifications and AI insights increase participation and collaboration.</li>
            <li><strong>Gamification & Motivation:</strong> Tracking contributions and rewards encourages continuous participation.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}
