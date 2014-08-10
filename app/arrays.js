if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(a, b){ return a + b; });
    },

    remove : function(arr, item) {
        return arr.filter(function(a){ return a !== item; });
    },

    removeWithoutCopy : function(arr, item) {
        var i, len;
        for(i = 0, len = arr.length; i < len; i++){
            if(arr[i] === item){
                arr.splice(i, 1);
                i -= 1;
                len -= 1;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(function(a){return a === item; }).length;
    },

    duplicates : function(arr) {
        var elems = {};
        arr.map(function(a){
            // we've seen it
            if(elems.hasOwnProperty(a)){
                elems[a] += 1;
            } else elems[a] = 1;
            return a;
        });

        var keys = Object.keys(elems);
        keys = keys.filter(function(a){ return elems[a] > 1; });
        return keys;

    },

    square : function(arr) {
        return arr.map(function(a){ return a * a; });
    },

    findAllOccurrences : function(arr, target) {
        var locs = [];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === target)
                locs.push(i);
        }
        return locs;
    }
  };
});
