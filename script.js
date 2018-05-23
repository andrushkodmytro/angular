var mas=[
	{user:'Petro',
	courses:[{
		name:"html,CSS",
		bool:true
	}, 
	{
		name:"java-script",
		bool:false
	},
	{
		name:"type-script",
		bool:true
	}]
	},
	{user:'Stepan',
	courses:[{
		name:"html,CSS",
		bool:true
	}, 
	{
		name:"java-script",
		bool:false
	},
	{
		name:"type-script",
		bool:true
	}]
	},

]




var mainApp=angular.module('mainApp',[]);
mainApp.controller('mainCtrl', ($scope)=>{
	$scope.current={
		name:'Слухачі',
		content: 'users.html'
	};
	$scope.mas=mas;
	$scope.user={};
	$scope.user.pos=null;
	$scope.newUser="";
	$scope.course="";
	$scope.bool='';
	
		
	$scope.courses=(item,index)=>{
		$scope.current.name="Курси",
		$scope.current.content="courses.html";
		$scope.user=item;
		$scope.user.pos=index;
		// console.log($scope.user.pos)

	};
	$scope.users=()=>{
		$scope.current.name='Слухачі',
		$scope.current.content="users.html";
	}
	$scope.deleteUser=(pos)=>{
		$scope.mas.splice(pos,1)
	};
	$scope.addNewUser=(name)=>{
		let obj={
			user:name,
			courses:[]
		};
		$scope.mas.push(obj)
	};
	$scope.newCourse=(course)=>{
		let obj={
			name:course,
			boll:false
		};

		$scope.mas[$scope.user.pos].courses.push(obj);
		console.log($scope.mas)
	};
	$scope.deleteCourse=(index)=>{
		let pos=$scope.user.pos;
		// console.log($scope.mas[pos].)
		$scope.mas[pos].courses.splice(index,1)
	};
	$scope.change=(index)=>{
		let pos=$scope.user.pos;
		$scope.mas[pos].courses[index].bool=!$scope.mas[pos].courses[index].bool;
		console.log($scope.mas[pos].courses[index].bool);
		
	}
})