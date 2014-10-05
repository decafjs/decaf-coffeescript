/**
 * Created with JetBrains WebStorm.
 * User: mschwartz
 * Date: 6/12/13
 * Time: 3:16 PM
 * To change this template use File | Settings | File Templates.
 */

/*global require, include */
(function() {
    "use strict";

    var rhino = require('builtin/rhino'),
        me = {};

    include.call(me, require.fsPath + 'lib/coffee-script-1.8.0.js');
    include.paths.push('./coffeescript');
    require.paths.push('./coffeescript');
    require.extensions.coffee = include.extensions.coffee = function(source, filename) {
        return rhino.runScript(me.CoffeeScript.compile(source, { bare: true }), filename, 1, this);
    };
    exports.CoffeeScript = me.CoffeeScript;

}());
