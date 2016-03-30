/*
=========
variables
=========
*/

// var catDiv = document.getElementById('catsOnCats');

var imageOne = document.getElementById('catImageOne');
var imageTwo = document.getElementById('catImageTwo');
var imageThree = document.getElementById('catImageThree');

var displayButton = document.getElementById('myButton');
var voteMoreButton = document.getElementById('voteMore');
var chart = document.getElementById('chart');

var catArray = [];

var totalClicks = 0;

var processClick = true;

/*
variables capturing the paragraph slots
for textContent addition on show results
*/

var paraOne = document.getElementById('paraOne');
var paraTwo = document.getElementById('paraTwo');
var paraThree = document.getElementById('paraThree');

/*
===============
arrays
===============
*/

catArray[0] = new makeImageObj("bag", "img/catInBag.jpg");
catArray[1] = new makeImageObj("beach", "img/catOnBeach.jpg");
catArray[2] = new makeImageObj("train", "img/catOnTrain.jpg");

/*
================
calling functions
================
*/

showRandomImg(imageOne);
showRandomImg(imageTwo);
showRandomImg(imageThree);


/*
=========
functions
=========
*/

//function to count the number of clicks on imageOne specifically
imageOne.onclick = function() {
  var srcValue = imageOne.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
      console.log(catArray[i].path + " #$% " +catArray[i].nClicks);
    }
  }
}

//function to count the number of clicks on imageTwo specifically
imageTwo.onclick = function() {
  var srcValue = imageTwo.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
      console.log(catArray[i].path + " #$% " +catArray[i].nClicks);
    }
  }
}

//function to count the number of clicks on imageThree specifically
imageThree.onclick = function() {
  var srcValue = imageThree.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
      console.log(catArray[i].path + " #$% " +catArray[i].nClicks);
    }
  }
}

function imageClicked() {
  if (processClick) {
    totalClicks++;

    showRandomImg(imageOne);
    showRandomImg(imageTwo);
    showRandomImg(imageThree);

    if (totalClicks >= 5) {
      //code to display hidden button
      displayButton.setAttribute('style','visibility:visible');
      voteMoreButton.setAttribute('style','visibility:visible');
      processClick = false;
    }
  }
}

function makeImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.nShow = 0;
  this.nClicks = 0;
}

/*
random number generation to go through amount of images within
constructors
*/
function randomImageIndex() {
  var result = Math.floor(Math.random() * (catArray.length));
  return result;
}

//function to display random image from list
function showRandomImg(image) {
  // var clickCount = newImage.getAttribute("src");
  // console.log(clickCount);


  //replacing image function
  var n = randomImageIndex();
  image.setAttribute("src", catArray[n].path);
  catArray[n].nShow++;
}


//FIX
//function to show results
function showResults() {
  console.log(totalClicks + " this is working yes?");
  chart.textContent = "the total number of clicks is " + totalClicks + " and this shows how often the Abercrombie cat showed up: " + catArray[0].nShow;
  paraOne.textContent = "the number of times cat in bag was clicked on " + catArray[0].nClicks;
  paraTwo.textContent = "the number of times catOnBeach has been clicked is " + catArray[1].nClicks;
  paraThree.textContent = "the number of times cat on train has been clicked is " + catArray[2].nClicks;
}

var imageOneCounter = 0;

/*
===============
event listeners
===============
*/

imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);

displayButton.addEventListener("click", showResults);
