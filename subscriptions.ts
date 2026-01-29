/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePodcast = /* GraphQL */ `subscription OnCreatePodcast(
  $filter: ModelSubscriptionPodcastFilterInput
  $owner: String
) {
  onCreatePodcast(filter: $filter, owner: $owner) {
    createdAt
    genre
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePodcastSubscriptionVariables,
  APITypes.OnCreatePodcastSubscription
>;
export const onDeletePodcast = /* GraphQL */ `subscription OnDeletePodcast(
  $filter: ModelSubscriptionPodcastFilterInput
  $owner: String
) {
  onDeletePodcast(filter: $filter, owner: $owner) {
    createdAt
    genre
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePodcastSubscriptionVariables,
  APITypes.OnDeletePodcastSubscription
>;
export const onUpdatePodcast = /* GraphQL */ `subscription OnUpdatePodcast(
  $filter: ModelSubscriptionPodcastFilterInput
  $owner: String
) {
  onUpdatePodcast(filter: $filter, owner: $owner) {
    createdAt
    genre
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePodcastSubscriptionVariables,
  APITypes.OnUpdatePodcastSubscription
>;
