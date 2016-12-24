quizApp.controller("listOfSoccerClubsCtrl", ['$scope', 'DataService','quizMetrics', function ListController($scope, DataService, quizMetrics){
    
    
    $scope.activeClub = {};
    $scope.searchClubs = "";
    $scope.quizMetrics = quizMetrics;
    
    var getSoccerClubs = function () {
            DataService.getSoccerClubs().then(
            function (results) {
                $scope.clubs = results.data;
            },
            function (error) {
                console.log(error);
            });
        };
    getSoccerClubs();
    
    $scope.changeActiveClub = function(index){
        $scope.activeClub = index;
    }
    
    $scope.activateQuiz = function(){
       quizMetrics.changeState("quiz", true);
    }
    
}]);