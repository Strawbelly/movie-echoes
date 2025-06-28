import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
    maxWidth: '300px',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '5px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    marginTop: '20px', 
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  postCard: {
    margin: "5px 12px",
    cursor: 'pointer',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxSizing: 'border-box',

    width: '300px',      
    maxWidth: '100%',    
    height: 'auto',      
    minHeight: '360px',   

    '&:hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
      transform: 'translateY(-4px)',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',       
      margin: '12px 0',
      padding: '16px',
    },
  },
  postMessage: {
    display: '-webkit-box',
    WebkitLineClamp: 4,              
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    maxWidth: '350px',
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));
