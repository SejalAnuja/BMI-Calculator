let text = document.getElementById("text");
let number = document.getElementById("number")
function BMI(){
    let height = document.getElementById("height-input").value;
    let weight = document.getElementById("weight-input").value;

    let bmi = (weight/(height*height)) * 10000;
    number.innerHTML = parseFloat(bmi).toFixed(2);

    if(bmi<=18.4){
        text.innerHTML = "Underweight : "
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        text.innerHTML = "Normal : "
    }
    else if(bmi >= 25.0 && bmi <= 39.9){
        text.innerHTML = "Overweight : "
    }
    else{
        text.innerHTML = "Obese : "
    }

   
}


