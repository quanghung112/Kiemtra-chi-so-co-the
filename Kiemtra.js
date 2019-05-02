function Kiemtra() {
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;
    let H=parseFloat(h);
    let W=parseFloat(w);
    bmi=W/(H*H);
    if (bmi < 18.5) {
        document.getElementById('ketqua').innerHTML = 'Underweight';
    } else if (bmi < 25) {
        document.getElementById('ketqua').innerHTML= 'Normal';
    } else  if (bmi < 30.0) {
        document.getElementById('ketqua').innerHTML = 'Overweight';
    } else{
        document.getElementById('ketqua').innerHTML = 'Obese';
    }
}