var catDiv = document.getElementById('catsOnCats');
catDiv.addEventListener("click", function() {
  console.log("this is a click");
})

var catArray = [];

function makeImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.nClicks = 0;
}

catArray[0] = new makeImageObj("bag", "img/catInBag.jpg");
catArray[1] = new makeImageObj("beach", "img/catOnBeach.jpg");
catArray[2] = new makeImageObj("train", "img/catOnTrain.jpg");

function randomImageIndex() {
  var result = Math.floor(Math.random() * (catArray.length+1));
  return result;
}
