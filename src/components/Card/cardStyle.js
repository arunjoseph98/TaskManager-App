export const cardStyle = {
    card: {
        width: 300,
        height:250,
        backgroundColor: '#f5f5f5',
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
        backgroundColor: '#f5f5f5',
        cursor: 'pointer',
        border: '2px dashed #ccc',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
    },
};