import { defineStorage } from '@aws-amplify/backend';

// export const storage = defineStorage({
//   name: "amplify-gen2-files",
//   access: (allow) => ({
//     "podcast-submissions/*": [allow.authenticated.to(["read", "write", "delete"])],
//   }),
// });

export const storage = defineStorage({
  name: 'snackpodStorage',
  access: (allow) => ({
    'profile-pictures/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'podcast-submissions/*': [
      allow.authenticated.to(['read','write']),
      allow.guest.to(['read', 'write'])
    ],
  })
});