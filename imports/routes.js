import './ui/components/mainLayout.html';

import './ui/components/main/sidebar.html';
import './ui/components/main/navigation.html';
import './ui/components/main/content.html';

import './ui/components/new-zebra/new-zebra.js';
import './ui/components/zebra-list/zebra-list.js';

FlowRouter.route('/', {
    action() {
        BlazeLayout.render('MainLayout', {
            content: 'content'
        });
    }
});

FlowRouter.route('/new-zebra', {
    action() {
        BlazeLayout.render('MainLayout', {
            content: 'newZebra'
        });
    }
});

FlowRouter.route('/zebras', {
    action() {
        BlazeLayout.render('MainLayout', {
            content: 'zebraList'
        });
    }
});