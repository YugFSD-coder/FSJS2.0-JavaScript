//What is Year today?
const now=new Date();
console.log(`Today Year is ${now.getFullYear()}`);

//What is the month today as a number
const month=now.getMonth();
console.log(`the month today as a number is ${month}`);

//what is date today
let date = now.getDate();
console.log(date);

//what is a day today as number
let day=now.getDay();
console.log(day)

//what is the hour now
let hour=now.getHours();
console.log(`the hours is ${hour}`);

//what is minute now
let minutes=now.getMinutes();
console.log(`the minutes now is ${minutes}`);

//find out the numbers of seconds elapsed from january 1, 1970, to now

let mileSec=now.getTime();
console.log(`Number of Sec from elaoeds is ${mileSec}`);
