import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Power Kernel</title>
        <meta
          name="description"
          content="Providing IT solutions such as customized system development, web design & development, and IT related consultation"
        />
        <meta
          name="keywords"
          content="powerkernel, power, kernel, web development, design, consultation"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen container mx-auto p-4">
        <div className="h-5/6 grid grid-cols-1 content-center">
          <div className="flex justify-center">
            <Image
              className=""
              width={300}
              height={127}
              src="https://powerkernel.github.io/powerkernel.com/logos/logo-rectangle.svg"
              alt="Power Kernel"
            />
          </div>

          <div className="flex justify-center py-5">
            <p className="hero">
              Providing IT solutions such as customized system development, web
              design & development, and IT related consultation.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="mailto:harry@powerkernel.com"
              className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-blue-600 md:py-4 md:px-10 md:text-lg"
            >
              Contact Us
            </a>
          </div>

          <div className="flex justify-center py-5 text-xs text-gray-300">
            Version: 0.1.0-alpha.3
          </div>
        </div>
      </div>
    </>
  );
}
