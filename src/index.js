import css from "./index.css";
import data from './data.json';

const allElements = document.querySelectorAll('*[id]')

allElements.forEach(element => console.log(element.id));


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
            const txt = data[id][index]
            element.innerText = txt;
        }
    }

    );

}


