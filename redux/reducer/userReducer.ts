import actionsTypes from "../actions/actionsTypes";

const usersReducer = (users: any = [], action: any = {}) => {
  let newUsers;
  switch (action.type) {
    case actionsTypes.loadUsers:
      newUsers = [...action.users];
      break;
    default:
      newUsers = [...users];
  }
  return newUsers;
};

export default usersReducer;
