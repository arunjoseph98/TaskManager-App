
export const navBarStyles = {
    drawer: {
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
        },
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        // backgroundColor: '#abcd',
        justifyContent: 'space-between',
        // padding: '20px',
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        
        alignItems: 'center',
        '*': {
            marginRight: '5px',
        },
    },
    icons:{
        color:'#4854F7',
        marginLeft: '20px'
    },
    logo:{
        width:'200px',
        padding:'10px',
        marginLeft:'0px'
    },
    appbar:{
        bgcolor:'#FBFAFA',
        zIndex: '5001'
    }
};