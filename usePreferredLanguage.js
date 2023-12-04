import * as React from "react";

const subscribe = (context) => {
    window.addEventListener("languagechange", context);
    return () => window.removeEventListener("languagechange", context);

};
const getLang = () => {
    return navigator.language;
};

const getServerSnapshot = () => {
    throw Error("Used on server");
}

export default function usePreferredLanguage() {
    return React.useSyncExternalStore(subscribe,
        getLang, getServerSnapshot);
}

