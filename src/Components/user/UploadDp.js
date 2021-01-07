import React, { Component } from 'react'
const api = 'http://localhost:5001/api/v1/upload';

export default class UploadDp extends Component {
    constructor(props){
        super(props)
        this.state = {
            file: ""
        }
    }

    handleChange = (e) => {
        console.log(e.target.files[0]);
        this.setState({
            file: e.target.files[0]
        })
    }

    uploadFile = () => {
        const data = new FormData();
        data.append('myFile', this.state.file)
        console.log(data.get('myFile'));
        fetch(api, {
            method: "POST",
            headers: {
                'content-type': 'multipart/form-data'            },
            body: data
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    render() {
        return (
            <div>
                <input name="file" type="file" onChange={this.handleChange}/> <br/>
                <button type="submit" onClick={this.uploadFile}>Upload</button>                  
            </div>
        )
    }
}
