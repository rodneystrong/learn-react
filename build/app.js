/** @jsx React.DOM */
//create lines of text with edit buttons for a user to edit text

//create your variable (which is pretty much a componenet)
var theContainer = React.createClass({displayName: 'theContainer',
	render: function() {
		//wtf why do i need to put a parentheses after the return keyword??
		return (
			React.DOM.div(null, 
				React.DOM.input({type: "text"})
			)
		);
	}
});

React.renderComponent(
  theContainer(null),
  document.getElementById('example')
);