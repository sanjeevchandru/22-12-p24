document.write("24.Write a JavaScript function to remove. 'null', '0', '''', 'false', 'undefined' and 'NaN' values from an array."+"<br>");
document.write("Original array =[NaN, 0, 15, false, -22, '',undefined, 47, null]"+"<br>")
function test24(arr){
    var x=arr.filter(function(e){
        return e;
    });
    return x;
}
document.write(test24([NaN, 0, 15, false, -22, '',undefined, 47, null])+"<br><br>");