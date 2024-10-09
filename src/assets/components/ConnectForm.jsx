import React, { useState } from 'react';
import UserCard from './UserCard';

export default function ConnectForm() {
    // Define state variables for the form inputs
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [textarea, setTextarea] = useState('');

    function handleSubmit(event) { // Prevent default form submission behavior

        // Check if any field is empty
        if (fname === "" || lname === "" || email === "" || subject === "" || textarea === "") {
            alert("All fields must be filled");
        } else {
            alert("Form Submitted!");

            // Clear the input fields after successful submission
            setFname('');
            setLname('');
            setEmail('');
            setSubject('');
            setTextarea('');
        }
    }

    return (
        <div className='text-white font-bold md:w-11/12 m-3 md:m-auto flex md:flex-row flex-col justify-between gap-5'>
            <div className="md:w-1/3 w-auto h-full md:sticky md:top-28">
                <UserCard />
            </div>
            <div className='md:w-2/3 w-full h-full bg-black p-7 rounded-2xl'>
                <h1 className='text-4xl font-semibold py-7'>Let's 👋 <span className='text-blue-500'>Work</span> Together</h1>
                <p className='text-slate-400 font-normal text-lg'>I'm here to help if you're searching for a Web Developer to bring your idea to life or a design to give it a real life touch. I can you help take your business to the next level.</p>
                <div className='form-container bg-slate-900 mt-20 h-full md:p-7 p-3 rounded-xl flex flex-col'>
                    <div className='flex md:flex-row flex-col justify-around items-center font-normal md:mb-10'>
                        <input 
                            className='bg-black text-white border-2 border-slate-800 outline-none rounded-lg md:w-5/12 w-full px-5 py-3 md:mb-0 mb-3' 
                            type="text" 
                            name="fname" 
                            id="fname" 
                            placeholder='First Name' 
                            value={fname} 
                            onChange={(e) => setFname(e.target.value)}
                        />
                        <input 
                            className='bg-black text-white border-2 border-slate-800 outline-none rounded-lg md:w-5/12 w-full px-5 py-3 md:mb-0 mb-3' 
                            type="text" 
                            name="lname" 
                            id="lname" 
                            placeholder='Last Name' 
                            value={lname} 
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </div>
                    <div className='flex md:flex-row flex-col justify-around items-center font-normal md:mb-10'>
                        <input 
                            className='bg-black text-white border-2 border-slate-800 outline-none rounded-lg md:w-5/12 w-full px-5 py-3 md:mb-0 mb-3' 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder='Email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                        />
                        <input 
                            className='bg-black text-white border-2 border-slate-800 outline-none rounded-lg md:w-5/12 w-full px-5 py-3 md:mb-0 mb-3' 
                            type="text" 
                            name="subject" 
                            id="subject" 
                            placeholder='Subject Here' 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className='flex md:flex-row flex-col justify-center items-center font-normal md:mb-10 w-full h-full'>
                        <textarea 
                            className='md:w-11/12 w-full rounded-2xl outline-none bg-black border-2 border-slate-800 px-5 py-3 md:mb-0 mb-3 resize-none' 
                            name="textarea" 
                            id="textarea" 
                            rows={10} 
                            placeholder='Type details about your inquiry' 
                            value={textarea}
                            onChange={(e) => setTextarea(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button 
                            className='md:w-11/12 w-full bg-blue-500 px-5 py-3 rounded-xl' 
                            onClick={handleSubmit}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
