var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var Redux = require('redux');
var createStore = Redux.createStore;
var appReducer = require('./appReducer');
var PhotoFrame = require('./PhotoFrame');
var ActivePerson = require('./ActivePerson');
var MemberChooser = require('./MemberChooser');
var initialState = require('./initialState');

// loading Redux DevTools for Chrome if present
var devTools = window.devToolsExtension ? 
    window.devToolsExtension() : function(f) {return f;};

var store = createStore(appReducer, initialState, devTools);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <PhotoFrame />
            <ActivePerson />
            <MemberChooser />
        </div>
    </Provider>, 
    document.getElementById('HelloWorld')
);