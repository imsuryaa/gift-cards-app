import giftsReducer, { INITIAL_STATE } from "./giftsReducer";
import { FETCH_CARDS, FETCH_CARD, FETCH_CARD_FILTER, UPDATE_CARD_COUNT, ADMIN_ADD_CARD, ADMIN_UPDATE_CARD} from '../actions/types';

describe("Gift Reducer Test Suite", () => {
  it("should be initial state", () => {
    expect(giftsReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  
  it("should add data in gift card", () => {
    const cardData = {
      id: 7,
      firstName: "SAS",
      lastName: "TV",
      email: "knowledge.com2k16@gmail.com"
    };

    let action = {
      type : FETCH_CARD,
      payload: {
        data: cardData
      }
    };

    expect(giftsReducer(INITIAL_STATE, action)).toEqual(
    {
      ...INITIAL_STATE,
      giftCard: cardData
    });
  });

  it("should add data in gift cards for 1st page", () => {
    const cardArray = [
      {
        id: 7,
        firstName: "SAS",
        lastName: "TV",
        email: "knowledge.com2k16@gmail.com"
      }
    ];

    let action = {
      type : FETCH_CARDS,
      payload: {
        response: { data: cardArray },
        pageNo: 1
      }
    };

    expect(giftsReducer(INITIAL_STATE, action)).toEqual(
    {
      ...INITIAL_STATE,
      giftCards: cardArray
    });
  });

  it("should add data in gift cards for 3rd page", () => {
    const cardArray = [
      {
        id: 8,
        firstName: "SAS",
        lastName: "TV",
        email: "knowledge.com2k16@gmail.com"
      },
      {
        id: 7,
        firstName: "SAS",
        lastName: "TV",
        email: "knowledge.com2k16@gmail.com"
      }
    ];
    const updatedInitialState = {
      ...INITIAL_STATE,
      giftCards: cardArray
    }

    const newCardArray = [
      {
        id: 9,
        firstName: "SAS",
        lastName: "TV",
        email: "knowledge.com2k16@gmail.com"
      }
    ];

    let action = {
      type : FETCH_CARDS,
      payload: {
        response: { data: newCardArray },
        pageNo: 3
      }
    };

    const checkData = updatedInitialState.giftCards.concat(newCardArray);

    expect(giftsReducer(updatedInitialState, action)).toEqual(
    {
      ...updatedInitialState,
      giftCards: checkData,
      giftCardsFiltered: undefined
    });
  });
  
  it("should add data in gift cards filtered", () => {
    const cardArray = [
      {
        id: 7,
        firstName: "SAS",
        lastName: "TV",
        email: "knowledge.com2k16@gmail.com"
      }
    ];

    let action = {
      type : FETCH_CARD_FILTER,
      payload: cardArray
    };

    expect(giftsReducer(INITIAL_STATE, action)).toEqual(
    {
      ...INITIAL_STATE,
      giftCardsFiltered: cardArray
    });
  });

  it("should update card count in gift card", () => {
    const cardData = {
      id: 7,
      firstName: "SAS",
      lastName: "TV",
      email: "knowledge.com2k16@gmail.com"
    };

    let action = {
      type : UPDATE_CARD_COUNT,
      payload: cardData
    };

    expect(giftsReducer(INITIAL_STATE, action)).toEqual(
    {
      ...INITIAL_STATE,
      giftCard: cardData
    });
  });
});