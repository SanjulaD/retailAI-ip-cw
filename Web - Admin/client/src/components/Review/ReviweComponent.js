import React, { useState } from 'react';
import {
    Form
} from 'react-bootstrap'
import axios from 'axios'
import Loader from './../Loader/Loader'

const ReviweComponent = () => {

    const [selectedFile, setSelectedFile] = useState(false)
    const [count, setCount] = useState('')
    const [loading, setLoading] = useState(false)
    const [review, setReview] = useState('Good');

    const onChangeHandler = event => {
        setSelectedFile(event.target.files[0])
    }

    const onClickHandler = () => {

        setLoading(true)
        const data = new FormData()
        data.append('input_file', selectedFile)

        axios.post(`http://localhost:5000/${review}`, data, {
        })
            .then(res => {
                setCount(res.data)
                setLoading(false)
            })
    }

    console.log(review)


    return (
        <Form>
            <Form.Group className="p-2 text-center">
                <Form.File className="mb-3" type="file" name="input_file" onChange={onChangeHandler} />
                <Form.Check type="radio" inline label="Good Review Count" checked={review === 'good-review'} value="good-review" onClick={() => setReview('good-review')} defaultChecked />
                <Form.Check type="radio" inline label="Bad Review Count" checked={review === 'bad-review'} value="bad-review" onClick={() => setReview('bad-review')} />
            </Form.Group>
            {loading && <Loader />}
            {
                count && (
                    <p className="text-center"><b>{count}</b></p>
                )
            }
            <div className="p-2">
                <button type="button" className="btn btn-success btn-block mb-3" onClick={onClickHandler}>Submit</button>
            </div>
        </Form>
    )
};

export default ReviweComponent
