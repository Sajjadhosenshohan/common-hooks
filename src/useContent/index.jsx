import { createContext, useState } from "react";

export const Global = createContext(null);

// eslint-disable-next-line react/prop-types
function GlobalState ({ children })  {

    const [theme, setTheme] = useState("light");


    const allValue = {
        theme,
        setTheme
    }
    return <Global.Provider value={allValue}>
        {children}
        </Global.Provider>

}

export default GlobalState
