quizApp.factory('DataService', ["$http",
    function ($http) {
        //get the data from the back-end
        var getSoccerClubs = function () {
            return $http.get('json/soccerClubs.json');
        };
        
        var getQuestions = function(){
            
            return $http.get('json/soccerClubsQuestions.json');
        };
        
        var sendQuestionToDataBase = function (question) {
            return $http.post("json/soccerClubs.json", question);
        };
        
        var correctAnswers = [2,1,1,0,3,3,2,2,1,0];
        
        return {
            getSoccerClubs: getSoccerClubs,
            getQuestions: getQuestions,
            sendQuestionToDataBase: sendQuestionToDataBase

        };
    }]);
