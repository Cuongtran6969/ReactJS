import { useReducer } from "react";
import Context from "./Context";
import reducer, {initState} from "./reducer";
import looger from "./logger";

function Provider({children}) {
    const [state, dispatch] = useReducer(looger(reducer), initState)

    return (
        <Context.Provider value={[state, dispatch]}>
          {children}
        </Context.Provider>
    )
}
export default Provider