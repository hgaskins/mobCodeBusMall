/*
=========
variables
=========
*/

// var catDiv = document.getElementById('catsOnCats');

/*
specific images set to variables and collect the id from DOM
*/
var imageOne = document.getElementById('catImageOne');
var imageTwo = document.getElementById('catImageTwo');
var imageThree = document.getElementById('catImageThree');


var displayButton = document.getElementById('myButton');
var voteMoreButton = document.getElementById('voteMore');
var chart = document.getElementById('chart');

var catArray = [];

var totalClicks = 0;

var processClick = true;

//change to 16!
var clicks = 16;

var x = true;

/*
variables capturing the paragraph slots
for textContent addition on show results
*/

/* ++++++
variables for paragraph elements to be added per
image and add paragraph elements within html
*/
var paraOne = document.getElementById('paraOne');
var paraTwo = document.getElementById('paraTwo');
var paraThree = document.getElementById('paraThree');
var paraFour = document.getElementById('paraFour');
var paraFive = document.getElementById('paraFive');

/*
===============
arrays
===============
*/

/* +++++++
make a new object here per image added
*/
catArray[0] = new makeImageObj("bag", "img/catInBag.jpg");
catArray[1] = new makeImageObj("beach", "img/catOnBeach.jpg");
catArray[2] = new makeImageObj("train", "img/catOnTrain.jpg");
catArray[3] = new makeImageObj("computer", "img/cat-on-computer.jpg");
catArray[4] = new makeImageObj("computer", "img/cat-at-school.jpg");

/*
================
calling functions
================
*/

/*
calling the showRandomImg function with specific images here. Will need
to ammend additional images
*/
showRandomImg(imageOne);
showRandomImg(imageTwo);
showRandomImg(imageThree);


/*
=========
functions
=========
*/

/*
function to count the number of clicks on imageOne specifically
*/
imageOne.onclick = function() {
  var srcValue = imageOne.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
    }
  }
}

//function to count the number of clicks on imageTwo specifically
imageTwo.onclick = function() {
  var srcValue = imageTwo.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
    }
  }
}

//function to count the number of clicks on imageThree specifically
imageThree.onclick = function() {
  var srcValue = imageThree.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
    }
  }
}

//
function imageClicked() {
  if (processClick) {
    totalClicks++;

    //for each addition image add in code to call the image here:
    showRandomImg(imageOne);
    showRandomImg(imageTwo);
    showRandomImg(imageThree);

    //+++++++++++++
    //added in logic here
    if (totalClicks >= clicks && x && totalClicks < 24) {
      console.log(totalClicks);
      //code to display hidden button
      displayButton.setAttribute('style','visibility:visible');
      voteMoreButton.setAttribute('style','visibility:visible');
      processClick = false;
      //+++++++++++++++++++++++++++
      //added in else statement here
    } else if (totalClicks === 24) {
      x = false;
      voteMoreButton.setAttribute('style', 'visibility:hidden');
      // processClick = false;
      console.log(totalClicks);
      processClick = false;
      // voteMoreButton <-- remove event listener here
      voteMoreButton.removeEventListener('click', eightMore);
      //+++++++++++++++
      //called to make percent in all image objects
      for (var i = 0; i < catArray.length; i++) {
        catArray[i].calcPercent();
      }
    }
  }
}

//constructor function to make new image objects
function makeImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.nShow = 0;
  this.nClicks = 0;
  this.calcPercent = function() { // +++++++++++++++++++++
    this.percent = Math.floor((this.nClicks/this.nShow)*100); //<------------- added in to calculate percetage clicks/shown
  };
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



//function to show results
function showResults() {
  console.log(totalClicks + " this is working yes?");
  chart.textContent = "the total number of clicks is " + totalClicks + " and this shows how often the Abercrombie cat showed up: " + catArray[0].nShow;
  /* ++++++++++
  add in paraNum.textContent per paragraph element position within HTML DOM
  */
  paraOne.textContent = "the number of times cat in bag was clicked on " + catArray[0].nClicks;
  paraTwo.textContent = "the number of times catOnBeach has been clicked is " + catArray[1].nClicks;
  paraThree.textContent = "the number of times cat on train has been clicked is " + catArray[2].nClicks;
  paraFour.textContent = "the number of times cat on computer has been clicked is " + catArray[3].nClicks;
  paraFive.textContent = "the number of times cat at school has been clicked is " + catArray[4].nClicks;
}

//function to implement vote more button disappearing after clicking and allow for an additional 8 clicks
function eightMore() {
  clicks = 24;
  processClick = true;
  voteMoreButton.setAttribute('style','visibility:hidden');

}

/*
===============
event listeners
===============
*/

/*
addin eventListener per imageNUMBER variables set at the top of the js file
*/
imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);

displayButton.addEventListener("click", showResults);

//adding eventListener for vote more button
voteMoreButton.addEventListener("click", eightMore);
