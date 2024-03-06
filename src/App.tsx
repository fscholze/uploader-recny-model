import { FC } from 'react'
import { Footer } from './components/footer'
import 'react-toastify/dist/ReactToastify.css'
import { useRoutes } from 'react-router-dom'
import { defaultRoutes } from './routes/default'
import { FOOTER_HEIGHT } from './types/constants'
import { Box } from '@mui/material'

const App: FC<{}> = () => {
  const content = useRoutes(defaultRoutes)

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
      <Box sx={{ marginBottom: `${FOOTER_HEIGHT}px` }}>{content}</Box>
      <Footer />
    </div>
  )
}

export default App
