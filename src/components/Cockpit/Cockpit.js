import React from 'react';
const cockpit = (props) => {
    return <div className={props.clas.App}><h1>Hello This is react App</h1>
    <p className={props.classes.join(' ')}> This is really working!</p>
                <button key='b2' className={props.showPersons === true ? props.clas.Red : null}
                  onClick={props.togglePersonsHandler}>
                  {props.showPersons === true ?
                  <span> HIDE</span> : <span>SHOW</span>}
                </button>
                <button key='b1'
                  onClick={
                    () => props.switchNameHandler()
                  } > Reset List</button>
    </div>;
}
export default cockpit;