import { createStore } from 'redux';
import combined from './reducers';

export default function configureStore() {
  return createStore(
    combined,
  );
}
