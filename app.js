let newTitle = {
  title: "NewJS111"
};



document.getElementById('js-1').innerText = newTitle.title

// !Loops 
// !For Loops
/*for (i = 0; i <= 10; i++) {
  console.log(i)




}

for (dec = 10; dec > 0; dec--) {
  console.log(dec)
}

const friends = ['jesus', 'madz', 'stefan', 'del'];
friends.push('yoshi');

for (i = 0; i < friends.length; i++) {
  console.log(friends)
}
*/
/*
let userInput = prompt('Enter number 10')
10 === 10
while (10 === 10) {
  if (userInput === 10) {
    console.log('Good job')
    break
  } else if (userInput != 10) {
    console.log('wrong!!')
    break
  }
}
*/
// !do while loop
//it always runs the loop at least once even if the whie conditon isnt true

/*counter = 0
do {
  console.log(counter);
  counter++
} while (couter <= 10) {

}
*/
// !itteration 

let peopleInfo = [{

    name: 'Darius',
    birthYear: '1999'
  },
  {
    name: 'John',
    birthYear: '1990'
  },
  {
    name: 'Sam',
    birthYear: '2003',
  }
]
/*
for (let i = 0; i < peopleInfo.length; i++) {
  let person = peopleInfo[i]
  debugger
  console.log('Name', person.name, 'Birthyear', person.birthYear)
}
*/
function greeting() {
  console.log('Hiii')
}


for (x = 0; x < 3; x++) {
  console.log(greeting())
}