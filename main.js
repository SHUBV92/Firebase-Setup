// Initialize Firebase 

var firebaseConfig = {
    apiKey: "AIzaSyA3hVE8mWfR0S97Jk9JLQRjeEMB9j0OeXY",
    authDomain: "symposium-5c813.firebaseapp.com",
    databaseURL: "https://symposium-5c813.firebaseio.com",
    projectId: "symposium-5c813",
    storageBucket: "symposium-5c813.appspot.com",
    messagingSenderId: "1090835497449",
    appId: "1:1090835497449:web:792b7863cfb4bd50a6cb78",
    measurementId: "G-C1YJQC9P6V"
  };
  firebase.initializeApp(firebaseConfig);

//Reference MEssages Collection 

let messagesRef = firebase.database().ref('message');


// Listen for form submit  

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form 

function submitForm(e){
    e.preventDefault();

    // Get values 
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');


}

// Function to get form value 

function getInputVal(id){
    return document.getElementById(id).value;
}


// Save messages to firebase 

function saveMessage(name, company, email, phone, message){
    let newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email, 
        phone: phone, 
        message: message
    })
}