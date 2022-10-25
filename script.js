function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}


function setColor() {
    let box = document.querySelector('.box');
    let buttons = document.querySelectorAll('.btn');

    function randomize() {
        buttons.forEach(function (button) {
            button.textContent = getRandomColor();
        })
        box.style.background = buttons[Math.floor(Math.random() * 3)].textContent
    }
    randomize()

    buttons.forEach(function (button) {
        button.addEventListener('click',function () {
            if (button.textContent.toLowerCase() === RGBToHex(box.style.background).toLowerCase()) {
                document.querySelector('.alert').textContent = 'Success!'
            } else {
                document.querySelector('.alert').textContent = 'Fail :('
            }
            randomize()
        })
    })
}
setColor()