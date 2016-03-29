var catDiv = document.getElementById('catsOnCats');

var newImage = document.getElementById('catImage');

catDiv.addEventListener("click", function() {
  console.log("this is a click");
  var clickCount = newImage.getAttribute("src");
  console.log(clickCount);
  
  //replacing image
  var n = randomImageIndex();
  newImage.setAttribute("src", catArray[n].path);
  catArray[n].nShow++;
})

var catArray = [];

catArray[0] = new makeImageObj("bag", "img/catInBag.jpg");
catArray[1] = new makeImageObj("beach", "img/catOnBeach.jpg");
catArray[2] = new makeImageObj("train", "img/catOnTrain.jpg");

function makeImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.nShow = 0;
  this.nClicks = 0;
}

function randomImageIndex() {
  var result = Math.floor(Math.random() * (catArray.length));
  return result;
}
