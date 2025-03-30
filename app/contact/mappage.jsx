import Head from 'next/head';

export default function MapPage() {
    return (
        <div className="bg-white min-h-screen">
            <Head>
                <title>JEEJAL ENTERPRISE Map</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            </Head>
<div className='text-center md:text-4xl text-2xl text-red-400 font-bold'>
    <h1>Find us on google map </h1>
</div>
            <div className="container mx-auto mt-10 p-6  rounded-lg">
                <div className="relative rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.381073253339!2d68.39418861507418!3d26.244356583397758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394a4d5fe0900063%3A0x7f20b7f14d07bffa!2sJEEJAL%20ENTERPRISE!5e0!3m2!1sen!2s!4v1641281962739" 
                        width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>

                <div className="mt-6">
                    <h1 className="text-xl font-semibold">JEEJAL ENTERPRISE</h1>
                    <p className="text-gray-600 mt-2">[69VW+PCX, Unnamed Road, Jamali Colony Nawabshah, Shaheed Benazirabad, Sindh]</p>
                </div>

                <div className="mt-2">
                    <p className="text-gray-600">Contact: 03033000990</p>
                    <p className="text-gray-600">Available 24/7</p>
                </div>
            </div>
        </div>
    );
}
