export const cardStyle = {
    card: {
        width: 300,
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F6F6FC',
        borderRadius:'10px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
    },
    dueCard: {
      width: 300,
      height:250,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F6F6FC',
      borderRadius:'10px',
      border: '2px solid #d50000',
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
  },
    addCard:{
        width: 300,
        height:250,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(246, 246, 252, 0.27)',
        cursor: 'pointer',
        border: '2px dashed #b39e17',
        borderRadius:'10px',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
    },
};