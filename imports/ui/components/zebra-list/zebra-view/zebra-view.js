import { Template } from 'meteor/templating';

import { Zebras } from '../../../../api/zebras';

import './zebraView.html';

Template.zebraView.onCreated(function () {
	Meteor.subscribe('zebrasReady');

	this.state = new ReactiveDict();
	this.state.set('zebra', {});
});

Template.zebraView.events({

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
	}
});