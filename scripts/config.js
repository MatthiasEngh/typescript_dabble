"use strict";
///<reference path='../node_modules/definitely-typed-requirejs/require.d.ts' />
/// <reference path="app/GameController.ts" />
require.config({
    baseUrl: 'scripts/app'
});
require([
    "GameController"
], function (gameController) {
    var appMain = new gameController.GameController();
    appMain.run();
});
