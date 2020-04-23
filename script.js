let app = angular.module("myapp", []);
app.controller('myctrl', function ($scope, $sce) {

	$scope.cleanTimeLine = function () {
		//sort timeline
		timeline.sort(function (a, b) { return a.year - b.year });

		//also group similar keys into one
		let temp = timeline.reduce((acc, curr) => {
			if (acc.hasOwnProperty(curr.year)) {
				acc[curr.year] = acc[curr.year].concat("<br>" + curr.text)
			} else {
				acc[curr.year] = curr.text
			}
			return acc;
		}, {});

		temp = Object.keys(temp).map((key) => {
			return {
				'year': key,
				'text': temp[key]
			}
		});
		timeline = temp;
		return temp;
	}

	$scope.init = function () {
		$scope.timeline = $scope.cleanTimeLine();
			};
	$scope.init();
});