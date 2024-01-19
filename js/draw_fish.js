var fishDict1 = {
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

var fishDict2 = {
  'body1' : {
    uri: 'img2/body/body1',
    x: 105, y: 65, sw: 180, sh: 180,
    dfinx: 175, dfiny: 63, dfinsw: 40, dfinsh: 40,
    tailx: 228, taily: 115, tailsw: 70, tailsh: 70,
    pfinx: 175, pfiny: 150, pfinsw: 40, pfinsh: 40
  },
  'body2' : {
    uri: 'img2/body/body2',
    x: 100, y: 100, sw: 250, sh: 75,
    dfinx: 200, dfiny: 75, dfinsw: 40, dfinsh: 40,
    tailx: 335, taily: 105, tailsw: 70, tailsh: 70,
    pfinx: 200, pfiny: 140, pfinsw: 40, pfinsh: 40
  },
  'body3' : {
    uri: 'img2/body/body3',
    x: 100, y: 90, sw: 220, sh: 110,
    dfinx: 190, dfiny: 65, dfinsw: 40, dfinsh: 40,
    tailx: 300, taily: 100, tailsw: 70, tailsh: 70,
    pfinx: 190, pfiny: 145, pfinsw: 40, pfinsh: 40
  },
  'body4' : {
    uri: 'img2/body/body4',
    x: 100, y: 90, sw: 240, sh: 110,
    dfinx: 190, dfiny: 60, dfinsw: 40, dfinsh: 40,
    tailx: 325, taily: 95, tailsw: 70, tailsh: 70,
    pfinx: 195, pfiny: 145, pfinsw: 40, pfinsh: 40
  }
}

const MAX_FILE_LOAD_RETRIES = 50;

var initialized = false;
var artStyle = 1;
var switching = false;
var generating = false;
var failedImageURL = '';
var currentFishId = '';
var imagesFolder = 'img';
var fishDict;
var divMainA;
var divMainB;
var loadingImages = [];
var loadedImages = {};
var initialPreLoadedImages = -1;
var checkInterval = -1;
var progressStr = '';
var pProgressText;
var btnGenerate;
var divProgressBar;
var progress1;
var progress2;
var pWarn;
var canvas;
var context;

var clickedButton = '';
var shownDiv = '';
var bodyShapes = [];
var bodyColors = [];
var tailShapes = [];
var dFinShapes = [];
var pFinShapes = [];
var tFColors = [];
var totalC = 0;
var preview = [];

var bodyColor1 = 0;
var bodyColor2 = 0;
var bodyColor3 = 0;
var bodyColor4 = 0;
var bodyColor5 = 0;
var bodyColor6 = 0;
var bodyColor7 = 0;

var tailColor1 = 0;
var tailColor2 = 0;
var tailColor3 = 0;
var tailColor4 = 0;
var tailColor5 = 0;
var tailColor6 = 0;
var tailColor7 = 0;

var bodyShape1 = 0;
var bodyShape2 = 0;
var bodyShape3 = 0;
var bodyShape4 = 0;
var bodyShape5 = 0;

var tailShape1 = 0;
var tailShape2 = 0;
var tailShape3 = 0;
var tailShape4 = 0;

var dorsalFinShape1 = 0;
var dorsalFinShape2 = 0;
var dorsalFinShape3 = 0;
var dorsalFinShape4 = 0;
var dorsalFinShape5 = 0;

var finShape1 = 0;
var finShape2 = 0;
var finShape3 = 0;
var finShape4 = 0;

var fishes = [];
var urls = [];
var count = 0;
var zip;
var folder;
var total = 0;
var fishIsReady = false;


function remove(arr, value) {
  let index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function getId(id) {
  if (artStyle == 1) {
    return id + 'A';
  }
  return id + 'B';
}

function getOppositeId(id) {
  if (artStyle == 2) {
    return id + 'A';
  }
  return id + 'B';
}

function enableButtons(enable) {
  enableButton('btnSwitchArtStyle', enable)
  enableButton('btnGenerate', enable)
}

function enableButton(id, enable) {
  let element = document.getElementById(getId(id));
  element.disabled = !enable;
  element.style.opacity = enable ? 1 : 0.5;
  element.style.cursor = enable ? 'pointer' : 'not-allowed';
}

function init() {
  initialized = true;
  initVariables(0);
  showWarning('');
  setInterval(checkLoadingImages, 500);
  //
  chooseBBlue();
  chooseTBlue();
  addBody1();
  addTail1();
  addDfin1();
  addPfin1();
}

function getFileNumberString(fileNumber) {
  let digits = totalC.toString().length;
  let fileNumberStr = fileNumber.toString();
  while (fileNumberStr.length < digits) {
    fileNumberStr = '0' + fileNumberStr;
  }
  return fileNumberStr;
}

function switchArtStyle(style) {
  if (!initialized) {
    showWarning('Please wait for initializing the program...');
    return;
  }
  if (generating) { return; }
  closeAllMenus();
  enableButtons(false);
  showWarning('');
  initVariables(style);
  enableButtons(true);
  showWarning('');
  //
  switching = true;
  restoreSelection();
  switching = false;
  //
  preview = updatePreview();
  drawFish(preview);
  //
  updateBodyShapeCount();
  updateBodyColorCount();
  updateTailShapeCount();
  updateTailColorCount();
  updateDFinShapeCount();
  updatePFinShapeCount();
  updateTotalCount();
}

function initVariables(style) {
  let starting = (style == 0);
  artStyle = style;
  if (artStyle == 0) { artStyle = 1; }
  if (starting) {
    divMainA = document.getElementById('divMainA');
    divMainB = document.getElementById('divMainB');
  }
  let mainContent = document.getElementById('mainContent');
  if (artStyle == 1) {
    mainContent.removeChild(divMainB);
    if (!starting) {
      mainContent.appendChild(divMainA);
    }
  } else {
    mainContent.removeChild(divMainA);
    mainContent.appendChild(divMainB);
  }
  divMainA.style.display = (artStyle == 1) ? 'flex' : 'none';
  divMainB.style.display = (artStyle == 2) ? 'flex' : 'none';
  btnGenerate = document.getElementById(getId('btnGenerate'));
  divProgressBar = document.getElementById(getId('divProgressBar'));
  pProgressText = document.getElementById(getId('pProgressText'));
  progress1 = document.getElementById(getId('progress1'));
  progress2 = document.getElementById(getId('progress2'));
  pWarn = document.getElementById(getId('pWarn'));
  canvas = document.getElementById(getId('canvas'));
  context = canvas.getContext('2d');
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  fishDict = (artStyle == 1) ? fishDict1 : fishDict2;
  imagesFolder = (artStyle == 1) ? 'img' : 'img2';
}


function closeAllMenus() {
  shownDiv = getId('divBodyShapes');
  showBodyShapeOpts();
  shownDiv = getId('divBodyColors');
  showBodyColorOpts();
  shownDiv = getId('divTailShapes');
  showTailShapeOpts();
  shownDiv = getId('divDorsalFinShapes');
  showDFinShapeOpts();
  shownDiv = getId('divPectoralFinShapes');
  showPFinShapeOpts();
  shownDiv = getId('divTailAndFinColors');
  showTFColorOpts();
}

function restoreSelection() {
  let prevClickedButton = clickedButton;
  let prevBodyShapes = bodyShapes.slice();
  let prevBodyColors = bodyColors.slice();
  let prevTailShapes = tailShapes.slice();
  let prevDFinShapes = dFinShapes.slice();
  let prevPFinShapes = pFinShapes.slice();
  let prevTFColors = tFColors.slice();

  generating = false;
  failedImageURL = '';
  currentFishId = '';

  clickedButton = '';
  shownDiv = '';
  bodyShapes = [];
  bodyColors = [];
  tailShapes = [];
  dFinShapes = [];
  pFinShapes = [];
  tFColors = [];
  totalC = 0;
  preview = [];

  fishes = [];
  urls = [];
  count = 0;
  zip = null;
  folder = null;
  total = 0;
  fishIsReady = false;

  //
  // restore the previous selections
  bodyColor1 = (bodyColor1 == 0) ? 1 : 0;
  bodyColor2 = (bodyColor2 == 0) ? 1 : 0;
  bodyColor3 = (bodyColor3 == 0) ? 1 : 0;
  bodyColor4 = (bodyColor4 == 0) ? 1 : 0;
  bodyColor5 = (bodyColor5 == 0) ? 1 : 0;
  bodyColor6 = (bodyColor6 == 0) ? 1 : 0;
  bodyColor7 = (bodyColor7 == 0) ? 1 : 0;

  tailColor1 = (tailColor1 == 0) ? 1 : 0;
  tailColor2 = (tailColor2 == 0) ? 1 : 0;
  tailColor3 = (tailColor3 == 0) ? 1 : 0;
  tailColor4 = (tailColor4 == 0) ? 1 : 0;
  tailColor5 = (tailColor5 == 0) ? 1 : 0;
  tailColor6 = (tailColor6 == 0) ? 1 : 0;
  tailColor7 = (tailColor7 == 0) ? 1 : 0;

  bodyShape1 = (bodyShape1 == 0) ? 1 : 0;
  bodyShape2 = (bodyShape2 == 0) ? 1 : 0;
  bodyShape3 = (bodyShape3 == 0) ? 1 : 0;
  bodyShape4 = (bodyShape4 == 0) ? 1 : 0;
  bodyShape5 = (bodyShape5 == 0) ? 1 : 0;

  tailShape1 = (tailShape1 == 0) ? 1 : 0;
  tailShape2 = (tailShape2 == 0) ? 1 : 0;
  tailShape3 = (tailShape3 == 0) ? 1 : 0;
  tailShape4 = (tailShape4 == 0) ? 1 : 0;

  dorsalFinShape1 = (dorsalFinShape1 == 0) ? 1 : 0;
  dorsalFinShape2 = (dorsalFinShape2 == 0) ? 1 : 0;
  dorsalFinShape3 = (dorsalFinShape3 == 0) ? 1 : 0;
  dorsalFinShape4 = (dorsalFinShape4 == 0) ? 1 : 0;
  dorsalFinShape5 = (dorsalFinShape5 == 0) ? 1 : 0;

  finShape1 = (finShape1 == 0) ? 1 : 0;
  finShape2 = (finShape2 == 0) ? 1 : 0;
  finShape3 = (finShape3 == 0) ? 1 : 0;
  finShape4 = (finShape4 == 0) ? 1 : 0;

  addBody1();
  addBody2();
  addBody3();
  addBody4();
  addBody5();

  chooseBBlue();
  chooseBRed();
  chooseBGreen();
  chooseBOrange();
  chooseBPink();
  chooseBPurple();
  chooseBYellow();

  addTail1();
  addTail2();
  addTail3();
  addTail4();

  addDfin1();
  addDfin2();
  addDfin3();
  addDfin4();
  addDfin5();

  addPfin1();
  addPfin2();
  addPfin3();
  addPfin4();

  chooseTBlue();
  chooseTRed();
  chooseTGreen();
  chooseTOrange();
  chooseTPink();
  chooseTPurple();
  chooseTYellow();
  //
  // restore the previous open menu states
  if (prevClickedButton == getOppositeId('btnBodyShape')) {
    clickedButton = getId('btnBodyShape');
    showBodyShapeOpts();
  }
  if (prevClickedButton == getOppositeId('btnBodyColor')) {
    clickedButton = getId('btnBodyColor');
    showBodyColorOpts();
  }
  if (prevClickedButton == getOppositeId('btnTailShape')) {
    clickedButton = getId('btnTailShape');
    showTailShapeOpts();
  }
  if (prevClickedButton == getOppositeId('btnDorsalFinShape')) {
    clickedButton = getId('btnDorsalFinShape');
    showDFinShapeOpts();
  }
  if (prevClickedButton == getOppositeId('btnPectoralFinShape')) {
    clickedButton = getId('btnPectoralFinShape');
    showPFinShapeOpts();
  }
  if (prevClickedButton == getOppositeId('btnTailAndFinColor')) {
    clickedButton = getId('btnTailAndFinColor');
    showTFColorOpts();
  }
  //
  // restore the previous order of the selectable items
  let tempArray = [];
  for (let index = 0; index < prevBodyShapes.length; index++) {
    let itemValue = prevBodyShapes[index];
    if (bodyShapes.includes(itemValue)) { tempArray.push(itemValue); }
  }
  bodyShapes = tempArray.slice();
  //
  tempArray = [];
  for (let index = 0; index < prevBodyColors.length; index++) {
    let itemValue = prevBodyColors[index];
    if (bodyColors.includes(itemValue)) { tempArray.push(itemValue); }
  }
  bodyColors = tempArray.slice();
  //
  tempArray = [];
  for (let index = 0; index < prevTailShapes.length; index++) {
    let itemValue = prevTailShapes[index];
    if (tailShapes.includes(itemValue)) { tempArray.push(itemValue); }
  }
  tailShapes = tempArray.slice();
  //
  tempArray = [];
  for (let index = 0; index < prevDFinShapes.length; index++) {
    let itemValue = prevDFinShapes[index];
    if (dFinShapes.includes(itemValue)) { tempArray.push(itemValue); }
  }
  dFinShapes = tempArray.slice();
  //
  tempArray = [];
  for (let index = 0; index < prevPFinShapes.length; index++) {
    let itemValue = prevPFinShapes[index];
    if (pFinShapes.includes(itemValue)) { tempArray.push(itemValue); }
  }
  pFinShapes = tempArray.slice();
  //
  tempArray = [];
  for (let index = 0; index < prevTFColors.length; index++) {
    let itemValue = prevTFColors[index];
    if (tFColors.includes(itemValue)) { tempArray.push(itemValue); }
  }
  tFColors = tempArray.slice();
  //
}

function showBodyShapeOpts() {
  if ((!initialized) || generating) { return; }

  if (shownDiv == getId('divBodyShapes')) {
    let btn = document.getElementById(getId('btnBodyShape'));
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let buttonsDiv = document.getElementById(getId('divBodyShapes'));
    buttonsDiv.style.display = "none";
    shownDiv = '';
    return;
  }
  if (shownDiv != '') {
    let prev = document.getElementById(shownDiv);
    prev.style.display = "none";
    let prev_att = document.getElementById(clickedButton);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  clickedButton = getId('btnBodyShape');
  let btn = document.getElementById(getId('btnBodyShape'));
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let buttonsDiv = document.getElementById(getId('divBodyShapes'));
  buttonsDiv.style.display = "block";
  shownDiv = getId('divBodyShapes');
}

function showBodyColorOpts() {
  if ((!initialized) || generating) { return; }

  if (shownDiv == getId('divBodyColors')) {
    let btn = document.getElementById(getId('btnBodyColor'));
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let buttonsDiv = document.getElementById(getId('divBodyColors'));
    buttonsDiv.style.display = "none";
    shownDiv = '';
    return;
  }
  if (shownDiv != '') {
    let prev = document.getElementById(shownDiv);
    prev.style.display = "none";
    let prev_att = document.getElementById(clickedButton);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  clickedButton = getId('btnBodyColor');
  let btn = document.getElementById(getId('btnBodyColor'));
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let buttonsDiv = document.getElementById(getId('divBodyColors'));
  buttonsDiv.style.display = "block";
  shownDiv = getId('divBodyColors');
}

function showTFColorOpts() {
  if ((!initialized) || generating) { return; }

  if (shownDiv == getId('divTailAndFinColors')) {
    let btn = document.getElementById(getId('btnTailAndFinColor'));
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let buttonsDiv = document.getElementById(getId('divTailAndFinColors'));
    buttonsDiv.style.display = "none";
    shownDiv = '';
    return;
  }
  if (shownDiv != '') {
    let prev = document.getElementById(shownDiv);
    prev.style.display = "none";
    let prev_att = document.getElementById(clickedButton);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  clickedButton = getId('btnTailAndFinColor');
  let btn = document.getElementById(getId('btnTailAndFinColor'));
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let buttonsDiv = document.getElementById(getId('divTailAndFinColors'));
  buttonsDiv.style.display = "block";
  shownDiv = getId('divTailAndFinColors');
}

function showTailShapeOpts() {
  if ((!initialized) || generating) { return; }

  if (shownDiv == getId('divTailShapes')) {
    let btn = document.getElementById(getId('btnTailShape'));
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let buttonsDiv = document.getElementById(getId('divTailShapes'));
    buttonsDiv.style.display = "none";
    shownDiv = '';
    return;
  }
  if (shownDiv != '') {
    let prev = document.getElementById(shownDiv);
    prev.style.display = "none";
    let prev_att = document.getElementById(clickedButton);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  clickedButton = getId('btnTailShape');
  let btn = document.getElementById(getId('btnTailShape'));
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let buttonsDiv = document.getElementById(getId('divTailShapes'));
  buttonsDiv.style.display = "block";
  shownDiv = getId('divTailShapes');
}

function showDFinShapeOpts() {
  if ((!initialized) || generating) { return; }

  if (shownDiv == getId('divDorsalFinShapes')) {
    let btn = document.getElementById(getId('btnDorsalFinShape'));
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let buttonsDiv = document.getElementById(getId('divDorsalFinShapes'));
    buttonsDiv.style.display = "none";
    shownDiv = '';
    return;
  }
  if (shownDiv != '') {
    let prev = document.getElementById(shownDiv);
    prev.style.display = "none";
    let prev_att = document.getElementById(clickedButton);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  clickedButton = getId('btnDorsalFinShape');
  let btn = document.getElementById(getId('btnDorsalFinShape'));
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let buttonsDiv = document.getElementById(getId('divDorsalFinShapes'));
  buttonsDiv.style.display = "block";
  shownDiv = getId('divDorsalFinShapes');
}

function showPFinShapeOpts() {
  if ((!initialized) || generating) { return; }

  if (shownDiv == getId('divPectoralFinShapes')) {
    let btn = document.getElementById(getId('btnPectoralFinShape'));
    btn.style.fontWeight = "normal";
    btn.style.width = "210px";
    let buttonsDiv = document.getElementById(getId('divPectoralFinShapes'));
    buttonsDiv.style.display = "none";
    shownDiv = '';
    return;
  }
  if (shownDiv != '') {
    let prev = document.getElementById(shownDiv);
    prev.style.display = "none";
    let prev_att = document.getElementById(clickedButton);
    prev_att.style.fontWeight = "normal";
    prev_att.style.width = "210px";
  }
  clickedButton = getId('btnPectoralFinShape');
  let btn = document.getElementById(getId('btnPectoralFinShape'));
  btn.style.fontWeight = "bold";
  btn.style.width = "230px";
  let buttonsDiv = document.getElementById(getId('divPectoralFinShapes'));
  buttonsDiv.style.display = "block";
  shownDiv = getId('divPectoralFinShapes');
}

function updateTotalCount() {
  if (switching) { return; }
  totalC = bodyShapes.length * bodyColors.length
          * tailShapes.length * dFinShapes.length
          * pFinShapes.length * tFColors.length;
  progressStr = 'You are generating ' + totalC.toString() + ' images';
  if (totalC > 0) { showWarning(''); }
  if (!isEmpty(pProgressText)) {
    pProgressText.innerHTML = progressStr;
  }
}

function updatePreview() {
  if (switching) { return; }
  let newlist = [];
  if (bodyShapes.length == 0 || bodyColors.length == 0 || tFColors.length == 0) {
    return newlist;
  }
  let body = bodyShapes[bodyShapes.length - 1];
  let dfin_uri = '';
  let pfin_uri = '';
  let tail_uri = '';
  let bodyCol = bodyColors[bodyColors.length - 1];
  let tfCol = tFColors[tFColors.length - 1];
  if (dFinShapes.length != 0) {
    let dfin = dFinShapes[dFinShapes.length - 1];
    dfin_uri = imagesFolder + '/dfin/' + dfin;
  }
  if (tailShapes.length != 0) {
    let tail = tailShapes[tailShapes.length - 1];
    tail_uri = imagesFolder + '/tail/' + tail;
  }
  if (pFinShapes.length != 0) {
    let pfin = pFinShapes[pFinShapes.length - 1];
    pfin_uri = imagesFolder + '/pfin/' + pfin;
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
function updateBodyColorCount() {
  let c = bodyColors.length;
  let spanBodyColor = document.getElementById(getId('spanBodyColor'));
  if (c == 0) {
    spanBodyColor.innerHTML = '<b>' + c.toString() + '</b>';
    spanBodyColor.style.color = "red";
  } else {
    spanBodyColor.innerHTML = c.toString();
    spanBodyColor.style.color = "black";
  }
}

function chooseBRed() {
  let btn = document.getElementById(getId('btnBodyColor1'));
  if (bodyColor1 == 0) {
    bodyColor1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Red');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyColor1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Red');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyColorCount();
  updateTotalCount();
}

function chooseBBlue() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnBodyColor2'));
  if (bodyColor2 == 0) {
    bodyColor2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Blue');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyColor2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Blue');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyColorCount();
  updateTotalCount();
}

function chooseBGreen() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnBodyColor3'));
  if (bodyColor3 == 0) {
    bodyColor3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Green');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyColor3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Green');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyColorCount();
  updateTotalCount();
}

function chooseBOrange() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnBodyColor4'));
  if (bodyColor4 == 0) {
    bodyColor4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Orange');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyColor4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Orange');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyColorCount();
  updateTotalCount();
}

function chooseBPink() {
  if ((!initialized) || generating) { return; }
  let btn = document.getElementById(getId('btnBodyColor5'));
  if (bodyColor5 == 0) {
    bodyColor5 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Pink');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyColor5 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Pink');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyColorCount();
  updateTotalCount();
}

function chooseBPurple() {
  if ((!initialized) || generating) { return; }
  let btn = document.getElementById(getId('btnBodyColor6'));
  if (bodyColor6 == 0) {
    bodyColor6 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Purple');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyColor6 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Purple');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyColorCount();
  updateTotalCount();
}

function chooseBYellow() {
  if ((!initialized) || generating) { return; }
  let btn = document.getElementById(getId('btnBodyColor7'));
  if (bodyColor7 == 0) {
    bodyColor7 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyColors.push('Yellow');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyColor7 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyColors = remove(bodyColors, 'Yellow');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyColorCount();
  updateTotalCount();
}

// tail&fin colors
function updateTailColorCount() {
  let c = tFColors.length;
  let spanTailAndFinColor = document.getElementById(getId('spanTailAndFinColor'));
  if (c == 0) {
    spanTailAndFinColor.innerHTML = '<b>' + c.toString() + '</b>';
    spanTailAndFinColor.style.color = "red";
  } else {
    spanTailAndFinColor.innerHTML = c.toString();
    spanTailAndFinColor.style.color = "black";
  }
}

function chooseTRed() {
  if ((!initialized) || generating) { return; }
  let btn = document.getElementById(getId('btnTailAndFinColor1'));
  if (tailColor1 == 0) {
    tailColor1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tFColors.push('Red');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailColor1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tFColors = remove(tFColors, 'Red');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailColorCount();
  updateTotalCount();
}

function chooseTBlue() {
  if ((!initialized) || generating) { return; }
  let btn = document.getElementById(getId('btnTailAndFinColor2'));
  if (tailColor2 == 0) {
    tailColor2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tFColors.push('Blue');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailColor2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tFColors = remove(tFColors, 'Blue');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailColorCount();
  updateTotalCount();
}

function chooseTGreen() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnTailAndFinColor3'));
  if (tailColor3 == 0) {
    tailColor3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tFColors.push('Green');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailColor3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tFColors = remove(tFColors, 'Green');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailColorCount();
  updateTotalCount();
}

function chooseTOrange() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnTailAndFinColor4'));
  if (tailColor4 == 0) {
    tailColor4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tFColors.push('Orange');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailColor4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tFColors = remove(tFColors, 'Orange');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailColorCount();
  updateTotalCount();
}

function chooseTPink() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnTailAndFinColor5'));
  if (tailColor5 == 0) {
    tailColor5 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tFColors.push('Pink');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailColor5 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tFColors = remove(tFColors, 'Pink');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailColorCount();
  updateTotalCount();
}

function chooseTPurple() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnTailAndFinColor6'));
  if (tailColor6 == 0) {
    tailColor6 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tFColors.push('Purple');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailColor6 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tFColors = remove(tFColors, 'Purple');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailColorCount();
  updateTotalCount();
}

function chooseTYellow() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnTailAndFinColor7'));
  if (tailColor7 == 0) {
    tailColor7 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tFColors.push('Yellow');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailColor7 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tFColors = remove(tFColors, 'Yellow');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailColorCount();
  updateTotalCount();
}

// body shapes
function updateBodyShapeCount() {
  let c = bodyShapes.length;
  let spanBodyShape = document.getElementById(getId('spanBodyShape'));
  if (c == 0) {
    spanBodyShape.innerHTML = '<b>' + c.toString() + '</b>';
    spanBodyShape.style.color = "red";
  } else {
    spanBodyShape.innerHTML = c.toString();
    spanBodyShape.style.color = "black";
  }
}

function addBody1() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnBody1'));
  if (bodyShape1 == 0) {
    bodyShape1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body1');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyShape1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body1');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyShapeCount();
  updateTotalCount();
}

function addBody2() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnBody2'));
  if (bodyShape2 == 0) {
    bodyShape2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body2');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyShape2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body2');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyShapeCount();
  updateTotalCount();
}

function addBody3() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnBody3'));
  if (bodyShape3 == 0) {
    bodyShape3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body3');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyShape3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body3');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyShapeCount();
  updateTotalCount();
}

function addBody4() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnBody4'));
  if (bodyShape4 == 0) {
    bodyShape4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body4');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyShape4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body4');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyShapeCount();
  updateTotalCount();
}

function addBody5() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnBody5'));
  if (isEmpty(btn)) {
    bodyShape5 = 0;
    updateBodyShapeCount();
    updateTotalCount();
    return;
  }
  if (bodyShape5 == 0) {
    bodyShape5 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    bodyShapes.push('body5');
    preview = updatePreview();
    drawFish(preview);
  } else {
    bodyShape5 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    bodyShapes = remove(bodyShapes, 'body5');
    preview = updatePreview();
    drawFish(preview);
  }
  updateBodyShapeCount();
  updateTotalCount();
}

function updateTailShapeCount() {
  if (switching) { return; }
  let c = tailShapes.length;
  let spanTailShape = document.getElementById(getId('spanTailShape'));
  if (c == 0) {
    spanTailShape.innerHTML = '<b>' + c.toString() + '</b>';
    spanTailShape.style.color = "red";
  } else {
    spanTailShape.innerHTML = c.toString();
    spanTailShape.style.color = "black";
  }
}

function addTail1() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnTail1'));
  if (tailShape1 == 0) {
    tailShape1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tailShapes.push('tail1');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailShape1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tailShapes = remove(tailShapes, 'tail1');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailShapeCount();
  updateTotalCount();
}

function addTail2() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnTail2'));
  if (tailShape2 == 0) {
    tailShape2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tailShapes.push('tail2');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailShape2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tailShapes = remove(tailShapes, 'tail2');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailShapeCount();
  updateTotalCount();
}

function addTail3() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnTail3'));
  if (tailShape3 == 0) {
    tailShape3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tailShapes.push('tail3');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailShape3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tailShapes = remove(tailShapes, 'tail3');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailShapeCount();
  updateTotalCount();
}

function addTail4() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnTail4'));
  if (tailShape4 == 0) {
    tailShape4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    tailShapes.push('tail4');
    preview = updatePreview();
    drawFish(preview);
  } else {
    tailShape4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    tailShapes = remove(tailShapes, 'tail4');
    preview = updatePreview();
    drawFish(preview);
  }
  updateTailShapeCount();
  updateTotalCount();
}

function updateDFinShapeCount() {
  let c = dFinShapes.length;
  let spanDorsalFinShape = document.getElementById(getId('spanDorsalFinShape'));
  if (c == 0) {
    spanDorsalFinShape.innerHTML = '<b>' + c.toString() + '</b>';
    spanDorsalFinShape.style.color = "red";
  } else {
    spanDorsalFinShape.innerHTML = c.toString();
    spanDorsalFinShape.style.color = "black";
  }
}

function addDfin1() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnDorsalFin1'));
  if (dorsalFinShape1 == 0) {
    dorsalFinShape1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dFinShapes.push('dfin1');
    preview = updatePreview();
    drawFish(preview);
  } else {
    dorsalFinShape1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dFinShapes = remove(dFinShapes, 'dfin1');
    preview = updatePreview();
    drawFish(preview);
  }
  updateDFinShapeCount();
  updateTotalCount();
}

function addDfin2() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnDorsalFin2'));
  if (dorsalFinShape2 == 0) {
    dorsalFinShape2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dFinShapes.push('dfin2');
    preview = updatePreview();
    drawFish(preview);
  } else {
    dorsalFinShape2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dFinShapes = remove(dFinShapes, 'dfin2');
    preview = updatePreview();
    drawFish(preview);
  }
  updateDFinShapeCount();
  updateTotalCount();
}

function addDfin3() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnDorsalFin3'));
  if (dorsalFinShape3 == 0) {
    dorsalFinShape3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dFinShapes.push('dfin3');
    preview = updatePreview();
    drawFish(preview);
  } else {
    dorsalFinShape3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dFinShapes = remove(dFinShapes, 'dfin3');
    preview = updatePreview();
    drawFish(preview);
  }
  updateDFinShapeCount();
  updateTotalCount();
}

function addDfin4() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnDorsalFin4'));
  if (dorsalFinShape4 == 0) {
    dorsalFinShape4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dFinShapes.push('dfin4');
    preview = updatePreview();
    drawFish(preview);
  } else {
    dorsalFinShape4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dFinShapes = remove(dFinShapes, 'dfin4');
    preview = updatePreview();
    drawFish(preview);
  }
  updateDFinShapeCount();
  updateTotalCount();
}

function addDfin5() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnDorsalFin5'));
  if (dorsalFinShape5 == 0) {
    dorsalFinShape5 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    dFinShapes.push('dfin5');
    preview = updatePreview();
    drawFish(preview);
  } else {
    dorsalFinShape5 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    dFinShapes = remove(dFinShapes, 'dfin5');
    preview = updatePreview();
    drawFish(preview);
  }
  updateDFinShapeCount();
  updateTotalCount();
}


function updatePFinShapeCount() {
  let c = pFinShapes.length;
  let spanPectoralFinShape = document.getElementById(getId('spanPectoralFinShape'));
  if (c == 0) {
    spanPectoralFinShape.innerHTML = '<b>' + c.toString() + '</b>';
    spanPectoralFinShape.style.color = "red";
  } else {
    spanPectoralFinShape.innerHTML = c.toString();
    spanPectoralFinShape.style.color = "black";
  }
}

function addPfin1() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnPectoralFin1'));
  if (finShape1 == 0) {
    finShape1 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    pFinShapes.push('pfin1');
    preview = updatePreview();
    drawFish(preview);
  } else {
    finShape1 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    pFinShapes = remove(pFinShapes, 'pfin1');
    preview = updatePreview();
    drawFish(preview);
  }
  updatePFinShapeCount();
  updateTotalCount();
}

function addPfin2() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnPectoralFin2'));
  if (finShape2 == 0) {
    finShape2 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    pFinShapes.push('pfin2');
    preview = updatePreview();
    drawFish(preview);
  } else {
    finShape2 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    pFinShapes = remove(pFinShapes, 'pfin2');
    preview = updatePreview();
    drawFish(preview);
  }
  updatePFinShapeCount();
  updateTotalCount();
}

function addPfin3() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnPectoralFin3'));
  if (finShape3 == 0) {
    finShape3 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    pFinShapes.push('pfin3');
    preview = updatePreview();
    drawFish(preview);
  } else {
    finShape3 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    pFinShapes = remove(pFinShapes, 'pfin3');
    preview = updatePreview();
    drawFish(preview);
  }
  updatePFinShapeCount();
  updateTotalCount();
}

function addPfin4() {
  if ((!initialized) || generating) { return; }

  let btn = document.getElementById(getId('btnPectoralFin4'));
  if (finShape4 == 0) {
    finShape4 = 1;
    btn.style.width = "220px";
    btn.style.fontWeight = "bold";
    pFinShapes.push('pfin4');
    preview = updatePreview();
    drawFish(preview);
  } else {
    finShape4 = 0;
    btn.style.width = "200px";
    btn.style.fontWeight = "normal";
    pFinShapes = remove(pFinShapes, 'pfin4');
    preview = updatePreview();
    drawFish(preview);
  }
  updatePFinShapeCount();
  updateTotalCount();
}

function findLoadingImage(id) {
  for (let index = 0; index < loadingImages.length; index++) {
    let loadingImage = loadingImages[index];
    if (loadingImage.id == id) { return loadingImage; }
  }
  return null;
}

const loadImage = (id, url, prevLoadingImage, resetRetries) => {
  let loadedImage = loadedImages[id];
  if (!isEmpty(loadedImage)) {return loadedImage.image; }
  if (isEmpty(prevLoadingImage)) {
    let loadingImage = findLoadingImage(id);
    if (!isEmpty(loadingImage)) {
      prevLoadingImage = loadingImage;
    }
  }
  return new Promise((resolve, reject) => {
    let loadingImage = {};
    if (!isEmpty(prevLoadingImage)) { loadingImage = prevLoadingImage; }
    const img = new Image();
    loadingImage.id = id;
    loadingImage.url = url;
    loadingImage.time = Date.now();
    loadingImage.loaded = false;
    loadingImage.failed = false;
    loadingImage.image = img;
    if (resetRetries) { loadingImage.retries = 0; }
    if (isEmpty(prevLoadingImage)) {
      loadingImage.retries = 0;
      loadingImages.push(loadingImage);
    }
    img.onload = () => {
      loadingImage.loaded = true;
      loadedImages[id] = loadingImage;
      resolve(img);
      // console.log(id);
    };
    img.onerror = () => {
      loadingImage.failed = true;
      console.warn('load failed: ', url);
      // reject(new Error(`load ${url} fail`));
    }
    img.src = url;
  });
};

const drawOne = async (options, list, onlyPreLoaded) => {
  const myOptions = Object.assign({}, options);
  let id = getIdFromURL(myOptions.uri);
  let loadedImage = loadedImages[id];
  let img = null;
  if (!isEmpty(loadedImage)) { img = loadedImage.image; }
  let drawingDelay = 0;
  if (isEmpty(img)) {
      if (onlyPreLoaded) { return drawingDelay; }
      // console.log(id);
      img = await loadImage(id, myOptions.uri, null, true);
      drawingDelay = 100;
      setTimeout(function () {
      // context.drawImage(img, myOptions.x, myOptions.y, myOptions.sw, myOptions.sh);
      // console.log(getIdFromList(list) == currentFishId);
      if (getIdFromList(list) == currentFishId) {
        drawFish(list, true);
      }
    }, drawingDelay);
  } else {
    if (getIdFromList(list) == currentFishId) {
      context.drawImage(img, myOptions.x, myOptions.y, myOptions.sw, myOptions.sh);
    }
  }
  return drawingDelay;
};


function checkLoadingImages() {
  let remained = 0;
  for (let index = 0; index < loadingImages.length; index++) {
    let loadingImage = loadingImages[index];
    if (loadingImage.loaded) { continue; }
    remained++;
    if (loadingImage.failed || (Date.now() > loadingImage.time + 30000)) { // failed or no response after 30 seconds
      // console.log(loadingImage.time, Date.now())
      if (Date.now() < loadingImage.time + 2000) { continue; } // if failed, wait 2 seconds before retry
      loadingImage.retries++;
      if (loadingImage.retries > MAX_FILE_LOAD_RETRIES) {
        console.error('failed loading', loadingImage.url);
        failedImageURL = loadingImage.url;
        continue;
      }
      console.log('retry', loadingImage.retries, loadingImage.id, loadingImage.url)
      loadImage(loadingImage.id, loadingImage.url, loadingImage, false);
    }
  }
  if (!generating) {
    preview = updatePreview();
    drawFish(preview);
    return true;
  }
  if (loadingImages.length > 0) {
    if (initialPreLoadedImages < 0) {
      initialPreLoadedImages = loadingImages.length - remained;
    }
    let progressValue = 100;
    if (loadingImages.length - initialPreLoadedImages > 0) {
      progressValue = 100 * (loadingImages.length - initialPreLoadedImages - remained) / (loadingImages.length - initialPreLoadedImages);
    }
    // console.log(progressValue, loadingImages.length, initialPreLoadedImages, remained);
    progress1.value = Math.round(progressValue);
    pProgressText.innerHTML = progressStr + ':  preparing ' + String(Math.round(progressValue)) + '%';
    // console.log(progress1.value, progress1.max)
  }
  return (remained == 0);
};


async function drawFish(list, onlyPreLoaded = false, textIndex = -1) {
  if (switching) { return 0; }
  currentFishId = getIdFromList(list);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  let sumDelay = 0;
  for (let listIndex = 0; listIndex < list.length; listIndex++) {
    let delay = await drawOne(list[listIndex], list, onlyPreLoaded);
    sumDelay += delay;
  }
  if (textIndex >= 0) {
    context.font = "14px Arial";
    context.fillStyle = 'black';
    context.textAlign = 'left';
    context.textBaseline = "bottom";
    context.fillText(getFileNumberString(textIndex + 1), 7, canvas.height - 5);
  }
  // console.log(sumDelay);
  return sumDelay;
}

function isEmpty(object) {
  return (object == null) || (object == undefined);
}

function getIdFromList(list) {
  let id = "";
  for (let index = 0; index < list.length; index++) {
    let part = list[index];
    id += getIdFromURL(part.uri) + '__';
  }
  return id;
}

function getIdFromURL(url) {
  let id = url;
  id = id.split('\\').join('_');
  id = id.split(':').join('_');
  id = id.split('/').join('_');
  id = id.split('.').join('_');
  return id;
}

function getFishSpecs(body, dfin, tail, pfin, bodyCol, tfCol) {
  let newlist = [];
  let dfin_uri = imagesFolder + '/dfin/' + dfin;
  let tail_uri = imagesFolder + '/tail/' + tail;
  let pfin_uri = imagesFolder + '/pfin/' + pfin;
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

function generateImageSpecs() {
  for (let i = 0; i < bodyColors.length; i ++) {
    for (let j = 0; j < tFColors.length; j ++) {
      for (let k = 0; k < bodyShapes.length; k ++) {
        for (let m = 0; m < tailShapes.length; m ++) {
          for (let n = 0; n < dFinShapes.length; n ++) {
            for (let p = 0; p < pFinShapes.length; p ++) {
              let newlist = getFishSpecs(bodyShapes[k], dFinShapes[n], 
                                          tailShapes[m], pFinShapes[p], 
                                          bodyColors[i], tFColors[j]);
              fishes.push(newlist);
            }
          }
        }
      }
    }
  }
}

const generateOneFish = () => {
  return new Promise((resolve, reject) => {
    fishIsReady = false;
    let delay = drawFish(fishes[count], false, count);
    setTimeout(function() {
      let url = canvas.toDataURL();
      let base64String = url.replace("data:image/png;base64,", "");
      urls.push(base64String);
      count ++;
      progress2.value = count;
      pProgressText.innerHTML = progressStr + ':  ' + String(count) + '/' + String(totalC);
      // console.log(progress2.value, progress2.max)
      resolve(urls);
      fishIsReady = true;
    }, 50 + delay);
  });
};

function showWarning(message) {
  let pWarning = document.getElementById(getId('pWarn'));
  if (isEmpty(pWarning)) {
    if (message != '') {
      console.warn(message);
    }
    return;
  }
  if (message != '') {
    pWarning.innerText = message;
    pWarning.style.display = 'block';
  } else {
    pWarning.innerText = '';
    pWarning.style.display = 'none';
  }
}
function generateImages() {
  if (!initialized) {
    showWarning('Please wait for initializing the program...');
    return;
  }
  if (generating) { return; }
  if (totalC == 0) {
    showWarning('You have to choose at least one value for each attribute class!');
    return;
  }
  generating = true;
  failedImageURL = '';
  enableButtons(false);
  initialPreLoadedImages = -1;
  loadingImages = [];
  fishes = [];
  generateImageSpecs();
  progress1.max = 100;
  progress1.value = 0;
  progress2.max = fishes.length;
  progress2.value = 0;
  divProgressBar.style.display = "block";
  for (let fishIndex = 0; fishIndex < fishes.length; fishIndex++) {
    let fish = fishes[fishIndex];
    for (let partIndex = 0; partIndex < fish.length; partIndex++) {
      let part = fish[partIndex];
      let id = getIdFromURL(part.uri);
      loadImage(id, part.uri, null, true);
    }
  }
  pProgressText.innerHTML = progressStr;
  checkInterval = setInterval(checkNeededAssets, 20);
};

function checkNeededAssets() {
  if (checkInterval < 0) { return; }
  let ready = checkLoadingImages();
  if (failedImageURL != '') {
    clearInterval(checkInterval);
    checkInterval = -1;
    showWarning('Failed loading: ' + failedImageURL);
    generating = false;
    enableButtons(true);
    divProgressBar.style.display = "none";
    return;
  }
  if (!ready) { return; }
  clearInterval(checkInterval);
  checkInterval = -1;
  showWarning('');
  generateLoadedImages();
};

function generateLoadedImages() {
  count = 0;
  total = 0;
  fishIsReady = true;
  urls = [];
  zip = new JSZip();
  folder = zip.folder("Fish");
  if (totalC == 0) {
    let warning = document.getElementById("warn");
    warning.style.display = "block";
  } else {
    // generateImageSpecs();
    pProgressText.innerHTML = progressStr;
    total = fishes.length;
    let clear = 0;
    let id = setInterval(function() {
      if (!fishIsReady) { return; }
      generateOneFish().then(urls => {
        if (count == fishes.length) {
          for (let i = 0; i < urls.length; i ++) {
            let filename = "fish" + getFileNumberString(i + 1) + ".png";
            folder.file(filename, urls[i], {base64: true});
            if (i == urls.length - 1) {
              console.log("zip:", urls.length, "files");
              zip.generateAsync({ type: 'blob' }).then(function (content) {
                saveAs(content, "Fish.zip");           
              });        
              clear = 1;
            }
            if (clear == 1) {
              generating = false;
              enableButtons(true);
              clearInterval(id);
              divProgressBar.style.display = "none";
            }
          }
        }
      });
    }, 10);
  }
}

/*
function downloadImg(name) {
  let link = document.createElement('a');
  link.download = name;
  link.href = document.getElementById('canv').toDataURL()
  link.click();
}
*/