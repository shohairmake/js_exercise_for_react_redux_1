import { todoReducer } from '../../reducers/todoReducer';
import {
  addTodo,
  deleteTodo,
  toggleTodoCompleted
} from '../../actions/todoActionCreator';
import Todo from '../../models/Todo';

describe('todoReducerのテスト', () => {
  it('action.type === ADD_TODOのとき、Todo1件追加した配列を返す', () => {
    const dummyText = 'ダミーテキスト'
    const action = addTodo(dummyText);
    const initialState = [];
    const newState = todoReducer(initialState, action);

    expect(newState[0] instanceof Todo).toStrictEqual(true);
  });

  it('action.type === DELETE_TODOのとき、index番号の要素を削除した配列を返す', () => {
    // テスト動作確認用にダミーデータを3件用意
    const prefixText = 'テスト'
    let state = [];
    for (let i = 0; i < 3; i++) {
      const text = prefixText + i;
      const action = addTodo(text);
      state = todoReducer(state, action);
    }

    expect(state.length).toStrictEqual(3);

    // インデックス番号1を指定して、
    // 「action.type === DELETE_TODO」でreducerを実行
    const targetTodo = state[1];
    const deleteAction = deleteTodo(targetTodo.id);
    state = todoReducer(state, deleteAction);
    expect(state.length).toStrictEqual(2);
  });

  it('action.type === TOGGLE_TODO_COMPLETEDのとき、index番号の要素を削除した配列を返す', () => {
    let state = [];
    const addAction = addTodo('ダミー');

    state = todoReducer(state, addAction);
    const todo = state[0];

    expect( todo.hasCompleted() ).toStrictEqual(false);

    const toggleAction = toggleTodoCompleted(todo.id);
    state = todoReducer(state, toggleAction);

    expect( todo.hasCompleted() ).toStrictEqual(true);
  });
});

