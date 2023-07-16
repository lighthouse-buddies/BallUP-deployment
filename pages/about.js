import Layout from "../src/components/layout";
import Head from "next/head";
import Link from "next/link";


export default function About() {
  return (
    <>
      <Head>
        <title>About - BallUp</title>
        <meta name="description" content="Suggest your own courts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ball_up.svg" />
      </Head>
      <Layout
        main={
          <div className="pt-20 lg:pt-6 px-6 bg-slate-100 h-full">
            {/* <h1 className="text-2xl">So what&apos;s this all about?</h1> */}

            <h1 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">So, what&apos;s this all about?</h1>

            <div className="pt-6 flex max-w-prose flex-col gap-4">
              <p className="text-lg">
                BallUp is a place for you to suggest and comment on
                basketball courts that <span className="font-bold">you think should exist.</span>
              </p>
              <p>
                Every city/suburb/town has those spots. The places where the best ballers hoop,
                know that it's not just a game, and do it the right way  - through competition.
              </p>
              <p>
                Elevate your skills and your game by playing with the
                <span className="italic"> best </span>and make dreams a reality.
              </p>

              <span className="font-bold">Coming Soon!</span>
              <ul className="list-disc list-inside">
                <li className="font-bold">
                  Scheduling
                </li>
                <li className="font-bold">
                  GamePot
                </li>
                <li className="font-bold">
                  Weekly Leader boards
                </li>
                <li className="font-bold">
                  User Profiles
                </li>
              </ul>

              <p className="text-gray-500 mt-6 italic text-sm">
                Made by <a className="text-indigo-700 hover:text-indigo-900" href="https://github.com/lighthouse-buddies/BallUP" target="_blank" >Lighthouse Buddies</a>
              </p>

              <br></br>


              <Link
                href="/-79.4005188,43.6622882,11"
                className="inline-flex lg:w-44 items-center justify-center rounded-md border border-transparent bg-orange-500 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <p className="text-align-center">Get started</p>
              </Link>
            </div>
          </div>
        } />
    </>
  );
}
