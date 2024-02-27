import { FC } from 'react'

export const FileUploader: FC<{ file: File | null; onSetFile: (file: File) => void }> = ({
  file,
  onSetFile
}) => {
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onSetFile(e.target.files[0])
    }
  }

  return (
    <>
      <div>
        <label htmlFor='file' className='sr-only'>
          Choose a file
        </label>
        <input id='file' type='file' onChange={onFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}
    </>
  )
}
