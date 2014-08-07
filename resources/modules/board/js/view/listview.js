define(function (require) {
    "use strict";
    require('css!./../../css/board.css');

    var Backbone = require('backbone'),
        $ = require('jquery'),
        Handlebars = require('handlebars'),
        compiledTemplate = Handlebars.compile(require('text!./../../template/listtemplate.html')),
        ItemView = require('./itemview'),
        storageHandler = require('storagehandler'),
        ListView = Backbone.View.extend({
            initialize: function (options) {
                this.options = options;
                this.render(options);
            },
            render: function (options) {
                this.$el = $('<div class="list-container" data-listId="' + this.options.listID + '" data-boardId="' + this.options.boardId + '"></div>');
                this.$el.html(compiledTemplate(options.listData));
                options.container.append(this.$el);
                this.createItems(options.boardId, options.listID, options.listData.items);
            },
            events: {
                'click .add-new-card': function (event) {
                    this.$('.add-content').toggle();
                },
                'click .cancel-item': function (event) {
                    this.$('.add-content').hide();
                },
                'click .save-item': function () {
                    var data = {
                            name: this.$('.add-item-name').val(),
                            description: this.$('.add-item-description').val()
                        },
                        itemId = storageHandler.setItem(this.options.boardId, this.options.listID, data);
                    this.$('.add-item-name').val('');
                    this.$('.add-item-description').val('');

                    data.itemId = itemId;
                    this.options.listData.items[itemId] = data;

                    new ItemView({
                        container: this.$('.js-items'),
                        iteamData: data,
                        itemId: itemId,
                        boardId: this.options.boardId,
                        listID: this.options.listID
                    });
                    this.$('.add-content').hide();
                }
            },
            createItems: function (boardId, listID, items) {
                for (var itemId in items) {
                    if (items.hasOwnProperty(itemId)) {
                        new ItemView({
                            container: this.$('.js-items'),
                            iteamData: items[itemId],
                            itemId: itemId,
                            boardId: boardId,
                            listID: listID
                        });
                    }
                }
            }
        });
    return ListView;
});