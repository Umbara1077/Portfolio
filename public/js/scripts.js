// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4_duL_tnVCBKT8FC0JnRKxfAfps4yoNc",
    authDomain: "pixelperfectiondev.firebaseapp.com",
    projectId: "pixelperfectiondev",
    storageBucket: "pixelperfectiondev.appspot.com",
    messagingSenderId: "370215131349",
    appId: "1:370215131349:web:ddc963461996c7c8006a5c",
    measurementId: "G-P0BTHPHFEB"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideNav = document.getElementById('side-nav');

    menuToggle.addEventListener('click', () => {
        if (sideNav.style.width === '250px') {
            sideNav.style.width = '0';
        } else {
            sideNav.style.width = '250px';
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target !== sideNav && event.target !== menuToggle && !sideNav.contains(event.target) && !menuToggle.contains(event.target)) {
            sideNav.style.width = '0';
        }
    });
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            
            try {
                await db.collection('contacts').add({ name, email, message });
                const responseMessage = document.getElementById('contact-response');
                responseMessage.textContent = `Thanks for your message, ${name}. I will get back to you as soon as possible.`;
                responseMessage.style.display = 'block';
                contactForm.reset();
            } catch (error) {
                console.error('Error submitting contact form:', error);
                alert('Error submitting contact form.');
            }
        });
    }

    // Handle job request form submission
    const jobRequestForm = document.querySelector('#job-request form');
    if (jobRequestForm) {
        jobRequestForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const clientName = document.querySelector('#client-name').value;
            const clientEmail = document.querySelector('#client-email').value
            const companyName = document.querySelector('#company-name').value;
            const projectDetails = document.querySelector('#project-details').value;
            const budget = document.querySelector('#budget').value;
            const deadline = document.querySelector('#deadline').value;
            const documents = document.querySelector('#documents').files;

              // Validate the budget input
              if (!/^\d+(\.\d{1,2})?$/.test(budget.replace('$', ''))) {
                alert('Budget must be a valid number.');
                return;
            }

            
            try {
                // Add job request to Firestore
                const jobRequestRef = await db.collection('jobRequests').add({
                    clientName,
                    clientEmail,
                    companyName,
                    projectDetails,
                    budget,
                    deadline,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });

                // Upload documents to Firebase Storage
                const promises = [];
                for (let i = 0; i < documents.length; i++) {
                    const file = documents[i];
                    const storageRef = storage.ref().child(`jobRequests/${jobRequestRef.id}/${file.name}`);
                    promises.push(storageRef.put(file));
                }

                await Promise.all(promises);

                const responseMessage = document.getElementById('job-request-response');
                responseMessage.textContent = `Thanks for your job request, ${clientName}. I will look into this and get back to you as soon as possible.`;
                responseMessage.style.display = 'block';
                jobRequestForm.reset();
            } catch (error) {
                console.error('Error submitting job request form:', error);
                alert('Error submitting job request form.');
            }
        });
    }
});
