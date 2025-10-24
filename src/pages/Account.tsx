import React from 'react';

const Account: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Delete Account</h1>

      <p className="mt-4 text-gray-600 leading-relaxed">
        At uSchool, we respect your right to control your personal information.
        If you wish to stop using our services, you can request permanent
        deletion of your account and all associated data.
      </p>

      {/* Section 1 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        1. How to Request Account Deletion
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        Currently, account deletion can only be requested by email. Please send
        an email from the address linked to your uSchool account to the address
        below:
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        📧{' '}
        <a
          href="mailto:support@uschool.com"
          className="text-purple-600 hover:underline"
        >
          support@uschool.com
        </a>
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        In your email, please include:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
        <li>Your full name</li>
        <li>The email address associated with your account</li>
        <li>A short message requesting account deletion</li>
      </ul>

      {/* Section 2 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        2. What Happens After Deletion
      </h2>
      <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
        <li>
          Your profile and account data will be permanently deleted from our
          servers within 7 days of verification.
        </li>
        <li>
          All study progress, marketplace listings, and stored information will
          be removed.
        </li>
        <li>
          We do not retain your personal data after deletion unless required by
          law.
        </li>
      </ul>

      {/* Section 3 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        3. Need Help?
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        If you encounter any issues or need confirmation after submitting a
        deletion request, please reach out to our support team at{' '}
        <a
          href="mailto:support@uschool.com"
          className="text-purple-600 hover:underline"
        >
          support@uschool.com
        </a>
        . We’ll be happy to assist you.
      </p>

      <p className="mt-8 text-gray-500 text-sm">Last updated: October 2025</p>
    </div>
  );
};

export default Account;
