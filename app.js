createImageTag(imageOne);
// createImageTag(imageTwo);
// createImageTag(imageThree);

var catDiv = document.getElementById('catsOnCats');

var imageOne = document.getElementById('imageOne');
// var imageTwo = document.getElementById('imageTwo');
// var imageThree = document.getElementById('imageThree');

var displayButton = document.getElementById('myButton');

var catArray = [];

var totalClicks = 0;

var processClick = true;

catDiv.addEventListener("click", imageClicked);

displayButton.addEventListener("click", showResults);

catArray[0] = new makeImageObj("bag", "img/catInBag.jpg");
catArray[1] = new makeImageObj("beach", "img/catOnBeach.jpg");
catArray[2] = new makeImageObj("train", "img/catOnTrain.jpg");
catArray[3] = new makeImageObj("school", "img/cat-at-school.jpg");
catArray[4] = new makeImageObj("work", "img/cat-on-computer.jpg");



// showRandomImg();

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
function showRandomImg() {


  //replacing image function
  var n = randomImageIndex();
  imageOne.setAttribute("src", catArray[n].path);
  catArray[n].nShow++;
  // var j = randomImageIndex();
  // imageTwo.setAttribute("src", catArray[j].path);
  // catArray[j].nShow++;
  // var q = randomImageIndex();
  // imageThree.setAttribute("src", catArray[q].path);
  // catArray[q].nShow++;

}

function imageClicked(event) {
  var targetId = event.target.getAttribute('id');
  if (processClick) {
    totalClicks++;
    showRandomImg();
    if (totalClicks >= 15) {
      //code to display hidden button
      displayButton.setAttribute('style','visibility:visible');
      processClick = false;
    }
  }
}

//function to show results
function showResults() {
  console.log(totalClicks + " this is working yes?");
}

function createImageTag(imageId) {
  var imageTag = document.createElement('img');
  var n = randomImageIndex();
  imageTag.setAttribute('src', catArray[n].path);
  imageTag.setAttribute('id', imageId);
  catDiv.appendChild(imageTag);
}
