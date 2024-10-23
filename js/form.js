


document.getElementById("employeeForm").addEventListener("submit", EmpSave);

// asynchronous means to perform task wihich take time (like fetching data) without blocking execution of other code 
// async function ke andar hum await keyword ka use kar skte hai, jo ki function ke execution ko
// pause karke rakhta hai jab tak promise resolve ya reject nahi ho jata


async function EmpSave(event) {   //event object us form ke specific submission event ki information provide karta hai
  event.preventDefault(); //browser reload the page



  //getting values from form and store in the variable
  let id = document.getElementById("userid").value;  
  let name = document.getElementById("user").value;
  let mail = document.getElementById("emails").value;
  let post = document.getElementById("post").value;



  // ye json file ki link hai jaha form ka data save karna hai
  let url = "http://localhost:3000/Employe";



  //const JS keyword hai (mtlb const response variable ki value change nahi hogi)
  //await keyword asynchronous programing me use hota hai(function ko temporary rok kar rakhta hai jab tak ki promise complete nahi ho jata)
  //jab fetch call ho rha ho  to code vahi ruk jaega or jab response aega jab agla code execute hoga
  //fetch built in JS function hai jo Kisi URl se data fetch karne ke liye use hota hai


  const response = await fetch(url, {



    //method ek key hoti  jo fetch ke object me use hoti hai
    //iska kaam hai ki server ko batana ki aap konsa http method use kar rahe hai

    // Main HTTP request types
    //GET :- server se data lena (jab kisi resource ya web page ya data ko dekhna ho)
    //PUT :- server par existing data ko update karna
    //PATCH :- server par data me se kuch data ko update karna ho


    method: "POST", //server par naya data create karne ke liye use karte hai post method ka


    //body fetch ka ek object hai jo data provide karta hai jo hum send karna chahte hai 
    // JSON.stringify built in method hai jo js object ko JSON string me convert karta hai

    
    body: JSON.stringify({
      id: id,       // key form se data liya hai or value json file ki key hai jo uski value pic karegi
      name: name,
      mail: mail,
      post: post
    }),

    headers: {    //header fetch request ke option ka ek key hai jo  server ko request ke bare me additional infomation dene ke liye hota hai
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  alert("data save!!!");
}












// -----------validation-------------------

function validation() {
  let nm = document.getElementById("user").value;
  let msgnm = document.getElementById("username");

  // Name
  if (nm === "") {
    msgnm.innerHTML = "Write Your Name";
    document.getElementById("user").focus();
    return false;
  }
  if (!isNaN(nm)) {
    msgnm.innerHTML = "Accept only alphabet";
    document.getElementById("user").focus();
    return false;
  }

  // ID
  let id = document.getElementById("userid").value;
  let msgid = document.getElementById("idout");

  if (id === "") {
    msgid.innerHTML = "Write Your ID";
    document.getElementById("userid").focus();
    return false;
  }
  if (isNaN(id)) {
    msgid.innerHTML = "Accept only Number";
    document.getElementById("userid").focus();
    return false;
  }
  if (id.length < 4 || id.length > 9) {
    msgid.innerHTML = "ID should be between 4 and 9 characters";
    document.getElementById("userid").focus();
    return false;
  }

  // Mobile Number
  let num = document.getElementById("MobileNumber").value;
  let msgnum = document.getElementById("mobMsg");

  if (num === "") {
    msgnum.innerHTML = "Enter Mobile Number";
    document.getElementById("MobileNumber").focus();
    return false;
  }
  if (num.length !== 10 || isNaN(num)) {
    msgnum.innerHTML = "Enter a valid 10-digit number";
    document.getElementById("MobileNumber").focus();
    return false;
  }

  // Email
  let mail = document.getElementById("emails").value;
  let msgmail = document.getElementById("emailid");

  if (mail === "") {
    msgmail.innerHTML = "Enter Your Email ID";
    document.getElementById("emails").focus();
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(mail)) {
    msgmail.innerHTML = "Enter a valid email address";
    document.getElementById("emails").focus();
    return false;
  }

  //position
  let position = document.forms["employeeForm"].mydropdown.value;
  let msgPosition = document.getElementById("postMsg");

  if (position === " ") {
    msgPosition.innerHTML = "Please Enter an employee position";
    return false;
  }

  //salary
  let salary = document.forms["employeeForm"].sal.value;
  let msgSal = document.getElementById("salMsg");

  if (salary === "") {
    msgSal.innerHTML = "Please enter the employee salary";
    document.forms["employeeForm"].sal.focus();
    return false;
  }

  if (isNaN(salary) || salary <= 0) {
    msgSal.innerHTML = "Please enter a valid salary (greater than 0)";
    document.forms["employeeForm"].sal.focus();
    return false;
  } else {
    msgSal.innerHTML = "";
  }

  return true;
}


