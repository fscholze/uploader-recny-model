import { Box, Link, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { FOOTER_HEIGHT } from '../types/constants'
import { ROUTES } from '../routes/default'

export const Footer: FC<{}> = () => (
  <Box
    sx={{
      backgroundColor: 'rgba(255,255,255,0.8)',
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      FOOTER_HEIGHT: FOOTER_HEIGHT
    }}
  >
    <Stack direction='row' spacing={12} justifyContent='center' alignItems='center'>
      <div>
        <Typography variant='body1'>Žórła:</Typography>
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
              (github)
            </Link>
          </Typography>
          <Typography variant='caption'>
            Whisper.cpp{' '}
            <Link
              href='https://github.com/ggerganov/whisper.cpp'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (github)
            </Link>
          </Typography>
          <Typography variant='caption'>
            Fairseq{' '}
            <Link
              href='https://github.com/facebookresearch/fairseq'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (github)
            </Link>
          </Typography>
          <Typography variant='caption'>
            Žórła aplikacije{' '}
            <Link
              href='https://github.com/ZalozbaDev/uploader-recny-model/'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (github)
            </Link>
          </Typography>
          <Typography variant='caption'>
            Žórła serwera{' '}
            <Link
              href='https://github.com/ZalozbaDev/uploader-recny-model-server/'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (github)
            </Link>
          </Typography>
        </Stack>
      </div>

      <div>
        <Typography variant='body1'>Wotkazy:</Typography>
        <Stack direction='column'>
          <Typography variant='caption'>
            Korla Baier HSB modele{' '}
            <Link
              href='https://huggingface.co/spaces/Korla/hsb_stt_demo/tree/main'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (huggingface hub)
            </Link>
          </Typography>
          <Typography variant='caption'>
            Fraunhofer IKTS{' '}
            <Link
              href='https://www.ikts.fraunhofer.de/de/industrieloesungen/akustische_diagnostik/bio_sprachsignale.html'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (homepage)
            </Link>
          </Typography>
          <Typography variant='caption'>
            Wuwiće strony{' '}
            <Link
              href='https://fs-coding.com/'
              target='_blank'
              rel='noopener'
              color='inherit'
              underline='hover'
            >
              (homepage)
            </Link>
          </Typography>
        </Stack>
      </div>
      
      <Link href={ROUTES.imprint} color='inherit' underline='hover'>
        Impresum
      </Link>

      <Link href={ROUTES['datowy-skit']} color='inherit' underline='hover'>
        Datowy škit
      </Link>
    </Stack>
  </Box>
)
