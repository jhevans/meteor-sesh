Questions = new Mongo.Collection("questions");
Subjects = new Mongo.Collection("subjects");

Meteor.methods({
    "deleteQuestion": function(questionId){
        Questions.remove(questionId);
    },
    "addQuestion": function(question){
        question.random = Math.random();
        //if(Meteor.isServer){
        //    var x = 0;
        //    while(x < 123456){
        //        console.log(x);
        //        x++;
        //    }
        //}
        Questions.insert(question);
    },
    "addSubject": function(subject){
        Subjects.insert(subject);
    },
    "deleteSubject": function(subjectId){
        Subjects.remove(subjectId);
    }
});