import React from "react";
import { mount, shallow } from "enzyme";

import { GiftsReceivedContainer } from "./giftsReceivedContainer";

describe("Gifts Received Test Suite", () => {
  it('should show circular progress', () => {
    const wrapper = mount(<GiftsReceivedContainer 
    isLoggedIn = {true}
    receivedCards={undefined}
    fetchReceivedCards={jest.fn()}
    />);

    expect(wrapper.find('div').length).toBe(1);
  });

  it('should show header with information', () => {
    const wrapper = mount(<GiftsReceivedContainer 
    isLoggedIn = {true}
    receivedCards={[]}
    fetchReceivedCards={jest.fn()}
    />);

    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe("NO DATA");
  });

  it('should show table with header and data', () => {
    //Mocks
    const data = [
      {
        cardName: 'A',
        cardPoints: 1,
        senderEmail: 'jalagamsurya.loriini@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: true
      },
      {
        cardName: 'B',
        cardPoints: 2,
        senderEmail: 'jalagamsurya.loriini@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      },
      {
        cardName: 'C',
        cardPoints: 3,
        senderEmail: 'jalagamsurya.loriini@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      }
    ];
    const wrapper = mount(<GiftsReceivedContainer 
    isLoggedIn = {true}
    receivedCards={data}
    fetchReceivedCards={jest.fn()}
    />);
    
    expect(wrapper.find('tr').length).toBe(4);
    expect(wrapper.find('th').length).toBe(10);
    expect(wrapper.find('td').length).toBe(18);
    expect(wrapper.find('button').length).toBe(2);
  });

  it('should call handle redeem card function', () => {
    //Mocks
    const data = [
      {
        cardName: 'A',
        cardPoints: 1,
        senderEmail: 'jalagamsurya.loriini@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: true
      },
      {
        cardName: 'B',
        cardPoints: 2,
        senderEmail: 'jalagamsurya.loriini@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      },
      {
        cardName: 'C',
        cardPoints: 3,
        senderEmail: 'jalagamsurya.loriini@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      }
    ];

    const wrapper = shallow(<GiftsReceivedContainer 
    isLoggedIn = {true}
    receivedCards={data}
    fetchReceivedCards={jest.fn()}
    redeemCard={jest.fn()}
    />);
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'handleRedeemCard');

    component.handleRedeemCard(data[1]);
    component.handleRedeemCard(data[2]);
   
   expect(component.handleRedeemCard).toHaveBeenCalled();
   expect(component.handleRedeemCard).toHaveBeenCalledTimes(2)
  });
  
  it('should render the expected HTML', () => {
    expect(mount(<GiftsReceivedContainer 
    isLoggedIn = {true}
    receivedCards={undefined}
    fetchReceivedCards={jest.fn()}
    />
    ).html()).toMatchSnapshot();
  });

  it('should render the expected HTML', () => {
    expect(mount(<GiftsReceivedContainer 
    isLoggedIn = {true}
    receivedCards={[]}
    fetchReceivedCards={jest.fn()}
    />
    ).html()).toMatchSnapshot();
  });

  it('should render the expected HTML', () => {
    //Mocks
    const data = [
      {
        cardName: 'A',
        cardPoints: 1,
        senderEmail: 'jalagamsurya.loriini@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: true
      },
      {
        cardName: 'B',
        cardPoints: 2,
        senderEmail: 'jalagamsurya.loriini@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      },
      {
        cardName: 'C',
        cardPoints: 3,
        senderEmail: 'jalagamsurya.loriini@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      }
    ];
    expect(mount(<GiftsReceivedContainer 
    isLoggedIn = {true}
    receivedCards={data}
    fetchReceivedCards={jest.fn()}
    />
    ).html()).toMatchSnapshot();
  });

});
