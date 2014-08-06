require([ 'jquery', 'modules/applicationcontroller/applicationcontroller' ], function ($, ApplicationController) {
    "use strict";
    ApplicationController.getInstance().initialize({
        el: $('.js-app-container')
    });
});