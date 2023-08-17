export function isDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`${value} is not defined`);
  }
}

export function isHTMLElement(value: unknown): asserts value is HTMLElement {
  if (!(value instanceof HTMLElement)) {
    throw new Error("Not an HTMLElement");
  }
}
