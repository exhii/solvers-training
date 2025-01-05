function getScore( form ) {

    var AnswersAndObjects = new Array();
    AnswersAndObjects[0] = ["sye", form.question1];
    AnswersAndObjects[1] = ["gs", form.question2];
    AnswersAndObjects[2] = ["es", form.question3];
    AnswersAndObjects[3] = ["as", form.question4];
    AnswersAndObjects[4] = ["f", form.question5];
    
    var theScore = 0;
    
    for (i=0; i < AnswersAndObjects.length; i++) {
    currQuestionObject = AnswersAndObjects[i][1];
    for (j=0; j<currQuestionObject.length; j++){
    if (currQuestionObject[j].checked && currQuestionObject[j].value == AnswersAndObjects[i][0] ) {
    theScore++;
    break;
    }
    }
    }
    
    theScore = Math.round( theScore/AnswersAndObjects.length*100 );
    
    form.percentage.value = theScore + "%";
    }