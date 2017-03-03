import { helloString, helloObject, helloArray } from "./hello";
import { expect } from "chai"

describe("Hello string function", () => {
    it("should return hello", () => {
        const result = helloString();
        expect(result).to.equal("Hello");
    })
})

describe("Hello object function", () => {
    it("should return hello", () => {
        const result = helloObject();
        expect(result).to.equal({greeting: "Hello"});
    })
})

describe("Hello array function", () => {
    it("should return hello", () => {
        const result = helloArray();
        expect(result).to.equal(["Hello"]);
    })
})