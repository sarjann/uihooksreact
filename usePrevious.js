import * as React from "react";

export default function usePrevious(value) {
    const [prevState, setPrevState] = React.useState(null);
    const [currentState, setCurrentState] = React.useState(value);

    if (value !== currentState) {
        setPrevState(currentState);
        setCurrentState(value);
    }

    return prevState;
}

