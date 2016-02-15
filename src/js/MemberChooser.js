
var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');
var Badge = require('./Badge');

var MemberChooser = React.createClass({

    render: function render() {

        var props = this.props;
        var members = props.members;
        var onMemberClick = props.onMemberClick;

        var getStyle = function(member) {
            var style = {
                display: 'inline-block',
                width: '60px',
                height: '60px',
                backgroundImage: 'url(' + member.photo + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                borderRadius: '30%',
                marginRight: '8px',
                position: 'relative',
            };  
            return style; 
        };

        return (
            <div>
                {members.map(function(member) {
                    var id = member.id;
                    var energyDrinks = member.energyDrinks;
                    return (
                        <span style={getStyle(member)} 
                            className='member-in-chooser'
                            key={id} 
                            onClick={ function() { onMemberClick(id) }}>
                            <Badge number={energyDrinks} color="blue" />
                        </span>
                    );
                })}
            </div>
        );  
    },
});

function mapStateToProps(state) {
    
    return {
        members: state.members
    };
}
function mapDispatchToProps(dispatch) {

    return {
        onMemberClick: function(id) {
            dispatch(actions.makeActive(id));
        },
    };
}

MemberChooser = connect(mapStateToProps, mapDispatchToProps)(MemberChooser);

module.exports = MemberChooser;