import React from "react";
import { mount } from "enzyme";
import GiftsReceived from "./giftsReceived";

describe("Gifts Received Test Suite", () => {
  it("should render the expected HTML", () => {
    const classes = {
      root: { marginTop: "2px" },
      table: { marginTop: "2px" }
    };

    expect(mount(<GiftsReceived 
      classes={classes}
      data={[]}/>
      ).html()).toMatchSnapshot();
  });

  it("should render the expected HTML", () => {
    const classes = {
      root: { marginTop: "2px" },
      table: { marginTop: "2px" }
    };
    const data = [
      {
        cardName: 'A',
        cardPoints: 1,
        senderEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: true
      },
      {
        cardName: 'B',
        cardPoints: 2,
        senderEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      },
      {
        cardName: 'C',
        cardPoints: 3,
        senderEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      }
    ];
    expect(mount(<GiftsReceived 
      classes={classes}
      data={data}/>
      ).html()).toMatchSnapshot();
  });

  it("should find only table heading", () => {
    const classes = {
      root: { marginTop: "2px" },
      table: { marginTop: "2px" }
    };

    const wrapper = mount(<GiftsReceived 
      classes={classes}
      data={[]}/>
      );

    expect(wrapper.find('th').length).toBe(7);
    expect(wrapper.find('td').length).toBe(0);
  });

  it("should find table heading and 3 rows", () => {
    const classes = {
      root: { marginTop: "2px" },
      table: { marginTop: "2px" }
    };
    const data = [
      {
        cardName: 'A',
        cardPoints: 1,
        senderEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: true
      },
      {
        cardName: 'B',
        cardPoints: 2,
        senderEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      },
      {
        cardName: 'C',
        cardPoints: 3,
        senderEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        isRedeemed: false
      }
    ];

    const wrapper = mount(<GiftsReceived 
      classes={classes}
      data={data}/>
      );

    expect(wrapper.find('tr').length).toBe(4);
    expect(wrapper.find('th').length).toBe(10);
    expect(wrapper.find('td').length).toBe(18);
  });
});
