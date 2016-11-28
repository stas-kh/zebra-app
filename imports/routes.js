import './ui/components/mainLayout.html';
import './ui/components/sidebar.html';
import './ui/components/navigation.html';
import './ui/components/content.html';
import './ui/components/new-zebra.js';

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