import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";
import { timeDifferenceForDate } from "../utils";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

class Link extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const { link, index } = this.props;

    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{index + 1}.</span>
          {authToken && (
            <Mutation
              mutation={VOTE_MUTATION}
              variables={{ linkId: link.id }}
              update={(store, { data: { vote } }) =>
                this.props.updateStoreAfterVote(store, vote, link.id)
              }
            >
              {voteMutation => (
                <div className="ml1 gray f11 special" onClick={voteMutation}>
                  ▲
                </div>
              )}
            </Mutation>
          )}
        </div>
        <div className="ml1">
          <div>
            {this.props.link.description}
            <a href={`//${link.url}`} target="_blank">
              ({link.url})
            </a>
          </div>
          <div className="f6 lh-copy gray">
            {link.votes.length} votes | by
            {link.postedBy ? link.postedBy.name : "Unknown"}
            {timeDifferenceForDate(link.createdAt)}
          </div>
        </div>
      </div>
    );
  }
}

export default Link;
