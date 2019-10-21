import React, { useRef, useState } from 'react';
import { FormGroup, FormControl, ControlLabel, Badge } from 'react-bootstrap';
import LoaderButton from '../../components/LoaderButton/LoaderButton';
import config from '../../config';
import { API } from 'aws-amplify';
import { s3Upload } from '../../libs/awsLib';

import './NewNote.css';

export default function NewNote(props) {
  const file = useRef(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      if (tags.indexOf(event.target.value) === -1) {
        setTags([...tags, event.target.value]);
        console.log([...tags, event.target.value]);
      }

      event.target.value = '';
    }
  }

  async function handleSubmit(event) {
    if (event.key !== 'Enter') {
      event.preventDefault();

      if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
        alert(
          `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
            1000000} MB.`
        );
        return;
      }

      setIsLoading(true);

      try {
        const attachment = file.current ? await s3Upload(file.current) : null;

        await createNote({ title, content, attachment, tags });
        props.history.push('/');
      } catch (e) {
        alert(e);
        setIsLoading(false);
      }
    }
  }

  function createNote(note) {
    console.log(note);
    return API.post('notes', '/notes', {
      body: note
    });
  }

  function renderTags() {
    if (tags.length > 0) {
      const tagList = tags.map((tag) => {
        return (
          <Badge className='tagBadge' onClick={() => removeTag(tag)}>
            {tag}
          </Badge>
        );
      });

      return <div>{tagList}</div>;
    }
  }

  function removeTag(tag) {
    console.log('removing: ' + tag);
    let index = tags.indexOf(tag);
    console.log('index ' + index);
    if (index !== -1) {
      let newTags = [...tags];
      newTags.splice(index, 1);
      console.log(newTags);
      setTags(newTags);
    }
  }

  return (
    <div className='NewNote'>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId='title'>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            value={title}
            componentClass='input'
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='content'>
          <ControlLabel>Content</ControlLabel>
          <FormControl
            value={content}
            componentClass='textarea'
            onChange={(e) => setContent(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='file'>
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={handleFileChange} type='file' />
        </FormGroup>
        <FormGroup controlId='tags'>
          <ControlLabel>Tags</ControlLabel>
          <FormControl
            placeholder='Enter to add tag, click to remove'
            onKeyPress={handleKeyPress}
            type='input'
          />
          {renderTags()}
        </FormGroup>
        <LoaderButton
          block
          type='submit'
          bsSize='large'
          bsStyle='primary'
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </form>
    </div>
  );
}
