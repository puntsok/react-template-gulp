
var React = require('react');
var connect = require('react-redux').connect;
var supportsFilterCSSProp = ('filter' in document.createElement('p').style);
var filterPropName = supportsFilterCSSProp ? 'filter' : 'WebkitFilter';

function PhotoFrame(props) {

    var src = props.src;
    var alt = props.alt;
    var illness = props.illness;

    var duration = illness ? (3.1 - (illness/5)) : 0;
    var style = {
        width: '200px',
        animationName: 'headSwagger',
        animationDuration: duration + 's',
        animationTimingFunction: 'linear',
        animationDelay: '0s',
        animationIterationCount: 'infinite',
        // animation: 'headSwagger ' + duration + 's linear 0s infinite normal none',
    };
    style[filterPropName] = 'hue-rotate(' + (illness * 10) + 'deg)';

    return (
        <img src={src} style={style} alt={alt} className={ Date.now() }/>
    );
};

function mapStateToProps(state) {

    var members = state.members;
    var activeMemberId = state.activeMemberId;

    var activeMember = members.filter( function(member) {
        return member.id === activeMemberId;
    })[0];

    return {
        src: activeMember.photo,
        alt: 'Photo of ' + activeMember.name,
        illness: activeMember.energyDrinks,
    };
}

PhotoFrame = connect(mapStateToProps, null)(PhotoFrame);

module.exports = PhotoFrame;