import { mount, shallow } from "enzyme";
import React from "react";
import { ProfileContainer } from "./profileContainers";
// import { LOGIN } from "../state/actions/types";

describe("Profile Container Test Suite", () => {
  it("should find a single button on render", () => {
    const detailsObject = {
      email: "jalagamsurya.loriini@gmail.com",
      firstName: "jalagam",
      lastName: "surya",
      socialProfileLink: null,
      picture: null
    };
    const user = {
      balance_points: 100000
    }
    const wrapper = mount(<ProfileContainer 
      isLoggedIn={true}
      detailsObject={detailsObject}
      user={user}
      userDetails = {jest.fn()}
    />);
    
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('label').length).toBe(3);
    expect(wrapper.find('div').at(5).text()).toBe('jalagam surya');
    expect(wrapper.find('div').at(6).text()).toBe('jalagamsurya.loriini@gmail.com');
    expect(wrapper.find('div').at(7).text()).toBe('100000 Points');
  });
  
  it('should render the expected HTML', () => {
    const detailsObject = {
      email: "jalagamsurya.loriini@gmail.com",
      firstName: "jalagam",
      lastName: "surya",
      socialProfileLink: null,
      picture: null
    };
    const user = {
      balance_points: 100000
    }
    expect(shallow(<ProfileContainer 
      isLoggedIn={true}
      detailsObject={detailsObject}
      user={user}
      userDetails = {jest.fn()}
    />
    ).html()).toMatchSnapshot();
  });
});
