app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Kids Toys'; 
  $scope.promo='One Time Offer';
  $scope.products=[ 
  { 
    name: "Alex Playmat", 
    price: 19, 
    pubdate: new Date('2016', '02', '24'), 
    cover: 'img/AlexPlaymat.jpg' ,
    likes:0,
    dislikes:0
  },{
    name: "Toy Bear", 
    price: 22, 
    pubdate: new Date('2016', '05', '24'), 
    cover: 'img/bear.jpg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "Buzzy Bee", 
    price: 32, 
    pubdate: new Date('2016', '08', '24'), 
    cover: 'img/Buzzy-Bee.jpg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "Dinosaur Set", 
    price: 22, 
    pubdate: new Date('2016', '5', '24'), 
    cover: 'img/Dinosaur-Set.jpg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "Ladder Truck", 
    price: 26, 
    pubdate: new Date('2016', '04', '24'), 
    cover: 'img/Ladder-truck.jpg' ,
    likes:0,
    dislikes:0
  }
  ,{
    name: "Leap Frog", 
    price: 22, 
    pubdate: new Date('2016', '07', '24'), 
    cover: 'img/LeapFrog-Fridge.jpg' ,
    likes:0,
    dislikes:0
  },{
    name: "Phone Violet", 
    price: 3, 
    pubdate: new Date('2016', '02', '24'), 
    cover: 'img/PhoneViolet.jpg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "Rubik's Cube", 
    price: 3, 
    pubdate: new Date('2016', '02', '24'), 
    cover: "img/Rubik's_Cube.jpg",
    likes:0,
    dislikes:0
  }
  ]
  $scope.plusOne=function(index) { 
  $scope.products[index].likes += 1; 
};
   $scope.minusOne=function(index) { 
  $scope.products[index].dislikes -= 1; 
};
}]);