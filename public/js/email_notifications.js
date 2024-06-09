// New Firebase configuration
const newFirebaseConfig = {
    apiKey: "AIzaSyB4_duL_tnVCBKT8FC0JnRKxfAfps4yoNc",
    authDomain: "pixelperfectiondev.firebaseapp.com",
    projectId: "pixelperfectiondev",
    storageBucket: "pixelperfectiondev.appspot.com",
    messagingSenderId: "370215131349",
    appId: "1:370215131349:web:ddc963461996c7c8006a5c",
    measurementId: "G-P0BTHPHFEB"
};

// Initialize Firebase with the new configuration
const newApp = firebase.initializeApp(newFirebaseConfig, "newApp");
const newDb = firebase.firestore(newApp);

emailjs.init('jDjzp50xsarkBHLq7');


function sendContactEmail(name, email, message) {
    const templateParams = {
        to_name: 'Precision Pixel Studios',
        from_name: name,
        reply_to: email,
        message: message
    };

    console.log('Sending contact email with params:', templateParams);

    emailjs.send('service_p6spny8', 'template_eqnplgb', templateParams)
        .then(response => {
            console.log('Contact email sent successfully:', response.status, response.text);
        }, error => {
            console.error('Failed to send contact email:', error);
        });
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

    emailjs.send('service_p6spny8', 'template_f50hyrl', templateParams)
        .then(response => {
            console.log('Job request email sent successfully:', response.status, response.text);
        }, error => {
            console.error('Failed to send job request email:', error);
        });
}

function processContacts() {
    console.log('Processing all contact form submissions...');
    
    newDb.collection('contacts').get()
        .then(snapshot => {
            console.log(`Found ${snapshot.size} contact submissions.`);
            if (!snapshot.empty) {
                snapshot.forEach(doc => {
                    const newData = doc.data();
                    console.log('Contact form submission:', newData);
                    sendContactEmail(newData.name, newData.email, newData.message);
                });
            } else {
                console.log('No contact form submissions found.');
            }
        })
        .catch(error => {
            console.error('Error fetching contacts:', error);
        });
}

function processJobRequests() {
    console.log('Processing all job request submissions...');
    
    newDb.collection('jobRequests').get()
        .then(snapshot => {
            console.log(`Found ${snapshot.size} job request submissions.`);
            if (!snapshot.empty) {
                snapshot.forEach(doc => {
                    const newData = doc.data();
                    console.log('Job request submission:', newData);
                    sendJobRequestEmail(newData);
                });
            } else {
                console.log('No job request submissions found.');
            }
        })
        .catch(error => {
            console.error('Error fetching job requests:', error);
        });
}

function processAllEntries() {
    processContacts();
    processJobRequests();
}

// Schedule the processing to run twice per day (every 12 hours)
setInterval(processAllEntries, 12 * 60 * 60 * 1000);

processAllEntries();