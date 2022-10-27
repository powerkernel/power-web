import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Power Kernel</title>
        <meta
          name="description"
          content="Providing IT solutions such as customized system development, web design & development, and IT related consultation"
        />
        <meta name="keywords" content="powerkernel, power, kernel, web development, design, consultation"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline text-red-400">Hello world!</h1>
    </div>
  );
}
