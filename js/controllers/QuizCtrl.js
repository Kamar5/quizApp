quizApp.controller("quizCtrl", ['$scope', 'DataService',  'quizMetrics', function QuizController($scope, DataService, quizMetrics){

    $scope.quizMetrics = quizMetrics;
    $scope.activeQuestion = 0;
    var numQuestionAnswered = 0;
    $scope.error = false;
    $scope.finalise = false;
    var getQuestions = function () {
        
            DataService.getQuestions().then(
                function (results) {
                    $scope.questions = results.data;
                },
                function (error) {
                console.log(error);
                });
    };
    getQuestions();
    $scope.setActiveQuestion = function setActiveQuestion(index){
        
        if(index === undefined){
            var breakOut = false;
            var quizLenght = $scope.questions.length - 1;
            while(!breakOut){
                $scope.activeQuestion = $scope.activeQuestion < quizLenght?++$scope.activeQuestion:0;
                
                if($scope.activeQuestion === 0){
                    $scope.error = true;
                }
                
                if($scope.questions[$scope.activeQuestion].selected === null){
                    breakOut = true;
                }
            }
        }else{
            $scope.activeQuestion = index;
        }
    }
    
    
    $scope.questionAnswered = function questionAnswered(){
        
        var quizLength = $scope.questions.length;
        if($scope.questions[$scope.activeQuestion].selected !== null){
            
            numQuestionAnswered++;
            if(numQuestionAnswered >= quizLength){
                for(var i = 0; i < quizLength; i++){
                    if($scope.questions[i].selected === null){
                        setActiveQuestion(i);
                        return;
                    }
                }
                $scope.error = false;
                $scope.finalise = true;
                return;
                
                
            }
        }
        $scope.setActiveQuestion();
        
        
    }
    
    $scope.selectAnswer = function selectAnswer(index){
        $scope.questions[$scope.activeQuestion].selected = index;
    }
    $scope.finaliseAnswers = function finaliseAnswers(){
        $scope.finalise = false;
        numQuestionAnswered = 0;
        $scope.activeQuestion = 0;
        quizMetrics.markQuiz($scope.questions);
        quizMetrics.changeState("quiz", false);
        quizMetrics.changeState("results", true);
    }
    
    
}]);