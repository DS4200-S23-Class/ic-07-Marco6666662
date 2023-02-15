const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};


// Binding data
const data1 = [55000, 48000, 27000, 66000, 90000];

console.log(Math.max(data1))

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME3 = d3.select("#vis")
					.append("svg")
						.attr("height", VIS_HEIGHT)
						.attr("width", VIS_WIDTH)
						.attr("class", "frame");

// scaling functions

const MAX_X = d3.max(data1, (d) => {return d;});
console.log("Max x: " + MAX_X);

// scale function
const X_SCALE = d3.scaleLinear()
					.domain([0, (MAX_X + 10000)])
					.range([0, VIS_WIDTH]);

FRAME3.selectAll("points")
		.data(data1)
		.enter()
		.append("circle")
			.attr("cx", (d) => {
				return (X_SCALE(d) + MARGINS.left
			)})
			.attr("cy", MARGINS.top)
			.attr("r", 20)
			.attr("class", "point");


// add an axis
FRAME3.append("g")
		.attr("transform",
			"translate(" + MARGINS.left + "," + (VIS_HEIGHT + MARGINS.top + ")"))
		.call(d3.axisBottom(X_SCALE).ticks(4))
			.attr("font-size", "20px");







































