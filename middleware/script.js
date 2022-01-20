import store from './store/storeConfigure.js';
import { tokenFetch } from './store/modules/token.js';
import { userFetch } from './store/modules/user.js';

const login = async (user) => {
  let state = store.getState();
  if (state.token.data === null) {
    await store.dispatch(tokenFetch(user));
  }
  state = store.getState();
  await store.dispatch(userFetch(state.token.data));
};

login({ username: 'dog', password: 'dog' });
