import React, { Component } from 'react';
import Input from './Component/Input/Input';

class App extends Component {
  state = {
    name: '',
    list: [
      { id: 1, name: 'Parth' },
      { id: 2, name: 'Vishal' },
      { id: 3, name: 'Jaj' },
    ],
    currentId: null
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
        currentId: null
      });
    } else {
      list.forEach(element => {
        if (element.id === currentId) {
          return element.name = data;
        }
      });
      this.setState({ list: list, name: '', currentId: null });
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
    this.setState({ name: name, currentId: id });
  }


  render() {
    return (
      <div className="container mt-5">
        <Input
          userName={this.state.name}
          listData={this.state.list}
          change={this.changeHandler}
          buttonClick={this.buttonClickHandler}
          deleteClick={this.deleteClickHandler}
          updateClick={this.updateClickHandler}
          currentID={this.state.currentId}
        ></Input>
      </div>
    );
  }
}

export default App;