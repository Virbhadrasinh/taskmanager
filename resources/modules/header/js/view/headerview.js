define(function (require) {
    "use strict";
    require('css!./../../css/header.css');

    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        compiledTemplate = Handlebars.compile(require('text!./../../template/headertemplate.html')),
        HeaderView = Backbone.View.extend({
            initialize: function (options) {
                this.render(options);
            },
            render: function (options) {
                this.$el.html(compiledTemplate(options.userDetails));
            },
            events: {
                'click .add-btn': function () {
                    this.$('.add-task').toggle();
                },
                'click .close': function () {
                    this.$('.add-task').hide();
                },
                'click .add-details' : function(event){
                    this.$('.add-new-board').toggle();
                },
                'click .cancel-item': function(event){
                    this.$('.add-new-board').hide();
                },
                'click .show-board-list': function(event){
                    this.$('.boards').toggle();
                }
            }
        });
    return HeaderView;
});