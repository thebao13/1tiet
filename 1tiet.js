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
   
}