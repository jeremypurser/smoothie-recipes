export function pluralize(amount: number, noun: string) {
  return amount > 1 ? `${noun}s` : noun;
}
