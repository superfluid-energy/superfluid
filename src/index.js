import css from "./index.css";
import data from './data.json';

const allElements = document.querySelectorAll('*[id]')

//allElements.forEach(element => console.log(element.id));


addLanEvent("nl")
addLanEvent("ua")
addLanEvent("en")


function addLanEvent(lan) {
    const el = document.getElementById(lan);
    el.addEventListener("click", () => changeLanguage(lan))
}

changeLanguage("nl");

function changeLanguage(lang) {

    let index = 0;
    if (lang == 'ua') index = 1;
    if (lang == 'nl') index = 2;
    allElements.forEach(element => {
        const id = element.id;
        const ar = data[id];
        if (ar) {
            if (id == "course_data") {
                element.innerHTML=null;
                let tr=null
                let td=null
                let x=0;
             //    for (let x= 0; x++; x< 2) {
                tr=element.appendChild( document.createElement("tr"))
                td = tr.appendChild(document.createElement("td"))
                td.innerText=1;
                td = tr.appendChild(document.createElement("td"))
                td.innerText = data[id][x]
                x++;
                tr=element.appendChild( document.createElement("tr"))
                td = tr.appendChild(document.createElement("td"))
                td.innerText=3;
                td = tr.appendChild(document.createElement("td"))
                td.innerText = data[id][x]
                x++;
        
                tr=element.appendChild( document.createElement("tr"))
                td = tr.appendChild(document.createElement("td"))
                td.innerText=3;
              td = tr.appendChild(document.createElement("td"))
                 td.innerText = data[id][x]
                
             //    }

                //}
            }
            else {

                const txt = data[id][index]
                element.innerText = txt;
            }
        }
    }

    );

}


