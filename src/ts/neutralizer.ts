window.addEventListener(
    "keydown",
    (e: KeyboardEvent): void => {
        e.stopImmediatePropagation();
    },
    true,
);

window.addEventListener(
    "contextmenu",
    (e: MouseEvent): void => {
        e.stopImmediatePropagation();
    },
    true,
);

try {
    Function.prototype.toString = Function.prototype.toString.toString
        ? (Function.prototype.toString.toString as () => string)
        : Function.prototype.toString;
} catch (e: unknown) {
    // eslint-disable-next-line no-console
    console.error(e);
}
