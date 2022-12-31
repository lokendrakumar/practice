import { Component } from 'react'
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import {counterActions}  from '../store/counter'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch( counterActions.toggle() )
   };
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { showCounter && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler} > Increment </button>
        <button onClick={increaseHandler} > Increment By 5 </button>
        <button onClick={decrementHandler}> decrement </button>
      </div>
      <div>  </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>

    </main>
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }
//   decrementHandler() {
//     this.props.decrement()
//   }
//   render(){return(
//     <main className = { classes.counter } >
//       <h1>Redux Counter</h1>
//       <div className={classes.value}> {this.props.counter} </div>
//       <div>
//          <button onClick={this.incrementHandler.bind(this)} > Increment </button> 
//          <button onClick={this.decrementHandler.bind(this)}> decrement </button>
//       </div>
//       <div>  </div>
     

//     </main>
//   )}

// }


// const mapStateTOProps = state => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   }
// }
// export default connect(mapStateTOProps,mapDispatchToProps)(Counter);
export default Counter;
