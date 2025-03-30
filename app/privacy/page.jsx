// pages/privacy-policy.js
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 text-gray-700">
      <Head>
        <title>Jeejal Production Privacy Policy</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-2xl text-red-400 font-bold mb-4">Privacy Policy of Jeejal Production</h1>
        <p className="mb-6">
          Welcome to Jeejal Production, a leading company specializing in music production, video recording, post-recording services, and innovative 3D commercials and graphic motion designs. At Jeejal Production, we are deeply committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the types of information we collect, how we use and safeguard it, and the choices you have regarding your information.
        </p>
        <p className="mb-6">
          1. <strong>Information Collection and Use:</strong> We may collect various types of information from our clients, including but not limited to, names, contact details, payment information, and project specifications. This information is essential for us to provide our services effectively, customize your experience, and communicate with you about your projects and inquiries.
        </p>
        <p className="mb-6">
          2. <strong>Data Security and Protection:</strong> At Jeejal Production, we prioritize the security and confidentiality of your information. We implement stringent data protection measures, including encryption, firewalls, and access controls, to prevent unauthorized access, disclosure, alteration, or destruction of your personal data.
        </p>
        <p className="mb-6">
          3. <strong>Data Sharing and Disclosure:</strong> We do not sell, trade, or rent your personal information to third parties for marketing or advertising purposes. However, we may disclose your information to trusted service providers who assist us in delivering our services, managing our operations, or fulfilling our contractual obligations.
        </p>
        <p className="mb-6">
          4. <strong>Cookies and Tracking Technologies:</strong> Our website may use cookies and other tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. Cookies are small files stored on your device that enable us to recognize your browser and remember certain information.
        </p>
        <p className="mb-6">
          5. <strong>Policy Updates and Changes:</strong> Jeejal Production reserves the right to modify or update this Privacy Policy at any time without prior notice. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your information.
        </p>
        <p className="mt-8">
          By engaging with Jeejal Production, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. We are dedicated to maintaining the trust and confidence of our clients and are committed to upholding the highest standards of privacy and data protection in all our business practices.
        </p>
      </div>
    </div>
  );
}
