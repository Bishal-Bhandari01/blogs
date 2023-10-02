import * as React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function RichTextEditor() {
    const [val, setVal] = React.useState("")
    return (
        <ReactQuill
        value={val}
        onChange={(a) => setVal(a)}
        />
    )
}