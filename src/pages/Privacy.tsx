import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>

      <p className="mt-4 text-gray-600 leading-relaxed">
        At uSchool, your privacy is important to us. This Privacy Policy
        explains how we collect, use, and protect your information when you use
        our app and services.
      </p>

      {/* Section 1 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
        <li>
          <strong>Account Information:</strong> Name, email, and profile picture
          (including Google Sign-In data if you choose that option).
        </li>
        <li>
          <strong>Study Materials:</strong> Download activity for PDFs and Past
          Questions (PQs).
        </li>
        <li>
          <strong>Marketplace Data:</strong> Details of listings such as
          description, price, and images.
        </li>
        <li>
          <strong>Leaderboard & Gamification:</strong> Progress data like study
          streaks, quiz scores, and achievements.
        </li>
        <li>
          <strong>Payments:</strong> If you become a merchant, payment
          information is processed securely by Paystack. We do not collect or
          store payment card details.
        </li>
        <li>
          <strong>Device & Usage Data:</strong> App version, device type, and
          general usage patterns.
        </li>
      </ul>

      {/* Section 2 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
        <li>Provide access to study materials (PDFs and PQs).</li>
        <li>Authenticate and manage accounts (via Firebase).</li>
        <li>Maintain the leaderboard and gamified study streak system.</li>
        <li>Display and manage marketplace listings.</li>
        <li>Process merchant payments securely through Paystack.</li>
        <li>Send updates, announcements, or notifications (if you opt in).</li>
        <li>Ensure app performance and security.</li>
      </ul>

      {/* Section 3 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        3. Sharing of Information
      </h2>
      <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
        <li>
          With trusted service providers (such as Firebase and Paystack) to
          operate and maintain our app.
        </li>
        <li>When required by law or legal process.</li>
        <li>To protect the safety and security of our users or community.</li>
      </ul>

      {/* Section 4 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        4. Study Materials Disclaimer
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        PDFs and PQs are aggregated from publicly available or freely shared
        sources. They are intended for educational purposes only. If you are a
        rights holder and wish to request removal, please contact us at{' '}
        <a
          href="mailto:support@uschool.com"
          className="text-purple-600 hover:underline"
        >
          support@uschool.com
        </a>
        .
      </p>

      {/* Section 5 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        5. Data Storage and Security
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        We use Firebase Authentication, Firestore, and Cloud Storage to manage
        data. Payments are handled securely by Paystack. While we take
        reasonable measures to protect your information, no system is 100%
        secure.
      </p>

      {/* Section 6 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        6. Account Deletion
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        You can request deletion of your uSchool account at any time. Visit our{' '}
        <a href="/account" className="text-purple-600 hover:underline">
          Delete Account page
        </a>{' '}
        to learn how to permanently remove your account and data.
      </p>

      {/* Section 7 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        7. Changes to This Policy
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        We may update this Privacy Policy from time to time. Continued use of
        the app after changes means you agree to the updated policy.
      </p>

      {/* Section 8 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        8. Contact Us
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        For questions about this Privacy Policy, contact us at{' '}
        <a
          href="mailto:support@uschool.com"
          className="text-purple-600 hover:underline"
        >
          support@uschool.com
        </a>
        .
      </p>

      {/* Section 9 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        9. Camera Access
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        The uSchool app may request permission to access your device's camera.
        This permission is used solely for in-app features such as capturing
        profile pictures or uploading marketplace images. Photos taken through
        the app are not stored on our servers or shared with third parties. You
        can revoke camera permissions at any time from your device settings.
      </p>
    </div>
  );
};

export default Privacy;
