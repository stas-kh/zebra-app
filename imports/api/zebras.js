import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Zebras = new Mongo.Collection('zebras');

if (Meteor.isServer) {
	Meteor.publish('zebrasReady', function zebrasReadyCallback() {
		return Zebras.find({});
	});
}

Meteor.methods({
	'zebras.add'(title, zebras) {
		if (!this.userId) {
			throw new Error('User is not logged in.')
		}

		check(title, String);
		check(zebras, [Object]);

		zebras.forEach(el => {
			check(el.question, String);
			check(el.answers, [String]);
			check(el.correctAnswer, Number);
		});

		Zebras.insert({	title, zebras });
	},
	'zebras.remove'(zebraId) {
		check(zebraId, String);

		Zebras.remove(zebraId);
	}
});