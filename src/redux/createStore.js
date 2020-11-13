import { createStore } from 'redux';
import rootReducers from './reducers';
import MovieList from '../components/MovieList/MovieList'

 const store= createStore(rootReducers);


store.subscribe(()=>console.log("state after subscribing "+JSON.stringify(store.getState())));
store.subscribe(()=>console.log("state after subscribing "+JSON.stringify(store.getState())));


export default store;