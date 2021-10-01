import loginReducer from "./loginReducer";
import { login, logout } from "../actions";

describe("Login Reducer Test Suite", () => {
  it("should be initial state", () => {
    expect(loginReducer(undefined, {})).toEqual(
    {
      loginStatus: false,
      detailsObject: {}
    });
  });
  
  it("should login the user and add details in details obect", () => {
    const prevState = {
      loginStatus: false,
      detailsObject: {}
    };
    const userData = {
      id: 7,
      firstName: "SAS",
      lastName: "TV",
      email: "knowledge.com2k16@gmail.com"
    };

    let action = login(userData);

    expect(loginReducer(prevState, action)).toEqual(
    {
      loginStatus: true,
      detailsObject: userData
    });
  });

  it("should logout the user and empty the details obect", () => {
    const prevState = {
      loginStatus: true,
      detailsObject: {
        id: 7,
        firstName: "SAS",
        lastName: "TV",
        email: "knowledge.com2k16@gmail.com"
      }
    };
    let action = logout();

    expect(loginReducer(prevState, action)).toEqual(
    {
      loginStatus: false,
      detailsObject: {}
    });
  });
});