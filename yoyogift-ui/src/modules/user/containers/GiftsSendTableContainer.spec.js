import React from "react";
import { mount } from "enzyme";

import { GiftsSendTableContainer, mapDispatchToProps } from "./GiftsSendTableContainer";

describe("Gifts Sent Table Test Suite", () => {
  it('should show header with information', () => {
    const wrapper = mount(<GiftsSendTableContainer 
    isLoggedIn = {true}
    sentCards={[]}
    fetchFilteredSentCards={jest.fn()}
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

    const user = {
      email: "jalagamsurya.loriini@gmail.com"
    };

    const wrapper = mount(<GiftsSendTableContainer 
    isLoggedIn = {true}
    sentCards={data}
    user={user}
    fetchFilteredSentCards={jest.fn()}
    />);
    
    expect(wrapper.find('div').length).toBe(32);
  });

  it('should render the expected HTML', () => {
    expect(mount(<GiftsSendTableContainer 
    isLoggedIn = {true}
    sentCards={[]}
    fetchFilteredSentCards={jest.fn()}
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

    const user = {
      email: "jalagamsurya.loriini@gmail.com"
    };

    expect(mount(<GiftsSendTableContainer 
    isLoggedIn = {true}
    user={user}
    sentCards={data}
    fetchFilteredSentCards={jest.fn()}
    />
    ).html()).toMatchSnapshot();
  });

  it("should fetch sent cards", () => {
    let dispatch = jest.fn();

    let props = mapDispatchToProps(dispatch);
    props.fetchFilteredSentCards("jalagamsurya.loriini@gmail.com", 100, 1);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
