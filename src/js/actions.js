
function incrementCounter(id) {
    return {
        type: 'INCREMENT_DRINK',
        id: id,
    };
};

function makeActive(id) {
    return {
        type: 'MAKE_ACTIVE',
        id: id,
    };
}

module.exports = {
    incrementCounter: incrementCounter,
    makeActive: makeActive,
};