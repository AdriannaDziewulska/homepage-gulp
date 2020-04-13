"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Cześć! Jestem autorką tej strony, nazywam się Ada Dziewulska i mam 15 lat, miło, że tu zglądasz, a skoro to robisz to trochę się interesujesz JavaScript-em ;) Ja się już żegnam i życzę miłego dnia :D`); 

const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat.`)
};
welcome(`Ada`, 15);

const navigationSwitcher = document.querySelector (`.navigation__switcher--js`);

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector (`.navigation__list--js`);
    navigationList.classList.toggle(`navigation__list--visible`);
});



