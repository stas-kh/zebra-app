import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Zebras = new Mongo.Collection('zebras');

if (Meteor.isServer) {
	Meteor.publish('zebrasReady', function () {
		return Zebras.find({});
	});
}

Meteor.methods({
	'zebras.add'(title, questions) {
		if (!this.userId) {
			throw new Error('User is not logged in.')
		}

		check(title, String);
		check(questions, [Object]);

		Zebras.insert({
			title,
			questions
		});
	},
	'zebras.remove'(zebraId) {
		check(zebraId, String);

		Zebras.remove(zebraId);
	}
});