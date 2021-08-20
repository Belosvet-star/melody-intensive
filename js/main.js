$(document).ready(function () {
  var currentFloor = 2; //переменная
  var floorPath = $(".home-image path");  //каждый отдельный этаж в svg
  var counterUp = $(".counter-up"); //кнопка увеличения этажа
  var counterDown = $(".counter-down"); //кнопка уменьшения этажа
  
  //функция при наведении ышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor");  //получаем значение текущего этажа
    $(".counter").text(currentFloor); //записываем значение этажа в счетчик справа
  });
  
  counterUp.on("click", function () {
    //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) {
      //проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; //прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });   //форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
      /* $('[data-floor=04]').toggleClass("current-floor");  */ //подсвечиваем текущий этаж
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  //подсвечиваем текущий этаж
    //!!!!!!!!!!!!!!data-floor обернут в обратные одинарные кавычки (букваЁ)!!!!!!!!!!!!!!!!!! Это важно, чтоб автоматом встявлялся usCurrentFloor
    }
    
  });

  counterDown.on("click", function () {
    //отслеживаем клик по кнопке вниз
    if (currentFloor > 2) {
      //проверяем значение этажа, оно не должно быть больше 18
      currentFloor--; //прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits:2, useGrouping:false });  //форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  //подсвечиваем текущий этаж
      //!!!!!!!!!!!!!!data-floor обернут в обратные одинарные кавычки (букваЁ)!!!!!!!!!!!!!!!!!! Это важно, чтоб автоматом встявлялся usCurrentFloor
    }
  });



  //модальные окна
  var modal = $(".modal");
  var viewFlatsButton = $(".view-flats");
  var modalCloseButton = $(".modal-close-button");
  floorPath.on('click', toggleModal); //вызов функции при нажатии
  modalCloseButton.on('click', toggleModal);//вызов функции при нажатии
  viewFlatsButton.on('click', toggleModal);
  function toggleModal() {  //функция открыт-закрыть окно
    modal.toggleClass("is-open");
  }
});