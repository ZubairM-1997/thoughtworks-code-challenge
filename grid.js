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

module.exports = Grid