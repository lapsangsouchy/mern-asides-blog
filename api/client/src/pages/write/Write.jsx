import { useContext, useState } from 'react';

import './write.css';
import { Context } from '../../context/Context';
import { axiosInstance } from '../../config';

const Write = () => {
  //Category tests commented out until solution is found

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  // const [cat, setCat] = useState([]);
  // const [preCat, setPreCat] = useState();
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axiosInstance.post('api/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axiosInstance.post('/api/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='write'>
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
      )}
      {/* {cat && (
        <div>
          <span style={{ marginLeft: '20px' }}>Categories:</span>
          <br />
          <ul className='writeCatList'>
            {cat.map((c) => (
              <li className='writeCat'>{c}</li>
            ))}
          </ul>
        </div>
      )} */}
      <form className='writeForm' onSubmit={handleSubmit}>
        {/* <div className='writeFormGroup'>
          <input
            type='text'
            placeholder='Category'
            className='writeCatInput'
            maxLength={10}
            onChange={(e) => setPreCat(e.target.value)}
          />
          <i
            className='writeCatIcon fas fa-plus'
            onClick={() => setCat([...cat, preCat])}
          ></i>
        </div> */}
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            type='text'
            className='writeInput writeText'
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
