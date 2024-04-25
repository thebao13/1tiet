function ketqua(){
    var KG = document.getElementById("kg").value;
    var CM = document.getElementById("cm").value; 
    var BMI = document.getElementById("bmi").value;
    if (KG === ""){
        alert("Vui lòng nhập cân nặng");
        return false;
    }
    if (CM === ""){
        alert("Vui lòng nhập chiều cao");
        return false;
    } 
    if (isNaN(KG) || isNaN(CM)) {
        if (isNaN(KG)) {
            alert("Vui lòng nhập cân nặng là số.");
        }
        if (isNaN(CM)) {
            alert("Vui lòng nhập chiều cao là số.");
        }
        return false;
    }
    // tính chỉ số BMI
    var bmi = KG / Math.pow(CM / 100, 2);
    BMI.value = bmi.toFixed(2);

    return true;
}