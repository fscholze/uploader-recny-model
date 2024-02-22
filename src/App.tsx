import { Box, Button, Container, Typography } from '@mui/material'
import { FileUploader } from './components/file-uploader'
import { LanguageModelSelector } from './components/language-model-selector'
import { FC, useState } from 'react'
import { OutputFormatSelector } from './components/output-format-selector'
import { generateId } from './helper/random'
import { LinearProgressWithLabel } from './components/linear-progress-with-label'

const DEFAULT_LANGUAGE_MODEL: LanguageModel = 'HF'
const DEFAULT_OUTPUT_FORMAT: OutputFormat = 'Text'
const url = generateId(32)

const App: FC<{}> = () => {
  const [choosenModel, setChoosenModel] = useState<LanguageModel>(DEFAULT_LANGUAGE_MODEL)
  const [outputFormat, setOutputFormat] = useState<OutputFormat>(DEFAULT_OUTPUT_FORMAT)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgess] = useState(0)

  const onStartUpload = () => {
    setIsLoading(true)

    setTimeout(() => setProgess(10), 1000)
    setTimeout(() => setProgess(20), 2000)
    setTimeout(() => setProgess(30), 3000)
    setTimeout(() => setProgess(40), 3500)
    setTimeout(() => setProgess(50), 4000)
    setTimeout(() => setProgess(60), 4300)
    setTimeout(() => setProgess(70), 5000)
    setTimeout(() => setProgess(80), 6000)
    setTimeout(() => setProgess(100), 6300)
  }

  return (
    <Container>
      <Typography variant='h3'>File Uploader</Typography>
      <FileUploader />
      <Box sx={{ display: 'flex', justifyContent: 'space-around', maxWidth: 200 }}>
        <LanguageModelSelector
          languageModel={choosenModel}
          onChangeLanguageModel={setChoosenModel}
        />
        <OutputFormatSelector outputFormat={outputFormat} onChangeOutputFormat={setOutputFormat} />
      </Box>

      <Button onClick={onStartUpload}>Upload</Button>

      {isLoading === true && (
        <>
          <Typography>is loading.... and saving stuff in {url}</Typography>
          <LinearProgressWithLabel progress={progress} />
        </>
      )}

      {isLoading === true && progress === 100 && (
        <>
          <Typography>Done!</Typography>
          <Typography>
            Twoj Link je: <a href={url}>Link</a>
          </Typography>
        </>
      )}
    </Container>
  )
}

export default App
