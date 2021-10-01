import React from "react";
import { mount } from "enzyme";

import { GiftsSendContainer } from "./giftsSendContainer";

describe("Gifts Sent Test Suite", () => {
  it('should show circular progress', () => {
    const wrapper = mount(<GiftsSendContainer 
    isLoggedIn = {true}
    sentCards={undefined}
    fetchSentCards={jest.fn()}
    />);

    expect(wrapper.find('div').length).toBe(1);
  });

  it('should show header with information', () => {
    const wrapper = mount(<GiftsSendContainer 
    isLoggedIn = {true}
    sentCards={[]}
    fetchSentCards={jest.fn()}
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
          receiverEmail: 'jalagamsurya.loriini@gmail.com',
          cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
          cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
        },
        {
          cardName: 'B',
          cardPoints: 2,
          receiverEmail: 'jalagamsurya.loriini@gmail.com',
          cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
          cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
        },
        {
          cardName: 'C',
          cardPoints: 3,
          receiverEmail: 'jalagamsurya.loriini@gmail.com',
          cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
          cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
        }
    ];
    const wrapper = mount(<GiftsSendContainer 
    isLoggedIn = {true}
    sentCards={data}
    fetchSentCards={jest.fn()}
    />);
    
    expect(wrapper.find('tr').length).toBe(4);
    expect(wrapper.find('th').length).toBe(5);
    expect(wrapper.find('td').length).toBe(15);
  });
  
  it('should render the expected HTML', () => {
    expect(mount(<GiftsSendContainer 
    isLoggedIn = {true}
    sentCards={undefined}
    fetchSentCards={jest.fn()}
    />
    ).html()).toMatchSnapshot();
  });

  it('should render the expected HTML', () => {
    expect(mount(<GiftsSendContainer 
    isLoggedIn = {true}
    sentCards={[]}
    fetchSentCards={jest.fn()}
    />
    ).html()).toMatchSnapshot();
  });

  it('should render the expected HTML', () => {
    //Mocks
    const data = [
        {
          cardName: 'A',
          cardPoints: 1,
          receiverEmail: 'jalagamsurya.loriini@gmail.com',
          cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
          cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
        },
        {
          cardName: 'B',
          cardPoints: 2,
          receiverEmail: 'jalagamsurya.loriini@gmail.com',
          cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
          cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
        },
        {
          cardName: 'C',
          cardPoints: 3,
          receiverEmail: 'jalagamsurya.loriini@gmail.com',
          cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
          cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
        }
    ];

    expect(mount(<GiftsSendContainer 
    isLoggedIn = {true}
    sentCards={data}
    fetchSentCards={jest.fn()}
    />
    ).html()).toMatchSnapshot();
  });

});
