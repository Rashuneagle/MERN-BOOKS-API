import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'

const httpLink = createHttpLink({
  uri: 'https://my-backend.onrender.com/graphql', // Ensure this points to the correct server and port
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className="container">
           <Outlet />
          </div>
        </div>
    </ApolloProvider>
  );
}

export default App;
