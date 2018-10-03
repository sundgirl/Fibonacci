const number = parseInt(prompt('Enter a number'));

function solFibRec(n) {
    if (n==1 || n==2)
        return 1;
    else
        return solFibRec(n-1)+solFibRec(n-2);
}
alert("Рекурсією = " + solFibRec(number));

function solFibCycle(n) {
    let firstNumber = 1;
    let secondNumber = 1;
    let temp = 0;
    for (let i=2; i<n; i++) {
        temp = secondNumber;
        secondNumber += firstNumber;
        firstNumber = temp;
    }
    return secondNumber;
}
alert("Циклом зі змінними = " + solFibCycle(number));

function solFibArr(n) {
    let arr = [];
    arr[0] = 1; arr[1] = 1;
    for (let i=2; i<n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr.pop();
}
alert("Масивом = " + solFibArr(number));
