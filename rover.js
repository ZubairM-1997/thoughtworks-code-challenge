class Grid{
	constructor(x_lim, y_lim){
		this.x_lim = x_lim
		this.y_lim = y_lim
	}

	hitBoundary(){


		// if (this.x < 0 || this.x > x_lim){
		// 	return true
		// } else if  (this.y < 0 || this.y > y_lim){
		// 	return true
		// } else {
		// 	return false
		// }


		// if x and y values go below 0
		this.x = (this.x > 0) ? this.x : 0
		this.y = (this.y > 0) ? this.y : 0

		// if x and y values exceed maxima of the plane
		this.x = (this.x < this.x_lim) ? this.x : this.x_lim
		this.y = (this.y < this.y_lim) ? this.y : this.y_lim


		// console.log(this.x, this.y)


	}

}



class Rover extends Grid{
	constructor(x, y, direction, x_lim, y_lim){
		super(x_lim, y_lim)

		this.x = x
		this.y = y

		//converting directions into degrees relative to North
		switch(direction){
			case "N":
				this.direction = 0
				break;

			case "E":
				this.direction = 90
				break;

			case "W":

				this.direction = 270
				break;

			case "S":
				this.direction = 180
				break;
		}



	}

		// this function processes the string of instructions
		// str is the string of instructions

		recieve_message(str){
			for (let i = 0; i < str.length; i++){
				// console.log(str[i])
				if (str[i] !== "M"){
					// if instruction is L or R
					this.rotate(str[i])
				} else {
					this.move()

			}
		}
	}


	// this function changes direction in degrees
	// direction is a character which is either L or R

	rotate(direction){
			if (direction === "L"){

				this.direction -= 90

			} else if (direction === "R") {
				this.direction += 90

			} else {
				throw "Invalid Instruction"
			}

	}

	move(){
		// formula that performs translation of a point (x,y) in 2D plane

		this.x = this.x + Math.round(Math.sin(this.direction * (Math.PI / 180)))
		this.y = this.y + Math.round(Math.cos(this.direction * (Math.PI / 180)))


		//if the rover exits the area of plane, reset the coordinates to  boundary values
		this.hitBoundary()

	}


	//reports the final (x,y) coordinates and the facing direction
	reportStatus(){


		let dir_letter = null
		this.direction = this.direction % 360



		if (this.direction < 0){
			this.direction = 360 + this.direction
		}

		switch(this.direction){
			case 0:
				dir_letter = "N"
				break;

			case 90:
				dir_letter = "E"
				break;

			case 180:
				dir_letter = "S"
				break;

			case 270:
				dir_letter = "W"
				break;

		}


		console.log(this.x, this.y, dir_letter)
	}
}


// let x_val = 0 + Math.round(Math.sin(-180 * Math.PI / 180 ))
// console.log(x_val)

let rover_One = new Rover(1,2, "N", 5,5)
rover_One.recieve_message("LMLMLMLMM")
rover_One.reportStatus()

let rover_Two = new Rover(3, 3, "E", 5,5)
rover_Two.recieve_message("MMRMMRMRRM")
rover_Two.reportStatus()