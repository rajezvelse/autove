const { GraphQLID, GraphQLNonNull, GraphQLString } = require('graphql');

exports.IDType = {
  type: new GraphQLNonNull(GraphQLID)
}

exports.CreatedAtType = {
  type: new GraphQLNonNull(GraphQLString),
  resolve: (source) => {
    return source.createdAt.toISOString()
  }
}

exports.UpdatedAtType = {
  type: new GraphQLNonNull(GraphQLString),
  resolve: (source) => {
    return source.updatedAt.toISOString()
  }
}