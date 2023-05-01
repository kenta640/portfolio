import Head from 'next/head';
import {Navbar} from '../components/Navbar'
import {useLocale} from '../components/useLocale';
import { useState } from 'react';
function Home() {
  
  const {t} = useLocale()
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
        {t.KENTA_OKUBO}
      </div>
      <div className="font-mono text-3xl text-green-300">
        Short Introduction
      </div>
      <div className="font-mono text-3xl">
        Graduate job seeker. <br/>
        大学卒業後、就活中。
      </div>
      <div className="font-mono text-3xl text-green-300">
        What am I doing now?
      </div>
      <div className="font-mono text-3xl">
        Working as a kitchen hand in a Japanese restaurant.<br/>
        ニュージーランドの日本食レストランでキッチンハンドとして働いております。
        
      </div>
      <div className="font-mono text-3xl text-green-300">
        What can I do?
      </div>
      <div className="font-mono text-3xl">
        Web Programming with React, Svelte, GraphQL, MongoDB.
        I also learnt Java, C/C++, Ruby, Python etc...
        I'm excited to get involved in any other kind of projects.
        <br/>
        React, Svelte, GraphQL, MongoDBなどのウェブテクノロジーや、
        C/C++、Java、Pythonなどのプログラミング言語も大学で学んでおり、
        様々なプロジェクトに携われることを楽しみにしています。
      </div>
      
      </div>);
}
 export default Home

  