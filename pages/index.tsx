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
        大久保健太　Kenta Okubo
      </div>
      <div className="font-mono text-3xl text-green-300">
        Short Introduction
      </div>
      <div className="font-mono text-3xl">
        Graduate job seeker.
        大学卒業後、就活中。
      </div>
      <div className="font-mono text-3xl text-green-300">
        What am I doing now?
      </div>
      <div className="font-mono text-3xl">
        Working as a kitchen hand in a Japanese restaurant.
        ニュージーランドの日本食レストランでキッチンハンドとして働いております。
        
      </div>
      <div className="font-mono text-3xl text-green-300">
        What can I do?
      </div>
      <div className="font-mono text-3xl">
        Web Programming with React, Svelte, GraphQL, MongoDB.
        I also learnt Java, C/C++, Ruby, Python etc...
        I'm excited to get involved in any other kind of projects.

        React, Svelte, GraphQL, MongoDBなどのウェブテクノロジーや、
        C/C++、Java、Pythonなどのプログラミング言語も大学で学んでおり、
        様々なプロジェクトに携われることを楽しみにしています。
      </div>
      
      </div>);
}
 export default Home

  