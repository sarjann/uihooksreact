import * as React from "react";

export default function useToggle(initial = true) {
    const [on, setOn] = React.useState(() => {
        if (typeof initial === "boolean") {
            return initial;
        }
        return Boolean(initial);
    });

    const handleToggle = React.useCallback((value) => {
        if (typeof value === "boolean") {
            if (value != on) {
                return setOn(value);
            }
        } else {
            return setOn(e => !e);
        }
    }, [])
    return [on, handleToggle];
}

