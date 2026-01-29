import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Podcast: a
    .model({
      name: a.string().required(),
      genre: a.string().required(),
      audioPath: a.string().required(),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.authenticated().to(['create', 'read']),
      allow.owner().to(['read', 'update', 'delete']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});