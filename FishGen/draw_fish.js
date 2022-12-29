function remove(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

var btn_clicked = '';
var btns_shown = '';
function showBodyShapeOpts() {
  if (btns_shown != 'bodyShapes' && btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.color = "black";
  }
  btn_clicked = 'bs';
  let btn = document.getElementById('bs');
  btn.style.color = "green";
  let btns = document.getElementById('bodyShapes');
  btns.style.display = "block";
  btns_shown = 'bodyShapes';
}

function showBodyColorOpts() {
  if (btns_shown != 'bodyColors' && btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.color = "black";
  }
  btn_clicked = 'bc';
  let btn = document.getElementById('bc');
  btn.style.color = "green";
  let btns = document.getElementById('bodyColors');
  btns.style.display = "block";
  btns_shown = 'bodyColors';
}

function showTFColorOpts() {
  if (btns_shown != 'TFColors' && btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.color = "black";
  }
  btn_clicked = 'tc';
  let btn = document.getElementById('tc');
  btn.style.color = "green";
  let btns = document.getElementById('TFColors');
  btns.style.display = "block";
  btns_shown = 'TFColors';
}

function showTailShapeOpts() {
  if (btns_shown != 'tailShapes' && btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.color = "black";
  }
  btn_clicked = 'ts';
  let btn = document.getElementById('ts');
  btn.style.color = "green";
  let btns = document.getElementById('tailShapes');
  btns.style.display = "block";
  btns_shown = 'tailShapes';
}

function showDFinShapeOpts() {
  if (btns_shown != 'dfinShapes' && btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.color = "black";
  }
  btn_clicked = 'ds';
  let btn = document.getElementById('ds');
  btn.style.color = "green";
  let btns = document.getElementById('dfinShapes');
  btns.style.display = "block";
  btns_shown = 'dfinShapes';
}

function showPFinShapeOpts() {
  if (btns_shown != 'pfinShapes' && btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.color = "black";
  }
  btn_clicked = 'ps';
  let btn = document.getElementById('ps');
  btn.style.color = "green";
  let btns = document.getElementById('pfinShapes');
  btns.style.display = "block";
  btns_shown = 'pfinShapes';
}

var bodyShapes = [];
var bodyColors = [];
var tailShapes = [];
var dfinShapes = [];
var pfinShapes = [];
var tfColors = [];
var bodyCol = "Red";
var tfCol = "Red";
var preview = [
  { uri: 'img/dfin/dfin1', x: 170, y: 63, sw: 40, sh: 40 },
  { uri: 'img/tail/tail1', x: 228, y: 115, sw: 70, sh: 70 },
  { uri: 'img/body/body1', x: 100, y: 65, sw: 180, sh: 180 },
  { uri: 'img/pfin/pfin1', x: 170, y: 150, sw: 40, sh: 40 }
];

function updateColor(list) {
  var newlist = [
    { uri: list[0].uri + tfCol + '.png', x: list[0].x, y: list[0].y, sw: list[0].sw, sh: list[0].sh },
    { uri: list[1].uri + tfCol + '.png', x: list[1].x, y: list[1].y, sw: list[1].sw, sh: list[1].sh },
    { uri: list[2].uri + bodyCol + '.png', x: list[2].x, y: list[2].y, sw: list[2].sw, sh: list[2].sh },
    { uri: list[3].uri + tfCol + '.png', x: list[3].x, y: list[3].y, sw: list[3].sw, sh: list[3].sh }
  ]; 
  return newlist;
}
// body colors
function bcCount() {
  let c = bodyColors.length;
  document.getElementById('nbc').innerHTML = c.toString();
}

var bc1 = 0;
function chooseBRed() {
  let btn = document.getElementById('bodyCol1');
  if (bc1 == 0) {
    bc1 = 1;
    btn.style.borderColor = "greenyellow";
    bodyColors.push('Red');
    bodyCol = 'Red';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bc1 = 0;
    btn.style.borderColor = "black";
    bodyColors = remove(bodyColors, 'Red');
  }
  bcCount();
}

var bc2 = 0;
function chooseBBlue() {
  let btn = document.getElementById('bodyCol2');
  if (bc2 == 0) {
    bc2 = 1;
    btn.style.borderColor = "greenyellow";
    bodyColors.push('Blue');
    bodyCol = 'Blue';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bc2 = 0;
    btn.style.borderColor = "black";
    bodyColors = remove(bodyColors, 'Blue');
  }
  bcCount();
}

var bc3 = 0;
function chooseBGreen() {
  let btn = document.getElementById('bodyCol3');
  if (bc3 == 0) {
    bc3 = 1;
    btn.style.borderColor = "greenyellow";
    bodyColors.push('Green');
    bodyCol = 'Green';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bc3 = 0;
    btn.style.borderColor = "black";
    bodyColors = remove(bodyColors, 'Green');
  }
  bcCount();
}

var bc4 = 0;
function chooseBOrange() {
  let btn = document.getElementById('bodyCol4');
  if (bc4 == 0) {
    bc4 = 1;
    btn.style.borderColor = "greenyellow";
    bodyColors.push('Orange');
    bodyCol = 'Orange';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bc4 = 0;
    btn.style.borderColor = "black";
    bodyColors = remove(bodyColors, 'Orange');
  }
  bcCount();
}

var bc5 = 0;
function chooseBPink() {
  let btn = document.getElementById('bodyCol5');
  if (bc5 == 0) {
    bc5 = 1;
    btn.style.borderColor = "greenyellow";
    bodyColors.push('Pink');
    bodyCol = 'Pink';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bc5 = 0;
    btn.style.borderColor = "black";
    bodyColors = remove(bodyColors, 'Pink');
  }
  bcCount();
}

var bc6 = 0;
function chooseBPurple() {
  let btn = document.getElementById('bodyCol6');
  if (bc6 == 0) {
    bc6 = 1;
    btn.style.borderColor = "greenyellow";
    bodyColors.push('Purple');
    bodyCol = 'Purple';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bc6 = 0;
    btn.style.borderColor = "black";
    bodyColors = remove(bodyColors, 'Purple');
  }
  bcCount();
}

var bc7 = 0;
function chooseBYellow() {
  let btn = document.getElementById('bodyCol7');
  if (bc7 == 0) {
    bc7 = 1;
    btn.style.borderColor = "greenyellow";
    bodyColors.push('Yellow');
    bodyCol = 'Yellow';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bc7 = 0;
    btn.style.borderColor = "black";
    bodyColors = remove(bodyColors, 'Yellow');
  }
  bcCount();
}

// tail&fin colors
function tcCount() {
  let c = tfColors.length;
  document.getElementById('ntfcs').innerHTML = c.toString();
}

var tc1 = 0;
function chooseTRed() {
  let btn = document.getElementById('tfCol1');
  if (tc1 == 0) {
    tc1 = 1;
    btn.style.borderColor = "greenyellow";
    tfColors.push('Red');
    tfCol = 'Red';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    tc1 = 0;
    btn.style.borderColor = "black";
    tfColors = remove(tfColors, 'Red');
  }
  tcCount();
}

var tc2 = 0;
function chooseTBlue() {
  let btn = document.getElementById('tfCol2');
  if (tc2 == 0) {
    tc2 = 1;
    btn.style.borderColor = "greenyellow";
    tfColors.push('Blue');
    tfCol = 'Blue';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    tc2 = 0;
    btn.style.borderColor = "black";
    tfColors = remove(tfColors, 'Blue');
  }
  tcCount();
}

var tc3 = 0;
function chooseTGreen() {
  let btn = document.getElementById('tfCol3');
  if (tc3 == 0) {
    tc3 = 1;
    btn.style.borderColor = "greenyellow";
    tfColors.push('Green');
    tfCol = 'Green';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    tc3 = 0;
    btn.style.borderColor = "black";
    tfColors = remove(tfColors, 'Green');
  }
  tcCount();
}

var tc4 = 0;
function chooseTOrange() {
  let btn = document.getElementById('tfCol4');
  if (tc4 == 0) {
    tc4 = 1;
    btn.style.borderColor = "greenyellow";
    tfColors.push('Orange');
    tfCol = 'Orange';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    tc4 = 0;
    btn.style.borderColor = "black";
    tfColors = remove(tfColors, 'Orange');
  }
  tcCount();
}

var tc5 = 0;
function chooseTPink() {
  let btn = document.getElementById('tfCol5');
  if (tc5 == 0) {
    tc5 = 1;
    btn.style.borderColor = "greenyellow";
    tfColors.push('Pink');
    tfCol = 'Pink';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    tc5 = 0;
    btn.style.borderColor = "black";
    tfColors = remove(tfColors, 'Pink');
  }
  tcCount();
}

var tc6 = 0;
function chooseTPurple() {
  let btn = document.getElementById('tfCol6');
  if (tc6 == 0) {
    tc6 = 1;
    btn.style.borderColor = "greenyellow";
    tfColors.push('Purple');
    tfCol = 'Purple';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    tc6 = 0;
    btn.style.borderColor = "black";
    tfColors = remove(tfColors, 'Purple');
  }
  tcCount();
}

var tc7 = 0;
function chooseTYellow() {
  let btn = document.getElementById('tfCol7');
  if (tc7 == 0) {
    tc7 = 1;
    btn.style.borderColor = "greenyellow";
    tfColors.push('Yellow');
    tfCol = 'Yellow';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    tc7 = 0;
    btn.style.borderColor = "black";
    tfColors = remove(tfColors, 'Yellow');
  }
  tcCount();
}

// body shapes
function bsCount() {
  let c = bodyShapes.length;
  document.getElementById('nbs').innerHTML = c.toString();
}

var bs1 = 0;
function addBody1() {
  let btn = document.getElementById('body1');
  if (bs1 == 0) {
    bs1 = 1;
    btn.style.borderColor = "greenyellow";
    bodyShapes.push('img/body/body1');
    preview[2] = { uri: 'img/body/body1', x: 100, y: 65, sw: 180, sh: 180 };
    preview[1] = { uri: preview[1].uri, x: 228, y: 115, sw: 70, sh: 70 };
    preview[0] = { uri: preview[0].uri, x: 170, y: 63, sw: 40, sh: 40 };
    preview[3] = { uri: preview[3].uri, x: 170, y: 150, sw: 40, sh: 40 };
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bs1 = 0;
    btn.style.borderColor = "black";
    bodyShapes = remove(bodyShapes, 'img/body/body1');
  }
  bsCount();
}

var bs2 = 0;
function addBody2() {
  let btn = document.getElementById('body2');
  if (bs2 == 0) {
    bs2 = 1;
    btn.style.borderColor = "greenyellow";
    bodyShapes.push('img/body/body2');
    preview[2] = { uri: 'img/body/body2', x: 100, y: 100, sw: 250, sh: 75 };
    preview[1] = { uri: preview[1].uri, x: 340, y: 105, sw: 70, sh: 70 };
    preview[0] = { uri: preview[0].uri, x: 200, y: 70, sw: 40, sh: 40 };
    preview[3] = { uri: preview[3].uri, x: 200, y: 140, sw: 40, sh: 40 };
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bs2 = 0;
    btn.style.borderColor = "black";
    bodyShapes = remove(bodyShapes, 'img/body/body2');
  }
  bsCount();
}

var bs3 = 0;
function addBody3() {
  let btn = document.getElementById('body3');
  if (bs3 == 0) {
    bs3 = 1;
    btn.style.borderColor = "greenyellow";
    bodyShapes.push('img/body/body3');
    preview[2] = { uri: 'img/body/body3', x: 100, y: 90, sw: 220, sh: 110 };
    preview[1] = { uri: preview[1].uri, x: 310, y: 100, sw: 70, sh: 70 };
    preview[0] = { uri: preview[0].uri, x: 190, y: 60, sw: 40, sh: 40 };
    preview[3] = { uri: preview[3].uri, x: 190, y: 145, sw: 40, sh: 40 };
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bs3 = 0;
    btn.style.borderColor = "black";
    bodyShapes = remove(bodyShapes, 'img/body/body3');
  } 
  bsCount();
}

var bs4 = 0;
function addBody4() {
  let btn = document.getElementById('body4');
  if (bs4 == 0) {
    bs4 = 1;
    btn.style.borderColor = "greenyellow";
    bodyShapes.push('img/body/body4');
    preview[2] = { uri: 'img/body/body4', x: 100, y: 90, sw: 240, sh: 110 };
    preview[1] = { uri: preview[1].uri, x: 325, y: 100, sw: 70, sh: 70 };
    preview[0] = { uri: preview[0].uri, x: 190, y: 60, sw: 40, sh: 40 };
    preview[3] = { uri: preview[3].uri, x: 195, y: 145, sw: 40, sh: 40 };
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    bs4 = 0;
    btn.style.borderColor = "black";
    bodyShapes = remove(bodyShapes, 'img/body/body4');
  } 
  bsCount();
}

function tsCount() {
  let c = tailShapes.length;
  document.getElementById("nts").innerHTML = c.toString();
}

var ts1 = 0;
function addTail1() {
  let btn = document.getElementById('tail1');
  if (ts1 == 0) {
    ts1 = 1;
    btn.style.borderColor = "greenyellow";
    tailShapes.push('img/tail/tail1');
    preview[1].uri = 'img/tail/tail1';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    ts1 = 0;
    btn.style.borderColor = "black";
    tailShapes = remove(tailShapes, 'img/tail/tail1');
  }
  tsCount();
}

var ts2 = 0;
function addTail2() {
  let btn = document.getElementById('tail2');
  if (ts2 == 0) {
    ts2 = 1;
    btn.style.borderColor = "greenyellow";
    tailShapes.push('img/tail/tail2');
    preview[1].uri = 'img/tail/tail2';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    ts2 = 0;
    btn.style.borderColor = "black";
    tailShapes = remove(tailShapes, 'img/tail/tail2');
  }
  tsCount();
}

var ts3 = 0;
function addTail3() {
  let btn = document.getElementById('tail3');
  if (ts3 == 0) {
    ts3 = 1;
    btn.style.borderColor = "greenyellow";
    tailShapes.push('img/tail/tail3');
    preview[1].uri = 'img/tail/tail3';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    ts3 = 0;
    btn.style.borderColor = "black";
    tailShapes = remove(tailShapes, 'img/tail/tail3');
  }
  tsCount();
}

var ts4 = 0;
function addTail4() {
  let btn = document.getElementById('tail4');
  if (ts4 == 0) {
    ts4 = 1;
    btn.style.borderColor = "greenyellow";
    tailShapes.push('img/tail/tail4');
    preview[1].uri = 'img/tail/tail4';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    ts4 = 0;
    btn.style.borderColor = "black";
    tailShapes = remove(tailShapes, 'img/tail/tail4');
  }
  tsCount();
}

function dfCount() {
  let c = dfinShapes.length;
  document.getElementById("ndfs").innerHTML = c.toString();
}

var df1 = 0;
function addDfin1() {
  let btn = document.getElementById('dfin1');
  if (df1 == 0) {
    df1 = 1;
    btn.style.borderColor = "greenyellow";
    dfinShapes.push('img/dfin/dfin1');
    preview[0].uri = 'img/dfin/dfin1';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    df1 = 0;
    btn.style.borderColor = "black";
    dfinShapes = remove(dfinShapes, 'img/dfin/dfin1');
  }
  dfCount();
}

var df2 = 0;
function addDfin2() {
  let btn = document.getElementById('dfin2');
  if (df2 == 0) {
    df2 = 1;
    btn.style.borderColor = "greenyellow";
    dfinShapes.push('img/dfin/dfin2');
    preview[0].uri = 'img/dfin/dfin2';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    df2 = 0;
    btn.style.borderColor = "black";
    dfinShapes = remove(dfinShapes, 'img/dfin/dfin2');
  }
  dfCount();
}

var df3 = 0;
function addDfin3() {
  let btn = document.getElementById('dfin3');
  if (df3 == 0) {
    df3 = 1;
    btn.style.borderColor = "greenyellow";
    dfinShapes.push('img/dfin/dfin3');
    preview[0].uri = 'img/dfin/dfin3';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    df3 = 0;
    btn.style.borderColor = "black";
    dfinShapes = remove(dfinShapes, 'img/dfin/dfin3');
  }
  dfCount();
}

var df4 = 0;
function addDfin4() {
  let btn = document.getElementById('dfin4');
  if (df4 == 0) {
    df4 = 1;
    btn.style.borderColor = "greenyellow";
    dfinShapes.push('img/dfin/dfin4');
    preview[0].uri = 'img/dfin/dfin4';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    df4 = 0;
    btn.style.borderColor = "black";
    dfinShapes = remove(dfinShapes, 'img/dfin/dfin4');
  }
  dfCount();
}

var df5 = 0;
function addDfin5() {
  let btn = document.getElementById('dfin5');
  if (df5 == 0) {
    df5 = 1;
    btn.style.borderColor = "greenyellow";
    dfinShapes.push('img/dfin/dfin5');
    preview[0].uri = 'img/dfin/dfin5';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    df5 = 0;
    btn.style.borderColor = "black";
    dfinShapes = remove(dfinShapes, 'img/dfin/dfin5');
  }
  dfCount();
}


function pfCount() {
  let c = pfinShapes.length;
  document.getElementById("npfs").innerHTML = c.toString();
}

var pf1 = 0;
function addPfin1() {
  let btn = document.getElementById('pfin1');
  if (pf1 == 0) {
    pf1 = 1;
    btn.style.borderColor = "greenyellow";
    pfinShapes.push('img/pfin/pfin1');
    preview[3].uri = 'img/pfin/pfin1';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    pf1 = 0;
    btn.style.borderColor = "black";
    pfinShapes = remove(pfinShapes, 'img/pfin/pfin1');
  }
  pfCount();
}

var pf2 = 0;
function addPfin2() {
  let btn = document.getElementById('pfin2');
  if (pf2 == 0) {
    pf2 = 1;
    btn.style.borderColor = "greenyellow";
    pfinShapes.push('img/pfin/pfin2');
    preview[3].uri = 'img/pfin/pfin2';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    pf2 = 0;
    btn.style.borderColor = "black";
    pfinShapes = remove(pfinShapes, 'img/pfin/pfin2');
  }
  pfCount();
}

var pf3 = 0;
function addPfin3() {
  let btn = document.getElementById('pfin3');
  if (pf3 == 0) {
    pf3 = 1;
    btn.style.borderColor = "greenyellow";
    pfinShapes.push('img/pfin/pfin3');
    preview[3].uri = 'img/pfin/pfin3';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    pf3 = 0;
    btn.style.borderColor = "black";
    pfinShapes = remove(pfinShapes, 'img/pfin/pfin3');
  }
  pfCount();
}

var pf4 = 0;
function addPfin4() {
  let btn = document.getElementById('pfin4');
  if (pf4 == 0) {
    pf4 = 1;
    btn.style.borderColor = "greenyellow";
    pfinShapes.push('img/pfin/pfin4');
    preview[3].uri = 'img/pfin/pfin4';
    var newView = updateColor(preview);
    drawFish(newView);
  } else {
    pf4 = 0;
    btn.style.borderColor = "black";
    pfinShapes = remove(pfinShapes, 'img/pfin/pfin4');
  }
  pfCount();
}


var canvas = document.getElementById('canv');
var context = canvas.getContext('2d');
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

const loadImage = url => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`load ${url} fail`));
    img.src = url;
  });
};

const drawOne = async options => {
  const myOptions = Object.assign({}, options);  
  const img = await loadImage(myOptions.uri);
  context.drawImage(img, myOptions.x, myOptions.y, myOptions.sw, myOptions.sh);
};


async function drawFish(list) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < list.length; i ++) {
    await drawOne(list[i]);
  }
}

var fishes = [];
function generateImageSpecs() {
  for (let i = 0; i < bodyColors.length; i ++) {
    bodyCol = bodyColors[i];
    for (let j = 0; j < tfColors.length; j ++) {
      tfCol = tfColors[j];
      for (let i = 0; i < bodyShapes.length; i ++) {
        if (bodyShapes[i] == 'img/body/body1') {
          for (let j = 0; j < tailShapes.length; j ++) {
            for (let k = 0; k < dfinShapes.length; k ++) {
              for (let l = 0; l < pfinShapes.length; l ++) {
                let current = [
                  { uri: dfinShapes[k], x: 170, y: 63, sw: 40, sh: 40 },
                  { uri: tailShapes[j], x: 228, y: 115, sw: 70, sh: 70 },
                  { uri: bodyShapes[i], x: 100, y: 65, sw: 180, sh: 180 },
                  { uri: pfinShapes[l], x: 170, y: 150, sw: 40, sh: 40 }
                ];
                let newlist = updateColor(current);              
                fishes.push(newlist);
              }
            }
          }
        }
        if (bodyShapes[i] == 'img/body/body2') {
          for (let j = 0; j < tailShapes.length; j ++) {
            for (let k = 0; k < dfinShapes.length; k ++) {
              for (let l = 0; l < pfinShapes.length; l ++) {
                let current = [
                  { uri: dfinShapes[k], x: 200, y: 70, sw: 40, sh: 40 },
                  { uri: tailShapes[j], x: 340, y: 105, sw: 70, sh: 70 },
                  { uri: bodyShapes[i], x: 100, y: 100, sw: 250, sh: 75 },
                  { uri: pfinShapes[l], x: 200, y: 140, sw: 40, sh: 40 }
                ];
                let newlist = updateColor(current);              
                fishes.push(newlist);
              }
            }
          }
        }
        if (bodyShapes[i] == 'img/body/body3') {
          for (let j = 0; j < tailShapes.length; j ++) {
            for (let k = 0; k < dfinShapes.length; k ++) {
              for (let l = 0; l < pfinShapes.length; l ++) {
                let current = [
                  { uri: dfinShapes[k], x: 190, y: 60, sw: 40, sh: 40  },
                  { uri: tailShapes[j], x: 310, y: 100, sw: 70, sh: 70 },
                  { uri: bodyShapes[i], x: 100, y: 90, sw: 220, sh: 110 },
                  { uri: pfinShapes[l], x: 190, y: 145, sw: 40, sh: 40 }
                ];
                let newlist = updateColor(current);              
                fishes.push(newlist);
              }
            }
          }
        }
        if (bodyShapes[i] == 'img/body/body4') {
          for (let j = 0; j < tailShapes.length; j ++) {
            for (let k = 0; k < dfinShapes.length; k ++) {
              for (let l = 0; l < pfinShapes.length; l ++) {
                let current = [
                  { uri: dfinShapes[k], x: 190, y: 60, sw: 40, sh: 40 },
                  { uri: tailShapes[j], x: 325, y: 100, sw: 70, sh: 70 },
                  { uri: bodyShapes[i], x: 100, y: 90, sw: 240, sh: 110 },
                  { uri: pfinShapes[l], x: 195, y: 145, sw: 40, sh: 40 }
                ];
                let newlist = updateColor(current);              
                fishes.push(newlist);
              }
            }
          }
        }
      }
    }
  }
}

var urls = [];
var count = 0;
var zip = new JSZip();
var folder = zip.folder("fish");
var total = 0;
//function generateOneFish() {
  //drawFish(fishes[count]);
  //setTimeout(function() {
    //let url = canvas.toDataURL();
    //let base64String = url.replace("data:image/png;base64,", "");
    //console.log(url)
    //urls.push(base64String);
    //count ++; 
  //}, 1000);
//}

const generateOneFish = () => {
  return new Promise((resolve, reject) => {   
    drawFish(fishes[count]);
    setTimeout(function() {
      let url = canvas.toDataURL();
      let base64String = url.replace("data:image/png;base64,", "");
      urls.push(base64String);
      count ++; 
      document.getElementById("progress").value = count;
      resolve(urls);
    }, 250);   
  });
};

function generateImages() {
  generateImageSpecs();
  total = fishes.length;
  document.getElementById("progress").max = total;
  document.getElementById("progressBar").style.display = "block";
  let clear = 0;
  let id = setInterval(function() {
    generateOneFish().then(urls => {
      if (count == fishes.length) {
        for (let i = 0; i < urls.length; i ++) {
          let filenum = i.toString();
          let filename = "fish"+ filenum + ".png";
          folder.file(filename, urls[i], {base64: true}); 
          if (i == urls.length - 1) {
            console.log("zip")
            zip.generateAsync({ type: 'blob' }).then(function (content) {
              saveAs(content, "Fish.zip");           
            });        
            clear = 1;
          }
          if (clear == 1) {
            clearInterval(id);
          }
        }
      }
    });
  }, 500);
}

function downloadImg(name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = document.getElementById('canv').toDataURL()
  link.click();
}