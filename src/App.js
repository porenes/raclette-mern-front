import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";

function App() {
  //uid is a state so we have it all along the app
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    const getUidFromToken = async () => {
      const authHeader = "Bearer " + localStorage.getItem("token");
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_RACLETTE_API_URL}connoisseur/uid`,
        headers: {
          Authorization: authHeader,
        },
        //withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          setUid(res.data.id);
        })
        .catch((err) => console.error("notoken"));
    };
    getUidFromToken();
    (uid) && dispatch(getUser(uid))
  }, [uid, dispatch]);

  // we need to update the uid state value, only when it changes

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
