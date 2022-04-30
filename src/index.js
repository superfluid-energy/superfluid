import css from "./index.css";

const nextButtons = document.getElementsByClassName("next")
const prevButtons = document.getElementsByClassName("prev")
const stepperItems = document.getElementsByClassName("stepper-item")
const steps = document.getElementsByClassName("step")
const nl = document.getElementById("nl");
nl.addEventListener("click", () => changeLanguage("nl"))
const ua = document.getElementById("ua");

ua.addEventListener("click", () => changeLanguage("ua"))
const en = document.getElementById("en");

en.addEventListener("click", () => changeLanguage("en"))

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const goal = document.getElementById("goal");
const course_title = document.getElementById("course_title");
const course_text = document.getElementById("course_text");
changeLanguage("nl");
function changeLanguage(lang) {
    var language = {
        en: {
            title:
                "Superfluid Energy for energy independent houses",
            subtitle:
                "Quality installations on solar, heatpump and batteries",
              course_title:"Cursus zonnepanelen installeren voor Oekraïners",
            course_text:"Superfuid Energy organiseert samen met Solar Techniek Nederland een cursus Zonnepanelen installeren speciaal voor Oekraïners, met de garantie om binnen 6 weken een goede baan in Nederland te hebben."
    
        },
        ua: {
            title:
                "Superfluid Energy for energy independent houses",
            subtitle:
                "Quality installations on solar, heatpump and batteries",
                  course_title:"Cursus zonnepanelen installeren voor Oekraïners",
            course_text:"Superfuid Energy organiseert samen met Solar Techniek Nederland een cursus Zonnepanelen installeren speciaal voor Oekraïners, met de garantie om binnen 6 weken een goede baan in Nederland te hebben."
     },
        nl: {
            title:
                "Superfluid Energy voor energie onafhankelijke woningen",
            subtitle:
                "Kwaliteits installaties met zonne energie, warmtepompen en batterijen",
  
            course_title:"Cursus zonnepanelen installeren voor Oekraïners",
            course_text:`Superfuid Energy organiseert samen met Solar Techniek Nederland een cursus Zonnepanelen installeren speciaal voor Oekraïners, met de garantie om binnen 6 weken een goede baan in Nederland te hebben.
            <br><br>De cursus bestaat uit 2 delen:
            <br>
1.	 theorie en praktijk van “Monteur op het dak” <br>
2.	 Theorie en praktijk “vanaf de omvormer tot in de meterkast”,<br><br>
De cursus wordt gegeven in het Oekraïens.<br>
Elke cursus wordt afgerond met een examen en een InstallQ certificaat.<br>
<p>
De cursus wordt gesubsidieerd door het UWV en de deelnemende bedrijven.
<p>
<p>
Gegarandeerd start salaris  minimaal 2100 euro netto.<p>

<p>De eerste cursus begint op 9 mei 2022</p>

Opgeven via : superfluid.energie@gmail.com

            
            `
        },

    };

    title.textContent = language[lang].title;
    subtitle.textContent = language[lang].subtitle;
 //   goal.textContent = language[lang].goal;
  //  subgoal.textContent = language[lang].subgoal;
 //   stepstotake.textContent = language[lang].stepstotake;
 course_title.textContent = language[lang].course_title;
 course_text.innerHTML = language[lang].course_text;

}

initButtons();

function initButtons() {
    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", () => nextStep())
        prevButtons[i].addEventListener("click", () => prevStep())
    }

    let currentStep = 0;

    displayStep(0);

    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            displayStep(currentStep);
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            displayStep(currentStep);
        }
    }

    function displayStep(step) {
        for (let i = 0; i < step; i++) {
            steps[i].style.display = "none";
            stepperItems[i].classList.remove("active")
            stepperItems[i].classList.add("completed")
        }
        steps[step].style.display = "block";
        stepperItems[step].classList.add("active")
        stepperItems[step].classList.remove("completed")

        if (step == steps.length - 1) {
            stepperItems[step].classList.remove("active")
            stepperItems[step].classList.add("completed")
        }

        for (let i = step + 1; i < steps.length; i++) {
            steps[i].style.display = "none";
            stepperItems[i].classList.remove("active")
            stepperItems[i].classList.remove("completed")

        }

    }
}
