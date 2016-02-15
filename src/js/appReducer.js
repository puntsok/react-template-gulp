function findMemberById(id, members) {

    return members.filter( function(member) {
        return member.id === id;
    })[0];
};

function appReducer(state, action) {

    var members = state.members;
    var member;

    switch(action.type) {

        case 'INCREMENT_DRINK':
            
            var thisMember = findMemberById(action.id, members);

            // don't let person drink more then 15 beers
            if (thisMember.energyDrinks >= 15) return state;

            thisMember = Object.assign({}, thisMember, {
                energyDrinks: thisMember.energyDrinks + 1,
            });
            members = members.map( function(member) {
                if (member.id === thisMember.id) return thisMember;
                return Object.assign({}, member);
            });
            return Object.assign({}, state, {members: members});

        case 'MAKE_ACTIVE': 

            return Object.assign({}, state, { activeMemberId: action.id });

        default:
            return state;
    }
}

module.exports = appReducer;