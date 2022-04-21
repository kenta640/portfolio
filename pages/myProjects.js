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

      <Link href="https://beast-novel-gkuappnbt-kenta640.vercel.app/">
      <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
        Novel Wepsite
      </div>
      </Link>

      <div className="font-mono text-2xl">
        with Next.js, TailwindCSS, Fastify, and MySQL.
      </div>
      
      <Link href="https://beast-novel-gkuappnbt-kenta640.vercel.app/">
          <a>https://beast-novel-gkuappnbt-kenta640.vercel.app/</a>
      </Link>

      <Link href="https://github.com/kenta640">
        <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
          My Github repositories
        </div>
      </Link>

      <Link href="https://svelte-front.vercel.app/">
        <a>https://github.com/kenta640</a>
      </Link>
      </div>);
}
 export default MyProjects;