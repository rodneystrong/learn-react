/** @jsx React.DOM */
//create lines of text with edit buttons for a user to edit text

//create your variable (which is pretty much a componenet)
// var theContainer = React.createClass({
// 	render: function() {
// 		//wtf why do i need to put a parentheses after the return keyword??
// 		return <div>
// 					<h1>Type in the box below please</h1>
// 					<input type="text"/>
// 				</div>
		
// 	}
// });

// React.renderComponent(
//   <theContainer />,
//   document.getElementById('example')
// );

//Trying to create another simpler app
var simple = React.createClass({
	render: function() {
		return {
			<div>
				<h1>My first time</h1>
			</div>
		}
	}
});

//now use the React render function to display this onto the DOM
React.renderComponent(
	<simple />,
	document.getElementById('example')
);