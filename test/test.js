
//Unit testing with Mocha and Chai
const assert = require("chai").assert
const expect = require('chai').expect;
const Rover = require("../rover");

const rover_1 = require("../rover").rover_One
const rover_2 = require("../rover").rover_Two

const Grid = require("../grid");

describe("Rover results", function(){

	describe("Rover 1", function(){
		it("should console.log final information", function(){
			//Rover 1 should print 1 3 "N" on console
			expect(rover_1.reportStatus()).to.equal("1, 3, N")
		})
	})

	describe("Rover 2", function(){
		it("should console.log final information", function(){
			// Rover 2 should print 5 1 "E" on console
			expect(rover_2.reportStatus()).to.equal("5, 1, E")

		})
	})
})





