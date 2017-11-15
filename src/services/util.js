/**
 * Created by Sahar Zakay.
 */
var module = (function() {
    'use strict';

    function _isString(x) {
        return Object.prototype.toString.call(x) === "[object String]"
    }

    function _isFunction(func) {
        return Object.prototype.toString.call(func) === '[object Function]';
    }

    function _validateString(str){
        return (str + '').trim() || 'Untitled';
    }

    return {
        isString: _isString,
        isFunction: _isFunction,
        getValidString: _validateString
    }
})();

export default module;