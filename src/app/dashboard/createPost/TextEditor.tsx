// MyRichTextEditor.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import type { ReactQuillProps } from 'react-quill';

interface MyRichTextEditorProps extends ReactQuillProps {
  onTextChange: (value: string) => void; // Function to update parent state
}

const MyRichTextEditor: React.FC<MyRichTextEditorProps> = ({ onTextChange, ...props }) => {
  const [text, setText] = useState('');

  console.log(text);

  const handleChange = (value: string) => {
    setText(value);
    onTextChange(value);
  };

  return (
    <ReactQuill
      value={text}
      className='h-[50vh] w-[90%] bg-white overflow-hidden'
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
        ],
      }}
      formats={[
        'header',
        'bold',
        'italic',
        'underline',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
      ]}
      {...props}
    />
  );
};

export default MyRichTextEditor;
