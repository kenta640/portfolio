import {Navbar} from '../components/Navbar'
import Link from 'next/link'
function MyProjects({pizzas}) {
    return (
      <div>
      <Navbar/>
      <div>Full stack applications are not working due to maintenance cost</div>
      <div class="py-8 ...">
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
      </div>
      <div class="py-8 ...">
      <br/>
      
      <Link href="https://password-generator-deluxe.com">
        <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
          Password Generator Deluxe Web
        </div>
      </Link>
      <br/>
      <div className="text-red-300">Caution!! If you click the link below .exe file will be downloaded (not malicious!!)</div>
      <Link href="https://storage.googleapis.com/password-generator-deluxe/releases/Password_Generator_Deluxe%20Setup%201.0.0.exe?version=1.0.0">
        <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
          Password Generator Deluxe
        </div>
      </Link>

      <Link href="https://storage.googleapis.com/password-generator-deluxe/releases/Password_Generator_Deluxe%20Setup%201.0.0.exe">
        https://storage.googleapis.com/password-generator-deluxe/releases/Password_Generator_Deluxe%20Setup%201.0.0.exe
      </Link>
      </div>
      <div class="py-8 ...">
      <Link href="https://stylegarage.co.nz/">
        <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
          Style Garage (Shopify website)
        </div>
      </Link>

      <Link href="https://stylegarage.co.nz/">
      https://stylegarage.co.nz
      </Link>
      </div>
      <div class="py-8 ...">
      <Link href="https://legendary-granita-9100d6.netlify.app/">
        <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
          Novel Website (Oath2)
        </div>
      </Link>

      <Link href="https://legendary-granita-9100d6.netlify.app/">
      https://legendary-granita-9100d6.netlify.app/
      </Link>
      </div>
      <div class="py-8 ...">
      <Link href="https://github.com/kenta640">
        <div className="font-mono text-4xl text-blue-300 hover:text-blue-700">
          My Github repositories
        </div>
      </Link>

      <Link href="https://github.com/kenta640">
        https://github.com/kenta640
      </Link>
      </div>
      </div>);
}
 export default MyProjects;