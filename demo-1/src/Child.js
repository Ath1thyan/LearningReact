import { useContext } from "react";
import {context} from "./utils/Context";

function Child () {
    let state = useContext (context);
    return <div>
    <h1>childName : {state.name}</h1>
    <h2>childPosition : {state.position}</h2>
    {/* <h3>childEmail : {state.email}</h3> */}
    </div>
}
export default Child;