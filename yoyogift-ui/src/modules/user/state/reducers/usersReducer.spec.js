import usersReducer, { INITIAL_STATE } from "./usersReducer";
import { RECEIVED_CARDS, SENT_CARDS, USER_DETAILS, REDEEM_CARD, UPDATE_BALANCE } from "../actions/types"

describe("Users Reducer Test Suite", () => {
  it("should be initial state", () => {
    expect(usersReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should add the received cards in empty cards variable", () => {
    const prevState = INITIAL_STATE;
    const data = [
      {
        id: 1,
        name: "surya"
      },
      {
        id: 2,
        name: "teja"
      }
    ];
    let action = {
      type: RECEIVED_CARDS,
      payload: data
    }

    expect(usersReducer(prevState, action)).toEqual(
    {
      ...INITIAL_STATE,
      cards: data
    });
  });

  it("should add the sent cards in empty cards variable", () => {
    const prevState = INITIAL_STATE;
    const data = [
      {
        id: 1,
        name: "surya",
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 26 2019 15:43:25 GMT+0530 (India Standard Time)"
      },
      {
        id: 2,
        name: "teja",
        cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "Sun May 26 2019 15:43:25 GMT+0530 (India Standard Time)"
      }
    ];
    let action = {
      type: SENT_CARDS,
      payload: data
    }

    expect(usersReducer(prevState, action)).toEqual(
    {
      ...INITIAL_STATE,
      cards: data.map(cardData => {
        return {
          ...cardData,
          cardIssueDate: "2019-05-19",
          cardExpiryDate: "2019-05-26"
        }
      })
    });
  });

  it("should add the user details in the user object", () => {
    const prevState = INITIAL_STATE;
    const data =  {
      id: 1,
      name: "surya"
    };
    let action = {
      type: USER_DETAILS,
      payload: data
    }

    expect(usersReducer(prevState, action)).toEqual(
    {
      ...INITIAL_STATE,
      UserDetails: data
    });
  });

  it("should update card with reedeemed card id", () => {
    const data = [
      {
        id: 1,
        name: "surya",
        isRedeemed: false
      },
      {
        id: 2,
        name: "teja",
        isRedeemed: false
      }
    ];
    const prevState = {
      ...INITIAL_STATE,
      cards: data
    };
    let action = {
      type: REDEEM_CARD,
      payload: {
        id: 1
      }
    };

    expect(usersReducer(prevState, action)).toEqual(
    {
      ...prevState,
      cards: data.map(card => {
        if(card.id == 1)
          return {
            ...card,
            isRedeemed: true
          };
        else return card;
      })
    });
  });

  it("should update the user balance", () => {
    const prevState = INITIAL_STATE;
    const data =  {
      id: 1,
      name: "surya"
    };
    let action = {
      type: USER_DETAILS,
      payload: data
    }

    expect(usersReducer(prevState, action)).toEqual(
    {
      ...INITIAL_STATE,
      UserDetails: data
    });
  });

  it("should update the user transaction", () => {
    const prevState = INITIAL_STATE;
    const data =  {
      id: 1,
      name: "surya"
    };
    let action = {
      type: USER_DETAILS,
      payload: data
    }

    expect(usersReducer(prevState, action)).toEqual(
    {
      ...INITIAL_STATE,
      UserDetails: data
    });
  });
});
