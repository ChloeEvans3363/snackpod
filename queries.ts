/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPodcast = /* GraphQL */ `query GetPodcast($id: ID!) {
  getPodcast(id: $id) {
    createdAt
    genre
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPodcastQueryVariables,
  APITypes.GetPodcastQuery
>;
export const listPodcasts = /* GraphQL */ `query ListPodcasts(
  $filter: ModelPodcastFilterInput
  $limit: Int
  $nextToken: String
) {
  listPodcasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      genre
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPodcastsQueryVariables,
  APITypes.ListPodcastsQuery
>;
