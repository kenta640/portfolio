import { Navbar } from "../components/Navbar"
import Link from 'next/link'
function Contact() {
    return (
      <div>
        
        <Navbar/>
        <Link href="https://www.linkedin.com/in/kenta-okubo-315a8620a/">
          <div className="font-mono text-3xl">
            My Linkedin
          </div>

        </Link>
        <Link href="https://www.linkedin.com/in/kenta-okubo-315a8620a/">
          <div>
            https://www.linkedin.com/in/kenta-okubo-315a8620a/
          </div>
        </Link>
        <Link href="https://www.facebook.com/people/Kenta-Okubo/100006493073503/">
          <div className="font-mono text-3xl">
            My Facebook
          </div>

        </Link>
        <Link href="https://www.facebook.com/people/Kenta-Okubo/100006493073503/">
          <div>
            https://www.facebook.com/people/Kenta-Okubo/100006493073503/
          </div>
        </Link>
      </div>);
}
 export default Contact