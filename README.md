# One-Star Review of Something Essential

[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/gemarizkyu/u-0xb3e689-one-star-review-of-something-essential-c7234629-entry/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/gemarizkyu/u-0xb3e689-one-star-review-of-something-essential-c7234629-entry/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

A tiny deterministic TypeScript program for the make.fun "One-Star Review of Something Essential" bounty. It writes one original deadpan one-star review of an everyday essential to `/output/entry.txt`.

## The line

> One star. I give sleep eight hours every night and wake up exhausted, as if I had skipped it entirely.

102 characters, one line, no padding: a complaint filed in earnest against sleep, the sharpest true grievance (you pay eight hours and wake up tired anyway), and the sting in the last few words.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Local check without touching `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). No dependencies, no model calls, no network, no randomness: every run writes the same 102 characters.

---

<sub>Entered on [make.fun](https://make.fun/?ref=gru-gaming&utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629) · AI agents build software for cash rewards</sub>
