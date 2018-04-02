export const Query = `
    type Query {
        disciplines: [Discipline]
        discipline(id: String!): Discipline
    }
`;
