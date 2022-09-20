const create = document.querySelector('button');

function passwordCheck() {
    let pass1 = document.querySelector('#password').value;
    let pass2 = document.querySelector('#confirm_password').value;
if(pass1 === pass2){
    alert("The passwords matched");
    return true;
}
else {
    alert("The passwords did not match");
    return false;}

}

create.addEventListener('click', () => { passwordCheck() });

//Simple function to check if both password values match on clicking create account