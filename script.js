const Form = document.querySelector("form");
const Email = Form.querySelector("#email");
const Password = Form.querySelector("#password");
// console.log(Password);




Form.addEventListener("submit", formHandler);

function formHandler(e){
    e.preventDefault();
    // console.log(e);

const formInfo = {
    Email: Email.value,
    Password: Password.value,

}
Email.value = "";
Password.value = "";

console.log(formInfo);


}