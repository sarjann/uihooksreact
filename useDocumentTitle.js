import * as React from "react";

export default function useDocumentTitle(title) {
    React.useEffect(() => {
        if (document.title !== title) {
            document.title = title;
        }
    }, [title]);
}

