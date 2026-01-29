/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPodcast = /* GraphQL */ `mutation CreatePodcast(
  $condition: ModelPodcastConditionInput
  $input: CreatePodcastInput!
) {
  createPodcast(condition: $condition, input: $input) {
    createdAt
    genre
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePodcastMutationVariables,
  APITypes.CreatePodcastMutation
>;
export const deletePodcast = /* GraphQL */ `mutation DeletePodcast(
  $condition: ModelPodcastConditionInput
  $input: DeletePodcastInput!
) {
  deletePodcast(condition: $condition, input: $input) {
    createdAt
    genre
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePodcastMutationVariables,
  APITypes.DeletePodcastMutation
>;
export const updatePodcast = /* GraphQL */ `mutation UpdatePodcast(
  $condition: ModelPodcastConditionInput
  $input: UpdatePodcastInput!
) {
  updatePodcast(condition: $condition, input: $input) {
    createdAt
    genre
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePodcastMutationVariables,
  APITypes.UpdatePodcastMutation
>;
