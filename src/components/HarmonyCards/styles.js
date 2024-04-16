import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 15, // Updated border radius
    color: 'white',
    fontFamily: 'Ubuntu',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Added box shadow
    backgroundColor: '#333', // Added background color for better visibility
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0,
  },
});
