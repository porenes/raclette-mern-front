import axios from "axios";
export const LIST_PARTIES = "LIST_PARTIES";
export const CREATE_PARTY = "CREATE_PARTY";

const authHeader = "Bearer " + localStorage.getItem("token");

export const listParties = () => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}party`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
    })
      .then((res) => {
        // * We get all userIds required to display properly info on Parties
        const usersIds = [
          ...new Set(
            res.data.reduce((users, party) => {
              users.push(party.host);
              users.concat(party.guests.flat());
              return users;
            }, [])
          ),
        ];
        axios({
          method: "post",
          url: `${process.env.REACT_APP_RACLETTE_API_URL}connoisseur/byIds`,
          withCredentials: true,
          headers: {
            Authorization: authHeader,
          },
          data: {
            ids: usersIds,
          },
        }).then((resUsers) => {
          dispatch({
            type: LIST_PARTIES,
            payload: {
              parties: res.data,
              users: resUsers.data,
            },
          });
        });
      })
      .catch((err) => console.log(err));
  };
};

export const createParty = (data) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}party/create`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
      data,
    })
      .then((res) => {
        const party = res.data;
        const ids = party.guests;
        axios({
          method: "post",
          url: `${process.env.REACT_APP_RACLETTE_API_URL}connoisseur/byIds`,
          withCredentials: true,
          headers: {
            Authorization: authHeader,
          },
          data: {
            ids,
          },
        })
          .then((partyUsers) => {
            dispatch({
              type: CREATE_PARTY,
              payload: {
                party,
                partyUsers,
              },
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
};
