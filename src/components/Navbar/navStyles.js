
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      },
    // wrapper: {
    //     width: '100%',
    //     display: 'flex',
    //     // backgroundColor: '#abcd',
    //     justifyContent: 'space-between',
    //     // padding: '20px',
    // },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        
        alignItems: 'center',
        '*': {
            marginRight: '10px',
        },
    },
    icons:{
        color:'#4854F7',
        marginLeft: '20px'
    },
    smallBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',     
    },
    menuIcons:{
        color:'#4854F7',
        marginLeft: '1px',
        
    },
    logoSmall:{
        width:'125px',
        padding:'10px 0px',
        marginLeft:'5px',
        marginTop:'5px'
    },
    logo:{
        width:'200px',
        padding:'10px',
        marginLeft:'0px'
    },
    appbar:{
        bgcolor:'#FBFAFA',
        zIndex: (theme) => theme.zIndex.drawer + 1,
    }
};