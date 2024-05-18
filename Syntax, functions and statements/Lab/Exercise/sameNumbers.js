function solve(intNum) {
    const strNum = intNum.toString();
    let isTheSame = true;
    let sum = 0;

    
    for (let i = 0; i < strNum.length - 1; i++){
        if(strNum[i] != strNum[i + 1]) {
            isTheSame = false;
        }
        sum += Number.parseInt(strNum[i]);
    }
    
    sum += Number.parseInt(strNum[strNum.length - 1]);

    console.log(isTheSame);
    console.log(sum);
}

solve(2222222);
solve(1234);