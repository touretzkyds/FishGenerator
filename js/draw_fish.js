var fishDict = {
  'body1' : {
      uri: 'img/body/body1',
      x: 100, y: 65, sw: 180, sh: 180,
      dfinx: 180, dfiny: 60, dfinsw: 40, dfinsh: 40,
      tailx: 255, taily: 120, tailsw: 70, tailsh: 70,
      pfinx: 190, pfiny: 170, pfinsw: 40, pfinsh: 40
  },
  'body2' : {
    uri: 'img/body/body2',
    x: 100, y: 100, sw: 250, sh: 65,
    dfinx: 200, dfiny: 70, dfinsw: 40, dfinsh: 40,
    tailx: 335, taily: 100, tailsw: 70, tailsh: 70,
    pfinx: 210, pfiny: 140, pfinsw: 40, pfinsh: 40
  },
  'body3' : {
    uri: 'img/body/body3',
    x: 110, y: 70, sw: 200, sh: 150,
    dfinx: 190, dfiny: 40, dfinsw: 40, dfinsh: 40,
    tailx: 300, taily: 110, tailsw: 70, tailsh: 70,
    pfinx: 210, pfiny: 160, pfinsw: 40, pfinsh: 40
  },
  'body4' : {
    uri: 'img/body/body4',
    x: 110, y: 90, sw: 220, sh: 110,
    dfinx: 200, dfiny: 55, dfinsw: 40, dfinsh: 40,
    tailx: 320, taily: 110, tailsw: 70, tailsh: 70,
    pfinx: 210, pfiny: 150, pfinsw: 40, pfinsh: 40
  },
  'body5' : {
    uri: 'img/body/body5',
    x: 120, y: 70, sw: 170, sh: 160,
    dfinx: 190, dfiny: 60, dfinsw: 40, dfinsh: 40,
    tailx: 280, taily: 115, tailsw: 70, tailsh: 70,
    pfinx: 200, pfiny: 165, pfinsw: 40, pfinsh: 40
  }
}


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
  if (btns_shown == 'bodyShapes') {
    let btn = document.getElementById('bs');
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let btns = document.getElementById('bodyShapes');
    btns.style.display = "none";
    btns_shown = '';
    return;
  }
  if (btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  btn_clicked = 'bs';
  let btn = document.getElementById('bs');
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let btns = document.getElementById('bodyShapes');
  btns.style.display = "block";
  btns_shown = 'bodyShapes';
}

function showBodyColorOpts() {
  if (btns_shown == 'bodyColors') {
    let btn = document.getElementById('bc');
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let btns = document.getElementById('bodyColors');
    btns.style.display = "none";
    btns_shown = '';
    return;
  }
  if (btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  btn_clicked = 'bc';
  let btn = document.getElementById('bc');
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let btns = document.getElementById('bodyColors');
  btns.style.display = "block";
  btns_shown = 'bodyColors';
}

function showTFColorOpts() {
  if (btns_shown == 'TFColors') {
    let btn = document.getElementById('tc');
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let btns = document.getElementById('TFColors');
    btns.style.display = "none";
    btns_shown = '';
    return;
  }
  if (btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  btn_clicked = 'tc';
  let btn = document.getElementById('tc');
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let btns = document.getElementById('TFColors');
  btns.style.display = "block";
  btns_shown = 'TFColors';
}

function showTailShapeOpts() {
  if (btns_shown == 'tailShapes') {
    let btn = document.getElementById('ts');
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let btns = document.getElementById('tailShapes');
    btns.style.display = "none";
    btns_shown = '';
    return;
  }
  if (btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  btn_clicked = 'ts';
  let btn = document.getElementById('ts');
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let btns = document.getElementById('tailShapes');
  btns.style.display = "block";
  btns_shown = 'tailShapes';
}

function showDFinShapeOpts() {
  if (btns_shown == 'dfinShapes') {
    let btn = document.getElementById('ds');
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let btns = document.getElementById('dfinShapes');
    btns.style.display = "none";
    btns_shown = '';
    return;
  }
  if (btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  btn_clicked = 'ds';
  let btn = document.getElementById('ds');
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let btns = document.getElementById('dfinShapes');
  btns.style.display = "block";
  btns_shown = 'dfinShapes';
}

function showPFinShapeOpts() {
  if (btns_shown == 'pfinShapes') {
    let btn = document.getElementById('ps');
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let btns = document.getElementById('pfinShapes');
    btns.style.display = "none";
    btns_shown = '';
    return;
  }
  if (btns_shown != '') {
    let prev = document.getElementById(btns_shown);
    prev.style.display = "none";
    let prev_att = document.getElementById(btn_clicked);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  btn_clicked = 'ps';
  let btn = document.getElementById('ps');
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
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
var totalC = 0;
var preview = [];

function totalCount() {
  totalC = bodyShapes.length * bodyColors.length 
          * tailShapes.length * dfinShapes.length
          * pfinShapes.length * tfColors.length;
  document.getElementById("num").innerHTML = "You are generating " + totalC.toString() + " images";
}

function updatePreview() {
  var newlist = [];
  if (bodyShapes.length == 0 || bodyColors.length == 0 || tfColors.length == 0) {
    return newlist;
  }
  var body = bodyShapes[bodyShapes.length - 1];
  var dfin_uri = '';
  var pfin_uri = '';
  var tail_uri = '';
  var bodyCol = bodyColors[bodyColors.length - 1];
  var tfCol = tfColors[tfColors.length - 1];
  if (dfinShapes.length != 0) {
    let dfin = dfinShapes[dfinShapes.length - 1];
    dfin_uri = 'img/dfin/' + dfin; 
  }
  if (tailShapes.length != 0) {
    let tail = tailShapes[tailShapes.length - 1];
    tail_uri = 'img/tail/' + tail; 
  }
  if (pfinShapes.length != 0) {
    let pfin = pfinShapes[pfinShapes.length - 1];
    pfin_uri = 'img/pfin/' + pfin; 
  }
  if (dfin_uri != '') {
    newlist.push({ uri: dfin_uri + tfCol + '.png', 
                    x: fishDict[body].dfinx, 
                    y: fishDict[body].dfiny, 
                    sw: fishDict[body].dfinsw, 
                    sh: fishDict[body].dfinsh });
  }
  if (tail_uri != '') {
    newlist.push({ uri: tail_uri + tfCol + '.png', 
                    x: fishDict[body].tailx, 
                    y: fishDict[body].taily, 
                    sw: fishDict[body].tailsw, 
                    sh: fishDict[body].tailsh });
  }
  newlist.push({ uri: fishDict[body].uri + bodyCol + '.png', 
                    x: fishDict[body].x, 
                    y: fishDict[body].y, 
                    sw: fishDict[body].sw, 
                    sh: fishDict[body].sh });
  if (pfin_uri != '') {
    newlist.push({ uri: pfin_uri + tfCol + '.png', 
                    x: fishDict[body].pfinx, 
                    y: fishDict[body].pfiny, 
                    sw: fishDict[body].pfinsw, 
                    sh: fishDict[body].pfinsh });
  }
  return newlist;
}

// body colors
function bcCount() {
  let c = bodyColors.length;
  if (c == 0) {
    document.getElementById('nbc').innerHTML = '<b>' + c.toString() + '</b>';
    document.getElementById('nbc').style.color = "red";
  } else {
    document.getElementById('nbc').innerHTML = c.toString();
    document.getElementById('nbc').style.color = "black";
  }
}

var bc1 = 0;
function chooseBRed() {
  let btn = document.getElementById('bodyCol1');
  if (bc1 == 0) {
    bc1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Red');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bc1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Red');
    preview = updatePreview();
    drawFish(preview);
  }
  bcCount();
  totalCount();
}

var bc2 = 0;
function chooseBBlue() {
  let btn = document.getElementById('bodyCol2');
  if (bc2 == 0) {
    bc2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Blue');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bc2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Blue');
    preview = updatePreview();
    drawFish(preview);
  }
  bcCount();
  totalCount();
}

var bc3 = 0;
function chooseBGreen() {
  let btn = document.getElementById('bodyCol3');
  if (bc3 == 0) {
    bc3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Green');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bc3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Green');
    preview = updatePreview();
    drawFish(preview);
  }
  bcCount();
  totalCount();
}

var bc4 = 0;
function chooseBOrange() {
  let btn = document.getElementById('bodyCol4');
  if (bc4 == 0) {
    bc4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Orange');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bc4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Orange');
    preview = updatePreview();
    drawFish(preview);
  }
  bcCount();
  totalCount();
}

var bc5 = 0;
function chooseBPink() {
  let btn = document.getElementById('bodyCol5');
  if (bc5 == 0) {
    bc5 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Pink');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bc5 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Pink');
    preview = updatePreview();
    drawFish(preview);
  }
  bcCount();
  totalCount();
}

var bc6 = 0;
function chooseBPurple() {
  let btn = document.getElementById('bodyCol6');
  if (bc6 == 0) {
    bc6 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Purple');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bc6 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Purple');
    preview = updatePreview();
    drawFish(preview);
  }
  bcCount();
  totalCount();
}

var bc7 = 0;
function chooseBYellow() {
  let btn = document.getElementById('bodyCol7');
  if (bc7 == 0) {
    bc7 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Yellow');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bc7 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Yellow');
    preview = updatePreview();
    drawFish(preview);
  }
  bcCount();
  totalCount();
}

// tail&fin colors
function tcCount() {
  let c = tfColors.length;
  if (c == 0) {
    document.getElementById('ntfc').innerHTML = '<b>' + c.toString() + '</b>';
    document.getElementById('ntfc').style.color = "red";
  } else {
    document.getElementById('ntfc').innerHTML = c.toString();
    document.getElementById('ntfc').style.color = "black";
  }
}

var tc1 = 0;
function chooseTRed() {
  let btn = document.getElementById('tfCol1');
  if (tc1 == 0) {
    tc1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tfColors.push('Red');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tc1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tfColors = remove(tfColors, 'Red');
    preview = updatePreview();
    drawFish(preview);
  }
  tcCount();
  totalCount();
}

var tc2 = 0;
function chooseTBlue() {
  let btn = document.getElementById('tfCol2');
  if (tc2 == 0) {
    tc2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tfColors.push('Blue');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tc2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tfColors = remove(tfColors, 'Blue');
    preview = updatePreview();
    drawFish(preview);
  }
  tcCount();
  totalCount();
}

var tc3 = 0;
function chooseTGreen() {
  let btn = document.getElementById('tfCol3');
  if (tc3 == 0) {
    tc3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tfColors.push('Green');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tc3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tfColors = remove(tfColors, 'Green');
    preview = updatePreview();
    drawFish(preview);
  }
  tcCount();
  totalCount();
}

var tc4 = 0;
function chooseTOrange() {
  let btn = document.getElementById('tfCol4');
  if (tc4 == 0) {
    tc4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tfColors.push('Orange');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tc4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tfColors = remove(tfColors, 'Orange');
    preview = updatePreview();
    drawFish(preview);
  }
  tcCount();
  totalCount();
}

var tc5 = 0;
function chooseTPink() {
  let btn = document.getElementById('tfCol5');
  if (tc5 == 0) {
    tc5 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tfColors.push('Pink');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tc5 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tfColors = remove(tfColors, 'Pink');
    preview = updatePreview();
    drawFish(preview);
  }
  tcCount();
  totalCount();
}

var tc6 = 0;
function chooseTPurple() {
  let btn = document.getElementById('tfCol6');
  if (tc6 == 0) {
    tc6 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tfColors.push('Purple');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tc6 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tfColors = remove(tfColors, 'Purple');
    preview = updatePreview();
    drawFish(preview);
  }
  tcCount();
  totalCount();
}

var tc7 = 0;
function chooseTYellow() {
  let btn = document.getElementById('tfCol7');
  if (tc7 == 0) {
    tc7 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tfColors.push('Yellow');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tc7 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tfColors = remove(tfColors, 'Yellow');
    preview = updatePreview();
    drawFish(preview);
  }
  tcCount();
  totalCount();
}

// body shapes
function bsCount() {
  let c = bodyShapes.length;
  if (c == 0) {
    document.getElementById('nbs').innerHTML = '<b>' + c.toString() + '</b>';
    document.getElementById('nbs').style.color = "red";
  } else {
    document.getElementById('nbs').innerHTML = c.toString();
    document.getElementById('nbs').style.color = "black";
  }
}

var bs1 = 0;
function addBody1() {
  let btn = document.getElementById('body1');
  if (bs1 == 0) {
    bs1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body1');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bs1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body1');
    preview = updatePreview();
    drawFish(preview);
  }
  bsCount();
  totalCount();
}

var bs2 = 0;
function addBody2() {
  let btn = document.getElementById('body2');
  if (bs2 == 0) {
    bs2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body2');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bs2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body2');
    preview = updatePreview();
    drawFish(preview);
  }
  bsCount();
  totalCount();
}

var bs3 = 0;
function addBody3() {
  let btn = document.getElementById('body3');
  if (bs3 == 0) {
    bs3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body3');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bs3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body3');
    preview = updatePreview();
    drawFish(preview);
  } 
  bsCount();
  totalCount();
}

var bs4 = 0;
function addBody4() {
  let btn = document.getElementById('body4');
  if (bs4 == 0) {
    bs4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body4');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bs4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body4');
    preview = updatePreview();
    drawFish(preview);
  } 
  bsCount();
  totalCount();
}

var bs5 = 0;
function addBody5() {
  let btn = document.getElementById('body5');
  if (bs5 == 0) {
    bs5 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body5');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bs5 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body5');
    preview = updatePreview();
    drawFish(preview);
  } 
  bsCount();
  totalCount();
}

function tsCount() {
  let c = tailShapes.length;
  if (c == 0) {
    document.getElementById('nts').innerHTML = '<b>' + c.toString() + '</b>';
    document.getElementById('nts').style.color = "red";
  } else {
    document.getElementById('nts').innerHTML = c.toString();
    document.getElementById('nts').style.color = "black";
  }
}

var ts1 = 0;
function addTail1() {
  let btn = document.getElementById('tail1');
  if (ts1 == 0) {
    ts1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tailShapes.push('tail1');
    preview = updatePreview();
    drawFish(preview);
  } else {
    ts1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tailShapes = remove(tailShapes, 'tail1');
    preview = updatePreview();
    drawFish(preview);
  }
  tsCount();
  totalCount();
}

var ts2 = 0;
function addTail2() {
  let btn = document.getElementById('tail2');
  if (ts2 == 0) {
    ts2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tailShapes.push('tail2');
    preview = updatePreview();
    drawFish(preview);
  } else {
    ts2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tailShapes = remove(tailShapes, 'tail2');
    preview = updatePreview();
    drawFish(preview);
  }
  tsCount();
  totalCount();
}

var ts3 = 0;
function addTail3() {
  let btn = document.getElementById('tail3');
  if (ts3 == 0) {
    ts3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tailShapes.push('tail3');
    preview = updatePreview();
    drawFish(preview);
  } else {
    ts3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tailShapes = remove(tailShapes, 'tail3');
    preview = updatePreview();
    drawFish(preview);
  }
  tsCount();
  totalCount();
}

var ts4 = 0;
function addTail4() {
  let btn = document.getElementById('tail4');
  if (ts4 == 0) {
    ts4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tailShapes.push('tail4');
    preview = updatePreview();
    drawFish(preview);
  } else {
    ts4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tailShapes = remove(tailShapes, 'tail4');
    preview = updatePreview();
    drawFish(preview);
  }
  tsCount();
  totalCount();
}

function dfCount() {
  let c = dfinShapes.length;
  if (c == 0) {
    document.getElementById('nds').innerHTML = '<b>' + c.toString() + '</b>';
    document.getElementById('nds').style.color = "red";
  } else {
    document.getElementById('nds').innerHTML = c.toString();
    document.getElementById('nds').style.color = "black";
  }
}

var df1 = 0;
function addDfin1() {
  let btn = document.getElementById('dfin1');
  if (df1 == 0) {
    df1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dfinShapes.push('dfin1');
    preview = updatePreview();
    drawFish(preview);
  } else {
    df1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dfinShapes = remove(dfinShapes, 'dfin1');
    preview = updatePreview();
    drawFish(preview);
  }
  dfCount();
  totalCount();
}

var df2 = 0;
function addDfin2() {
  let btn = document.getElementById('dfin2');
  if (df2 == 0) {
    df2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dfinShapes.push('dfin2');
    preview = updatePreview();
    drawFish(preview);
  } else {
    df2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dfinShapes = remove(dfinShapes, 'dfin2');
    preview = updatePreview();
    drawFish(preview);
  }
  dfCount();
  totalCount();
}

var df3 = 0;
function addDfin3() {
  let btn = document.getElementById('dfin3');
  if (df3 == 0) {
    df3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dfinShapes.push('dfin3');
    preview = updatePreview();
    drawFish(preview);
  } else {
    df3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dfinShapes = remove(dfinShapes, 'dfin3');
    preview = updatePreview();
    drawFish(preview);
  }
  dfCount();
  totalCount();
}

var df4 = 0;
function addDfin4() {
  let btn = document.getElementById('dfin4');
  if (df4 == 0) {
    df4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dfinShapes.push('dfin4');
    preview = updatePreview();
    drawFish(preview);
  } else {
    df4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dfinShapes = remove(dfinShapes, 'dfin4');
    preview = updatePreview();
    drawFish(preview);
  }
  dfCount();
  totalCount();
}

var df5 = 0;
function addDfin5() {
  let btn = document.getElementById('dfin5');
  if (df5 == 0) {
    df5 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dfinShapes.push('dfin5');
    preview = updatePreview();
    drawFish(preview);
  } else {
    df5 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dfinShapes = remove(dfinShapes, 'dfin5');
    preview = updatePreview();
    drawFish(preview);
  }
  dfCount();
  totalCount();
}


function pfCount() {
  let c = pfinShapes.length;
  if (c == 0) {
    document.getElementById('nps').innerHTML = '<b>' + c.toString() + '</b>';
    document.getElementById('nps').style.color = "red";
  } else {
    document.getElementById('nps').innerHTML = c.toString();
    document.getElementById('nps').style.color = "black";
  }
}

var pf1 = 0;
function addPfin1() {
  let btn = document.getElementById('pfin1');
  if (pf1 == 0) {
    pf1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    pfinShapes.push('pfin1');
    preview = updatePreview();
    drawFish(preview);
  } else {
    pf1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    pfinShapes = remove(pfinShapes, 'pfin1');
    preview = updatePreview();
    drawFish(preview);
  }
  pfCount();
  totalCount();
}

var pf2 = 0;
function addPfin2() {
  let btn = document.getElementById('pfin2');
  if (pf2 == 0) {
    pf2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    pfinShapes.push('pfin2');
    preview = updatePreview();
    drawFish(preview);
  } else {
    pf2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    pfinShapes = remove(pfinShapes, 'pfin2');
    preview = updatePreview();
    drawFish(preview);
  }
  pfCount();
  totalCount();
}

var pf3 = 0;
function addPfin3() {
  let btn = document.getElementById('pfin3');
  if (pf3 == 0) {
    pf3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    pfinShapes.push('pfin3');
    preview = updatePreview();
    drawFish(preview);
  } else {
    pf3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    pfinShapes = remove(pfinShapes, 'pfin3');
    preview = updatePreview();
    drawFish(preview);
  }
  pfCount();
  totalCount();
}

var pf4 = 0;
function addPfin4() {
  let btn = document.getElementById('pfin4');
  if (pf4 == 0) {
    pf4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    pfinShapes.push('pfin4');
    preview = updatePreview();
    drawFish(preview);
  } else {
    pf4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    pfinShapes = remove(pfinShapes, 'pfin4');
    preview = updatePreview();
    drawFish(preview);
  }
  pfCount();
  totalCount();
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

function init() {
  chooseBBlue();
  chooseTBlue();
  addBody1();
  addTail1();
  addDfin1();
  addPfin1();
}

function getFishSpecs(body, dfin, tail, pfin, bodyCol, tfCol) {
  var newlist = [];
  let dfin_uri = 'img/dfin/' + dfin; 
  let tail_uri = 'img/tail/' + tail; 
  let pfin_uri = 'img/pfin/' + pfin; 
  newlist.push({ uri: dfin_uri + tfCol + '.png', 
                    x: fishDict[body].dfinx, 
                    y: fishDict[body].dfiny, 
                    sw: fishDict[body].dfinsw, 
                    sh: fishDict[body].dfinsh });
  newlist.push({ uri: tail_uri + tfCol + '.png', 
                  x: fishDict[body].tailx, 
                  y: fishDict[body].taily, 
                  sw: fishDict[body].tailsw, 
                  sh: fishDict[body].tailsh });
  newlist.push({ uri: fishDict[body].uri + bodyCol + '.png', 
                    x: fishDict[body].x, 
                    y: fishDict[body].y, 
                    sw: fishDict[body].sw, 
                    sh: fishDict[body].sh });
  newlist.push({ uri: pfin_uri + tfCol + '.png', 
                    x: fishDict[body].pfinx, 
                    y: fishDict[body].pfiny, 
                    sw: fishDict[body].pfinsw, 
                    sh: fishDict[body].pfinsh });
  return newlist;
}

var fishes = [];
function generateImageSpecs() {
  for (let i = 0; i < bodyColors.length; i ++) {
    for (let j = 0; j < tfColors.length; j ++) {
      for (let k = 0; k < bodyShapes.length; k ++) {
        for (let m = 0; m < tailShapes.length; m ++) {
          for (let n = 0; n < dfinShapes.length; n ++) {
            for (let p = 0; p < pfinShapes.length; p ++) {
              let newlist = getFishSpecs(bodyShapes[k], dfinShapes[n], 
                                          tailShapes[m], pfinShapes[p], 
                                          bodyColors[i], tfColors[j]);
              fishes.push(newlist);
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
var folder = zip.folder("Fish");
var total = 0;

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
    }, 150);   
  });
};

function generateImages() {
  count = 0;
  total = 0;
  fishes = [];
  urls = [];
  if (totalC == 0) {
    let warning = document.getElementById("warn");
    warning.style.display = "block";
  } else {
    generateImageSpecs();
    total = fishes.length;
    document.getElementById("progress").max = total;
    document.getElementById("progress").value = 0;
    document.getElementById("progressBar").style.display = "block";
    let clear = 0;
    let id = setInterval(function() {
      generateOneFish().then(urls => {
        if (count == fishes.length) {
          for (let i = 0; i < urls.length; i ++) {
            let digit = urls.length.toString().length;
            let filenum = (i + 1).toString();
            while (filenum.length < digit) {
              filenum = "0" + filenum;
            }
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
              document.getElementById("progressBar").style.display = "none";
            }
          }
        }
      });
    }, fishes.length + 1);
  }
}

function downloadImg(name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = document.getElementById('canv').toDataURL()
  link.click();
}