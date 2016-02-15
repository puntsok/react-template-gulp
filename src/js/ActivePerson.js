var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');
var HelloWorld = require('./HelloWorld');

var ActivePerson = React.createClass({

    render: function render() {

        var props = this.props;
        var name = props.name;
        var energyDrinks = props.energyDrinks;
        var id = props.id;
        var onIncrementClick = props.onIncrementClick;

        return (
            <HelloWorld 
                message='Energy Drinks In '
                subject={name} 
                number={energyDrinks} 
                onPlusClick={function() {onIncrementClick(id)}}
            />
        );
    },
});

function mapStateToProps(state) {

    var members = state.members;
    var activeMemberId = state.activeMemberId;

    var activeMember = members.filter( function(member) {
        return member.id === activeMemberId;
    })[0];

    return {
        name: activeMember.name,
        energyDrinks: activeMember.energyDrinks,
        id: activeMember.id,
    };
}
function mapDispatchToProps(dispatch) {

    return {
        onIncrementClick: function onIncrementClick(id) {
            dispatch(actions.incrementCounter(id));
        },
    };
}
ActivePerson = connect(mapStateToProps, mapDispatchToProps)(ActivePerson);

module.exports = ActivePerson;