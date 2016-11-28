import { Template } from 'meteor/templating';

import './newZebra.html';

const modes = {
    DEFAULT: "DEFAULT", 
    EXTENDED: "EXTENDED"
};

Template.newZebra.onCreated(function () {
    this.state = new ReactiveDict();

    Template.instance().state.set('mode', modes.DEFAULT);
});

Template.newZebra.events({
    'click #apply-changes'(event, instance) {
        instance.state.set('mode', modes.EXTENDED);
    }
});

Template.newZebra.helpers({
    isDefaultMode() {
        console.log(Template.instance().state.get('mode'));
        return Template.instance().state.get('mode') === modes.DEFAULT;
    },
    goToNextMode() {
    },
    getNumOfQuestions() {

    }
});