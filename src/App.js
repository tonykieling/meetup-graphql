// import React, { Component } from 'react';

// import PostViewer from './PostViewer';

// class App extends Component {
//   render() {
//     return (
//       <main>
//         <PostViewer />
//       </main>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { Button, Container } from 'reactstrap';
import PostEditor from "./PostEditor";
import PostViewer from "./PostViewer";

class App extends Component {
  state = {
    editing: null
  };
  render() {
    const { editing } = this.state;
    return (
      <Container fluid>
        <Button
          className="my-2"
          color="primary"
          onClick={() => this.setState({ editing: {} })}
        >
          New Post
        </Button>
        <PostViewer
          canEdit={() => true}
          onEdit={(post) => this.setState({ editing: post })}
        />
        {editing && (
          <PostEditor
            post={editing}
            onClose={() => this.setState({ editing: null })}
          />
        )}
      </Container>
    );
  }
}


export default App;