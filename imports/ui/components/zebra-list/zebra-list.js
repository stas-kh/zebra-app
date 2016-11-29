import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './zebraList.html';
import { Zebras } from '../../../api/zebras';

Template.zebraList.onCreated(function () {
    Meteor.subscribe('zebrasReady');
});

Template.zebraList.helpers({
    getZebras() {
        return Zebras.find({});
    }
});