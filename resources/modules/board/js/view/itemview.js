define(function (require) {
    "use strict";
    require('css!./../../css/board.css');

    var Backbone = require('backbone'),
        $ = require('jquery'),
        Handlebars = require('handlebars'),
        compiledTemplate = Handlebars.compile(require('text!./../../template/itemtemplate.html')),
        storageHandler = require('storagehandler'),
        ItemView = Backbone.View.extend({
            initialize: function (options) {
                this.options = options;
                this.render(options);
            },
            render: function (options) {
                this.$el = $('<div data-listId="' + this.options.listID + '" data-itemId="' + this.options.itemId + '"></div>');
                this.$el.html(compiledTemplate(options.iteamData));
                options.container.append(this.$el);
            },
            events: {
                'click .icon-edit': function () {
                    this.$('.display-content').toggle();
                    this.$('.edit-content').toggle();
                    this.$('.item-name').val(this.options.iteamData.name);
                    this.$('.item-description').val(this.options.iteamData.description);
                },
                'click .cancel-item': function () {
                    this.$('.edit-content').hide();
                    this.$('.display-content').show();
                },
                'click .edit-item': function () {
                    var data = {
                        itemId: this.options.itemId,
                        name: this.$('.item-name').val(),
                        description: this.$('.item-description').val()
                    };
                    storageHandler.editItem(this.options.boardId, this.options.listID, this.options.itemId, data);
                    this.$('.item-name').val('');
                    this.$('.item-description').val('');

                    this.$('.display-name').html(data.name);
                    this.$('.display-description').html(data.description);
                    this.options.iteamData.name = data.name;
                    this.options.iteamData.description = data.description;

                    this.$('.edit-content').hide();
                    this.$('.display-content').show();
                }
            }
        });
    return ItemView;
});