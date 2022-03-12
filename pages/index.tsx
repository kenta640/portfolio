import Head from 'next/head';
import {Navbar} from '../components/Navbar'



function Home() {
    return (
      <div>
        <Navbar/>
        <Head>
          <title>Profile</title>
          <link rel='icon' href='/pizza_icon.png'/>
        </Head>
      <div className="font-mono text-3xl text-green-300">
        Name
      </div>
      <div className="font-mono text-6xl">
        Kenta Okubo 
      </div>
      <div className="font-mono text-3xl text-green-300">
        Short Introduction
      </div>
      <div className="font-mono text-3xl">
        Graduate job seeker.
      </div>
      <div className="font-mono text-3xl text-green-300">
        What am I doing now?
      </div>
      <div className="font-mono text-3xl">
        Searching for a job while building my own projects.
      </div>
      <div className="font-mono text-3xl text-green-300">
        What can I do?
      </div>
      <div className="font-mono text-3xl">
        Web Programming with React, Svelte, GraphQL, MongoDB.
        I also learnt Java, C/C++, Ruby, Python etc...
        I'm excited to get involved in any other kind of projects.
      </div>
      
      </div>);
}
 export default Home

  