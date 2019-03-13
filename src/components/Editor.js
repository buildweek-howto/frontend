import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
=======
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
>>>>>>> 10c4aac4ceef6ee7076e9f9d1daf97e64629717a
  }

  handleChange = (value) => {
    this.setState({ text: value });
  }

  render() {
<<<<<<< HEAD
    return <ReactQuill value={this.state.text} onChange={this.handleChange} />;
=======
    return (
      <ReactQuill value={this.state.text}
        onChange={this.handleChange} />
    )
>>>>>>> 10c4aac4ceef6ee7076e9f9d1daf97e64629717a
  }
}

export default Editor;
