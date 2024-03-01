import { FC, useEffect, useRef } from 'react'

export const FileUploader: FC<{
  file: File | null
  isDisabled: boolean
  onSetFile: (file: File) => void
}> = ({ file, isDisabled, onSetFile }) => {
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
      <div>
        <label htmlFor='file' className='sr-only'>
          Wuzwol dataju{' '}
        </label>
        <input
          id='file'
          ref={uploadInputRef}
          type='file'
          disabled={isDisabled}
          onChange={onFileChange}
        />
      </div>
      {file && (
        <section>
          Drobnosće dataje:
          <ul>
            <li>Mjeno: {file.name}</li>
            <li>Typ: {file.type}</li>
            <li>Wulkosć: {file.size} bytes</li>
          </ul>
        </section>
      )}
    </>
  )
}
