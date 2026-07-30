import { useRef, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref as storageRef, uploadBytes } from 'firebase/storage';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { simpleFooter } from '../components/Footers.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { db, storage } from '../lib/firebase.js';

export default function JobRequest() {
    usePageMeta({ title: 'Submit Job Request' });

    const formRef = useRef(null);
    const [response, setResponse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const clientName = form.querySelector('#client-name').value;
        const clientEmail = form.querySelector('#client-email').value;
        const companyName = form.querySelector('#company-name').value;
        const projectDetails = form.querySelector('#project-details').value;
        const budget = form.querySelector('#budget').value;
        const deadline = form.querySelector('#deadline').value;
        const documents = form.querySelector('#documents').files;

        if (!/^\d+(\.\d{1,2})?$/.test(budget.replace('$', ''))) {
            alert('Budget must be a valid number.');
            return;
        }

        try {
            const jobRequestRef = await addDoc(collection(db, 'jobRequests'), {
                clientName,
                clientEmail,
                companyName,
                projectDetails,
                budget,
                deadline,
                timestamp: serverTimestamp()
            });

            const promises = [];
            for (let i = 0; i < documents.length; i++) {
                const file = documents[i];
                promises.push(uploadBytes(storageRef(storage, `jobRequests/${jobRequestRef.id}/${file.name}`), file));
            }

            await Promise.all(promises);

            setResponse(
                `Thanks for your job request, ${clientName}. I will look into this and get back to you as soon as possible.`
            );
            formRef.current.reset();
        } catch (error) {
            console.error('Error submitting job request form:', error);
            alert('Error submitting job request form.');
        }
    };

    return (
        <Layout orbs={2} footer={simpleFooter}>
            <section id="job-request">
                <Link to="/index.html">
                    <img src="/images/logo.jpg" alt="Precision Pixel Innovations" className="centered-logo" />
                </Link>
                <h1>Submit Job Request</h1>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label htmlFor="company-name">Company Name:</label>
                    <input type="text" id="company-name" name="company-name" />
                    <label htmlFor="client-name">Name:</label>
                    <input type="text" id="client-name" name="client-name" required />
                    <label htmlFor="client-email">Email:</label>
                    <input type="email" id="client-email" name="client-email" required />
                    <label htmlFor="project-details">Project Details:</label>
                    <textarea id="project-details" name="project-details" required></textarea>
                    <label htmlFor="budget">Budget:</label>
                    <input type="text" id="budget" name="budget" required />
                    <label htmlFor="deadline">Deadline:</label>
                    <input type="date" id="deadline" name="deadline" required />
                    <label htmlFor="documents">Upload Documents:</label>
                    <input type="file" id="documents" name="documents" multiple />
                    <button type="submit">Submit</button>
                </form>
                <div
                    id="job-request-response"
                    className="response-message"
                    style={response ? { display: 'block' } : undefined}
                >
                    {response}
                </div>
            </section>
        </Layout>
    );
}
