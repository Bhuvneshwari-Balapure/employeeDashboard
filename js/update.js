// -----------Js code for update.html -----------------------
document.getElementById("save").addEventListener("click", finalUpdate);

//uid is initialize by null value
let uid = null;   //lekin jab user kisi employee ko edit karega to isme employe ki id store hoge




// asynchronous means to perform task wihich take time (like fetching data) without blocking execution of other code 
//ye function emp data ko edit karne ke liye hai
async function editDisplay(arg) {   // arg parameter(emp id hai jo data edit karna hai)
  let url = `http://localhost:3000/Employe/`;
  let mydata = await fetch(url);
  let data = await mydata.json();
  uid = arg;    //pehle null thi value ab empl ki id store hogi jo edit karni hai

  //data.find() function se us id ko dhoodhte h jiski id arg se match ho rahi hai
  //e har employee ke object ko represent kar rha hai
  let a = data.find((e) => e.id == arg);
  document.getElementById("id").value = a.id;
  document.getElementById("name").value = a.name;
  document.getElementById("mail").value = a.mail;
  document.getElementById("post").value = a.post;
  document.getElementById("ed").style.display = "block";
  document.querySelector(".parent").style.filter = "blur(2px)";
}

function finalUpdate() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let pos = document.getElementById("post").value;

  let obj = {
    id: id,
    name: name,
    mail: mail,
    post: post
  };
  fetch(`http://localhost:3000/Employe/${uid}`, {
    method: "PUT",
    hedders: {
      "content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}
window.onload = display;
async function display() {
  let table = `<table id="tab" width=100% border="2">
                    <tr>
                    <th style="border: 1px solid red;"> Emp ID</th>
                    <th style="border: 1px solid red;"> Name </th>
                    <th style="border: 1px solid red;"> Email </th>
                    <th style="border: 1px solid red;"> Position </th>
                    <th style="border: 1px solid red;"> Edit </th>
                    </tr>
                    `;
  let url = "http://localhost:3000/Employe";
  let mydata = await fetch(url);
  let data = await mydata.json();
  console.log(data);
  data.forEach((key) => {
    table += `
                    <tr  border="1">

                        <td class="px-2 py-2">${key.id}</td>
                        <td class="px-2 py-2">${key.name}</td>
                        <td class="px-2 py-2">${key.mail}</td>
                        <td class="px-2 py-2">${key.post}</td>
                        <td class="px-2 py-2"> 
                            <a href= "#" onclick="editDisplay(${key.id})">
                            <i class="fa-solid fa-pen-to-square fa-lg" style="color: #3609be;"></i> 
                            </a>
                        
                    
                    </tr>
                    `;
  });
  table += `</table>`;
  document.getElementById("show").innerHTML = table;
}
