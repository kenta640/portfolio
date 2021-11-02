
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://test-server-graph.herokuapp.com",
    cache: new InMemoryCache(),
});

export default client;