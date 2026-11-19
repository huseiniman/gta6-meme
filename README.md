# gta6-meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/huseiniman/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/huseiniman/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 loading-screen parody for make.fun's "Post a GTA 6 meme on X" bounty. Thirteen years of waiting, and the loading bar is still going — but at least the ride is beautiful: a sunset cruise down Ocean Drive, Vice City glowing neon behind us, and riding shotgun, make.fun's ghost, sunglasses pushed up on its forehead and star coin in hand, finally getting to enjoy the trip it waited a decade for. The joke is the wait; the ghost is the passenger who gets to ride.

The meme is `meme.jpg`: an AI-made scene with make.fun's ghost composited into the passenger seat and the caption set in bold type. The post on X is the entry — this repository hands in the post's address in `POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `POST.json` to `out/POST.json`, which is all the program does.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wcs2vgwa&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
