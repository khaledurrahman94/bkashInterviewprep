export function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number = 500
) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}