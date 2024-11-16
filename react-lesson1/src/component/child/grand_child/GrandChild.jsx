import { NameContext } from "../../../NameContext"; // Adjust the path as needed

export default function GrandChild() {
    return (
        <NameContext.Consumer>
            {(name) => (
                <h1>{name}</h1> // Display the value from context
            )}
        </NameContext.Consumer>
    );
}
