function remove(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

var button_clicked = '';
function showBodyShapeOpts() {
  if (button_clicked != 'bodyShapes' && button_clicked != '') {
    let prev = document.getElementById(button_clicked);
    prev.style.display = "none";
  }
  let btns = document.getElementById('bodyShapes');
  btns.style.display = "block";
  button_clicked = 'bodyShapes';
}

function showBodyColorOpts() {
  if (button_clicked != 'bodyColors' && button_clicked != '') {
    let prev = document.getElementById(button_clicked);
    prev.style.display = "none";
  }
  let btns = document.getElementById('bodyColors');
  btns.style.display = "block";
  button_clicked = 'bodyColors';
}

function showTailShapeOpts() {
  if (button_clicked != 'tailShapes' && button_clicked != '') {
    let prev = document.getElementById(button_clicked);
    prev.style.display = "none";
  }
  let btns = document.getElementById('tailShapes');
  btns.style.display = "block";
  button_clicked = 'tailShapes';
}

function showDFinShapeOpts() {
  if (button_clicked != 'dfinShapes' && button_clicked != '') {
    let prev = document.getElementById(button_clicked);
    prev.style.display = "none";
  }
  let btns = document.getElementById('dfinShapes');
  btns.style.display = "block";
  button_clicked = 'dfinShapes';
}

function showPFinShapeOpts() {
  if (button_clicked != 'pfinShapes' && button_clicked != '') {
    let prev = document.getElementById(button_clicked);
    prev.style.display = "none";
  }
  let btns = document.getElementById('pfinShapes');
  btns.style.display = "block";
  button_clicked = 'pfinShapes';
}

var bodyShapes = [];
var bodyColors = [];
var tailShapes = [];
var dfinShapes = [];
var pfinShapes = [];
var tfColors = [];
var preview = [
  { uri: 'img/body1.png', x: 100, y: 100, sw: 200, sh: 100 },
  { uri: 'img/tail1.png', x: 290, y: 115, sw: 70, sh: 70 },
  { uri: 'img/dfin1.png', x: 170, y:  57, sw: 45, sh: 45 },
  { uri: 'img/pfin1.png', x: 170, y: 150, sw: 40, sh: 40 }
];

function bsCount() {
  let c = bodyShapes.length;
  document.getElementById('nbs').innerHTML = c.toString();
}

var bs1 = 0;
function addBody1() {
  let btn = document.getElementById('body1');
  if (bs1 == 0) {
    bs1 = 1;
    btn.style.background = "greenyellow";
    bodyShapes.push('img/body1.png');
    preview[0] = { uri: 'img/body1.png', x: 100, y: 100, sw: 200, sh: 100 };
    drawFish(preview);
  } else {
    bs1 = 0;
    btn.style.background = "white";
    bodyShapes = remove(bodyShapes, 'img/body1.png');
  }
  bsCount();
}

var bs2 = 0;
function addBody2() {
  let btn = document.getElementById('body2');
  if (bs2 == 0) {
    bs2 = 1;
    btn.style.background = "greenyellow";
    bodyShapes.push('img/body2.png');
    preview[0] = { uri: 'img/body2.png', x: 100, y: 100, sw: 200, sh: 50 };
    drawFish(preview);
  } else {
    bs2 = 0;
    btn.style.background = "white";
    bodyShapes = remove(bodyShapes, 'img/body2.png');
  }
  bsCount();
}

var bs3 = 0;
function addBody3() {
  let btn = document.getElementById('body3');
  if (bs3 == 0) {
    bs3 = 1;
    btn.style.background = "greenyellow";
    bodyShapes.push('img/body3.png');
    preview[0] = { uri: 'img/body3.png', x: 100, y: 100, sw: 200, sh: 100 };
    drawFish(preview);
  } else {
    bs3 = 0;
    btn.style.background = "white";
    bodyShapes = remove(bodyShapes, 'img/body3.png');
  } 
  bsCount();
}

var bs4 = 0;
function addBody4() {
  let btn = document.getElementById('body4');
  if (bs4 == 0) {
    bs4 = 1;
    btn.style.background = "greenyellow";
    bodyShapes.push('img/body4.png');
    preview[0] = { uri: 'img/body4.png', x: 120, y: 90, sw: 150, sh: 150 };
    drawFish(preview);
  } else {
    bs4 = 0;
    btn.style.background = "white";
    bodyShapes = remove(bodyShapes, 'img/body4.png');
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
    btn.style.background = "greenyellow";
    tailShapes.push('img/tail1.png');
    preview[1] = { uri: 'img/tail1.png', x: 290, y: 115, sw: 70, sh: 70 };
    drawFish(preview);
  } else {
    ts1 = 0;
    btn.style.background = "white";
    tailShapes = remove(tailShapes, 'img/tail1.png');
  }
  tsCount();
}

var ts2 = 0;
function addTail2() {
  let btn = document.getElementById('tail2');
  if (ts2 == 0) {
    ts2 = 1;
    btn.style.background = "greenyellow";
    tailShapes.push('img/tail2.png');
    preview[1] = { uri: 'img/tail2.png', x: 290, y: 115, sw: 70, sh: 70 };
    drawFish(preview);
  } else {
    ts2 = 0;
    btn.style.background = "white";
    tailShapes = remove(tailShapes, 'img/tail2.png');
  }
  tsCount();
}

var ts3 = 0;
function addTail3() {
  let btn = document.getElementById('tail3');
  if (ts3 == 0) {
    ts3 = 1;
    btn.style.background = "greenyellow";
    tailShapes.push('img/tail3.png');
    preview[1] = { uri: 'img/tail3.png', x: 290, y: 115, sw: 70, sh: 70 };
    drawFish(preview);
  } else {
    ts3 = 0;
    btn.style.background = "white";
    tailShapes = remove(tailShapes, 'img/tail3.png');
  }
  tsCount();
}

var ts4 = 0;
function addTail4() {
  let btn = document.getElementById('tail4');
  if (ts4 == 0) {
    ts4 = 1;
    btn.style.background = "greenyellow";
    tailShapes.push('img/tail4.png');
    preview[1] = { uri: 'img/tail4.png', x: 290, y: 115, sw: 70, sh: 70 };
    drawFish(preview);
  } else {
    ts4 = 0;
    btn.style.background = "white";
    tailShapes = remove(tailShapes, 'img/tail4.png');
  }
  tsCount();
}

var ts5 = 0;
function addTail5() {
  let btn = document.getElementById('tail5');
  if (ts5 == 0) {
    ts5 = 1;
    btn.style.background = "greenyellow";
    tailShapes.push('img/tail5.png');
    preview[1] = { uri: 'img/tail5.png', x: 290, y: 115, sw: 70, sh: 70 };
    drawFish(preview);
  } else {
    ts5 = 0;
    btn.style.background = "white";
    tailShapes = remove(tailShapes, 'img/tail5.png');
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
    btn.style.background = "greenyellow";
    dfinShapes.push('img/dfin1.png');
    preview[2] = { uri: 'img/dfin1.png', x: 170, y:  57, sw: 45, sh: 45 };
    drawFish(preview);
  } else {
    df1 = 0;
    btn.style.background = "white";
    dfinShapes = remove(dfinShapes, 'img/dfin1.png');
  }
  dfCount();
}

var df2 = 0;
function addDfin2() {
  let btn = document.getElementById('dfin2');
  if (df2 == 0) {
    df2 = 1;
    btn.style.background = "greenyellow";
    dfinShapes.push('img/dfin2.png');
    preview[2] = { uri: 'img/dfin2.png', x: 170, y:  57, sw: 45, sh: 45 };
    drawFish(preview);
  } else {
    df2 = 0;
    btn.style.background = "white";
    dfinShapes = remove(dfinShapes, 'img/dfin2.png');
  }
  dfCount();
}

var df3 = 0;
function addDfin3() {
  let btn = document.getElementById('dfin3');
  if (df3 == 0) {
    df3 = 1;
    btn.style.background = "greenyellow";
    dfinShapes.push('img/dfin3.png');
    preview[2] = { uri: 'img/dfin3.png', x: 170, y:  57, sw: 45, sh: 45 };
    drawFish(preview);
  } else {
    df3 = 0;
    btn.style.background = "white";
    dfinShapes = remove(dfinShapes, 'img/dfin3.png');
  }
  dfCount();
}

var df4 = 0;
function addDfin4() {
  let btn = document.getElementById('dfin4');
  if (df4 == 0) {
    df4 = 1;
    btn.style.background = "greenyellow";
    dfinShapes.push('img/dfin4.png');
    preview[2] = { uri: 'img/dfin4.png', x: 170, y:  57, sw: 45, sh: 45 };
    drawFish(preview);
  } else {
    df4 = 0;
    btn.style.background = "white";
    dfinShapes = remove(dfinShapes, 'img/dfin4.png');
  }
  dfCount();
}

var df5 = 0;
function addDfin5() {
  let btn = document.getElementById('dfin5');
  if (df5 == 0) {
    df5 = 1;
    btn.style.background = "greenyellow";
    dfinShapes.push('img/dfin5.png');
    preview[2] = { uri: 'img/dfin5.png', x: 170, y:  57, sw: 45, sh: 45 };
    drawFish(preview);
  } else {
    df5 = 0;
    btn.style.background = "white";
    dfinShapes = remove(dfinShapes, 'img/dfin5.png');
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
    btn.style.background = "greenyellow";
    pfinShapes.push('img/pfin1.png');
    preview[3] = { uri: 'img/pfin1.png', x: 170, y: 150, sw: 40, sh: 40 };
    drawFish(preview);
  } else {
    pf1 = 0;
    btn.style.background = "white";
    pfinShapes = remove(pfinShapes, 'img/pfin1.png');
  }
  pfCount();
}

var pf2 = 0;
function addPfin2() {
  let btn = document.getElementById('pfin2');
  if (pf2 == 0) {
    pf2 = 1;
    btn.style.background = "greenyellow";
    pfinShapes.push('img/pfin2.png');
    preview[3] = { uri: 'img/pfin2.png', x: 170, y: 150, sw: 40, sh: 40 };
    drawFish(preview);
  } else {
    pf2 = 0;
    btn.style.background = "white";
    pfinShapes = remove(pfinShapes, 'img/pfin2.png');
  }
  pfCount();
}

var pf3 = 0;
function addPfin3() {
  let btn = document.getElementById('pfin3');
  if (pf3 == 0) {
    pf3 = 1;
    btn.style.background = "greenyellow";
    pfinShapes.push('img/pfin3.png');
    preview[3] = { uri: 'img/pfin3.png', x: 170, y: 150, sw: 40, sh: 40 };
    drawFish(preview);
  } else {
    pf3 = 0;
    btn.style.background = "white";
    pfinShapes = remove(pfinShapes, 'img/pfin3.png');
  }
  pfCount();
}

var pf4 = 0;
function addPfin4() {
  let btn = document.getElementById('pfin4');
  if (pf4 == 0) {
    pf4 = 1;
    btn.style.background = "greenyellow";
    pfinShapes.push('img/pfin4.png');
    preview[3] = { uri: 'img/pfin4.png', x: 170, y: 150, sw: 40, sh: 40 };
    drawFish(preview);
  } else {
    pf4 = 0;
    btn.style.background = "white";
    pfinShapes = remove(pfinShapes, 'img/pfin4.png');
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

const drawOne = options => {
  const myOptions = Object.assign({}, options);
  return loadImage(myOptions.uri).then(img => {
    context.drawImage(img, myOptions.x, myOptions.y, myOptions.sw, myOptions.sh);
  });
};


function drawFish(list) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  list.forEach(drawOne);
}

var fishes = [];
function generateImageSpecs() {
  for (let i = 0; i < bodyShapes.length; i ++) {
    for (let j = 0; j < tailShapes.length; j ++) {
      for (let k = 0; k < dfinShapes.length; k ++) {
        for (let l = 0; l < pfinShapes.length; l ++) {
          let current = [
            { uri: bodyShapes[i], x: 100, y: 100, sw: 200, sh: 100 },
            { uri: tailShapes[j], x: 290, y: 115, sw: 70, sh: 70 },
            { uri: dfinShapes[k], x: 170, y:  57, sw: 45, sh: 45 },
            { uri: pfinShapes[l], x: 170, y: 150, sw: 40, sh: 40 }
          ];      
          fishes.push(current);
        }
      }
    }
  }
}

var urls = [];
var count = 0;
var zip = new JSZip();
var folder = zip.folder("fish");

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
      resolve(urls);
    }, 250);
  });
};

function generateImages() {
  generateImageSpecs();
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
            console.log("stopped")
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