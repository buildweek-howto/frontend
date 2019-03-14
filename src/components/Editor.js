import React from 'react';
import ReactQuill from 'react-quill';
import { withStyles } from '@material-ui/core/styles';
import 'react-quill/dist/quill.snow.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper'
import axios from 'axios';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginLeft: theme.spacing.unit,
  },
  textarea: {
    height: '50vh'
  }
});

class Editor extends React.Component {
  state = { text: '' }
  handleChange = (value) => {
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
      <Paper>
      <ReactQuill value={this.state.text} onChange={this.handleChange} />
      </Paper>
      <Fab color="secondary" aria-label="Delete" onClick={() => { console.log(`Delete from store`) }}>
        <DeleteIcon />
      </Fab>
      <Fab color="primary" aria-label="Axios Post" onClick={
        () => { 
      axios.post('https://yanna-howto.herokuapp.com/api/posts/', this.state.text) }
      }>
        <AddIcon />
      </Fab>
    </div>
      )
  }
}

export default withStyles(styles)(Editor);
