import * as React from "react";

export default function useDefault(initial, def) {
    const [state, setState] = React.useState(initial, def);
    React.useEffect(()=> {
        if ([undefined, null].includes(state)){
            setState(def);
        }
    }, [state]);
    return [state, setState];
}

