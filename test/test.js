
//Unit testing with Mocha and Chai
const assert = require("chai").assert
const expect = require('chai').expect;
const Rover = require("../rover").Rover;
const should = require("chai").should()

const rover_1 = require("../rover").rover_One
const rover_2 = require("../rover").rover_Two

const Grid = require("../grid");



// tests to determine if rover_1 and rover_2 are instances of the class Rover
describe("Rover Instances", function(){

	it("Rover 1 should be an instance of the class Rover",function(){
		expect(rover_1).to.be.an.instanceOf(Rover)
	})

	it("Rover 2 should be an instance of the class Rover",function(){
		expect(rover_2).to.be.an.instanceOf(Rover)
	})

})


//test to determine if the the rover results are correct
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

// test to determine if the Rover class is a child of the Grid class
describe("Class inheritance", function(){

	describe("The Rover class is a child of Grid class", function(){
		it("Rover inherits properties from Grid ", function(){
			expect(Rover.isPrototypeOf(Grid))
		})

	})

})




