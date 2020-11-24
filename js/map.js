ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
      center: [7.890703, 98.294772],
      zoom: 15,
      controls: ["zoomControl", "fullscreenControl"],
    }),
    myPlacemark = new ymaps.Placemark([7.890703, 98.294772], {
      // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
      balloonContentHeader: "DoubleTree by Hilton Phuket Banthai Resort",
      balloonContentBody: "Гостиница",
      // balloonContentFooter: " ",
      hintContent: "Гостиница",
    });
  myMap.geoObjects.add(myPlacemark);
  // Показываем хинт на карте (без привязки к геообъекту).
  // myMap.hint.open(myMap.getCenter(), "Одинокий хинт без метки", {
  //   // Опция: задержка перед открытием.
  //   openTimeout: 1500,
  // });
}
