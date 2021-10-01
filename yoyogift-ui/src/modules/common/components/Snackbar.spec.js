import React from "react";
import { mount } from "enzyme";

import Snackbar from "./Snackbar";

describe("Footer Test Suite", () => {
  it("should render expected HTML", () => {
    expect(mount(<Snackbar message={"SAS"} color={"red"}/>).html()).toMatchSnapshot();
  });
});