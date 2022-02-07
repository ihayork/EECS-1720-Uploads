function func1(){
    var num = prompt("Please enter your number.");
    var sum = 0;
    var output = "";
    for (i = 1; i <= num; i++) {
        sum += i;
        if(i < num){
            output += i + " + "
        } else{
            output += i;
        }
    }
    alert(output + " = " + sum);
}