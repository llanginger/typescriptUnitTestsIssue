"use strict";
exports.__esModule = true;
var hello_1 = require("./hello");
var chai_1 = require("chai");
var describe;
describe("Hello function", function () {
    it("should return hello world", function () {
        var result = hello_1.hello();
        chai_1.expect(result).to.equal("Hello World!");
    });
});
describe("test reducer", function () {
    it("should return false", function () {
        chai_1.assert.equal(hello_1.homeInputState(), ["false"]);
    });
});
