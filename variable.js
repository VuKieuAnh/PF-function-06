// biến toàn cục
let arr= [2, 3, 4, 5, 6,9, 11]
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
// ten hàm: countPrime
// tham so truyen vao: 1 mang
// du lieu tra ve: so nguyen
// cach trien khai ham: su dung lap va su dung ham isPrime 
function countPrime(arr){
    let count = 0;
    for(let i = 0; i <arr.length; i++){
        if(isPrime(arr[i])){
            count++;
        }
    }
    return count;
}
