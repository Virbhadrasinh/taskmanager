define(function (require) {
    "use strict";
    require('css!./../../css/board.css');

    var Backbone = require('backbone'),
        $ = require('jquery'),
        Handlebars = require('handlebars'),
        compiledTemplate = Handlebars.compile(require('text!./../../template/itemtemplate.html')),
        Itemview = Backbone.View.extend({
            initialize: function (options) {
                this.render(options);
            },
            render: function (options) {
                this.$el = $('<div></div>');
                this.$el.html(compiledTemplate());
                options.container.append(this.$el);
            },
            events: {
                'click .icon-edit': function () {
                    this.$('.display-content').hide();
                    this.$('.edit-content').show();
                },
                'click .cancel-item': function () {
                    this.$('.edit-content').hide();
                    this.$('.display-content').show();
                }
            }
        });
    return Itemview;
});