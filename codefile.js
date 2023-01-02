function fibonacci(n, memo = {}) {
  // sub-problem already encountered?
  if (n in memo) return memo[n];

  // base case
  if (n <= 2) return 1;

  // update the memo
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  console.log(`memo for ${n} updated`);
  return memo[n];
}
