import actionsTypes from "../actions/actionsTypes";

const tokenReducer = (currentToken: any = {}, action: any = {}) => {
  let newToken;
  switch (action.type) {
    case actionsTypes.login:
      newToken = { ...action.user };
      break;
    case actionsTypes.register:
      newToken = { ...currentToken, ...action.newUser };
      break;
    case actionsTypes.loadProfile:
      newToken = { ...action.user };
      break;
    default:
      newToken = { ...currentToken };
  }
  return newToken;
};

export default tokenReducer;
