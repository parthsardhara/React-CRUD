import React, { Component } from 'react'

class Input extends Component {
  // let buttonName = 'Save';
  // props.currentID == null ? buttonName = 'Save' : buttonName = 'Update';
  state = {
    name: '',
    list: [
      { id: 1, name: 'Parth' },
      { id: 2, name: 'Vishal' },
      { id: 3, name: 'Jaj' },
    ],
    currentId: null,
    buttonName: 'Save'
  }

  changeHandler = (event) => {
    this.setState({ name: event.target.value });
  }

  buttonClickHandler = (data) => {
    let updatedList = [...this.state.list];
    const { list, currentId } = this.state;

    if (this.state.currentId == null) {
      this.setState({
        name: '',
        list: [...list, { id: updatedList.length + 1, name: data }],
        currentId: null,
      });
    } else {
      list.forEach(element => {
        if (element.id === currentId) {
          return element.name = data;
        }
      });
      this.setState({ list: list, name: '', currentId: null, buttonName: 'Save' });
    }
  }

  deleteClickHandler = (id) => {
    let updatedList = [...this.state.list];
    updatedList.forEach((element, index) => {
      if (element.id === id) {
        updatedList.splice(index, 1);
      }
    });
    this.setState({ list: updatedList });
  }

  updateClickHandler = (id, name) => {
    this.setState({ name: name, currentId: id, buttonName: 'Update' });
  }
  render() {
    return (
      <div>
        <div className="row mb-3">
          <div className="col-8">
            <input className="form-control" type="text" value={this.state.name} onChange={this.changeHandler} />
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={() => this.buttonClickHandler(this.state.name)}>{this.state.buttonName}</button>
          </div>
        </div>
        <div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((list, index) => {
                return (
                  <tr key={list.id}>
                    <th scope="row">{list.id}</th>
                    <td>{list.name}</td>
                    <td onClick={() => this.updateClickHandler(list.id, list.name)}>Update</td>
                    <td onClick={() => this.deleteClickHandler(list.id)}>Delete</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div >
    );
  }
}

export default Input;