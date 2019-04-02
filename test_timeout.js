// similar to how interpreted code works.
// would normally hang browser but now works in the background.

const start = Date.now();

while (true) {
    if (Date.now() - start > 1000) {
        break;
    }
}

"timeout";
