getIt = () => {
  $('p').on('click', (event) => {
    alert("Hey!")
  })
}

frameIt = () => {
  
}

pressIt = () => {
  $('input').on('keydown', (event) => {
    if (event.key === 'G') {alert("spy")}
  })
}

submitIt = () => {
  $('form').on('submit', (event) => {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

getIt()
pressIt()
submitIt()
frameIt()

});
