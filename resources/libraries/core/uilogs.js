(function (window) {
    "use strict";
    window.developmentmode = window.appConf.isDevMode();
    if (window.console === undefined) {
        window.console = {
            log: function () {
            }
        };
    }

    var oldconsolelog = console.log || function () {
    };

    console.log = function () {
        if (developmentmode) {
            oldconsolelog.apply(this, arguments);
        }
    };
})(window);