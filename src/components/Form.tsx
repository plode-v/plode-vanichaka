import { FormEvent, useRef, useState } from 'react';
import emailjs from "@emailjs/browser"

// TODO: add modal on screen after sending email. It will only appears for 3 seconds.

const Form = () => {

    const form= useRef<HTMLFormElement>(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                "service_nudy0y9", 
                "template_lbowm08",
                form.current, 
                "csr-uObou_1tQeqDL"
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        }

        setName("");
        setEmail("");
        setMessage("");
        alert("Thank you for contacting me, I will get in touch as soon as possible.")
    } 

    return (
        <form onSubmit={handleSubmit} className='md:p-10 p-5 rounded-xl grid shadow-black shadow-2xl bg-opacity-60 bg-black' ref={form}>
            <div className=''>
                <label className='form-label'>Name:</label>
                <input type="text" name='from_name' value={name} onChange={e => setName(e.target.value)} required 
                    className='input-fields'
                />
            </div>
            <div className=''>
                <label htmlFor="reply_to" className='form-label'>Email:</label>
                <input type="text" id='reply_to' name="reply_to" value={email} onChange={e => setEmail(e.target.value)} required 
                    className='input-fields'
                />
            </div>
            <div>
                <label className='form-label' htmlFor='message'>Message:</label>
                <textarea rows={10} id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} required 
                    className='input-fields'
                />
            </div>
            <button type='submit' className='bg-violet-500 rounded-sm' >Send</button>
        </form>
    )
}

export default Form