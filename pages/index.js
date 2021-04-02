import Head from 'next/head'
import Image from 'next/image'
import _ from 'lodash'
import { useEffect } from 'react'
import plainData from '../components/data';

export async function getStaticProps() {
  const resourcesData = await plainData;
  
  if (!resourcesData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {resourcesData}
  }
}

export default function Home({ resourcesData }) {

  useEffect(() => {
    document.querySelectorAll('.cards__item').forEach(ci => {
      ci.classList.add('active');
    })
  })

  const filterByCat = (e) => {
    document.querySelectorAll('.cards__item').forEach(ci => {ci.classList.remove('active')})
    let selectedCards = document.querySelectorAll(`.${e.target.id}`);
    selectedCards.forEach(sc => {sc.classList.add('active');});
  }

  let tagArr = []; let counts = {};
  resourcesData.map(rd => {rd.sources.map(source => {source.tags.map(tag => {tagArr.push(tag);})})})
  tagArr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  let filteredTags = _.union(tagArr);
  console.log('Hello there, looking for something? you dirty nerd.')
  
  return (
    <>
      <Head>
        <title>C H K L S T.</title>
        <link rel="icon" href="/favicon.png" />
        <meta charSet="utf-8" />
        <meta name="description" content="A one-stop repository of different resources for Front-End Developers and UI Designers."/>
        <meta name="keywords" content="frontend, tools, crtved, artsandiego, website, ui, ux, web design, tips, resources"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://chklst.vercel.app"/>
        <meta property="og:title" content="CHKLST."/>
        <meta property="og:description" content="A one-stop repository of different resources for Front-End Developers and UI Designers."/>
        <meta property="og:image" content="/social-image.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://chklst.vercel.app"/>
        <meta property="twitter:title" content="CHKLST."/>
        <meta property="twitter:description" content="A one-stop repository of different resources for Front-End Developers and UI Designers."/>
        <meta property="twitter:image" content="/social-image.png" />
      </Head>
      <header className="flex flex-col items-center justify-center relative mobile:px-4">
        <div className="mt-14">
          <Image src="/logo.svg" alt="Logo of the portfolio website" width={205} height={41} />
        </div>
        <div className="flex flex-col items-center justify-center mobilelg:my-36 mobile:my-20">
          <p className="mobilelg:text-18 mobile:text-14 text-white font-normal text-center tabletlg:w-full mobilelg:w-9/12">A one-stop repository of different resources for Front-End Developers and UI Designers.</p>
          <h1 className="mobilelg:text-72 mobile:text-24 text-primary tracking-default font-bold my-0">CHKLST.</h1>
          <p className="mobilelg:text-18 mobile:text-14 text-white font-normal text-center tabletlg:w-full mobilelg:w-9/12">Use this to ideate, learn and connect, or whatever you want, you dirty nerd.</p>
        </div>
        <div className="absolute top-0">
          <Image src="/background.png" alt="Background design" width={1444} height={472} />
        </div>
      </header>
      <main role="main">
        <section className="sources">
          <div className="sm:mx-40 tabletlg:mx-20 mobilelg:mx-10 mobile:mx-4 flex flex-wrap justify-center items-center">
            {filteredTags.map((ft, i) => (
              <button id={ ft } onClick={ (e) => {filterByCat(e)} } className="sources__button bg-accent text-white font-bold px-4 py-2 uppercase rounded-full mobile:text-11 m-1 transition-colors hover:bg-primary hover:text-secondary focus:outline-none" key={i}>{ft}<span className="bg-secondary text-primary font-normal text-11 rounded-full p-1 ml-2">{ Object.values(counts)[i] }</span></button>
            ))}
          </div>
        </section>
        <section className="cards justify-items-center my-24 grid gap-8 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 tabletlg:grid-cols-2 sm:mx-40 tabletlg:mx-20 mobilelg:mx-10 mobile:mx-4">
          {resourcesData.map((rd, i) => {
            let classArr = [];
            rd.sources.map(source => {source.tags.map(tag => {classArr.push(tag);})})
            let filteredClass = _.union(classArr);
            return (
              <div key={ i } className={`cards__item bg-accent tabletlg:h-card mobilelg:w-card mobile:w-cardsm mobile:h-auto p-6 self-center overflow-hidden ${filteredClass.map(ft => (ft)).join(" ")}`}>
                <div className="cards__item--details">  
                  <p className="text-24 text-primary text-center font-normal">{rd.name} <span>{ rd?.emoji }</span></p>
                  <p className="text-12 text-white text-center font-normal px-8">{rd.bio}</p>
                  <div className="flex flex-row flex-wrap items-center justify-center my-4">
                    {rd?.socials?.map((social, i) => (
                      <a className="uppercase text-12 text-primary font-bold px-2" target="_blank" rel="noopener noreferrer" key={i} href={ social.url }>{ social.label }</a>
                    ))}
                  </div>
                </div>
                <div className="cards__item--links overflow-y-scroll h-meat">
                  {rd?.sources?.map((source, i) => (
                    <div key={ i } className="cards__item--content bg-secondary p-4 mb-4">
                      <div className="flex flex-row items-start mb-4">
                        <p className="text-white text-14 font-normal w-8/12">{ source.label }</p>
                        <a className="w-4/12" href={source.url} target="_blank" rel="noopener noreferrer"><img className="ml-auto mr-0" src="/linkout.svg"/></a>
                      </div>
                      <div className="flex flex-row flex-wrap">
                        {source?.tags?.map((tag, i) => (
                          <span className="bg-accent text-white text-11 py-1 px-2 rounded-full uppercase mr-2 mt-2" key={i}>{ tag }</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </section>
      </main>
      <footer>
        <p className="text-white font-normal text-14 text-center my-6 px-8">Designed in <a className="text-primary" href="http://figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> and Developed using <a className="text-primary" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next JS</a> and <a className="text-primary" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">TailwindCSS</a> with ❤️ by <a className="text-primary" href="https://artsandiego.dev/" target="_blank" rel="noopener noreferrer">@crtved</a></p>
      </footer>
    </>
  )
}
