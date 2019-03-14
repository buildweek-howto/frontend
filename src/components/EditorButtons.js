import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes, handleSubmit, history } = props;

  const abortPost = () => {
    history.replace('/dashboard');
  }

  return (
    <div>
      <Fab aria-label="Delete" className={classes.fab} onClick={abortPost}>
        <DeleteIcon />
      </Fab>
      <Fab onClick={handleSubmit} color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
