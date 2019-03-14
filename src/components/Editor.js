import React from 'react';
import ReactQuill from 'react-quill';
import { withStyles } from '@material-ui/core/styles';
import 'react-quill/dist/quill.snow.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper'

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
  state = {
    title: 'test',
    body: '' ,
    creator_id: '1'
  }
  handleChange = (value) => {
    this.setState({ body: value });
  }

  render() {
    return (
      <div>
      <Paper>
      <ReactQuill value={this.state.body} onChange={this.handleChange} />
      </Paper>
      <Fab color="secondary" aria-label="Delete" onClick={() => { console.log('delete') }} >
        <DeleteIcon />
      </Fab>
      <Fab color="primary" aria-label="Axios Post" onClick={() => { console.log('post') }} >
        <AddIcon />
      </Fab>
    </div>
      )
  }
}

export default withStyles(styles)(Editor);
