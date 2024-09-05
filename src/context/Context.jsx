import { createContext } from "react";
import app from "../config/geminiApi";

export const Context = createContext();
const ContextProvider = (props) =>{

    const onSent = async (prompt) => {
        app(prompt);
    }
    onSent("what is react")

    const contextValue = {

    }
    return(
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;