
let num = 100;
let fName = prompt('Whats your name ?', 'your name');
let gender = prompt('Whats your gender ?', 'male/female');


let age = prompt('How old are you?');
if (age > 0) {

} else if (age !== typeof num) {
  alert('Not viable age')
} else {
  alert('not viable age')
}

let welcome = confirm('Would you like to skip the welcoming massage');

gender = gender.toLowerCase()



if (
  welcome == true
) {
  alert()

} else {
  if (gender == 'male') {
    alert('welcome to my site Mr.' + fName)

  } else {
    if (gender == 'female') {
      alert('welcome to my site Ms.' + fName)
    } else {
      alert('welcome to my site ' + fName)
    }
  }

}
