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
          https://svelte-front.vercel.app/
      </Link>
      
      <br/>
      <div className="text-red-300">Caution!! If you click the link below .exe file will be downloaded (not malicious!!)</div>
      <Link href="https://storage.googleapis.com/password-generator-deluxe/releases/Password_Generator_Deluxe%20Setup%201.0.0.exe">
        <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
          Password Generator Deluxe
        </div>
      </Link>

      <Link href="https://storage.googleapis.com/password-generator-deluxe/releases/Password_Generator_Deluxe%20Setup%201.0.0.exe">
        https://storage.googleapis.com/password-generator-deluxe/releases/Password_Generator_Deluxe%20Setup%201.0.0.exe
      </Link>

      <Link href="https://github.com/kenta640">
        <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
          My Github repositories
        </div>
      </Link>

      <Link href="https://github.com/kenta640">
        https://github.com/kenta640
      </Link>

      </div>);
}
 export default MyProjects;