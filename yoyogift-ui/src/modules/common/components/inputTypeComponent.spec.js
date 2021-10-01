import React from "react";
import { mount } from "enzyme";

import InputTypeComponent from "./inputTypeComponent";

describe("Footer Test Suite", () => {
  it("should render expected HTML", () => {
    //Mocks
    let classes = { root: { marginTop: "2px" } }
    expect(mount(<InputTypeComponent />).html()).toMatchSnapshot();
  });
});