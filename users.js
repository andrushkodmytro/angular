<div>
	<h1>Слухачі</h1>
	<div class="input">
		<input type="text" placeholder='Введіть імя слухача'>
		<button>Add User</button>
	</div>
	<div>
		<table>
			<tr ng-repeat="item in mas">
				<td>{{$index+1}}</td>
				<td>{{item}}</td>
			</tr>
		</table>
	</div>
</div>