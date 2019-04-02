let global = undefined;

onmessage = ({data: {context, code}}) => {
    if (context) {
        global = {
        };
    } else if (code) {
        postMessage(String(eval(code)));
    }
};
