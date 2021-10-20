import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h3>Flowyhire</h3>
          {/* <a class="navbar-brand logo" href="#"></a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-md-auto gap-2">
              {/* only show login if there is no user */}
              {!user && (
                <>
                  <li className="nav-item rounded">
                    <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-house-fill me-2"></i>Home</a>
                  </li>
                  <li className="nav-item rounded">
                    <a className="btn btn-outline-secondary" href="/api/auth/login"><i className="bi bi-telephone-fill me-2"></i>login</a>
                  </li>
                </>
              )}
              {/* if there is user, show the user info and logout btn */}
              {user && (
                <>
                  <img src={user.picture} className="rounded-circle" width="50" height="50" />
                  <p>{user.name}</p>
                  <li className="nav-item rounded">
                    <a className="btn btn-outline-danger" href="/api/auth/logout"><i className="bi bi-telephone-fill me-2"></i>logout</a>
                  </li>
                </>
              )}

            </ul>
          </div>
        </div>
      </nav>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <main>
          <h1 className="title">
            Welcome to Flowyhire!
          </h1>
        </main>
      </div>
      <div className="bg-dark text-white">
        <p className="text-center p-4 m-0">Footer Content</p>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
