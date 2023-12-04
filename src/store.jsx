import { store } from "redux";

const initialState = { user: null };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
}
const store1 = store(userReducer);

// 獲取當前使用者
const currentUser = store1.getState().user;

// 設置新的使用者
store.dispatch({ type: "SET_USER", user: { name: "John Doe" } });

// // 獲取更新後的使用者
// const updatedUser = store.getState().user;
// console.log(updatedUser); // { name: 'John Doe' }
export default store;
