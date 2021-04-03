import Head from 'next/head'

export default function Custom404() {
  return (    
    <>
      <Head>
        <title>O O O O P S.</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-screen max-h-screen bg-primary">
        <p className="text-secondary font-normal text-18 text-center px-2">Hi stranger, you lost? shhh... it's okay, you can stay if you want.</p>
      </section>
    </>
  )
}