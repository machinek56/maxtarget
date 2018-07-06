// import 'normalize.css'
// // import style from  './css/style.css'

$(document).ready(function() {
  var contactFormPhone = document.querySelector('#phone');
  var modalFormPhone = document.querySelector('#phoneModal');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: true
  };
  var mask = new IMask(contactFormPhone, maskOptions);
  var maskModal = new IMask(modalFormPhone, maskOptions);
  console.log(mask, maskModal)

  $("#modal").iziModal({
    overlayColor: 'rgba(0, 0, 0, 0.7)',
  });

  $(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    console.log('open')
    $('#modal').iziModal('open');
  });

});