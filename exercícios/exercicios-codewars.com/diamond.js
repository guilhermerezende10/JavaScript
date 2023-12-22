function diamond(n) {
  if (n % 2 == 0|| n <= 0) return null;
  let diamond = "";
  for (let i = 1; i <= n; i += 2) {
    diamond += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
  }
  for (let i = n - 2; i > 0; i -= 2) {
    diamond += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
  }
  return diamond;
}

console.log(diamond(2))
