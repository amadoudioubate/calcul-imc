const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
];

/*** IMC ***/

const form = document.querySelector('.imc-form');

form.addEventListener('submit', handleForm);

const inputs = document.querySelectorAll('input');

/**
 * Function pour envoyer le formulaire, prend en paramètre évènement
 */
function handleForm(e) {
    e.preventDefault();
    
    
    calculBIM();
}


function calculBIM() {
    const height = inputs[0].value;
    const weight = inputs[1].value;
    
    if(!height || !weight || height <= 0 || weight <= 0){
        handleError();
        return;
    }

    const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
    showResult(BMI)
}

const displayInfoBMI = document.querySelector('.info-imc');
const infoResult = document.querySelector('.info-result');

function handleError() {
    displayInfoBMI.textContext = 'Wops !';
    displayInfoBMI.style.color = 'inherit';
    infoResult.textContext = 'Remplissez correctement les inputs.';
}

