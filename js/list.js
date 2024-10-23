// -----------Js code for List.html -----------------------
window.onload = display;
async function display() {
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
  let data = await mydata.json();
  console.log(data);
  data.forEach((key) => {
    table += `
                    <tr  border="1">

                        <td class="px-2 py-2">${key.id}</td>
                        <td class="px-2 py-2">${key.name}</td>
                        <td class="px-2 py-2">${key.mail}</td>
                        <td class="px-2 py-2">${key.post}</td>
                        
                    
                        </tr>
                    `;
  });
  table += `</table>`;
  document.getElementById("show").innerHTML = table;
}



