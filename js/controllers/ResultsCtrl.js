quizApp.controller("resultsCtrl", ['$scope', 'quizMetrics','DataService',function($scope, quizMetrics,DataService){
    $scope.quizMetrics = quizMetrics;
    $scope.activeQuestion = 0;
    $scope.getAnswerClass = function(index){
        if(index === parseInt(quizMetrics.resultsData[$scope.activeQuestion].correctAnswer)){
            return "bg-success";
        }else if(index === quizMetrics.resultsData[$scope.activeQuestion].selected){
            return "bg-danger";
        }
    };
    $scope.setActiveQuestion = function(index){
        $scope.activeQuestion = index;
    };
    $scope.calculatePerc = function(){
        
       if(quizMetrics.resultsData === null){
           return;
       }
        return quizMetrics.numCorrect / quizMetrics.resultsData.length * 100;
    };
    
    $scope.reset = quizMetrics.reset;
    
}]);