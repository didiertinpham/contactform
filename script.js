/*function validation(){
    alert("working");  now click submit for message "working" 
}   ------------>>>>>>>>>>>test<<<<<<<<<<<<<*/

function validation(){
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    let text;

    error_message.style.padding = "10px";

    if(name.length < 2){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 3){
        text = "Please Enter Valid Subject";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 140){
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully")
    return true;
}