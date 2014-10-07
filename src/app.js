/** @jsx React.DOM */
//create lines of text with edit buttons for a user to edit text

//create your variable (which is pretty much a componenet)
var theContainer = React.createClass({
	render: function() {
		//wtf why do i need to put a parentheses after the return keyword??
		return (
			<div>
				<input type="text"/>
			</div>
		);
	}
});

React.renderComponent(
  <theContainer />,
  document.getElementById('example')
);