export const Mutation = `
    type Mutation {
        createDisciple(name: String!, description: String!): Discipline!
        updateDisciple(id: String!, name: String!, description: String!): Discipline!
        deleteDisciple(id: String!): String
    }
`;
