
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
})
