define(function (require) {
    "use strict";
    var _ = require('underscore'),
        sampleJSON = require('sampleboardjson'),
        storage = localStorage;

    function setTasks(data) {
        storage.setItem('tasks', JSON.stringify(data));
    }

    function getTasks(data) {
        return JSON.parse(storage.getItem('tasks'));
    }

    setTasks({
        boards: sampleJSON.boards
    });

    return {
        saveBoard: function (name) {
            var tasks = getTasks(),
                boardId = _.uniqueId('board_');

            tasks.boards[boardId] = {
                id: boardId,
                name: name,
                lists: {}
            };
            setTasks(tasks);
            return boardId;
        },
        setList: function (boardId, listData) {
            var tasks = getTasks(),
                listId = _.uniqueId('list_'),
                boardLists = tasks.boards[boardId]['lists'];

            listData.id = listId;
            boardLists[listId] = listData;
            boardLists[listId]['items'] = {};
            setTasks(tasks);
            return listId;
        },
        setItem: function (boardId, listId, itemData) {
            var tasks = getTasks(),
                itemId = _.uniqueId('item_');

            itemData.id = itemId;
            tasks.boards[boardId]['lists'][listId]['items'][itemId] = itemData;
            setTasks(tasks);
            return itemId;
        },
        getItem : function (boardId, listId, itemId) {
            var tasks = getTasks();
            return tasks.boards[boardId]['lists'][listId]['items'][itemId];
        },
        editItem: function (boardId, listId, itemId, itemData) {
            var tasks = getTasks();
            tasks.boards[boardId]['lists'][listId]['items'][itemId] = itemData;
            setTasks(tasks);
        },
        removeItem : function(boardId, listId, itemId){
            var tasks = getTasks();
            delete tasks.boards[boardId]['lists'][listId]['items'][itemId];
            setTasks(tasks);
        },
        getBoardDetails: function (boardId) {
            var tasks = getTasks();
            return tasks.boards[boardId];
        },
        getAllBoardNames: function () {
            var boards = getTasks()['boards'],
                allBoards = [];
            for(var boardId in boards){
                allBoards.push({
                    id : boardId,
                    name : boards[boardId]['name']
                });
            }
            return allBoards;
        }
    };
});