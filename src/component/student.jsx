import React, {Component} from 'react';
import Preview from './preview.jsx';

class Student extends Component {
    constructor() {
        super();

        this.state = {
            editing: false,
            index: '',
            data: [],
            name: '',
            father: '',
            class: '',
            religion: '',
        }
    }
    getValue = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    }
    saveDataHandler = () => {
        const data = this.state.data.slice(0);
        if (this.state.name && this.state.father && this.state.class && this.state.religion) {
            if (this.state.editing) {
                data[this.state.index].name = this.state.name;
                data[this.state.index].father = this.state.father;
                data[this.state.index].class = this.state.class;
                data[this.state.index].religion = this.state.religion;
                this.setState({
                    editing: false,
                    data,
                    name: '',
                    father: '',
                    class: '',
                    religion: '',
                });
            }
            else {
                data.push({
                    name: this.state.name,
                    father: this.state.father,
                    class: this.state.class,
                    religion: this.state.religion,
                });
                this.setState({
                    data,
                    name: '',
                    father: '',
                    class: '',
                    religion: '',
                });
            }
        }
        else {
            alert('All fields are mandatory to fill');
        }
    }
    getIndex = index => {
        const data = this.state.data[index];
        this.setState({
            index,
            editing: true,
            name: data.name,
            father: data.father,
            class: data.class,
            religion: data.religion,
        });
    }
    onDismiss = index => {
        const data = this.state.data.filter((value, ind) => index !== ind);
        this.setState({
            index,
            data,
            editing: false,
            name: '',
            father: '',
            class: '',
            religion: '',
        })
    }
    render() {
        return(
            <div className='container'>
                <h3>Student Data Form</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>
                                <input 
                                    type='text' name='name' value={this.state.name}
                                    className='form-control' onChange={this.getValue} />
                            </td>
                        </tr>
                        <tr>
                            <th>Father Name</th>
                            <td>
                                <input 
                                    type='text' name='father' value={this.state.father}
                                    className='form-control' onChange={this.getValue} />
                            </td>
                        </tr>
                        <tr>
                            <th>Class</th>
                            <td>
                                <input 
                                    type='text' name='class' value={this.state.class}
                                    className='form-control' onChange={this.getValue} />
                            </td>
                        </tr>
                        <tr>
                            <th>Religion</th>
                            <td>
                                <input 
                                    type='text' name='religion' value={this.state.religion}
                                    className='form-control' onChange={this.getValue} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input 
                                    type='button' value={!this.state.editing ? 'Submit' : 'Update'}
                                    className={!this.state.editing ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'} onClick={this.saveDataHandler} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                {this.state.data.length > 0 ?
                    <Preview 
                        data={this.state.data} onEdit={this.getIndex}
                        onDel={this.onDismiss} />
                : ''}
            </div>
        );
    }
}

export default Student;