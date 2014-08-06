var require = {
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: './resources',
    paths: {
        jquery: 'libraries/jquery/jquery-loader',
        underscore: 'libraries/underscore/underscore',
        backbone: 'libraries/backbone/backbone',
        handlebars: 'libraries/handlebars/handlebars',
        handlebarshelpers: 'libraries/handlebars/handlebarshelpers',
        bootstrap: 'libraries/bootstrap/js/bootstrap.min',
        css: 'libraries/require/css',
        "css-builder": 'libraries/require/css-builder',
        text: 'libraries/require/text',
        normalize: "libraries/require/normalize",
        uilogs: 'libraries/core/uilogs',
        utils: 'libraries/core/utils',
        map: 'libraries/core/map',
        ajaxhandler: 'libraries/ajaxhandler/ajaxhandler'
    },
    shim: {
        'underscore': {
            exports: '_',
            init: function () {
                return this._.noConflict();
            }
        },
        'backbone': {
            deps: [ 'jquery', 'underscore' ],
            exports: 'Backbone',
            init: function (_) {
                return this.Backbone.noConflict();
            }
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'handlebarshelpers': {
            deps: [ 'handlebars' ]
        }
    },
    waitSeconds: 120
};