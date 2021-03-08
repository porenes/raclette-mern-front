import { isElementOfType } from "react-dom/test-utils";
import { LIST_PARTIES } from "../../src/actions/party.action";
import partiesReducer from "../../src/reducers/parties.reducer";

describe("default", () => {
  it("returns default state", () => {
    expect(partiesReducer(undefined, {})).toEqual({});
  });
});

describe("List parties", () => {
  it("returns the payload", () => {
    const testPayload = { test: "testPayload" };
    expect(
      partiesReducer(partiesReducerState, {
        type: LIST_PARTIES,
        payload: testPayload,
      })
    ).toEqual(testPayload);
  });
});

describe("create party", () => {
  it("adds the created party to state", () => {});
});

const partiesReducerState = {
  parties: [
    {
      guests: [
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "600f30869f45559da7d8fb0a",
          name: "Linda",
          __v: 0,
          updatedAt: "2021-02-23T22:49:27.616Z",
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "60133798eb6344d3b07f3256",
          name: "Patrice ORENES-LERMA",
          createdAt: "2021-01-28T22:15:52.549Z",
          updatedAt: "2021-01-28T22:15:52.549Z",
          __v: 0,
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "6011f65c395467caf32f91cd",
          name: "Bobo Lagiraffe",
          createdAt: "2021-01-27T23:25:16.603Z",
          updatedAt: "2021-01-27T23:25:16.603Z",
          __v: 0,
        },
      ],
      _id: "60341d6e41b0ca30d18c6450",
      date: "2021-02-22T20:35:00.000Z",
      seats: 6,
      isPrivate: true,
      host: {
        cheeseLoveRate: 3,
        meatEater: true,
        _id: "600f30869f45559da7d8fb0a",
        name: "Linda",
        __v: 0,
        updatedAt: "2021-02-23T22:49:27.616Z",
      },
      createdAt: "2021-02-22T21:09:02.771Z",
      updatedAt: "2021-02-22T21:09:08.985Z",
      __v: 0,
    },
    {
      guests: [
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "60108368ceaddda94bd9c4be",
          name: "toto",
          __v: 0,
          updatedAt: "2021-02-23T22:49:27.612Z",
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "600f30869f45559da7d8fb0a",
          name: "Linda",
          __v: 0,
          updatedAt: "2021-02-23T22:49:27.616Z",
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "6011f65c395467caf32f91cd",
          name: "Bobo Lagiraffe",
          createdAt: "2021-01-27T23:25:16.603Z",
          updatedAt: "2021-01-27T23:25:16.603Z",
          __v: 0,
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "60133798eb6344d3b07f3256",
          name: "Patrice ORENES-LERMA",
          createdAt: "2021-01-28T22:15:52.549Z",
          updatedAt: "2021-01-28T22:15:52.549Z",
          __v: 0,
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "60133c710a6315d84d790ee0",
          name: "Patricio",
          createdAt: "2021-01-28T22:36:34.047Z",
          updatedAt: "2021-01-28T22:36:34.047Z",
          __v: 0,
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "60133d1f381448d8744814e9",
          name: "Patricio ORENES-LERMA",
          createdAt: "2021-01-28T22:39:28.048Z",
          updatedAt: "2021-01-28T22:39:28.048Z",
          __v: 0,
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "601340308e7fc0d9afeeb5cc",
          name: "Patricio ORENES",
          createdAt: "2021-01-28T22:52:32.776Z",
          updatedAt: "2021-01-28T22:52:32.776Z",
          __v: 0,
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "601727fe7ea8eaf4a63b4812",
          name: "SuperMan",
          createdAt: "2021-01-31T21:58:23.059Z",
          updatedAt: "2021-02-05T15:57:34.260Z",
          __v: 0,
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "601521c87ea8eaf4a63b47fe",
          name: "Charlotte",
          createdAt: "2021-01-30T09:07:20.307Z",
          updatedAt: "2021-01-30T09:07:20.307Z",
          __v: 0,
        },
        {
          cheeseLoveRate: 3,
          meatEater: true,
          _id: "601c444f9a3baa472a9573df",
          name: "Gauthier",
          createdAt: "2021-02-04T19:00:31.541Z",
          updatedAt: "2021-02-08T17:01:46.739Z",
          __v: 0,
        },
      ],
      _id: "6019bcbb984f8132e1e3e5fc",
      date: "2021-02-26T20:57:00.000Z",
      seats: 4,
      host: {
        cheeseLoveRate: 3,
        meatEater: true,
        _id: "60108368ceaddda94bd9c4be",
        name: "toto",
        __v: 0,
        updatedAt: "2021-02-23T22:49:27.612Z",
      },
      createdAt: "2021-02-02T20:57:31.083Z",
      updatedAt: "2021-02-09T22:02:11.955Z",
      __v: 0,
    },
  ],
};
