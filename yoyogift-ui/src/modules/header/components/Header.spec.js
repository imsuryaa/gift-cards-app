import { mount } from "enzyme";
import React from "react";
import { Header, mapDispatchToProps } from "./Header";
import Button from "@material-ui/core/Button";
import { LOGOUT } from "../state/actions/types";

describe("Header Test Suite", () => {

  it("should find 2 buttons when user is not logged in", () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};

    let wrapper = mount(<Header classes={classes}
                        isLoggedIn={false} />);

    expect(wrapper.find("button").length).toBe(2);
    expect(wrapper.find('button').at(1).text()).toBe('LOGIN');
  });

  it("should find 6 buttons when user is logged in", () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};

    let wrapper = mount(<Header classes={classes}
                        isLoggedIn={true} />);

    expect(wrapper.find("button").length).toBe(6);
    expect(wrapper.find('button').at(1).text()).toBe('GIFTS RECEIVED');
    expect(wrapper.find('button').at(2).text()).toBe('GIFTS SENT');
    expect(wrapper.find('button').at(3).text()).toBe('MY PROFILE');
    expect(wrapper.find('button').at(4).text()).toBe('Logout');
  });

  it('should call landing function', () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};

    const wrapper = mount(<Header 
      classes={classes}
      isLoggedIn={true}
      />)
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'goTolanding');
    
    wrapper.find(Button)
    .at(0)
    .props()
    .onClick();

    component.goTolanding();
   
   expect(component.goTolanding).toHaveBeenCalled();
   expect(component.goTolanding).toHaveBeenCalledTimes(1)
  });

  it('should call gift received function', () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};

    const wrapper = mount(<Header 
      classes={classes}
      isLoggedIn={true}
      />)
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'giftsReceived');
    
    wrapper.find(Button)
    .at(1)
    .props()
    .onClick();

    component.giftsReceived();
   
   expect(component.giftsReceived).toHaveBeenCalled();
   expect(component.giftsReceived).toHaveBeenCalledTimes(1)
  });

  it('should call gift send function', () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};

    const wrapper = mount(<Header 
      classes={classes}
      isLoggedIn={true}
      />)
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'giftsSend');
    
    wrapper.find(Button)
    .at(2)
    .props()
    .onClick();

    component.giftsSend();
   
   expect(component.giftsSend).toHaveBeenCalled();
   expect(component.giftsSend).toHaveBeenCalledTimes(1)
  });

  it('should call my profile function', () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};

    const wrapper = mount(<Header 
      classes={classes}
      isLoggedIn={true}
      />)
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'myProfile');
    
    wrapper.find(Button)
    .at(3)
    .props()
    .onClick();

    component.myProfile();
   
   expect(component.myProfile).toHaveBeenCalled();
   expect(component.myProfile).toHaveBeenCalledTimes(1)
  });

  it('should call login logout function', () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};

    const wrapper = mount(<Header 
      classes={classes}
      isLoggedIn={true}
      />)
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'handleLoginLogout');
    
    wrapper.find(Button)
    .at(4)
    .props()
    .onClick();
   
   expect(component.handleLoginLogout).toHaveBeenCalled();
   expect(component.handleLoginLogout).toHaveBeenCalledTimes(1)
  });

  it("should call log out function", () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};
    let logout= jest.fn()

    let wrapper = mount(<Header 
                          classes={classes}
                          isLoggedIn={true}
                          logout={logout}
                        />);
    
    wrapper.instance().logOut();

    expect(logout).toHaveBeenCalled();
    expect(logout).toHaveBeenCalledTimes(1);
  });

  it('should render the expected HTML when user is logged out', () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};
    expect(mount(<Header 
      classes={classes}
      isLoggedIn={false}/>
    ).html()).toMatchSnapshot();
  });

  it('should render the expected HTML when user is logged in', () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};
    expect(mount(<Header 
      classes={classes}
      isLoggedIn={true}/>
    ).html()).toMatchSnapshot();
  });

  it("should log out user", () => {
    let dispatch = jest.fn();

    let props = mapDispatchToProps(dispatch);
    props.logout();

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);

    expect(dispatch.mock.calls[0]).toEqual([{
      type: LOGOUT,
      payload: null
    }]);
  });
});