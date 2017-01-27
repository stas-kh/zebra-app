import { Template } from 'meteor/templating';

import { Zebras } from '../../../../api/zebras';

import './zebraView.html';

Template.zebraView.onCreated(function () {
	Meteor.subscribe('zebrasReady');

	this.state = new ReactiveDict();
	this.state.set('zebra', {});
	this.state.set('userAnswers', []);
});

Template.zebraView.events({
	'click #get-the-result'(event, instance) {
		let userAnswers = [],
			correctAnswers = instance.state.get('zebra').zebras.map((zebra) => zebra.correctAnswer),
			correctAnswersCount = 0;

		for (let formElement of document.querySelectorAll('.question')) {
			userAnswers.push(parseInt(formElement.querySelector('.custom-radio:checked').value));
		}

		userAnswers.forEach((value, index) => {
			if (correctAnswers[index] === value) {
				correctAnswersCount++;
			}
		});

		FlowRouter.go('/result', null, {
			zebraName: instance.state.get('zebra').title,
			correctAnswersCount,
			questionsCount: correctAnswers.length
		});
	}
});

Template.zebraView.helpers({
	getTitle() {
		let zebra = Zebras.findOne({
			_id: FlowRouter.getParam('zebraId')
		});

		if (zebra) {
			Template.instance().state.set('zebra', zebra);
			return zebra.title;
		}
	},
	getQuestions() {
		let zebra = Template.instance().state.get('zebra');

		if (zebra) {
			return zebra.zebras;
		}
	},
	isChecked(index) {
		return index === 0;
	}
});