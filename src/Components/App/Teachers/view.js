//Dependencies
import React, { Component } from 'react';

//Assets
import './style.css';

class Teachers extends Component {

  componentWillMount() {
    this.props.getTeachers();
  }

  getTeacherList = () => {
    const { teachers } = this.props;
    return teachers.map(item => (
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        <tr>
          <td> { item.id } </td>
          <td> { item.name } </td>
        </tr>
      </table>
    ))
  }
  render() {
    return (
      <div className="Teachers">
        <h1>Teachers Page</h1>
        { this.getTeacherList() }
      </div>
    );
  }
}

export default Teachers;
