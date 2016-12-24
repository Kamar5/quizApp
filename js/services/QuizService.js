quizApp.factory("quizMetrics", ['DataService',function QuizMetrics(DataService){ 
    var quizObject = {
        
        quizActive: false,
        resultsData: null,
        resultsActive: false,
        numCorrect: 0,
        changeState: function changeState(metric, state){
            if(metric === "quiz"){
                quizObject.quizActive = state;
            }else if(metric === "results"){
                quizObject.resultsActive = state;
            }else{
                return false;
            }
            
        },
        markQuiz: function markQuiz(data){
            quizObject.correctAnswers = DataService.correctAnswers;
            for(var i = 0; i < data.length; i++){
                if(data[i].selected === parseInt(data[i].correctAnswer)){
                    data[i].correct = true;
                    quizObject.numCorrect++;
                }else{
                    data[i].correct = false;
                }
            }
            quizObject.resultsData = data;
        },
        reset: function reset(){
            quizObject.changeState("results", false);
            quizObject.numCorrect = 0;
            quizObject.numCorrect = 0;
            for(var i = 0; i < quizObject.resultsData.length; i++){
                quizObject.resultsData[i].correct = null;
                quizObject.resultsData[i].selected = null;
            };
        }
    }
    
    return quizObject;
    
    
}]);