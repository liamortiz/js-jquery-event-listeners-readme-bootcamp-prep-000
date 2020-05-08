getIt = () => {
  $('p').on('click', () => {
    alert("Hey!")
  })
}

frameIt = () => {
  $(document).on('load', () => {
    $('img').addClass("tasty")
  })
}

pressIt = () => {
  $('input').on('keydown', (event) => {
    if (event.key === 'g') {alert("")}
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
