
const reducer = (state: any, action: any) => {

    switch (action.type) {

        case 'ADD_POST':
            //console.log(action);
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        default:
            return state;

    }
};

export default reducer;