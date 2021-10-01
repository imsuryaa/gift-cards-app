import React from "react";
import { mount } from "enzyme";

import GiftShow from "./GiftShow";

describe("Gift Show Test Suite", () => {
  it('should render the expected HTML', () => {
    const data = {
      id: 1,
      cardName: "Amazon Gift SAS UPDATED",
      cardPoints: "1200",
      cardCategory: "Ecommerce",
      cardRetailer: "Amazon",
      cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
      cardExpiryDate: "2019-06-29",
      cardCount: 86,
      cardImage: "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
      cardVendor: "amazon",
      cardShortDesc: "10% OFF",
      cardLongDesc: "Amazon Gift Cards are the Perfect Gift, Every Time. Use the eBay Gift Card to shop from millions of items in Electronics, Toys, Motors, Fashion, Home & Garden, Art, Collectibles, Sporting Goods and everything in-between. eBay Gift Cards never expire and have no fees. Use it to shop now or wait for the deal of a lifetime.",
      cardComments: [
        {
          id: 1,
          first_name: "Sebastian",
          last_name: "Eschweiler",
          email: "sebastian@mindtree.com",
          rating: 4,
          comment: "Great gift card. Happy to gift!",
          commented_on: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
        },
        {
          id: 2,
          first_name: "Bill",
          last_name: "Joe",
          email: "billjoe@mindtree.com",
          rating: 3,
          comment: "10% discount on Amazon. Yay",
          commented_on: "Sun Jun 12 2019 15:43:25 GMT+0530 (India Standard Time)"
        }
      ]
    };
    expect(mount(<GiftShow getEmail={jest.fn()} data={data}/>
    ).html()).toMatchSnapshot();
  });
});