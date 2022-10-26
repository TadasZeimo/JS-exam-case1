/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function getResult(event) {
    event.preventDefault();
  
    const kg = Number(document.getElementById("search").value);
    let lb = kg * 2.2046;
    let g = kg / 0.001;
    let oz = kg * 35.274;
  
    const output = document.getElementById("output");
    output.innerHTML = "";
    output.style.marginLeft = "10%";
    output.style.color = "#f58a42";
  
    const h1 = document.createElement("h1");
    h1.textContent = `Svarai(lb) = ${lb}`;
  
    const h2 = document.createElement("h1");
    h2.textContent = `Gramai(g) = ${g}`;
  
    const h3 = document.createElement("h1");
    h3.textContent = `Uncijos(oz) = ${oz}`;
  
    output.append(h1, h2, h3);
  };
  
  document.querySelector("form").addEventListener("submit", getResult);