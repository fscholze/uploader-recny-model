import { Box, Link, Stack, Typography } from '@mui/material'
import { FC } from 'react'

export const FOOTER_HEIGHT = 80

export const Footer: FC<{}> = () => (
  <Box
    sx={{
      backgroundColor: 'rgba(255,255,255,0.8)',
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      FOOTER_HEIGHT: 80,
      padding: 1
    }}
  >
    <Stack direction='row' spacing={12} justifyContent='center' alignItems='center'>
      <div>
        <Typography variant='body1'>Wotkazy:</Typography>
        <Stack direction='column'>
          <Typography variant='caption'>
            Whisper{' '}
            <Link
              href='https://github.com/openai/whisper'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (https://github.com/openai/whisper)
            </Link>
          </Typography>
          <Typography variant='caption'>
            Facebook{' '}
            <Link
              href='https://github.com/openai/facebook'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (https://github.com/openai/whisper)
            </Link>
          </Typography>
          <Typography variant='caption'>
            atd.{' '}
            <Link
              href='https://github.com/openai/atd'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (https://github.com/openai/atd)
            </Link>
          </Typography>
        </Stack>
      </div>

      <Link href='impressum' color='inherit' underline='hover'>
        Impressum
      </Link>

      <Link href='datowy-skit' color='inherit' underline='hover'>
        Datowy škit
      </Link>
    </Stack>
  </Box>
)
