import { Template } from 'meteor/templating';

import './resultWindow.html';

Template.resultWindow.events({

});

Template.resultWindow.helpers({
	getName() {
		return FlowRouter.getQueryParam('zebraName');
	},
	getCorrectAnswersCount() {
		return FlowRouter.getQueryParam('correctAnswersCount');
	},
	getQuestionsCount() {
		return FlowRouter.getQueryParam('questionsCount');
	},
	isAllAnswersDone() {
		return FlowRouter.getQueryParam('correctAnswersCount') === FlowRouter.getQueryParam('questionsCount');
	}
});