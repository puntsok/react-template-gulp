
var React = require('react');

function HelloWorld(props) {

	var message = props.message;
	var subject = props.subject;
	var number = props.number;
	var onPlusClick = props.onPlusClick;

	return (
		<p>{message} {subject} ({number})
			<button onClick={onPlusClick}>+</button>
		</p>
	);
}

module.exports = HelloWorld;