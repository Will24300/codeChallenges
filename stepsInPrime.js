function step(g, m, n) {
  for (let i = m; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}
step(2, 2, 50);
