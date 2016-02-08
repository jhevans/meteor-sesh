
Session.set('questions', [
    {text: "Is this going to work?"},
    {text: "If not why not?"}
]);


Template.questions.helpers({
    questions: function () {
        return Session.get('questions');
    }
});

Template.body.events({
    "submit .new-question": function(event){
        event.preventDefault();

        var questions = Session.get('questions');
        var newQuestion = {
            text: event.target.text.value
        };

        questions.push(newQuestion);

        Session.set('questions', questions);

        event.target.text.value = "";
    }
});