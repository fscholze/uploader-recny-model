import { Button, Typography, styled } from '@mui/material'
import { FC, useEffect, useRef } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

export const FileUploader: FC<{
  title?: string
  file: File | null
  isDisabled: boolean
  acceptExtensions?: string
  onSetFile: (file: File) => void
}> = ({ title = 'Wuzwol dataju', file, isDisabled, acceptExtensions, onSetFile }) => {
  const uploadInputRef = useRef<HTMLInputElement>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onSetFile(e.target.files[0])
    }
  }

  useEffect(() => {
    if (file === null && uploadInputRef.current) {
      // Add null check for uploadInput.current
      uploadInputRef.current.value = ''
    }
  }, [file])

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: file ? 'space-between' : 'center',
          width: '100%',
          maxWidth: 400
        }}
      >
        <Button
          component='label'
          role={undefined}
          variant='contained'
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{ color: 'rgb(164,243,243)' }}
          disabled={isDisabled}
        >
          {title}
          <VisuallyHiddenInput type='file' onChange={onFileChange} accept={acceptExtensions} />
        </Button>
        {file && (
          <div style={{ paddingTop: 5 }}>
            <Typography variant='body1' textAlign='left'>
              Drobnosće dataje:
            </Typography>
            <Typography variant='body2' textAlign='left'>
              * mjeno: {file.name}
            </Typography>
            <Typography variant='body2' textAlign='left'>
              * typ dataje: {file.type}
            </Typography>
            <Typography variant='body2' textAlign='left'>
              * wulkosć: {file.size} bytes
            </Typography>
          </div>
        )}
      </div>
    </>
  )
}
