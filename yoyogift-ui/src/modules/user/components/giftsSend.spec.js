import React from "react";
import { mount } from "enzyme";
import GiftsSend from "./giftsSend";

describe("Gift Send Test Suite", () => {
  it("should render the expected HTML", () => {
    const classes = {
      root: { marginTop: "2px" },
      table: { marginTop: "2px" }
    };

    expect(mount(<GiftsSend 
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
        receiverEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
      },
      {
        cardName: 'B',
        cardPoints: 2,
        receiverEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
      },
      {
        cardName: 'C',
        cardPoints: 3,
        receiverEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
      }
    ];
    expect(mount(<GiftsSend 
      classes={classes}
      data={data}/>
      ).html()).toMatchSnapshot();
  });

  it("should find only table heading", () => {
    const classes = {
      root: { marginTop: "2px" },
      table: { marginTop: "2px" }
    };

    const wrapper = mount(<GiftsSend 
      classes={classes}
      data={[]}/>
      );

    expect(wrapper.find('th').length).toBe(5);
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
        receiverEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
      },
      {
        cardName: 'B',
        cardPoints: 2,
        receiverEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
      },
      {
        cardName: 'C',
        cardPoints: 3,
        receiverEmail: 'knowledge.com2k16@gmail.com',
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
      }
    ];

    const wrapper = mount(<GiftsSend 
      classes={classes}
      data={data}/>
      );

    expect(wrapper.find('tr').length).toBe(4);
    expect(wrapper.find('th').length).toBe(5);
    expect(wrapper.find('td').length).toBe(15);
  });
});
