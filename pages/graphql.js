import {ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, useMutation} from '@apollo/client'
import client from '../apollo-client'


const GET_TODOS = gql`
    query Query {
        todos {
            id
            type
        }
  }
  
`

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type:$type) {
      id
      type
    }
  }
`

function Todos() {
  const {loading,error, data} = useQuery(GET_TODOS);
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error fetching data</p>
  console.log(data)
  return data.todos.map(todo =>{
    let input

    return (
      <div key={todo.id}>
        
        <p>{todo.type}</p>
        <form onSubmit={e => {
          e.prefentDefault();
          if(!input.value.trim()) {
            return 
          }
          input.value= ""
        }}>
          <input ref={node=>input = node}/>
          <button type="submit">Update Todo</button>
        </form>
        </div>
    )
  })
}

function AddTodo() {
  let input;
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {      
      cache.modify({        
        fields: {          
          todos(existingTodos = []) 
          {            
            const newTodoRef = cache.writeFragment({              
              data: addTodo,              
              fragment: gql`                
              fragment NewTodo on Todo {                  
                id                  
                type                
              }             
              `            
            });            
            return [...existingTodos, newTodoRef];          
          }        
        }      
      });    
    }  
  });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value }, refetchQueries: [{query: GET_TODOS}] });
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Use Mutation</h1>
        <AddTodo/>
        <Todos/>
      </div>
    </ApolloProvider>
  );
}

export default App;