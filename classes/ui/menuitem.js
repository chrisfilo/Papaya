
/*jslint browser: true, node: true */
/*global $, isStringBlank, bind */

"use strict";

var papaya = papaya || {};
papaya.ui = papaya.ui || {};



papaya.ui.MenuItem = papaya.ui.MenuItem || function (label, action, callback, modifier) {
    this.label = label;

    this.modifier = "";
    if (!isStringBlank(modifier)) {
        this.modifier = "-" + modifier;
    }

    this.action = action + this.modifier;
    this.id = this.action.replace(/ /g, "_");
    this.callback = callback;
};



papaya.ui.MenuItem.prototype.buildHTML = function (parentId) {
    var html, thisHtml;

    html = "<li id='" + this.id + "'><span class='unselectable'>" + this.label + "</span></li>";
    $("#" + parentId).append(html);

    thisHtml = $("#" + this.id);
    thisHtml.click(bind(this,
        function (event) {
            this.doAction();
        }));

    thisHtml.hover(function () {$(this).toggleClass('menuHover'); });
};



papaya.ui.MenuItem.prototype.doAction = function () {
    this.callback(this.action);
};
