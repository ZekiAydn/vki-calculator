function CalculateBMI(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var result = weight/Math.pow(height,2);    

    document.getElementById('result').innerText=result.toFixed(2);

    if(result<18.5){
        document.getElementById('result-status').innerText="Zayıf";
        document.getElementById('result-status').style.color='#2196f3';
    }
    else if(result>=18.5 && result<25){
        document.getElementById('result-status').innerText="Normal";
        document.getElementById('result-status').style.color='#43a047';
    }
    else if(result>=25 && result<30){
        document.getElementById('result-status').innerText="Fazla Kilolu";
        document.getElementById('result-status').style.color='#fb8c00';
    }
    else if(result>=30){
        document.getElementById('result-status').innerText="Şişman";
        document.getElementById('result-status').style.color='#c62828'; 
    }
}

function Reset(){
    document.getElementById('weight').value=0;
    document.getElementById('height').value=0;
    document.getElementById('result').innerText=' ';
    document.getElementById('result-status').innerText=' ';
}