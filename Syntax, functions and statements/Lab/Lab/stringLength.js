function solve(firstString, secondString, thirdString){
    let totalLength = firstString.length + secondString.length + thirdString.length;
    let avgLength = Math.round(totalLength / 3);
    console.log(totalLength);
    console.log(avgLength);
}



solve('pasta', '5', '22.3');