// проверяет готова ли страница(загрузилась ли все DOM дерево)
$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    // при клике будит выполняться функция
    tabsItem.on('click', function (event) {
        // отменяет все стадартные действия
        event.preventDefault();
        // при помощи $(this).attr('href') находится элемент по которому кликнули
        // в activContent будит хранится id нужного элемента
        let activeContent = $(this).attr('href');
        // находим класс и отключаем
        $('.visible').toggleClass('visible');
        // находим элемент который соответствует id  и присваеваем класс видимости
        $(activeContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        // делаем чтобы цвет менялся только у нажатого раздела
        $(this).toggleClass('tabs-item-active');

    });
});