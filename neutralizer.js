window.addEventListener('keydown', e => {
  e.stopImmediatePropagation();
}, true);

window.addEventListener('contextmenu', e => {
  e.stopImmediatePropagation();
}, true);

try {
  Function.prototype.toString = Function.prototype.toString.toString
    ? Function.prototype.toString.toString
    : Function.prototype.toString;
} catch (e) {}
