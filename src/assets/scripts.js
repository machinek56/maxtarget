import $ from 'jquery'

// Плавный скролл
function ancorScroll () {
  $('.ancors').click(function () {
    var elementClick = $(this).attr('href')
    var destination = $(elementClick).offset().top
    $('html,body').animate({scrollTop: destination - 20}, 1000)
    return false
  })
}

export { ancorScroll }
