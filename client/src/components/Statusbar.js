import { useContext } from "react";
import { GlobalStoreContext } from "../store";
import AuthContext from "../auth";
import { Typography } from "@mui/material";

/*
    Our Status bar React component goes at the bottom of our UI.
    
    @author McKilla Gorilla
*/
function Statusbar() {
  const { store } = useContext(GlobalStoreContext);
  const { auth } = useContext(AuthContext);

  let text = "";
  if (auth.loggedIn) {
    if (store.currentList) text = store.currentList.name;
  }

  return (
    <div id="playlister-statusbar">
      <Typography variant="h4">{text}</Typography>
    </div>
  );
}

export default Statusbar;
