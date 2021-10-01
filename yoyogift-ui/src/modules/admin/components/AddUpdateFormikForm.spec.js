import React from "react";
import { mount } from "enzyme";

import { AddUpdateFormikForm, mapDispatchToProps } from "./AddUpdateFormikForm";

describe("Add Update Formik Form Test Suite", () => {
  it('should form with empty data', () => {
    //Mocks
    const matchObject = {
      params: { id: undefined }
    }
    const wrapper = mount(<AddUpdateFormikForm 
      giftCard={{}}
      fetchCard={jest.fn()}
      adminAddCard={jest.fn()}
      adminUpdateCard={jest.fn()}
      match={matchObject}/>);

    expect(wrapper.find('div').length).toBe(12);
    expect(wrapper.find('label').length).toBe(10);
    expect(wrapper.find('input').length).toBe(10);
    expect(wrapper.find('button').length).toBe(2);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').at(0).text()).toBe("");
  });
  
  it('should render the expected HTML', () => {
    //Mocks
    const matchObject = {
      params: { id: undefined }
    }
    expect(mount(<AddUpdateFormikForm 
      giftCard={{}}
      fetchCard={jest.fn()}
      adminAddCard={jest.fn()}
      adminUpdateCard={jest.fn()}
      match={matchObject}/>
    ).html()).toMatchSnapshot();
  });

  it("should fetch card", () => {
    let dispatch = jest.fn();

    let props = mapDispatchToProps(dispatch);
    props.fetchCard(1);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it("should add card", () => {
    let dispatch = jest.fn();
    const giftCard = { 
      cardName: "A",
      cardPoints: 10,
      cardCategory: "ABC",
      cardRetailer:"ABC",
      cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
      cardCount: 10,
      cardImage: "https://images.gyft.com/merchants/i-587-1346844989795-53_hd.png",
      cardVendor: "ABC",
      cardShortDesc: "ABC",
      cardLongDesc: "ABC"
    };

    let props = mapDispatchToProps(dispatch);
    props.adminAddCard(giftCard);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it("should update card", () => {
    let dispatch = jest.fn();
    const giftCard = { 
      cardName: "A",
      cardPoints: 10,
      cardCategory: "ABC",
      cardRetailer:"ABC",
      cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
      cardCount: 10,
      cardImage: "https://images.gyft.com/merchants/i-587-1346844989795-53_hd.png",
      cardVendor: "ABC",
      cardShortDesc: "ABC",
      cardLongDesc: "ABC"
    };

    let props = mapDispatchToProps(dispatch);
    props.adminUpdateCard(giftCard);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should render the expected HTML', () => {
    //Mocks
    const matchObject = {
      params: { id: 1 }
    }
    const giftCard = { 
      cardName: "A",
      cardPoints: 10,
      cardCategory: "ABC",
      cardRetailer:"ABC",
      cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
      cardCount: 10,
      cardImage: "https://images.gyft.com/merchants/i-587-1346844989795-53_hd.png",
      cardVendor: "ABC",
      cardShortDesc: "ABC",
      cardLongDesc: "ABC"
    };
    expect(mount(<AddUpdateFormikForm 
      giftCard={giftCard}
      fetchCard={jest.fn()}
      adminAddCard={jest.fn()}
      adminUpdateCard={jest.fn()}
      match={matchObject}/>
    ).html()).toMatchSnapshot();
  });
})
