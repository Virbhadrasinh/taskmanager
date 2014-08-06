define(function (require) {
    "use strict";
    var HeaderView = require('./js/view/headerview');

    return {
        getInstance: function () {
            return {
                initialize: function (options) {
                    this.view = new HeaderView(options);
                }
            };
        }
    };
});