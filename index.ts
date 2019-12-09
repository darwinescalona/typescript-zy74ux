// Import stylesheets
import './style.css';
import {Action, Reducer} from './ngrx-fake/ngrx';
import {contadorReducer} from './contador/contador.reducer';
import {incrementadorAction, 
        decrementadorAction, 
        multiplicadorAction, 
        diviosorAction, 
        resetAction} from './contador/contador.actions';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter Dj</h1>`;



 class Store<T> {
   constructor(private reducer: Reducer<T>, 
              private state: T){

   }

  getState(){
    return this.state;
  }

  dispatch(action: Action){
    this.state = this.reducer(this.state, action)
  }
 }

 const store = new Store (contadorReducer, 10);

console.log(store.getState());
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
console.log(store.getState());

store.dispatch(multiplicadorAction);
console.log(store.getState());


/*
console.log(contadorReducer(10, decrementadorAction))
console.log(contadorReducer(10, multiplicadorAction))
console.log(contadorReducer(10, diviosorAction))
console.log(contadorReducer(10, resetAction))*/
