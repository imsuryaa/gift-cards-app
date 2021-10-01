import React from "react";
import { mount } from "enzyme";

import { TablePaginationActions } from "./TablePaginationActionsWrapped";

describe("Footer Test Suite", () => {
  it("should render expected HTML", () => {
    //Mocks
    const classes = { root: { marginTop:"2px" } };
    const theme = {
      direction: "rtl"
    }
    expect(mount(<TablePaginationActions
      classes={classes}
      count={1}
      page={10}
      rowsPerPage={5}
      theme={theme}
    />).html()).toMatchSnapshot();
  });

  it("should render expected HTML", () => {
    //Mocks
    const classes = { root: { marginTop:"2px" } };
    const theme = {
      direction: "sas"
    }
    expect(mount(<TablePaginationActions
      classes={classes}
      count={1}
      page={10}
      rowsPerPage={5}
      theme={theme}
    />).html()).toMatchSnapshot();
  });

  it('should call handleFirstPageButtonClick function', () => {
    //Mocks
    const classes = { root: { marginTop:"2px" } };
    const theme = {
      direction: "sas"
    }
    const wrapper = mount(<TablePaginationActions
      classes={classes}
      count={1}
      page={10}
      rowsPerPage={5}
      theme={theme}
      onChangePage={jest.fn()}
    />);
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'handleFirstPageButtonClick');
    
    component.handleFirstPageButtonClick();
   
   expect(component.handleFirstPageButtonClick).toHaveBeenCalled();
   expect(component.handleFirstPageButtonClick).toHaveBeenCalledTimes(1)
  });

  it('should call handleBackButtonClick function', () => {
    //Mocks
    const classes = { root: { marginTop:"2px" } };
    const theme = {
      direction: "sas"
    }
    const wrapper = mount(<TablePaginationActions
      classes={classes}
      count={1}
      page={10}
      rowsPerPage={5}
      theme={theme}
      onChangePage={jest.fn()}
    />);
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'handleBackButtonClick');
    
    component.handleBackButtonClick();
   
   expect(component.handleBackButtonClick).toHaveBeenCalled();
   expect(component.handleBackButtonClick).toHaveBeenCalledTimes(1)
  });

  it('should call handleNextButtonClick function', () => {
    //Mocks
    const classes = { root: { marginTop:"2px" } };
    const theme = {
      direction: "sas"
    }
    const wrapper = mount(<TablePaginationActions
      classes={classes}
      count={1}
      page={10}
      rowsPerPage={5}
      theme={theme}
      onChangePage={jest.fn()}
    />);
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'handleNextButtonClick');
    
    component.handleNextButtonClick();
   
   expect(component.handleNextButtonClick).toHaveBeenCalled();
   expect(component.handleNextButtonClick).toHaveBeenCalledTimes(1)
  });

  it('should call handleLastPageButtonClick function', () => {
    //Mocks
    const classes = { root: { marginTop:"2px" } };
    const theme = {
      direction: "sas"
    }
    const wrapper = mount(<TablePaginationActions
      classes={classes}
      count={1}
      page={10}
      rowsPerPage={5}
      theme={theme}
      onChangePage={jest.fn()}
    />);
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'handleLastPageButtonClick');
    
    component.handleLastPageButtonClick();
   
   expect(component.handleLastPageButtonClick).toHaveBeenCalled();
   expect(component.handleLastPageButtonClick).toHaveBeenCalledTimes(1)
  });
});