const socket = io(); //initialize socket.io

const clientsTotal = document.getElementById('clients-total'); //get the clients-total element

const messageConatiner = document.getElementById('message-container'); //get the message-containers element
const nameInput = document.getElementById('name-input'); //get the name-input element
const messageForm = document.getElementById('message-form'); //get the message-form element
const messageInput = document.getElementById('message-input'); //get the message-input element

const messageTone = new Audio('/message_tone.mp3'); //create a new audio object with the message.mp3 file

messageForm.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent the default behavior of the form
    sendmessage(); //call the sendmessage function
}); //listen for a submit event on message-form

//listen for an event on clients-total on socket.io
socket.on('clients-total', (data) => {
    clientsTotal.innerText = `Total clients : ${data}`; //update the clients-total element with the number of connected clients 
});

function sendmessage() {
    if (messageInput.value === '') return; //if the message input is empty then return
    //console.log(messageInput.value);
    const data = {
        name: nameInput.value,
        message: messageInput.value,
        dateTime: new Date() //add the current date and time
    }; //create an object with name and message
    socket.emit('message', data); //emit the message event with the data object
    addMessageToUI(true, data); //call the addMessageToUI function with true and data
    messageInput.value = ''; //clear the message input
}

socket.on('chat-message', (data) => {
    messageTone.play(); //play the message tone
    addMessageToUI(false, data); //call the addMessageToUI function with false and data
});

function addMessageToUI(isOwnMessage, data) {
    clearFeedback();
    const element = 
            `<li class="${isOwnMessage ? "message-right": "message-left"}">
                <p class="message">
                    ${data.message}
                    <span>${data.name} ◎ ${moment(data.dateTime).fromNow()}</span>
                </p>
            </li> `
    messageConatiner.innerHTML += element; //add the element to the message-container
    scrollToBottom(); 
}
//if the message is from the sender then add the message-right class else add the message-left class
//fromNow() is a function from moment.js that returns the time from now
 function scrollToBottom(){
    messageConatiner.scrollTo(0, messageConatiner.scrollHeight); //scroll to the bottom of the message-container
 }

messageInput.addEventListener('focus', () => {
    socket.emit('feedback', {
        feedback: `👤 ${nameInput.value} is typing a message...`
    }); 
}); 

messageInput.addEventListener('keypress', () => {
    socket.emit('feedback', {
        feedback: `👤 ${nameInput.value} is typing a message...`
    }); 
}); 

messageInput.addEventListener('blur', () => {
    socket.emit('feedback', {
        feedback: ''
    }); 
}); 

socket.on('feedback', (data) => {
    clearFeedback();
    const element = `
            <li class="message-feedback">
                <p class="feedback" id="feedback">
                    ${data.feedback}
                </p>
            </li>`;
    messageConatiner.innerHTML += element;
});

function clearFeedback(){
    document.querySelectorAll(`li.message-feedback`).forEach(element => {
        element.parentNode.removeChild(element);
    });
}