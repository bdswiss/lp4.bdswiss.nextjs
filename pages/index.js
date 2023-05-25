import Header from "../components/layouts/header"
import Navbar from "../components/layouts/navbar"
import Footer from "../components/layouts/footer"
import Hero from "../components/hero"
import Image from "next/image"

export default function Home(props) {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <div className="page-content" id="main-content">
          <Hero/>
          <section></section>
        </div>
      <Footer />
      </main>
      <Navbar links={props.links} />

    </>
  );
}

// // Fetching data from the JSON file
import fsPromises from "fs/promises"
import path from "path"

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), "data")
  const filePath = path.join(dataDirectory, "navbar.json")
  const jsonData = await fsPromises.readFile(filePath)
  const objectData = JSON.parse(jsonData)

  return {
    props: {
      links: objectData,
    },
  }
}
