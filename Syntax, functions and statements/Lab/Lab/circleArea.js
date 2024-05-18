function solve(arg) {
    let result = arg;

    if(typeof arg === 'number') {
        result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2));
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof result}.`)
    }
}

solve('name');