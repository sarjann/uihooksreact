import * as React from "react";

function oldSchoolCopy(text) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}

export default function useCopyToClipboard() {
    const [copiedText, copyToClipboard] = React.useState("");
    return [copiedText, copyToClipboard];
}

