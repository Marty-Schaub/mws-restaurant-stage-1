self.addEventListener('install', function(event){


  event.waitUntil(
    caches.open('mws-v1').then(function(cache){
      return cache.addAll([
        '/',
        'js/main.js',
        'css/styles.css',
        'js/restaurant_info.js',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg'

      ]);
    })
  );
});
