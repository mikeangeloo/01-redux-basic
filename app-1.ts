
// Acciones
interface Action {
  type: string;
  payload?: any;
}



function reducer(state = 10, action: Action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
}

// Usar el reducer
const incrementAction: Action = {
  type: 'INCREMENT'
};

console.log(reducer(10, incrementAction));
