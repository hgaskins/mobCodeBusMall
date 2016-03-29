var catDiv = document.getElementById('catsOnCats');

var newImage = document.getElementById('catImage');

var displayButton = document.getElementById('myButton');

var catArray = [];

var totalClicks = 0;

var processClick = true;

catDiv.addEventListener("click", imageClicked);

catArray[0] = new makeImageObj("bag", "img/catInBag.jpg");
catArray[1] = new makeImageObj("beach", "img/catOnBeach.jpg");
catArray[2] = new makeImageObj("train", "img/catOnTrain.jpg");

showRandomImg();

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
  var clickCount = newImage.getAttribute("src");
  console.log(clickCount);


  //replacing image function
  var n = randomImageIndex();
  newImage.setAttribute("src", catArray[n].path);
  catArray[n].nShow++;
}

function imageClicked() {
  if (processClick) {
    totalClicks++;
    showRandomImg();
    if (totalClicks >= 4) {
      //code to display hidden button
      displayButton.setAttribute('style','visibility:visible');
      processClick = false;
    }
  }

}
