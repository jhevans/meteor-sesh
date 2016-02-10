
Template.questions.helpers({
    questions: function () {
        return Questions.find({}, {sort: {created: -1}})
    }
});

Template.questions.events({
    "submit .new-question": function(event){
        event.preventDefault();

        var newQuestion = {
            text: event.target.text.value,
            created: new Date()
        };

        Meteor.call("addQuestion", newQuestion);

        event.target.text.value = "";
    }
});

Template.question.events({
    "click .delete": function(){
        Meteor.call("deleteQuestion", this._id);
    }
});

Template.subjects.helpers({
    subjects: function () {
        return Subjects.find({}, {sort: {created: -1}})
    }
});

Template.subjects.events({
    "submit .new-subject": function(event){
        event.preventDefault();

        var newSubject = {
            subject: event.target.subject.value,
            volunteer: event.target.volunteer.value,
            created: new Date()
        };

        Meteor.call("addSubject", newSubject);

        event.target.subject.value = "";
        event.target.volunteer.value = "";
    }
});

Template.subject.events({
    "click .delete": function(){
        Meteor.call("deleteSubject", this._id);
    }
});
