import React, {useState} from 'react';
import StyledLink from "./StyledLink";
import Send from "../assets/svg/send";
import axios, {AxiosError} from 'axios';
import {Alert} from "../styles/FormStyle";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const BOT_TOKEN = '5620654220:AAGh56BUANf0iDSf541ewEEzIGa7f72RriA';
    const CHAT_ID = -828481123;

    const closeAlert = () => {
        setIsAlertVisible(false);
    }

    function submitForm(event: React.FormEvent) {
        event.preventDefault();

        const message = `
            New Form Submission:
            Name: ${name}
            Email: ${email}
            Query: ${query}
        `;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        axios.post(url, {
            chat_id: CHAT_ID,
            text: message,
        })
            .then(() => {
                setIsAlertVisible(true);
                setTimeout(closeAlert, 2000);
            })
            .catch((error: AxiosError) => {
                console.error('Error sending message:', error);
            });
    }

    return (
        <form className='flex flex-col gap-8 items-center md:items-start z-10'>
            <div className="h-16 w-72">
                <label className='text-tahiti-200'>
                    Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="text-tahiti-200 w-full h-full border border-gray-300 bg-transparent px-6 py-4 rounded-lg"
                    placeholder="Enter your name"
                />
            </div>

            <div className="h-16 w-72">
                <label className='text-tahiti-200'>
                    E-mail
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="text-tahiti-200 w-full h-full border border-gray-300 bg-transparent px-6 py-4 rounded-lg"
                    placeholder="Insert your email"
                />
            </div>

            <div className="mb-1 h-40 w-72">
                <label className='text-tahiti-200'>
                    Query
                </label>
                <textarea
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="text-tahiti-200 w-full h-full border border-gray-300 bg-transparent px-6 py-4 rounded-lg"
                    placeholder="Enter your query/request here"
                ></textarea>
            </div>
            <StyledLink width='200px' height='50px' onClick={submitForm}> Send Message <Send/></StyledLink>
            {isAlertVisible && (
                <Alert>
                    Message sent successfully!
                </Alert>
            )}
        </form>
    );
};

export default Form;
