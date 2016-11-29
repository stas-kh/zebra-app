import './ui/components/mainLayout.html';
import './ui/components/sidebar.html';
import './ui/components/navigation.html';
import './ui/components/content.html';
import './ui/components/new-zebra.js';
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