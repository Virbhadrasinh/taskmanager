var require = {
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: './resources',
    paths: {
        jquery: 'libraries/jquery/jquery-loader',
        underscore: 'libraries/underscore/underscore',
        backbone: 'libraries/backbone/backbone',
        handlebars: 'libraries/handlebars/handlebars',
        css: 'libraries/require/css',
        text: 'libraries/require/text',
        normalize: "libraries/require/normalize",
        storagehandler: 'libraries/storagehandler/storagehandler',
        sampleboardjson: 'libraries/storagehandler/sampleboardjson'
    },
    shim: {
        'underscore': {
            exports: '_',
            init: function () {
                "use strict";
                return this._.noConflict();
            }
        },
        'backbone': {
            deps: [ 'jquery', 'underscore' ],
            exports: 'Backbone',
            init: function (_) {
                "use strict";
                return this.Backbone.noConflict();
            }
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    waitSeconds: 120
};