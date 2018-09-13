var curCalc = [''];
const dispScreen = document.getElementById("Disp")

function updateScreen() {
    dispScreen.innerText = curCalc.join('');
}

function addSymbol(x) {
    if((x === '.') && (!(curCalc[curCalc.length-1].includes('.')))) {
        curCalc[curCalc.length-1] = curCalc[curCalc.length-1].concat(x);
    } else if(!(isNaN(Number(x)))) {
        curCalc[curCalc.length-1] = curCalc[curCalc.length-1].concat(x);
    } else if ((x !== '.') && (Number(curCalc[curCalc.length-1])) != 0) {
        curCalc.push(x);
        curCalc.push('');
    }
    updateScreen();
}

function equals()
{
    if(curCalc.join('').includes('/0')){
        curCalc = [''];
        dispScreen.innerText = "don't do that";
    } else {
    dispScreen.innerText = eval(curCalc.join(''));
    dispScreen.innerText = dispScreen.innerText.substring(0, 17);
    curCalc = [dispScreen.innerText]
    }
}

function clearDisplay()
{
    curCalc = [''];
    updateScreen();
}

function backDisplay() {
    if(curCalc[curCalc.length-1] === '') {
        curCalc.pop();
        curCalc.pop();
    } else {
        let out = curCalc.pop();
        curCalc.push(out.substring(0, out.length - 1));
    }
    if (curCalc === []){
        curCalc = [''];
    }
    updateScreen();
}