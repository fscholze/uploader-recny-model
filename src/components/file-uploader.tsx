import { FC, useState } from 'react'

export const FileUploader: FC<{}> = () => {
  const [file, setFile] = useState<File | null>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
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
