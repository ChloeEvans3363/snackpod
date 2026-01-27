import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

// const schema = a.schema({
//   Todo: a.model({
//     content: a.string(),
//   }).authorization(allow => [allow.owner()]),
// });

// export type Schema = ClientSchema<typeof schema>;

// export const data = defineData({
//   schema,
//   authorizationModes: {
//     // This tells the data client in your app (generateClient())
//     // to sign API requests with the user authentication token.
//     defaultAuthorizationMode: 'userPool',
//   },
// });

const schema = a.schema({
  Podcast: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      coverArtPath: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",

    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});