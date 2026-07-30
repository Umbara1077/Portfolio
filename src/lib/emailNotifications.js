import emailjs from '@emailjs/browser';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.js';

emailjs.init({ publicKey: 'jDjzp50xsarkBHLq7' });

function sendContactEmail(name, email, message) {
    const templateParams = {
        to_name: 'Precision Pixel Studios',
        from_name: name,
        reply_to: email,
        message
    };

    console.log('Sending contact email with params:', templateParams);

    emailjs.send('service_p6spny8', 'template_eqnplgb', templateParams).then(
        (response) => {
            console.log('Contact email sent successfully:', response.status, response.text);
        },
        (error) => {
            console.error('Failed to send contact email:', error);
        }
    );
}

function sendJobRequestEmail(data) {
    const templateParams = {
        to_name: 'Precision Pixel Studios',
        from_name: data.clientName,
        reply_to: data.clientEmail,
        message: `
            Company: ${data.companyName} <br>
            Project Details: ${data.projectDetails} <br>
            Budget: ${data.budget} <br>
            Deadline: ${data.deadline}
        `
    };

    console.log('Sending job request email with params:', templateParams);

    emailjs.send('service_p6spny8', 'template_f50hyrl', templateParams).then(
        (response) => {
            console.log('Job request email sent successfully:', response.status, response.text);
        },
        (error) => {
            console.error('Failed to send job request email:', error);
        }
    );
}

function processContacts() {
    console.log('Processing all contact form submissions...');

    getDocs(collection(db, 'contacts'))
        .then((snapshot) => {
            console.log(`Found ${snapshot.size} contact submissions.`);
            if (!snapshot.empty) {
                snapshot.forEach((doc) => {
                    const newData = doc.data();
                    console.log('Contact form submission:', newData);
                    sendContactEmail(newData.name, newData.email, newData.message);
                });
            } else {
                console.log('No contact form submissions found.');
            }
        })
        .catch((error) => {
            console.error('Error fetching contacts:', error);
        });
}

function processJobRequests() {
    console.log('Processing all job request submissions...');

    getDocs(collection(db, 'jobRequests'))
        .then((snapshot) => {
            console.log(`Found ${snapshot.size} job request submissions.`);
            if (!snapshot.empty) {
                snapshot.forEach((doc) => {
                    const newData = doc.data();
                    console.log('Job request submission:', newData);
                    sendJobRequestEmail(newData);
                });
            } else {
                console.log('No job request submissions found.');
            }
        })
        .catch((error) => {
            console.error('Error fetching job requests:', error);
        });
}

export function processAllEntries() {
    processContacts();
    processJobRequests();
}

export const PROCESS_INTERVAL_MS = 12 * 60 * 60 * 1000;
