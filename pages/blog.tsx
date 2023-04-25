import {Navbar} from '../components/Navbar'
import Link from 'next/link'

function Blog() {
    return (
        
      <div>
       <Navbar/>
        <h1>
        <Link href="/blogs/MyFirstJobInterview">
         My first Job interview.
        </Link>
        </h1>
      </div>);
}
 export default Blog