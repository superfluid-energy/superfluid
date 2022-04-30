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
changeLanguage("nl");
function changeLanguage(lang) {
    var language = {
        en: {
            title:
                "Superfluid Energy for energy independent houses",
            subtitle:
                "Quality installations on solar, heatpump and batteries",
            goal:
                "Get rid of russian gas",
            subgoal:
                "Prediction : within 10 years energy will cost nothing, see ",
            stepstotake: "Steps to take:"

        },
        ua: {
            title:
                "Superfluid Energy for energy independent houses",
            subtitle:
                "Quality installations on solar, heatpump and batteries",
            goal:
                "Get rid of russian gas",
            subgoal:
                "Prediction : within 10 years energy will cost nothing, see ",
            stepstotake: "Steps to take:"
        },
        nl: {
            title:
                "Superfluid Energy voor energie onafhankelijke woningen",
            subtitle:
                "Kwaliteits installaties met zonne energie, warmtepompen en batterijen",
            goal:
                "Van het (russisch) gas af.",
            subgoal:
                "Voorspelling: Binnen 10 jaar kost energie niets meer, zie  ",
            stepstotake: "Stappen die genomen moeten worden:"
        },

    };

    title.textContent = language[lang].title;
    subtitle.textContent = language[lang].subtitle;
    goal.textContent = language[lang].goal;
    subgoal.textContent = language[lang].subgoal;
    stepstotake.textContent = language[lang].stepstotake;

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
