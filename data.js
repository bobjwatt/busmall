var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var allProducts = [];

var picNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg','tauntaun.jpg', 'unicorn.jpg', 'usb.jpg', 'water-can.jpg', 'wine-glass.jpg'];

function Product(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'assets/' + name;
}

for (var i = 0; i < picNames.length; i++) {
  allProducts.push(new Product(picNames[i]));
}

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function displayPics() {
  var leftIndex = randNum(0, allProducts.length);
  left.src = allProducts[leftIndex].path;
  left.alt = allProducts[leftIndex].name;
  allProducts[leftIndex].views += 1;
  // console.log(allProducts[leftIndex].name + ' has been shown ' + allProducts[leftIndex].views + ' times');

  var centerIndex = randNum(0, allProducts.length);
  while (centerIndex === leftIndex) {
    // console.log('duplicate found between center and left');
    centerIndex = randNum(0, allProducts.length);
  }
  center.src = allProducts[centerIndex].path;
  center.alt = allProducts[centerIndex].name;
  allProducts[centerIndex].views += 1;
  // console.log(allProducts[centerIndex].name + ' has been shown ' + allProducts[centerIndex].views + ' times');

  var rightIndex = randNum(0, allProducts.length);
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    // console.log('duplicate found between right and left/center');
    rightIndex = randNum(0, allProducts.length);
  }
  right.src = allProducts[rightIndex].path;
  right.alt = allProducts[rightIndex].name;
  allProducts[rightIndex].views += 1;
  // console.log(allProducts[rightIndex].name + ' has been shown ' + allProducts[rightIndex].views + ' times');
}

function handlePicContainerClick() {
  if(event.target.id === 'pic-container') {
    return alert('Opps! Make Sure You Click Directly On The Picture.');
  }
  // console.log(event.target.alt + ' was clicked');
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].clicks += 1;
      console.log(allProducts[i].name + ' has ' + allProducts[i].clicks + ' clicks');
    }
  }

  displayPics();
}

picContainer.addEventListener('click', handlePicContainerClick);

displayPics();
////Old Code////
// var containerElement = document.getElementById('imageContainer');
// var image1Div = document.getElementById('image1');
// var image2Div = document.getElementById('image2');
// var image3Div = document.getElementById('image3');
//
// var allImages = [];
//
// var allImageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.jpg', 'water-can.jpg', 'wine-glass.jpg'];
//
// function Product(name) {
//   this.name = name;
//   this.numShown = 0;
//   this.numClick = 0;
//   this.path = 'assets/' + name;
// }
//
// for (var i = 0; i < allImageNames.length; i++) {
//   allImages.push(this);
//   // allImages.push(new Product(allImageNames[i]));
//   var clickImages = new Product(allImageNames[i]);
// }
//
// function getIndex() {
//   return Math.floor(Math.random() * allImages.length);
// //   //function randNum(min, max) {
// //   // return Math.floor(Math.random()* (max - min)) + min;
// // }
// }
//
// //function picDisplay() {}
//
// function picDisplay() {
//   var index1 = getIndex();
//   var index2 = getIndex();
//   var index3 = getIndex();
//
//   while (index1 === index2 || index2 === index3 || index1 === index3){
//     index2 = getIndex();
//     index3 = getIndex();
//   }
//
//  function handleClick(event) {
//
//     console.log(event.target);
//   }
//   containerElement.addEventListener('click', handleClick);
//   //get object from allImages using allimages[number]
//   var obj1 = allImages[index1];
//   var imagePath1 = obj1.path;
//   // var imagePath1 = obj1.name;
//   obj1.numShown += 1;
//   console.log(imagePath1);
//
//   var obj2 = allImages[index2];
//   var imagePath2 = obj2.path;
//   // var imagePath2 = obj2.name;
//   obj2.numShown += 1;
//   console.log(imagePath2);
//
//   var obj3 = allImages[index3];
//   var imagePath3 = obj3.path;
//   // var imagePath3 = obj3.name;
//   obj3.numShown += 1;
//   console.log(imagePath3);
//   // for (var i = 0; i < allImageNames.length; i++) {
//   //
//   //   allImages.push(this);
//
//   //put the image in a div
//   //create an img element
//   var img1 = document.createElement('img');
//   img1.src = imagePath1;
//   image1Div.appendChild(img1);
//
//   var img2 = document.createElement('img');
//   img2.src = imagePath2;
//   image2Div.appendChild(img2);
//
//   var img3 = document.createElement('img');
//   img3.src = imagePath3;
//   image3Div.appendChild(img3);
//
// }
//
// picDisplay();
// // set the src attribute to obj.path
// //append the img to a div
