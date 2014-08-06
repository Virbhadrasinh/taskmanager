define(function (require) {
    "use strict";

    var Map = function () {
        return {
            items: {},
            put: function (id, object) {
                this.items[id] = object;
            },
            get: function (id) {
                return this.items[id] || null;
            },
            remove: function (id) {
                delete this.items[id];
            },
            getAll: function () {
                var items = this.items;
                var itemArray = [];
                for (var key in items) {
                    if (items.hasOwnProperty(key)) {
                        itemArray.push(items[key]);
                    }
                }
                return itemArray;
            },
            clear: function () {
                this.items = {};
            }
        };
    };

    return {
        getMapInstance: function () {
            return Map();
        }
    };
});