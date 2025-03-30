import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-100 text-gray-700">
      <Head>
        <title>Jeejal Production Terms and Conditions</title>
      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-2xl mb-4 text-red-400 font-bold">Terms and Conditions of Jeejal Production</h1>
        <p className="mb-6">
          Welcome to Jeejal Production, your premier destination for unparalleled music production, video recording, post-recording services, and cutting-edge 3D commercials and graphic motion designs. We are committed to providing our clients with top-tier services, leveraging state-of-the-art technology and a team of skilled professionals dedicated to bringing your vision to life.
        </p>
        <p className="mb-6">
          1. <strong>Service Provision:</strong> Jeejal Production is committed to delivering high-quality services tailored to meet the unique needs and preferences of our clients. Our offerings encompass a wide range of creative solutions, including but not limited to music production, video recording, post-recording editing, and the creation of captivating 3D commercials and graphic motion designs.
        </p>
        <p className="mb-6">
          2. <strong>Intellectual Property Rights:</strong> All content, including music compositions, video recordings, graphics, and 3D designs produced by Jeejal Production, remains the intellectual property of our company unless otherwise specified in a written agreement.
        </p>
        <p className="mb-6">
          3. <strong>Confidentiality:</strong> At Jeejal Production, we prioritize the confidentiality of our clients' information and proprietary content. We adhere to strict data protection protocols to safeguard sensitive data and ensure that it is not disclosed or shared with unauthorized third parties.
        </p>
        <p className="mb-6">
          4. <strong>Payment Terms:</strong> All services provided by Jeejal Production are subject to the payment terms and conditions specified in our contractual agreements. Clients are required to adhere to the agreed-upon payment schedule and terms to avoid any disruptions or delays in service delivery.
        </p>
        <p className="mt-8">
          By engaging with Jeejal Production, clients acknowledge and agree to abide by the terms and conditions outlined above. We look forward to collaborating with you to create exceptional music, videos, and graphic motion designs that resonate with your audience and elevate your brand to new heights.
        </p>
      </div>
    </div>
  );
}
