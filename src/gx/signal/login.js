import { createSignal } from '@dilane3/gx';

const LoginSignal = createSignal({
  name: 'login',
  state: false,
  actions: {
    login: (state, payload) => {
      if(!localStorage.getItem('userAuthantif')){
        localStorage.setItem('userAuthantif', JSON.stringify(payload))
        return true
      } else {
        localStorage.setItem('userAuthantif', JSON.stringify(payload))
        return true
      }

    },
    logout: (state, payload) => {
        localStorage.removeItem('userAuthantif')
        return false;
    }
  }
});

export default LoginSignal;