
const reducer = (state: any, action: any) => {

    switch (action.type) {

        case 'ADD_POST':

            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case 'CLEAR_POSTS':

            state.posts.splice(0, state.posts.length);
            return state;

        default:
            return state;

    }
};

export default reducer;