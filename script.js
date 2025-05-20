// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}


// Функция для изменения файла стилей на странице
function switchStyle(sheet) {
  // Получаем элемент link, соответствующий файлу стилей
  var style = document.getElementById('theme-style');
  
  // Если элемент link существует, то меняем его атрибут href на значение нового файла стилей
  if (style) {
    style.href = sheet;
  }
  // Иначе создаем новый элемент link, задаем ему атрибуты и добавляем в HEAD
  else {
    var head = document.getElementsByTagName('head')[0],
        newStyle = document.createElement('link');
        
    newStyle.setAttribute('rel', 'stylesheet');
    newStyle.setAttribute('href', sheet);
    newStyle.setAttribute('id', 'theme-style');
    
    head.appendChild(newStyle);
  }
  // Сохраняем выбранную тему в localStorage
  localStorage.setItem('theme', sheet);   
}

// проверяем наличие сохраненной темы в localStorage
const savedTheme = localStorage.getItem('theme');

// если тема сохранена, применяем ее
if (savedTheme) {
  switchStyle(savedTheme);
}


document.querySelectorAll('[data-bs-toggle="modal"]').forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        var target = this.getAttribute('data-bs-target');
        document.querySelector(target).classList.add('show');
        var html = document.querySelector('html');
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        html.style.top = '-' + scrollTop + 'px';
        html.classList.add('modal-open');
      });
    });

document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.modal.show').classList.remove('show');
    var html = document.querySelector('html');
    var scrollTop = parseInt(html.style.top);
    html.style.top = '';
    html.classList.remove('modal-open');
    window.scrollTo(0, scrollTop || 0);
  });
});



