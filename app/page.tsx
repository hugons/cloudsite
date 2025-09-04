import Head from "next/head";

const IndexPage = () => (
  <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <Head>
      <title>Home Page</title>
      <meta name="description" content="Home page of a simple Next.js app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
          <h1>Welcome to our Next.js App!</h1>
          <p>Esta página é fantástica!</p>
  </div>
);

export default IndexPage;
