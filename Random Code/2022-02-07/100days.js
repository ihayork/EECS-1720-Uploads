function func1(){
    var points2 = document.getElementById("points2").value;
    var points3 = document.getElementById("points3").value;

    var totalPoints = (points2 * 2) + (points3 * 3);

    alert("The team scored " + totalPoints + " points.");
}