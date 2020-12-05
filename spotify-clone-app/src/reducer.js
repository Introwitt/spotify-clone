export const initialState = {
    user: null,
    token: 'BQCv3rLOKmAM-yQkcEcVO9mURwjPhtKTWitUuEUAwXExFOP2IUQJMUEM49ie58DeQEy-yZAFvXAeD5qKs4Wde6h93WpXUhvd39goe3MuHIWS3htWuO6yTzTyVNRSGZ8OkGlnCPWaHsbFo6vzcKJKuxz-8p-WClfKfExl_lKSnnUiPRw4',
    playlists:[],
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user : action.user
            };
        
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            }
        
        default:
            return state;
    }
}

export default reducer;