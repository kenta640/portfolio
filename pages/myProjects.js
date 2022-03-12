import {Navbar} from '../components/Navbar'
import Link from 'next/link'
function MyProjects({pizzas}) {
    return (
      <div>
      <Navbar/>
      <Link href="https://svelte-front.vercel.app/">
      <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
        Simple Social media
      </div>
      </Link>
      <div className="font-mono text-2xl">
        with Svelte, TailwindCSS, GraphQL, and MongoDB.
      </div>
      
      <Link href="https://svelte-front.vercel.app/">
          <a>https://svelte-front.vercel.app/</a>
      </Link>

      </div>);
}
 export default MyProjects;