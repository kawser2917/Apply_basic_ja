function isPrime(num){
    for (var i = 2; i<=num-1; i++){
        if ( num%2 == 0){
            return "Not a prime number"
        }
    }
    return "Prime number"
}

console.log(isPrime(20));