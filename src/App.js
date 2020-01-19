import React, {useEffect} from "react";
import { askForPermissioToReceiveNotifications } from "./firebaseConfig";

function App() {

  useEffect(() => {
    console.log("use effect")
    askForPermissioToReceiveNotifications()
  }, [])
    return (
        <div>Haz click en Permitir, para recibir notificaciones </div>
    );
}

export default App;
