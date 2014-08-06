define(function (require) {
    "use strict";
    require('css!./../../css/board.css');

    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        compiledTemplate = Handlebars.compile(require('text!./../../template/boardtemplate.html')),
        compiledListTemplate = Handlebars.compile(require('text!./../../template/listtemplate.html')),
        ListView = require('./listview'),
        BoardView = Backbone.View.extend({
            initialize: function (options) {
                this.render(options);
            },
            render: function (options) {
                this.$el.html(compiledTemplate());
                var that =this;
                function add(length){
                    new ListView({
                        container : that.$('.js-lists'),
                        length : length
                    });
                }

                for(var i = 0;i < 10; i++){
                    add(i+1);
                }
            },
            events: {

            }
        });
    return BoardView;
});