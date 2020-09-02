export const todosState = {
  currentType: 'all',
  currentTodos: [],
  allTodos: [],
};

const todosAction = (draft, action) => {
  switch (action.type) {
    case 'add-new-todo': {
      draft.currentTodos.unshift({
        id: action.id,
        task: action.task,
        checked: false,
      });

      draft.allTodos.unshift({
        id: action.id,
        task: action.task,
        checked: false,
      });
      return;
    }

    case 'add-active-todo': {
      draft.currentTodos.unshift({
        id: action.id,
        task: action.task,
        checked: false,
      });

      draft.allTodos.unshift({
        id: action.id,
        task: action.task,
        checked: false,
      });
      return;
    }

    case 'add-checked-todo': {
      draft.currentTodos.unshift({
        id: action.id,
        task: action.task,
        checked: true,
      });

      draft.allTodos.unshift({
        id: action.id,
        task: action.task,
        checked: true,
      });
      return;
    }

    case 'set-current-all': {
      draft.currentType = 'all';
      draft.currentTodos = draft.allTodos;
      return;
    }

    case 'set-current-active': {
      draft.currentType = 'active';
      draft.currentTodos = draft.allTodos.filter(
        (item) => item.checked === false
      );
      return;
    }

    case 'set-current-completed': {
      draft.currentType = 'completed';
      draft.currentTodos = draft.allTodos.filter(
        (item) => item.checked === true
      );
      return;
    }

    case 'set-todos-stored': {
      draft.currentTodos = action.currentTodos;
      draft.allTodos = action.allTodos;
      return;
    }

    case 'checked-a-todo': {
      draft.currentTodos = draft.currentTodos.filter((item) => {
        if (item.id === action.id && draft.currentType === 'active')
          return null;

        if (item.id === action.id && draft.currentType === 'completed')
          return null;

        if (item.id === action.id) {
          item.checked = !item.checked;
          return item;
        }

        return item;
      });

      draft.allTodos = draft.allTodos.filter((item) => {
        if (item.id === action.id) {
          item.checked = !item.checked;
          return item;
        }
        return item;
      });

      return;
    }

    case 'delete-todo': {
      draft.currentTodos = draft.currentTodos.filter(
        (item) => item.id !== action.id
      );
      draft.allTodos = draft.allTodos.filter((item) => item.id !== action.id);
      return;
    }

    case 'empty-todos': {
      draft.currentType = 'all';
      draft.currentTodos = [];
      draft.allTodos = [];
      return;
    }

    default: {
      return draft;
    }
  }
};

export default todosAction;
