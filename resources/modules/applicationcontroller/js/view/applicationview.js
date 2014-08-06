define(function (require) {
    "use strict";

    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        compiledTemplate = Handlebars.compile(require('text!./../../template/applicationtemplate.html')),
        ApplicationView = Backbone.View.extend({
            initialize: function (options) {
                this.render(options);
                this.initChildren(options);
            },
            render: function () {
                this.$el.html(compiledTemplate());
            },
            initChildren: function (options) {
                var appView = this;

                require(['modules/header/header', 'modules/board/board'],
                    function (Header, Board) {

                        appView.header = Header.getInstance();
                        appView.header.initialize({
                            el: appView.$(".js-header-bar-container"),
                            userDetails: options.userDetails
                        });

                        appView.board = Board.getInstance();
                        appView.board.initialize({
                            el: appView.$(".js-body-bar-container"),
                            userDetails: options.userDetails
                        });


                    });
            }
        });
    return ApplicationView;
});