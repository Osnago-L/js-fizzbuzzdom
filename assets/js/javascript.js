
for(i=1;i<=100;i++){
    console.log(i)
    let divn = document.createElement("div")
    divn.className = "square"
    document.querySelector(".flex").append(divn)

    if((i%3==0)&&(i%5==0)){
        divn.innerHTML = "FIZZBUZZ"
        divn.classList.add("fizzbuzz_bc")
    }else if(i%5==0){
        divn.innerHTML = "BUZZ"
        divn.classList.add("buzz_bc")
    }else if(i%3==0){
        divn.innerHTML = "FIZZ"
        divn.classList.add("fizz_bc")
    }else{
        divn.innerHTML = i
    }
}