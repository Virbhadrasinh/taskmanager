define(function (require) {
    "use strict";
    require('css!./../../css/header.css');

    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        compiledTemplate = Handlebars.compile(require('text!./../../template/headertemplate.html')),
        allBoardsCompiledTemplate = Handlebars.compile(require('text!./../../template/allboards.html')),
        storageHandler = require('storagehandler'),
        HeaderView = Backbone.View.extend({
            initialize: function (options) {
                this.addBoardCallback = options.addBoardCallback;
                this.render(options);
            },
            render: function (options) {
                this.$el.html(compiledTemplate(options.userDetails));
            },
            events: {
                'click .add-btn': function () {
                    this.$('.boards').hide();
                    this.$('.add-board-container').toggle();
                    this.$('.error').hide();
                },
                'click .close': function () {
                    this.$('.add-board-container').hide();
                    this.$('.add-new-board').hide();
                    this.$('.error').hide();
                },
                'click .add-details': function () {
                    this.$('.add-new-board').toggle();
                    this.$('.error').hide();
                },
                'click .cancel-item': function () {
                    this.$('.add-new-board').hide();
                    this.$('.error').hide();
                },
                'click .show-board-list': function () {
                    this.$('.all-boards').html(allBoardsCompiledTemplate({boards : storageHandler.getAllBoardNames()}));
                    this.$('.boards').toggle();
                    this.$('.error').hide();
                    this.$('.add-new-board').hide();
                    this.$('.add-board-container').hide();
                },
                'click .save-board': function () {
                    var boardName = this.$('.js-board-name').val();
                    if (typeof(boardName) !== 'undefined' && boardName !== "") {
                        this.addBoardCallback(storageHandler.saveBoard(boardName));
                        this.$('.js-board-name').val('');
                        this.$('.add-new-board').hide();
                        this.$('.add-board-container').hide();
                        this.$('.error').hide();
                    } else {
                        this.$('.error').show();
                    }
                },
                'click .board-name': function (event) {
                    this.addBoardCallback(this.$(event.target).data('boardid'));
                    this.$('.boards').hide();
                }
            }
        });
    return HeaderView;
});