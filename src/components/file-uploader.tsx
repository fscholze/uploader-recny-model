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
