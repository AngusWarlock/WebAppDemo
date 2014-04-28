

//ng app
var app=angular.module('myApp',[]);

app.controller('myController',function($scope){
	$scope.person={
		name:"My frist augular app!"
	};

	$scope.alertName = function(){
		shouldShow = true;
		//alert($scope.person.name);
	};
});

app.controller('repeatController',function($scope){
	$scope.roommates = [
		{name:'张三',id:1},
		{name:'李四',id:2},
		{name:'张三3',id:3},
		{name:'张三4',id:4},
		{name:'张三5',id:5},
		{name:'张三6',id:6},
		{name:'张三7',id:7},
		{name:'张三8',id:8},
		{name:'张三9',id:9},
		{name:'张三10',id:10},
		{name:'张三11',id:11},
		{name:'张三12',id:12},
		{name:'张三13',id:13},
		{name:'张三14',id:14},
		{name:'张三15',id:15},
		{name:'张三16',id:16},
		{name:'张三17',id:17},
		{name:'张三18',id:18},
		{name:'张三19',id:19},
		{name:'张三20',id:20},
		{name:'张三21',id:21},
		{name:'张三22',id:22},
		{name:'张三23',id:23},
		{name:'张三24',id:24},
		{name:'张三25',id:25},
		{name:'张三26',id:26},
		{name:'张三27',id:27},
		{name:'张三28',id:28},
		{name:'张三29',id:29}
	];
});