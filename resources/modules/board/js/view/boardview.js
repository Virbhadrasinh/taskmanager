define(function (require) {
    "use strict";
    require('css!./../../css/board.css');
    require('./../helper/dragdrophelper');

    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        compiledTemplate = Handlebars.compile(require('text!./../../template/boardtemplate.html')),
        compiledListTemplate = Handlebars.compile(require('text!./../../template/listtemplate.html')),
        ListView = require('./listview'),
        storageHandler = require('storagehandler'),
        BoardView = Backbone.View.extend({
            initialize: function (options) {
                this.options = options;
                if (typeof(options.boardId) !== 'undefined' && typeof(options.boardId) === 'string') {
                    this.boardData = storageHandler.getBoardDetails(options.boardId);
                    this.render(this.boardData);
                }
            },
            render: function (boardDetails) {
                this.$el.html(compiledTemplate(boardDetails));
                this.createLists(boardDetails.lists, this.options.boardId);
            },
            events: {
                'click .add-list': function (event) {
                    var position = this.$(event.target).position();
                    this.$('.add-list-container').css({
                        top: position.top + 20 + 'px',
                        left: position.left + 15 + 'px'
                    }).toggle();
                },
                'click .save-list': function () {
                    var data = {
                            name: this.$('.list-name').val(),
                            description: this.$('.list-description').val()
                        },
                        listId = storageHandler.setList(this.options.boardId, data);
                    this.$('.list-name').val('');
                    this.$('.list-description').val('');

                    data.listId = listId;
                    this.boardDetails.lists[listId] = data;

                    new ListView({
                        container: this.$('.js-lists'),
                        listData: data,
                        boardId: this.options.boardId,
                        listID: listId
                    });
                    this.$('.add-list-container').hide();
                },
                'click .cancel-item': function () {
                    this.$('.add-list-container').hide();
                }
            },
            updateBoard: function (boardId) {
                this.options.boardId = boardId;
                this.boardDetails = storageHandler.getBoardDetails(boardId);
                this.render(this.boardDetails);
            },
            createLists: function (boardLists, boardId) {
                for (var listID in boardLists) {
                    if (boardLists.hasOwnProperty(listID)) {
                        new ListView({
                            container: this.$('.js-lists'),
                            listData: boardLists[listID],
                            listID: listID,
                            boardId: boardId
                        });
                    }
                }
            }
        });
    return BoardView;
});