let factorial =1;
function factRoil(num){
    if (num==0){
        factorial=0;
        return factorial
    }
    else if(num==1){
        return factorial;
    }
    else{
        for (var i=1; i<=num; i++){
            factorial=factorial*i;
        }
        return factorial;
    }
}
console.log(factRoil(10));