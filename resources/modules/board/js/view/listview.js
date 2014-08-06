define(function (require) {
    "use strict";
    require('css!./../../css/board.css');

    var Backbone = require('backbone'),
        $ = require('jquery'),
        Handlebars = require('handlebars'),
        compiledTemplate = Handlebars.compile(require('text!./../../template/listtemplate.html')),
        Itemview = require('./itemview'),
        ListView = Backbone.View.extend({
            initialize: function (options) {
                this.render(options);
            },
            render: function (options) {
                this.$el = $('<div class="list-container"></div>');
                this.$el.html(compiledTemplate());
                options.container.append(this.$el);

                for(var i = 0;i < options.length; i++){
                    new Itemview({
                        container : this.$('.js-items')
                    });
                }

            },
            events: {
                'click .add-new-card': function () {
                    this.$('.add-content').show();
                },
                'click .cancel-item': function () {
                    this.$('.add-content').hide();
                }
            }
        });
    return ListView;
});