import React from 'react';
import ReactQuill from 'react-quill';
import { withStyles } from '@material-ui/core/styles';
import 'react-quill/dist/quill.snow.css';

const styles = {
  textarea: {
    height: '50vh'
  }
}

class Editor extends React.Component {
  state = { text: '' }

  handleChange = (value) => {
    this.setState({ text: value });
  }

  render() {
    return (
      <ReactQuill value={this.state.text} onChange={this.handleChange} />
    )
  }
}

export default withStyles(styles)(Editor);
