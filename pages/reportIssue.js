'use client';

import React from 'react';
import Navbar from '@/components/user-navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
export default function ReportIssuePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">

        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            Report{" "}
            <span className="text-red-600 font-poppins">Issues{" "}</span>
            and Complaints
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
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">1. AI-Based Features for Report / Complaint Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Smart Issue Categorization:</strong> Automatically categorize complaints based on text analysis (traffic, sanitation, safety, utilities).</li>
            <li><strong>Priority Detection:</strong> Identify urgent complaints and flag them for faster resolution.</li>
            <li><strong>Duplicate Detection:</strong> Detect similar complaints to avoid redundancy.</li>
            <li><strong>Sentiment Analysis:</strong> Determine severity based on user description tone.</li>
            <li><strong>Suggested Solutions / FAQ:</strong> Recommend potential solutions from past resolved complaints.</li>
            <li><strong>Automated Notifications:</strong> Trigger updates to authorities and notify users of status changes.</li>
            <li><strong>Predictive Alerts:</strong> Identify recurring issues and alert authorities proactively.</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">2. Resources Needed</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Data Sources:</strong> Complaint logs, historical issue resolution data, user reports, city maintenance databases.</li>
            <li><strong>AI/ML Models:</strong> Text classification (BERT / Transformer) for categorization, sentiment analysis for severity, clustering/similarity detection for duplicates.</li>
            <li><strong>Infrastructure:</strong> Backend server for processing complaints, database for complaint logs and user data, cloud services for scalability.</li>
            <li><strong>Frontend:</strong> Interactive complaint submission forms, status dashboards, and notifications system (push/email/SMS).</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">3. User Flow for Report / Complaint Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>User Access:</strong> User logs in or accesses the complaint page; may allow location access.</li>
            <li><strong>Report Submission:</strong> User fills form with category, description, photo/video, and location.</li>
            <li><strong>AI Processing:</strong> Complaint is analyzed for category, priority, duplicates, and severity.</li>
            <li><strong>Authority Routing:</strong> Complaint routed automatically to the relevant department.</li>
            <li><strong>User Notifications:</strong> User receives confirmation and updates on status.</li>
            <li><strong>Resolution Tracking:</strong> Authorities update resolution status; AI monitors patterns for predictive alerts.</li>
            <li><strong>Feedback Collection:</strong> Users provide feedback on resolution quality and service efficiency.</li>
          </ul>

         
        </div>

        {/* Expected Results / Benefits */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">4. Expected Results / Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Faster Resolution:</strong> AI prioritization and automatic routing reduce response times.</li>
            <li><strong>Reduced Redundancy:</strong> Duplicate detection avoids multiple complaints for the same issue.</li>
            <li><strong>Improved User Experience:</strong> Clear updates and feedback mechanisms improve transparency.</li>
            <li><strong>Data-Driven Insights:</strong> Aggregate data identifies recurring issues and supports preventive measures.</li>
            <li><strong>Resource Optimization:</strong> Authorities can allocate resources based on priority and trends.</li>
            <li><strong>Proactive Issue Management:</strong> Predictive alerts allow authorities to prevent problems before they escalate.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}
