import home from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <main>
          <h1 className={`${home.red} ${home.t1}`}>
            Welcome to Flowyhire!
          </h1>
        </main>
      </div>
    </>
  )
}
