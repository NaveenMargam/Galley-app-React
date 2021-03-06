import React,{useState} from 'react'
import ProgressBar from '../comps/ProgressBar'

export default function UploadForm() {
    const [file,setFile] = useState(null)
    const [error,setError] = useState(null)
    const types = ['image/png','image/jpeg']
    const changeHandler = (e)=> {
        let selected=e.target.files[0]
        if(selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('please select a image file (png or jpeg)')
        }
    }

    return (
        <div>
           <form>
               <label>
           <input type="file" onChange={changeHandler}/> 
           <span>+</span>
           </label>
           <div className="ouput">
               {error && <div className='error'>{error}</div>}
               {file && <div className='file'>{file.name}</div>}
               {file && <ProgressBar file={file} setFile={setFile} />}
           </div>
           </form> 
        </div>
    )
}
