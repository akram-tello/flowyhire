import Navbar from '../components/Navbar'
import home from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <main>
          <h1 className={`${home.red} ${home.t1}`}>
            Welcome to Flowyhire!
          </h1>
        </main>
      </div>
      <div className="bg-dark text-white">
        <p className="text-center p-4 m-0">Footer Content</p>
      </div>
    </>
  )
}
