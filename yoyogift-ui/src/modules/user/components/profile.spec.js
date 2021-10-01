import React from "react";
import { mount } from "enzyme";
import Profile from "./profile";

describe("Profile Test Suite", () => {
  it('should render the expected HTML', () => {
    const detailsObject = {
      email: "knowledge.com2k16@gmail.com",
      firstName: "SAS",
      lastName: "TV",
      socialProfileLink: null,
      picture: null,
      balance_points: 100000
    };
    expect(mount(<Profile detailsObject={detailsObject}/>
    ).html()).toMatchSnapshot();
  });

  it("should find a single button on render", () => {
    const detailsObject = {
      email: "knowledge.com2k16@gmail.com",
      firstName: "SAS",
      lastName: "TV",
      socialProfileLink: null,
      picture: null,
      balance_points: 100000
    };

    const wrapper = mount(<Profile detailsObject={detailsObject}/>);
    
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('label').length).toBe(3);
    expect(wrapper.find('div').at(5).text()).toBe('SAS TV');
    expect(wrapper.find('div').at(6).text()).toBe('knowledge.com2k16@gmail.com');
    expect(wrapper.find('div').at(7).text()).toBe('100000 Points');
  });
})