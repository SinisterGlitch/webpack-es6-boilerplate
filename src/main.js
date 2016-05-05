var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var data = {
    "1": {
        "id": "1",
        "name": "Germain",
        "lastname": "Riahi"
    },
    "2": {
        "id": "2",
        "name": "Lisa",
        "lastname": "Berger"
    },
    "3": {
        "id": "3",
        "name": "Yassin",
        "lastname": "Kruppers"
    }
};


// Define userType shape
var userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
        lastname: { type: graphql.GraphQLString }
    }
});

// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
// The `user` field, however, is a userType, which we defined above.
var schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: userType,
                // specify query arguments for UserType
                args: {
                    id: { type: graphql.GraphQLString }
                },

                // trigger action that returns data
                resolve: function (_, args) {
                    return data[args.id];
                }
            }
        }
    })
});

express()
    .use('/graphql', graphqlHTTP({ schema: schema, pretty: true }))
    .listen(3000);