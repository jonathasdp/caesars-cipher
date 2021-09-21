function rot13(str) {
  return str
    .split("")
    .map((c) =>
      /\w/i.test(c)
        ? c.charCodeAt(c) > 77
          ? c.charCodeAt(c) - 13
          : c.charCodeAt(c) + 13
        : c.charCodeAt(c)
    )
    .map((c) => String.fromCharCode(c))
    .join("");
}