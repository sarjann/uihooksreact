import * as React from "react";

export default function useFavicon(href) {
    React.useEffect(() => {
        if (href == null) {
          return
        }
        const element = document.querySelectorAll('link[rel~="icon"]')[0]
        if (element) {
            element.href = href;
        } else {
            const new_element = document.createElement("link");
            new_element.href = href;
            new_element.rel = 'icon';
            document.head.appendChild(new_element);

        }
    },[href])
}

