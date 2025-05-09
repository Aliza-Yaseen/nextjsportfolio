
'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser'; // ✅ Updated recommended package
import Navbar from '../components/navbar';

// ✅ Use your updated EmailJS credentials
const SERVICE_ID = 'service_phzjksi';  // Updated Service ID
const TEMPLATE_ID = 'template_vvtc4ad'; // Updated Template ID
const PUBLIC_KEY = '_QvO2jdYjoV_GIQYS'; // Updated Public Key

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(''); // Reset status on each form submit

        // Check if all fields are filled out
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill out all fields.');
            return;
        }

        try {
            const response = await emailjs.send(
                SERVICE_ID,         // Service ID
                TEMPLATE_ID,        // Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    title: 'New Contact Form Submission',
                    time: new Date().toLocaleString()
                },
                PUBLIC_KEY          // Public Key
            );

            console.log('SUCCESS:', response.status, response.text);
            setStatus('Email sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (err) {
            console.error('EMAILJS ERROR:', err);
            setStatus('An error occurred while sending the email.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-white">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md p-6 bg-black rounded-md shadow-md"
                >
                    <h2 className="text-3xl text-center font-bold mb-4 text-white">Contact Me</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 h-32 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-[60%] py-2 rounded-md bg-white text-black font-bold hover:bg-gray-700 hover:text-white border-[1px] transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                    {status && <p className="mt-4 text-center text-white">{status}</p>}
                </form>
            </div>
        </div>
    );
}
