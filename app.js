/*
=============
canvas charts
=============
*/

//+++++++++++++
//array to store labels for chart
var labelArray = [];

//++++++++++
//array to store Yaxis or clicks numbers for chart
var yAxisArray = [];

//++++++++++++++++
//array to store yaxis or percent click per show rate
var percentArray = [];

//function for chart's labels

var makeBarLabels = function() {
  for (var i = 0; i < catArray.length; i++) {
    labelArray[i] = catArray[i].name;
  }

}

//function for chart's y axis or number of clicks
var makeYAxis = function() {
  for (var i = 0; i < catArray.length; i++) {
    yAxisArray[i] = catArray[i].nClicks;
  }
}

//++++++++++++++++++++
//adding separate
var makePercentChart = function() {
  for (var i = 0; i < catArray.length; i++) {

    var x = Math.floor((catArray[i].nClicks/catArray[i].nShow)*100);

    percentArray.push(x);
  }
}


//function to show results
function showResults() {
  //++++++++starting

  makePercentChart();
  barDataPercent.datasets[0].data = percentArray;

  makeBarLabels();
  barData.labels = labelArray;
  barDataPercent.labels = labelArray;
  makeYAxis();
  barData.datasets[0].data = yAxisArray;


  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //placed invocation of bar chart within showResults function
  var income = document.getElementById("income").getContext("2d");
  new Chart(income).Bar(barData);
  console.log(percentArray);
  //chart variable for barDataPercent
  var countries = document.getElementById("countries").getContext("2d");
  new Chart(countries).Bar(barDataPercent);

}

var barData = {
	labels : [], //these are our image titles or this.name
	datasets : [
		{
			fillColor : "rgba(73,188,170,0.4)",
			strokeColor : "rgba(72,174,209,0.4)",
			data : [] // clicks
		}
	]
}

var barDataPercent = {
  labels : [], //these are our image titles or this.name
  datasets : [
    {
      fillColor : "rgba(73,188,170,0.4)",
      strokeColor : "rgba(72,174,209,0.4)",
      data : [] // clicks
    }
  ]
}




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
catArray[4] = new makeImageObj("school", "img/cat-at-school.jpg");


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
