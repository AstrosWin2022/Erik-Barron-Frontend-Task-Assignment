
const reducer = (state: any, action: any) => {

    if (action.type === 'ADD_POST') {        

        return {
            ...state,
            posts: [...state.posts, action.payload],
        };       
        
    }

    return state;
};

export default reducer;