app.controller('BookController', ['$scope', function($scope) { 
  $scope.title = 'Books'; 
  $scope.promo='Hurry UP';
  $scope.products=[ 
  { 
    name: "Do It Yourself Jeff Kinney",
    Author:"Jeff Kinney",
    price: 19, 
    pubdate: new Date('2016', '02', '24'), 
    cover: 'img/Do_It_Yourself_Jeff_Kinney.jpg' ,
    likes:0,
    dislikes:0
  },{
    name: "The Magic Finger",
    Author: "Roald Dahl", 
    price: 22, 
    pubdate: new Date('2016', '05', '24'), 
    cover: 'img/The_Magic_Finger_Roald Dahl.jpg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "The Tiger Who Came To Tea",
    Author: "Judith_Kerr", 
    price: 32, 
    pubdate: new Date('2016', '08', '24'), 
    cover: 'img/The_Tiger_Who_Came_To_Tea_Judith_Kerr.jpg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "The Ugly Truth",
    Author:"Jeff_Kinney", 
    price: 22, 
    pubdate: new Date('2016', '5', '24'), 
    cover: 'img/The_Ugly_Truth_Jeff_Kinney.jpg' ,
    likes:0,
    dislikes:0
  },
  {
    name: "The Gruffalo",
    Author:"Julia Donaldson", 
    price: 26, 
    pubdate: new Date('2016', '04', '24'), 
    cover: 'img/TheGruffalo-JuliaDonaldson.jpg' ,
    likes:0,
    dislikes:0
  }
  ,
  {
    name: "The Gruffalos Child",
    Author:"JuliaDonaldson", 
    price: 3, 
    pubdate: new Date('2016', '02', '24'), 
    cover: "img/TheGruffalosChild-JuliaDonaldson.jpg",
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