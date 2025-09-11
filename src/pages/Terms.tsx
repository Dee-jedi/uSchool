import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Welcome to uSchool! By accessing or using our app, you agree to comply
        with and be bound by the following Terms of Service. Please read them
        carefully before using the app.
      </p>

      {/* Section 1 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        1. Use of the App
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        uSchool provides students with study materials, a news feed, a gamified
        leaderboard, and a marketplace. You agree to use these features
        responsibly, for educational and personal purposes only.
      </p>

      {/* Section 2 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        2. Study Materials (PDFs & PQs)
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        The PDFs and Past Questions (PQs) available in this app are collected
        from publicly available sources and shared student resources. uSchool
        does not claim ownership of these materials and makes them available
        solely for educational purposes.
      </p>
      <p className="mt-2 text-gray-600 leading-relaxed">
        If you are a copyright holder and believe your material has been shared
        improperly, please contact us at{' '}
        <a
          href="mailto:support@uschool.com"
          className="text-purple-600 hover:underline"
        >
          support@uschool.com
        </a>{' '}
        and we will promptly remove it.
      </p>

      {/* Section 3 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        3. Marketplace
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        The marketplace allows users to post accommodations, products, and
        services. uSchool is not responsible for the accuracy, quality, or
        safety of items listed, and all transactions are strictly between buyers
        and sellers.
      </p>

      {/* Section 4 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        4. Payments & Merchants
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        Users who wish to become merchants may be required to pay fees. All
        payments are securely processed through{' '}
        <a
          href="https://paystack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline"
        >
          Paystack
        </a>
        . We do not collect or store payment card details. Any disputes,
        chargebacks, or refund requests are subject to Paystack’s policies.
      </p>
      <p className="mt-2 text-gray-600 leading-relaxed">
        By becoming a merchant, you agree to provide accurate information, and
        acknowledge that uSchool is not responsible for errors in payment
        processing, delivery of goods or services, or any financial disputes
        between merchants and buyers.
      </p>

      {/* Section 5 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        5. User Conduct
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        You agree not to misuse the app by posting harmful, illegal, misleading,
        or inappropriate content. We reserve the right to suspend or terminate
        accounts that violate these rules.
      </p>

      {/* Section 6 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">6. Privacy</h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        Your use of uSchool is also governed by our{' '}
        <a href="/privacy" className="text-purple-600 hover:underline">
          Privacy Policy
        </a>
        , which explains how we collect, use, and protect your information.
      </p>

      {/* Section 7 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        7. Disclaimer of Liability
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        uSchool is provided on an “as is” basis. We make no guarantees of
        accuracy, reliability, or availability. You use the app at your own
        risk.
      </p>

      {/* Section 8 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        8. Changes to Terms
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        We may update these Terms from time to time. Continued use of the app
        after changes means you accept the new Terms.
      </p>

      {/* Section 9 */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800">
        9. Contact Us
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        If you have questions about these Terms, please contact us at{' '}
        <a
          href="mailto:support@uschool.com"
          className="text-purple-600 hover:underline"
        >
          support@uschool.com
        </a>
        .
      </p>
    </div>
  );
};

export default Terms;
