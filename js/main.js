!function(n){var e={};function r(c){if(e[c])return e[c].exports;var t=e[c]={i:c,l:!1,exports:{}};return n[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=e,r.d=function(n,e,c){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)r.d(c,t,function(e){return n[e]}.bind(null,t));return c},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\n\r\nconsole.log(`Cześć! Jestem autorką tej strony, nazywam się Ada Dziewulska i mam 15 lat, miło, że tu zglądasz, a skoro to robisz to trochę się interesujesz JavaScript-em ;) Ja się już żegnam i życzę miłego dnia :D`); \r\n\r\nconst welcome = (name, age) => {\r\n    console.log(`Witaj ${name}, masz ${age} lat.`)\r\n};\r\nwelcome(`Ada`, 15);\r\n\r\nconst navigationSwitcher = document.querySelector (`.navigation__switcher--js`);\r\n\r\nnavigationSwitcher.addEventListener('click', (e) => {\r\n    const navigationList = document.querySelector (`.navigation__list--js`);\r\n    navigationList.classList.toggle(`navigation__list--visible`);\r\n});\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBLDBLQUEwSyw2Qzs7QUFFMUs7QUFDQSx5QkFBeUIsS0FBSyxTQUFTLElBQUk7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5cclxuY29uc29sZS5sb2coYEN6ZcWbxIchIEplc3RlbSBhdXRvcmvEhSB0ZWogc3Ryb255LCBuYXp5d2FtIHNpxJkgQWRhIER6aWV3dWxza2EgaSBtYW0gMTUgbGF0LCBtacWCbywgxbxlIHR1IHpnbMSFZGFzeiwgYSBza29ybyB0byByb2Jpc3ogdG8gdHJvY2jEmSBzacSZIGludGVyZXN1amVzeiBKYXZhU2NyaXB0LWVtIDspIEphIHNpxJkganXFvCDFvGVnbmFtIGkgxbx5Y3rEmSBtacWCZWdvIGRuaWEgOkRgKTsgXHJcblxyXG5jb25zdCB3ZWxjb21lID0gKG5hbWUsIGFnZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFdpdGFqICR7bmFtZX0sIG1hc3ogJHthZ2V9IGxhdC5gKVxyXG59O1xyXG53ZWxjb21lKGBBZGFgLCAxNSk7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uU3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIChgLm5hdmlnYXRpb25fX3N3aXRjaGVyLS1qc2ApO1xyXG5cclxubmF2aWdhdGlvblN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoYC5uYXZpZ2F0aW9uX19saXN0LS1qc2ApO1xyXG4gICAgbmF2aWdhdGlvbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShgbmF2aWdhdGlvbl9fbGlzdC0tdmlzaWJsZWApO1xyXG59KTtcclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);