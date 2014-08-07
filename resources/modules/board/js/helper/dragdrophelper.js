define(function (require) {
    "use strict";

    var $ = require('jquery'),
        storageHandler = require('storagehandler'),
        elementDragged = null;

    $(document).on('dragstart', '.item-container', function (e) {
        e.originalEvent.dataTransfer.effectAllowed = 'move';
        elementDragged = this.parentNode;
        e.originalEvent.dataTransfer.setData('text/plain', 'dummy');
    });

    $(document).on('dragend', '.item-container', function (e) {
        elementDragged = null;
    });

    $(document).on('dragover', '.list-container', function (e) {
        if (e.preventDefault) e.preventDefault();
        e.originalEvent.dataTransfer.dropEffect = 'move';
        return false;
    });

    $(document).on('dragenter', '.list-container', function (e) {
        $(this).addClass('over');
    });

    $(document).on('dragleave', '.list-container', function (e) {
        $(this).removeClass('over');
    });

    $(document).on('drop', '.list-container', function (e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();

        var element = $(this),
            itemContainer = $(this).find('.js-items'),
            oldHTMLItems = itemContainer.html(),
            boardid = element.data('boardid'),
            currentListId = element.data('listid'),
            draggedElementListID = $(elementDragged).data('listid'),
            draggedElementItemID = $(elementDragged).data('itemid');

        if(currentListId !== draggedElementListID){
            element.removeClass('over');
            storageHandler.editItem(boardid, currentListId, draggedElementItemID, storageHandler.getItem(boardid, draggedElementListID, draggedElementItemID));
            storageHandler.removeItem(boardid, draggedElementListID, draggedElementItemID);
            $(elementDragged).data('listid', currentListId);
            itemContainer.html(elementDragged);
            itemContainer.append(oldHTMLItems);
            // Remove the element from the list.
            $(elementDragged).parent('.js-items').remove(elementDragged);
        }

        elementDragged = null;
        return false;
    });
});