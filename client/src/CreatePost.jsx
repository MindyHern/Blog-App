import axios from 'axios'
import React, { useState } from 'react'

function CreatePost() {
    const [title, setTitle] =useState()
    const [desc, setDescription] = useState()
    const [file, setFile] = useState()

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.defaults.withCredentials = true;
        const handelSubmit = (e) => {
          e.preventDefault()
          axios.post('http://localhost:3001/create', {title, description, file})
          .then(res => {
              if(res.data === "Success") {
                  window.location.href ="/"
              }
          })    
          .catch(err => console.log(err))
        }
    }

  return (
    <div className="post_container">
        <div className="post_form">
            <form onSubmit="post_form">
                <h2>Create Post</h2> 
            <input type="text" placeholder="Enter Title" onChange={e => setTitle(e.target.value)}/>
                <textarea
                 name="desc"
                id="desc"
                cols="30" 
                rows="10"
                placeholder="Enter Description"
                onChange={e => setDescription(e.target.value)}
                ></textarea>
                <input type= "file" classname="file" placeholder="Select File"
               onChange={e => setFile(e.target.files[0])}/>
                <button>Post</button>
              </form>
            </div>
        </div>
    )
}

export default CreatePost