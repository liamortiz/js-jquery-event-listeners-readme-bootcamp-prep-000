getIt = () => {
  $('p').on('click', () => {
    alert("Hey!")
  })
}

frameIt = () => {
  $('img').on('load', () => {
    $(this).addClass("tasty")
  })
}

pressIt = () => {
  $('input').on('keydown', (event) => {
    if (event.key === 'G') {alert("spy")}
  })
}

submitIt = () => {
  $('form').on('submit', () => {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

getIt()
pressIt()
submitIt()
frameIt()

});
