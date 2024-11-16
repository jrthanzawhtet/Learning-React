import { NameContext } from "../NameContext"; // Adjust the path as needed
import Child from "../Child";

export default function Component() {
    return (
        <NameContext.Provider value="Than Zaw Htet">
            <Child />
        </NameContext.Provider>
    );
}
