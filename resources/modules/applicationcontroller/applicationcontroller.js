define(function (require) {
    "use strict";
    var ApplicationView = require('./js/view/applicationview');

    return {
        getInstance: function () {
            return {
                initialize: function (options) {
                    this.view = new ApplicationView(options);
                }
            };
        }
    };
});