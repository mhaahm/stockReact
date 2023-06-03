import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Unstable_Grid2';
import {Button, TextField} from "@mui/material";
import {RiSave2Line} from 'react-icons/ri'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NoteHome = (props) => {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState('');
  const onFormSubmit  = data => {
    console.log(data)
  };

  const onErrors = errors => console.error(errors);
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']
    ]}
  const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
  return <div>
            <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
              <Grid container spacing={2}>
                <Grid xs={4}>
                  <TextField id="outlined-basic" label="Note Name" variant="outlined" fullWidth  {...register('noteName')}/>
                </Grid>
                <Grid xs={4}>
                  <Button variant="contained" style={{marginTop:'10px'}} startIcon={<RiSave2Line/>} type={"submit"}>Save</Button>
                </Grid>
                <Grid xs={12}>
                  <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats}/>
                </Grid>
                <Grid xs={8}>
                </Grid>
              </Grid>
            </form>
          </div>
}

export default NoteHome;