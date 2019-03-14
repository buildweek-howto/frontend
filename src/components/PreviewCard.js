import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import OpenInBrowser from '@material-ui/icons/OpenInBrowser';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircle from '@material-ui/icons/AccountCircle'; //tmp

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});


const HowToCard = props => {
    return (
      <Card>
        <CardHeader 
          avatar={
            <AccountCircle onClick={() => { console.log(`User ${props.creator_id}`) }} />
            // <Avatar/>
            // Pass Avatar info here if applicable (when av can take user id)
          }
          action={
            <IconButton onClick={() => { console.log(`Go to page ${props.id}`) }} >
              <OpenInBrowser />
            </IconButton>
          }
          title={props.title} /* Would be cool if this could be clickable */
          subheader={`Created: ${props.created_at}`}
        />
        <CardContent>
          <Typography component="p">
            {props.body}
          </Typography>
        </CardContent>
          <CardActions >
            <Fab color="primary" aria-label="Heart" onClick={() => { console.log(`Heart ${props.id}`) }}>
              <FavoriteIcon />
            </Fab>
            <Fab color="primary" aria-label="Share" onClick={() => { console.log(`Share ${props.id}`) }}>
              <ShareIcon />
            </Fab>
          </CardActions>
        </Card>
      );
    };


HowToCard.defaultProps = {
    id:	null,
    title: '',
    created_at: '',
    body:	'',
    likes: '',
    updated_at: '',
    creator_id: '',
  };

HowToCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HowToCard);