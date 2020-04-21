document.addEventListener('DOMContentLoaded', function (event) {


    new Glide('.glide').mount();

    var rellax = new Rellax('.rellax');

    const el = document.querySelector('img');
const observer = lozad(); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();
console.log("lazy loaded~");
});