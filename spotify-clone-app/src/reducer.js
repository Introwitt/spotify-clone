export const initialState = {
    user: null,
    playlists: [],
    // token: 'BQCv3rLOKmAM-yQkcEcVO9mURwjPhtKTWitUuEUAwXExFOP2IUQJMUEM49ie58DeQEy-yZAFvXAeD5qKs4Wde6h93WpXUhvd39goe3MuHIWS3htWuO6yTzTyVNRSGZ8OkGlnCPWaHsbFo6vzcKJKuxz-8p-WClfKfExl_lKSnnUiPRw4',
    theme: 'green',
    discover_weekly: null,
    item:null,
    playing:false
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
            };

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        
        case 'SET_THEME':
            return{
                ...state,
                theme: action.theme
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        
        case 'SET_ITEM':
            return{
                ...state,
                item: action.item
            }
        
        case 'SET_PLAYING':
            return{
                ...state,
                playing: action.playing
            }
        
        default:
            return state;
    }
}

export default reducer;