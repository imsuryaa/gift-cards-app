import React from "react";
import renderer from "react-test-renderer";
import {mount, shallow} from "enzyme";

import Landing from "./Landing";

describe("Landing Page Suite", () => {
  it("should render require div elements", () => {
    const landingPage = shallow(<Landing />);

    const div = landingPage.first(`div`);
    expect(div.find(`div`).length).toBe(11);
  });
})
