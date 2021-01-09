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
        data.append('File', this.state.file)
        console.log(data.get('File'));
        fetch(api, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
               },
            body: data
            })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    render() {
        return (
            <div>
                <input name="file" type="file" onChange={this.handleChange}/> <br/>
                    <div className="btn-div">
                <button type="submit" onClick={this.uploadFile} className="btn">Upload</button>                  

                </div>
            </div>
        )
    }
}
