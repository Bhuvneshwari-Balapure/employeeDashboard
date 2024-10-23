// --------------Js code for search.html-----------------------

async function search() {


    let NmSearch = document.getElementById("NmSearch").value;
    let table = `<table id="tab" width=100% border="2">
                    <tr>
                    <th style="border: 1px solid red;"> Emp ID</th>
                    <th style="border: 1px solid red;"> Name </th>
                    <th style="border: 1px solid red;"> Email </th>
                    <th style="border: 1px solid red;"> Position </th>
                    </tr>
                    `;
  
    let url = "http://localhost:3000/Employe";
    let mydata = await fetch(url);
    let data = await mydata.json();     // data  server se mile json response ko store karega
  
    //map JS ka array method hai jo array ke har element par function ko apply karta hai aur ek naya array return karta hai
    data.map((key) => {   
      let str = key.name;   //key object se name property ki value ko store kar rahe hai

      //includes = ye method string ko check karta hai (yaha input search me jo value de rahe h vo key.name me hai ya nahi)
      let myval = str.includes(NmSearch);

      //agar value match ho gai to true return karega
      if (myval == true) {
        table += `
                      <tr  border="1">
  
                        <td class="px-2 py-2">${key.id}</td>
                        <td class="px-2 py-2">${key.name}</td>
                        <td class="px-2 py-2">${key.mail}</td>
                        <td class="px-2 py-2">${key.post}</td>
                        
                    
                        </tr>
                    `;
      }
    });
    table += "</table>";
    document.getElementById("show").innerHTML = table;
  }
  