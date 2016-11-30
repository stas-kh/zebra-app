import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Zebras } from '../../../api/zebras';

import './zebraList.html';

Template.zebraList.onCreated(function () {
    Meteor.subscribe('zebrasReady');
});

Template.zebraList.helpers({
    getZebras() {
        return Zebras.find({});
    }
});