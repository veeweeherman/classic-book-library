import React from 'react';
import ReactDOM from 'react-dom';

class Book extends React.Component {
  render() {
    return <div>BookTitle1????????*****<ul>Author: Oscar Wilde</ul><ul>Description: blah blah blah</ul></div>
  }
}

ReactDOM.render(<Book/>, document.getElementById('book'));
