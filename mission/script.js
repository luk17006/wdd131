let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        logo.src = 'byui-logo-white.png';

    } else {
        // code for changes to colors and logo
        document.body.style = '';
        // I asked AI for suggestions on a single line of code that would revert all changes back to what the html and css have by default. Repeating the code for (current == 'dark') but changing the values felt redundant. Thankfully the code was as simple as I hoped and makes perfect sense to me. I was expecting something a little more advanced that I would have to study out. It didn't change to logo back though so I just added that below.
        logo.src = 'byui-logo-blue.webp';
    }
}           