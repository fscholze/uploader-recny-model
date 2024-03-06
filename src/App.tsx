import { FC } from 'react'
import { Footer } from './components/footer'
import 'react-toastify/dist/ReactToastify.css'
import { useRoutes } from 'react-router-dom'
import { defaultRoutes } from './routes/default'

const App: FC<{}> = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'images/background.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {useRoutes(defaultRoutes)}

      <Footer />
    </div>
  )
}

export default App
