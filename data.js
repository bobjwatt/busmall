var allImageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.jpg', 'water-can.jpg', 'wine-glass.jpg'];

var allImages = [];

function Product(name) {
  this.path = 'assets/' + name;
  this.name = name;
  this.numClick = 0;
  this.numShown = 0;
  allImages.push(this);
}

for (var i = 0; i < allImageNames.length; i++) {
  var clickImages = new Product(allImageNames[i]);
};

var image1Div = document.getElementById('image1');
var image2Div = document.getElementById('image2');
var image3Div = document.getElementById('image3');

var containerElement = document.getElementById('imageContainer');
containerElement.addEventListener('click', handleClick);
function handleClick(event) {
  console.log(event.target);
}

function getIndex() {
  return Math.floor(Math.random() * allImages.length);
}

function picDisplay() {
  var index1 = getIndex();
  var index2 = getIndex();
  var index3 = getIndex();

  while (index1 === index2 || index2 === index3 || index1 === index3){
    index2 = getIndex();
    index3 = getIndex();
  }

  //get object from allImages using allimages[number]
  var obj1 = allImages[index1];
  var imagePath1 = obj1.path;
  obj1.numShown += 1;
  console.log(imagePath1);

  var obj2 = allImages[index2];
  var imagePath2 = obj2.path;
  obj2.numShown += 1;
  console.log(imagePath2);

  var obj3 = allImages[index3];
  var imagePath3 = obj3.path;
  obj3.numShown += 1;
  console.log(imagePath3);

  //put the image in a div
  //create an img element
  var img1 = document.createElement('img');
  img1.src = imagePath1;
  image1Div.appendChild(img1);

  var img2 = document.createElement('img');
  img2.src = imagePath2;
  image2Div.appendChild(img2);

  var img3 = document.createElement('img');
  img3.src = imagePath3;
  image3Div.appendChild(img3);

}

picDisplay();
//This is an attempt to log numClicks??? No worky??

// var obj1 = allImages[index1];
// var imagePath1 = obj1.path;
// obj1.numClick += 1;
// console.log(imagePath1);
//
// var obj2 = allImages[index2];
// var imagePath2 = obj2.path;
// obj2.numClick += 1;
// console.log(imagePath2);
//
// var obj3 = allImages[index3];
// var imagePath3 = obj3.path;
// obj3.numClick += 1;
// console.log(imagePath3);
//call getIndex to get a number

// set the src attribute to obj.path
//append the img to a div
