import { Typography } from '@mui/material'
import { FC } from 'react'

const Imprint: FC<{}> = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 400
      }}
    >
      <Typography variant='h5' textAlign='center'>
        H1
      </Typography>
      <Typography variant='body1' textAlign='center'>
        Wuzwol je projekt, kótaryž je
      </Typography>
    </div>
  )
}

export default Imprint
