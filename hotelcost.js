function hotelCost(cost) {
    let day =0;
    if (day<=10) {
        hotelCost =day = 100;

    }
    
    else if (cost) {
        let firsttendays = 10*20;
        let remainingdays = cost - 10;
        let secoundtendays = remainingdays*10;
        hotelCost = firsttendays + remainingdays;
        
    }
    else {
        let firsttendays =10*100;
        let secoundtendays = 10*80;
        let remainingdays = remainingdays-20;
        hotelCost = firsttendays + secoundtendays+thirdtendays;
    }
    return day;
}
let count = hotelCost (50);
console.log(count);