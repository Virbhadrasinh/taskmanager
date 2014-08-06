define(function (require) {
    "use strict";
    var BoardView = require('./js/view/boardview');

    return {
        getInstance: function () {
            return {
                initialize: function (options) {
                    this.view = new BoardView(options);
                }
            };
        }
    };
});