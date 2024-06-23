let lastScrollPosition = 0; // Переменная для хранения текущей позиции прокрутки

let headline = document.querySelector('.headline') // Находит элемент с классом .headline
let page = document.querySelector('.page')
let an = headline.cloneNode(true) // Создает копию элемента headline и сохраняет ее в переменной an

// Добавляет обработчик события прокрутки к документу
document.addEventListener('scroll', () => {
  lastScrollPosition = window.scrollY; // Обновляет позицию прокрутки

  if (lastScrollPosition >= 500) { // Если позиция прокрутки >= 500 пикселей

    page.insertBefore(an, page.firstChild) // Вставляет копию элемента headline перед первым дочерним элементом page
    an.classList.add('headline-scroll-active') // Добавляет класс headline-scroll-active к элементу an

  } else {

    an.remove(); // Удаляет элемент an
    an.classList.remove('headline-scroll-active') // Удаляет класс headline-scroll-active из элемента an
  }
});



