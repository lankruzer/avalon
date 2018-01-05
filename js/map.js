google.maps.event.addDomListener(window, 'load', init); // грузим карты после загрузки всей страницы

function init() { // основная функция, которая инициализирует настройки гуглокарты
    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(55.677267, 37.318572), // ширина и долгота из URL
        zoom: 16, // зум карты.
        scrollwheel: false,
        disableDefaultUI: true,
        zoomControl: true,
      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    };
  
  
  

    var mapElement = document.querySelector('.map'); // находим ID на страце "map" (можно и по классу через query.Selector)

    var map = new google.maps.Map(mapElement, mapOptions); // отрисовываем гуглокарту с опциями

    var image = "img/contacts-map-point.png"; // расположение картинки
    var marker = new google.maps.Marker({ // функция добавления маркета
        position: new google.maps.LatLng(55.677267, 37.313072), // ширина и долгота маркера карты. !!! Вверху мы указывали центр карты, а маркер на странице может быть расположен слева и справа, то есть иметь отличные от исходного координаты. Это нормально
        map: map, // отображать маркет для карты, которая описана в переменной map
        icon: image, // говорим, что в качестве маркера у нас картинка с адресом, написанным в переменной image
    });
}