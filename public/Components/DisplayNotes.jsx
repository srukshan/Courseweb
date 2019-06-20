import React, { Component } from 'react'

export default class DisplayNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: 
            [
                {
                    _id: '',
                    title: '',
                    content: '',
                    date: new Date()
                }
            ]
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/api/notes/', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({notes: jsonRes});
                this.state.notes.forEach(note => {
                    console.log(note._id)
                });
            })
            .catch(err => {
                console.log('err:- '+err)
            });
    }

    render() {
        const notelist = this.state.notes.map((note) => 
            <tr key={note._id}>
                <th scope="row">{note._id}</th>
                <td>{note.title}</td>
                <td>{note.content}</td>
                <td>{note.date.toString()}</td>
            </tr>
        );
        return (
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notelist}
                    </tbody>
                </table>
            </div>
        )
    }
}
