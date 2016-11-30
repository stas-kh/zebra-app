import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './newZebra.html';

const modes = {
    DEFAULT: "DEFAULT", 
    EXTENDED: "EXTENDED"
};

Template.newZebra.onCreated(function () {
    this.state = new ReactiveDict();
    this.state.set('mode', modes.DEFAULT);
});

Template.newZebra.events({
    'click #go-to-extend-mode'(event, instance) {
        let questionsCount = document.querySelector('#questions-count').value,
            zebraTitle = document.querySelector('#zebra-title').value;

        instance.state.set('mode', modes.EXTENDED);
        instance.state.set('numOfQuestions', questionsCount);
        instance.state.set('zebraTitle', zebraTitle);
    },
    'click #add-new-zebra'(event, instance) {
        let resultZebra = [];

        for (let formElement of document.querySelectorAll('.question')) {
            let answers = [];
            for (let i = 0; i < formElement.querySelectorAll('.option').length; i++) {
                answers.push(formElement.querySelectorAll('.option')[i].value);
            }

            resultZebra.push({
                question: formElement.querySelector('.question-input').value,
                answers,
                correctAnswer: parseInt(formElement.querySelector('.custom-radio:checked').getAttribute('data-index'))
            });
        }
        
        Meteor.call('zebras.add', instance.state.get('zebraTitle'), resultZebra);

	    FlowRouter.go('/zebras');
    }
});

Template.newZebra.helpers({
    isDefaultMode() {
        return Template.instance().state.get('mode') === modes.DEFAULT;
    },
    getNumOfQuestions() {
        let numOfQuestions = parseInt(Template.instance().state.get('numOfQuestions'));
        return Array.from('x'.repeat(numOfQuestions));
    }
});