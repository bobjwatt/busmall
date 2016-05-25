var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var allProducts = [];
var totalClicks = 0;
var chartData = [];

var picNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark','tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function Product(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'assets/' + name + '.jpg';
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
  if (totalClicks < 5) {
    if(event.target.id === 'pic-container') {
      return alert('Opps! Make Sure You Click Directly On The Picture.');
    }
    // console.log(event.target.alt + ' was clicked');
    for (var i = 0; i < allProducts.length; i++) {
      if (event.target.alt === allProducts[i].name) {
        allProducts[i].clicks += 1;//localStorage.get

        console.log(allProducts[i].name + ' has ' + allProducts[i].clicks + ' clicks');
      }
    }
    displayPics();
    totalClicks++;
  } else {
    updateChartArrays();
    createChart();
    console.log('Data: ' + chartData);
    //display results
    alert('Thanks for your selections, here\'s your results.');
  }
}

function updateChartArrays() {
  for (var i = 0; i < allProducts.length; i++) {
    chartData.push(allProducts[i].clicks);

  }
}
picContainer.addEventListener('click', handlePicContainerClick);

displayPics();

function createChart(){
  var ctx = document.getElementById('pic-picks').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: picNames,

      datasets: [{
        label: 'Number of Selections',
        data: chartData,
      }]
    },
  });
  var barChart = new Chart(ctx).Bar(chartData);

}
