import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const POST_MUTATION = gql`
  mutation PostMutation($url: String!, $description: String) {
    post(url: $url, description: $description) {
      id
      url
      description
    }
  }
`;

class CreateLink extends Component {
  state = {
    description: "",
    url: ""
  };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            name="description"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            name="url"
            placeholder="Url for the link"
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variable={{ description, url }}
          onCompleted={() => this.props.history.push("/")}
          errorPolicy="all"
        >
          {postMutation => {
            return <button onClick={postMutation}>Submit</button>;
          }}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
