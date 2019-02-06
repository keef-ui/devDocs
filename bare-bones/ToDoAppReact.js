import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./styles.css";

class ToDoApp extends React.Component {
  constructor(props) {
    super();
    this.state = { list: [props.list] , doneList: [props.doneList] };
  }
  componentWillUpdate(nextProps, nextState) { }
  render() {
    return (
      <div id='todo_widget'>
        <ul id="list">
          <li className="header"><h2 className='title'>My to do list </h2></li>
          <li className="add_reset_section">
            <input ref={this.newItem} placeholder="Add a new task..." />
          </li>
          <li className="button add">
            <button onClick={this._handleAddItem}>Add</button>
          </li>
          <li className="button reset">
            <button onClick={this._handleResetList}>Reset</button>
          </li>
          {this.state.list.map((value, i) => {
            return (
              <li className="main">
                <input className='checkbox' type="checkbox" onClick={this._handleCheckBoxClick} />{value}
              </li>
            )
          })}
          <li className="footer"><button className='remove' onClick={this._handleRemoveDoneItems}>
            Remove
        </button></li>
        </ul>
      </div>
    );
  }

  _handleAddItem = () => { };

  _handleResetList = () => { };

  _handleRemoveDoneItems = e => { };

  _handleUpdateDoneList = id => { };

}

ToDoApp.propTypes = {
  list: PropTypes.array
};

ToDoApp.defaultProps = {
  list: ["Get up in the morning", "Brush my teeth"],
  doneList: []
};
