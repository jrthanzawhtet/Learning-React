import { useContext } from "react";
import { AgetContext, NameContext } from "../../../NameContext"; // Adjust the path as needed

function GrandChild() {
    const name = useContext(NameContext)
    const age = useContext(AgetContext)
    return (
      <h1>My Name is {name} and {age} years old</h1>
    );
}

export default GrandChild