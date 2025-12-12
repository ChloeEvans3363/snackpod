export const createPod = /* GraphQL */ `
  mutation CreatePod(
    $input: CreatePodInput!
    $condition: ModelPodConditionInput
  ) {
    createPod(input: $input, condition: $condition) {
      id
      title
      genre
      filePath
    }
  }
`;