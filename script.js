// function solve(){
//     let arr=[1,2,3];
//     let arr1=[];
//     for (let i=0;i<arr.length;i++){
//         arr1.push(Math.pow(2 , arr[i]));
//     }
//     return arr1;
// }
// console.log(solve());


// function solve(){
//     let arr=[1,2,3];
//     let arr1=[];
//     arr.forEach(function(num){
//         arr1.push(Math.pow(2 , num));
//     });
//     return arr1;
    
// }
// console.log(solve());



// function solve(){
//     let arr=[1,2,3];
//     let arr1=arr.map(function(num){
//         return (Math.pow(2 , num));
//     });
//     return arr1;
// }
// console.log(solve());



// Example 2

// function solve(){
//         let arr=[1,2,3,'rawan'];
//         let arr1=arr.map(function(num){
//           if(typeof num=== 'number')  {
//             if(num%2===0){
//                 return "even";
//             }
//             else if(num%2!==0){
//                 return "odd";
//             }
//         }
//             else{
//                 return "N/A";
//             }
            
//         });
//         return arr1;
//     }
//     console.log(solve());


// Example 3

// function getAllNames() {
//     let names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
//     let result = [];

//     names.forEach(function(name) {
//         result.push(name);
//     });

//     return result;
// }

// console.log(getAllNames());


// Example 4

// function fizzbuzz() {
//     let names = [1, 2, 3, 4, 5, 6];
//     let output = [];

//     names.forEach(function(num) {
//         if(num%3===0){
//             output.push("Fizz")
//         }
//         else if(num%5===0){
//             output.push("Buzz")
//         }
//         else{
//             output.push(num)
//         }
        
//     });

//     return output;
// }

// console.log(fizzbuzz());