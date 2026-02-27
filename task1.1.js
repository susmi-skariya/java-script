let amount=100;

if(amount>1000){
    console.log("10% discount");
    let disconut=amount*0.10;
    console.log("disconut =", disconut);
    let fprice=amount-disconut;
    console.log("final Price is =", amount-disconut);
}
else if (amount > 500 && amount<=1000) {
    console.log("5% discount");
    let disconut=amount*0.05;
    console.log("disconut =", disconut);
    let fprice=amount-disconut;
    console.log("final Price is =", amount-disconut);
}
else{
     console.log("No Discount");
     
}