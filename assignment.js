// github link: https://github.com/Ashaduzzman/assignment.js 
// kilometerToMeter function  start here 
function kilometerToMeter(kilometer) {
    var meter = kilometer/1000;
    return meter;
    
}
var rangpure = kilometerToMeter(100);
console.log(rangpure);
// kilometerToMeter function end here



// bugetCalculator start here 
//  eita if else if diye korte caicilam pore amne korchi  thik ase to ?
function bugetCalculator(watch){
    var watch = watch*3;
    return watch;
}
var watch = bugetCalculator (50);
console.log(watch);

function bugetCalculator(phone){
    var phone = phone*2;
    return phone;
}
var phone = bugetCalculator (100);
console.log(phone);
function bugetCalculator(laptop) {
    var laptop =laptop*3;
    return laptop;
}
var laptop =bugetCalculator(500);
console.log(laptop);
// bugetCalculator end here

// megaFriend start here 
let megaFriend = new Array();

megaFriend[0] = "akash";

megaFriend[1] = "abbiplpb";

megaFriend[2] = "shakil";

megaFriend[3] = "ashaduzzman";
megaFriend.length;

console.log(megaFriend.length);
// megaFriend end here

// hotelCost start here 
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
// hotelCost end here 