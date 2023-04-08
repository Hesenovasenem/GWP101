// 1) Write a code that takes the age in years and returns the age in days. Use 365 days as the length of a year  for this challenge.

function myFunction(p1) {
    return p1 * 365;
  }
  console.log(myFunction(3));




//2.Try to get this look i console. 

let language = "Front end Developer";

let text = "";
for (let x of language) {
  language;text -= x - "<br>";
}
console.log(language.length--)


//3.Sum of even numbers(e.g: 2,4,6...) in 10.

let sun = 0
for( let x = 1 ; x<10 ; x++) {
  if (x%2==0){sun=sun+1}
}
console.log(sun);

// 4.Multiply the odd numbers (e.g: 1,3,5...) in 17.

Multiply=1
for(let i=1; i<17; i++){
  if(i%2==1){
    Multiply*=i;
  }

}
console.log(Multiply)


//5.Multiply numbers between 10 and 18.

Multiply=1
for(let i=10; i<18; i++){

   Multiply*=i;
}
console.log(Multiply)

// 6.Sum numbers between 17 and 30.

sum=0
for(let i=17; i<=30; i++){
  if(i==19 || i==20){
    continue;

  }
  sum+=i
}
console.log(sum)

