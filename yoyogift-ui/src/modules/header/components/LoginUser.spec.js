import { mount } from "enzyme";
import React from "react";
import { LoginUser, mapDispatchToProps } from "./LoginUser";
import { LOGIN } from "../state/actions/types";

describe("Login User Test Suite", () => {
  it("should find a single button on render", () => {
    const wrapper = mount(<LoginUser />);
    
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').at(0).text()).toBe('Login');
  });

  it('should render the expected HTML', () => {
    expect(mount(<LoginUser />
    ).html()).toMatchSnapshot();
  });

  it("should login user", () => {
    const userData = {
      id: 123,
      name: "SAS TV",
      email: "knowledge.com2k16@gmail.com"
    };

    let dispatch = jest.fn();

    let props = mapDispatchToProps(dispatch);
    props.login(userData);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);

    expect(dispatch.mock.calls[0]).toEqual([{
      type: LOGIN,
      payload: userData
    }]);
  });

  it("should create user", () => {
    const userData = {
      id: 123,
      name: "SAS TV",
      email: "knowledge.com2k16@gmail.com"
    };

    let dispatch = jest.fn();

    let props = mapDispatchToProps(dispatch);
    props.createUser(userData);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});