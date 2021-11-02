import {Navbar} from '../components/Navbar'
//import PizzaMenuComponent from './graphql'
import { gql } from "@apollo/client";
import client from "../apollo-client";


/*
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Pizzas {
        pizzas {
          id
          name
        }
      }
    `,
  });
    return {
      props: {
        pizzas: data.pizzas.slice(0, 4),
      },
   };
}*/

function Menu({pizzas}) {
    return (
      <div>
      <Navbar/>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4">
        
        
          {/*pizzas.map((pizza) => (
            <div  >
             
                
                {pizza.id} - {pizza.name}
              
            </div>
          ))*/}
      
      </div>
      </div>);
}
 export default Menu