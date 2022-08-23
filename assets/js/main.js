let i = 0;
let varColor;

changeBackground = (cl) => {
    ++i;
    document.body.style.backgroundColor = cl;
    varColor = cl;
    document.getElementById('demo').innerHTML = 'Wir haben die Farbe ' + i + ' geändert!';


}

changeHandle = () => {
    console.log(document.getElementById('rot').value);
    varColor = cl;
}

// red = rgb(255,0,0);
// green = rgb(0,255,0);
// blue = 	rgb(0,0,255);

let r = 'rgb(255,0,0)';
let g = 'rgb(0,255,0)';
let b = 'rgb(0,0,255)';

let fnGenerateNr = () => {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 257) + 1;
    guessedNr = random;
    return guessedNr;

}


changeHandle = (varColor) => {

    if (varColor == 'rot') {
        // red = rgb(255,0,0);
        ++i;
        r = 'rgb(' + fnGenerateNr() + ',' + fnGenerateNr() + ',' + fnGenerateNr() + ')';
        RGBToHex(r);
        document.getElementById('demo').innerHTML = r + ' = ' + RGBToHex(r);
        document.body.style.backgroundColor = r;
        console.log(r);
        //rgb(198 44 44)

    } else if (varColor == 'grun') {
        ++i;
        // green = rgb(0,255,0);
        g = 'rgb(' + fnGenerateNr() + ',' + fnGenerateNr() + ',' + fnGenerateNr() + ')';
        RGBToHex(g);
        document.getElementById('demo').innerHTML = r + ' = ' + RGBToHex(g);
        document.body.style.backgroundColor = g;
        console.log(g);

    } else if (varColor == 'blau') {
        ++i;
        // blue = 	rgb(0,0,255);
        b = 'rgb(' + fnGenerateNr() + ',' + fnGenerateNr() + ',' + fnGenerateNr() + ')';
        RGBToHex(b);
        document.getElementById('demo').innerHTML = r + ' = ' + RGBToHex(b);
        document.body.style.backgroundColor = b;
        console.log(b);

    }

}

// https://css-tricks.com/converting-color-spaces-in-javascript/#:~:text=RGB%20to%20Hex,to%20a%20single%20return%20statement.
RGBToHex = (rgb) => {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
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