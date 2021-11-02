import Head from 'next/head';
import {Navbar} from '../components/Navbar'



function Home() {
    return (
      <div>
        <Navbar/>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/pizza_icon.png'/>
        </Head>
        <div>Hello World</div>
      </div>);
}
 export default Home

  