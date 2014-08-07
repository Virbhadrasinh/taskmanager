require([ 'jquery', 'modules/applicationcontroller/applicationcontroller' ], function ($, ApplicationController) {
    "use strict";
    ApplicationController.getInstance().initialize({
        el: $('.js-app-container'),
        userDetails: {
            name: 'Virbhadrasinh',
            avatarURL: 'https://trello-avatars.s3.amazonaws.com/4fb67f6896e541c1d7b5776040acc000/30.png'
        }
    });
});