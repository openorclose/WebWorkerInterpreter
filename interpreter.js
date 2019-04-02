let globals = undefined;

onmessage = ({data: {context, code}}) => {
    if (context) {
        globals = {
        };
    } else if (code) {
        postMessage(String(eval(code)));
    }
};
