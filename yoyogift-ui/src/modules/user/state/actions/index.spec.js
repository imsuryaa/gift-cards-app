import axios from 'axios';
import  MockAdapter from "axios-mock-adapter";

import axiosWrapper from "../../../../apis/axiosCreate"

import { fetchReceivedCards } from "./index";
import { RECEIVED_CARDS } from "./types";
import { apiURL } from "../../../../config/constants";

jest.unmock("axios");

// var mock = new MockAdapter(axios);

var mockWrapper = new MockAdapter(axiosWrapper);


describe("User Actions Test Suite",  () => {
  it("should dispatch received cards", async () => {
    const data = [
      {
        id: 1,
        name: "SAS"
      }
    ];

    const email = "knowledge.com2k16@gmail.com";
    let dispatch = jest.fn();

    mockWrapper.onGet(`/giftTransact?receiverEmail=knowledge.com2k16@gmail.com`)
    .reply(200, data);

    let props = fetchReceivedCards(dispatch);
    await props(email);

    // expect(props).toHaveBeenCalledWith(`${apiURL}/giftTransact?receiverEmail=${email}`);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);

    expect(dispatch.mock.calls[0]).toEqual([{
      type: RECEIVED_CARDS,
      payload: userData
    }]);
  });
});
