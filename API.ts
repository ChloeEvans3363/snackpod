/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Podcast = {
  __typename: "Podcast",
  audioPath: string,
  createdAt?: string | null,
  genre: string,
  id: string,
  name: string,
  owner: string,
  updatedAt: string,
};

export type ModelPodcastFilterInput = {
  and?: Array< ModelPodcastFilterInput | null > | null,
  audioPath?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelPodcastFilterInput | null,
  or?: Array< ModelPodcastFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelAttributeTypes =
  | "_null"
  | "binary"
  | "binarySet"
  | "bool"
  | "list"
  | "map"
  | "number"
  | "numberSet"
  | "string"
  | "stringSet";


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelPodcastConnection = {
  __typename: "ModelPodcastConnection",
  items:  Array<Podcast | null >,
  nextToken?: string | null,
};

export type ModelPodcastConditionInput = {
  and?: Array< ModelPodcastConditionInput | null > | null,
  audioPath?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelPodcastConditionInput | null,
  or?: Array< ModelPodcastConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePodcastInput = {
  audioPath: string,
  createdAt?: string | null,
  genre: string,
  id?: string | null,
  name: string,
  owner: string,
};

export type DeletePodcastInput = {
  id: string,
};

export type UpdatePodcastInput = {
  audioPath?: string | null,
  createdAt?: string | null,
  genre?: string | null,
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type ModelSubscriptionPodcastFilterInput = {
  and?: Array< ModelSubscriptionPodcastFilterInput | null > | null,
  audioPath?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  genre?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPodcastFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type GetPodcastQueryVariables = {
  id: string,
};

export type GetPodcastQuery = {
  getPodcast?:  {
    __typename: "Podcast",
    audioPath: string,
    createdAt?: string | null,
    genre: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type ListPodcastsQueryVariables = {
  filter?: ModelPodcastFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPodcastsQuery = {
  listPodcasts?:  {
    __typename: "ModelPodcastConnection",
    items:  Array< {
      __typename: "Podcast",
      audioPath: string,
      createdAt?: string | null,
      genre: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreatePodcastMutationVariables = {
  condition?: ModelPodcastConditionInput | null,
  input: CreatePodcastInput,
};

export type CreatePodcastMutation = {
  createPodcast?:  {
    __typename: "Podcast",
    audioPath: string,
    createdAt?: string | null,
    genre: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type DeletePodcastMutationVariables = {
  condition?: ModelPodcastConditionInput | null,
  input: DeletePodcastInput,
};

export type DeletePodcastMutation = {
  deletePodcast?:  {
    __typename: "Podcast",
    audioPath: string,
    createdAt?: string | null,
    genre: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type UpdatePodcastMutationVariables = {
  condition?: ModelPodcastConditionInput | null,
  input: UpdatePodcastInput,
};

export type UpdatePodcastMutation = {
  updatePodcast?:  {
    __typename: "Podcast",
    audioPath: string,
    createdAt?: string | null,
    genre: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePodcastSubscriptionVariables = {
  filter?: ModelSubscriptionPodcastFilterInput | null,
  owner?: string | null,
};

export type OnCreatePodcastSubscription = {
  onCreatePodcast?:  {
    __typename: "Podcast",
    audioPath: string,
    createdAt?: string | null,
    genre: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePodcastSubscriptionVariables = {
  filter?: ModelSubscriptionPodcastFilterInput | null,
  owner?: string | null,
};

export type OnDeletePodcastSubscription = {
  onDeletePodcast?:  {
    __typename: "Podcast",
    audioPath: string,
    createdAt?: string | null,
    genre: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePodcastSubscriptionVariables = {
  filter?: ModelSubscriptionPodcastFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePodcastSubscription = {
  onUpdatePodcast?:  {
    __typename: "Podcast",
    audioPath: string,
    createdAt?: string | null,
    genre: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};
