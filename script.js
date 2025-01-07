function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        Message : document.getElementById("message").value,

    } 


    emailjs.send("service_nrqo85q","template_k7q0bb2",parms).then(alert("Email Sent"))
}