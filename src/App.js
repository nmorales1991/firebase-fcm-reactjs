import React, {useEffect} from "react";
import { preguntarPermisos } from "./firebaseConfig";

function App() {

  useEffect(() => {
    preguntarPermisos()
  }, [])
    return (
        <div>Haz click en Permitir, para recibir notificaciones </div>
    );
}

export default App;
