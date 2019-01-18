import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
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

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={this.handleChange}
            type="text"
            name="description"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={this.handleChange}
            type="text"
            name="url"
            placeholder="Url for the link"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variable={{ description, url }}>
          {postMutation => {
            return <button onClick={postMutation}>Submit</button>;
          }}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
