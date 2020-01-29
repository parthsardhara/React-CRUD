import React from 'react';

const Input = (props) => {
  let buttonName = 'Save';
  props.currentID == null ? buttonName = 'Save' : buttonName = 'Update';

  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-4">
          <input className="form-control" type="text" value={props.userName} onChange={props.change} />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary" onClick={() => props.buttonClick(props.userName)}>{buttonName}</button>
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
            {props.listData.map((list, index) => {
              return (
                <tr key={list.id}>
                  <th scope="row">{list.id}</th>
                  <td>{list.name}</td>
                  <td onClick={() => props.updateClick(list.id, list.name)}>Update</td>
                  <td onClick={() => props.deleteClick(list.id)}>Delete</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Input;