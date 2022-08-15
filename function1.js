// Thuy
function isPrime(num){
    let flag = true;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num == 2){
            return flag;
        }
        if(num % i == 0){
            flag = false;
        }
    }
    if(flag){
        //com...
    }
    else{
        //co
    }
}
// console.log(isPrime(15))


//Thanh
function isPrime(n){
    let flag = true;

    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }

    return flag;
}

//KA
function isPrime(num){
    // let flag=true;
    if(num<2){
        return false;
    }
    else{
        if(num>3){
            for(let i=2; i<=Math.sqrt(num); i++){
                if(num%i==0){
                    return false;
                    break;
                }
            }
        }
    }
    return true;
}


// let num;
// let flag=true;
// if(num<2){
//     flag = false;
// }
// else{
//     if(num>3){
//         for(let i=2; i<=Math.sqrt(num); i++){
//             if(num%i==0){
//                 flag = false;
//                 break;
//             }
//         }
//     }
// }
// if(flag){
//     // in ra la so nguyen to
// }
// else{
//     // in ra num khong phai so nguyen to
// }




// // khai bao ham
// // function <ten ham>(<danh sach tham so>){
//     //Cach trien khai cua ham
// // }

// //khai bao ham
// function isDivisibleBy3(number){
//     if(number%3==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function isDivisibleBy3v2(number){
//     if(number%3==0){
//         console.log("true");
//         // return true;
//     }
//     else{
//         console.log("false");
//         // return false;
//     }
// }
// // loi goi ham
// //goi ten ham, truyen tham so vao -> doi so
// // isDivisibleBy3(3)
// function demo1(number){
//     return number*number;
// }
// function demo3(number){
//     alert(number*number);
// }