
var React = require('react');

var Badge = React.createClass({

    getInitialState: function() {

        return {
            animating: 'no',
        };
    },
    componentDidUpdate: function(prevProps) {

        var currNumber = this.props.number;
        var prevNumber = prevProps.number;
        var setState = this.setState.bind(this);

        if (currNumber > prevNumber) {
            // badge number has increased so pop out animate:
            setState({animating: 'yes'});
            setTimeout(function() {
                setState({animating: 'no'});
            }, 550);
        };
    },
    render: function render() {

        var props = this.props;
        var number = props.number;
        var color = props.color;
        var ins = this;

        var style = {
            backgroundColor: color,
            display: number ? 'flex' : 'none',
            borderRadius: '50%',
            height: '22px',
            width: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            position: 'absolute',
            top: '-3px',
            right: '-3px',
        };

        return (
            <span 
                className="badge" 
                data-animating={this.state.animating}
                ref={function(el) { ins.spanEl = el; }}
                style={style}>{number}</span>
        );
    },
});

module.exports = Badge;