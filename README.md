# ☣️ APOCALYPSE SURVIVORS

A fast, single-file **co-op top-down survival shooter**. Pick a class, scavenge weapons off the horde, fortify a compound, and **defend the generator** through escalating waves, blood moons, and boss fights. Built with plain Canvas 2D + WebRTC — no engine, no build step, no install.

## ▶ Play now

**https://andrewvbro.github.io/apocalypse-survivors/**

Works in any modern browser, on desktop or mobile. No download.

## ⬇ Install as an app

It's a full **PWA** — install it and it runs like a native app, offline:

- **Desktop (Chrome/Edge):** open the play link and click the **Install** icon in the address bar (or ⋮ menu → *Install Apocalypse Survivors*).
- **Android:** open the link → menu → **Add to Home screen / Install app**.
- **iOS (Safari):** Share → **Add to Home Screen**.

Once installed it launches fullscreen from your home screen / app list and works without a connection (co-op still needs internet).

## 📷 Screenshots

In-game, press **`P`** or click the **📷** button (top-right) to download a PNG of your current screen.

## 👥 Play with friends (co-op)

1. Click **Host Co-op** — you get a 4-letter room code + a copyable invite link.
2. Send the link to friends; they click **Join a friend**.
3. Connection is peer-to-peer (WebRTC via PeerJS), so it works across the internet — no server.

No one around? Set **Bots** to 1–3 and fight alongside the AI.

## 🎮 How to play

- You spawn with only a **machete**. Zombies **drop guns** — pick them up and they go in your **inventory** (hotbar at the bottom). You keep every weapon you find and switch freely.
- Defend the **⚡ generator** at the center of the compound. **If it's destroyed, you lose.**
- Spend **cash** in the build menu on **walls, barricades, spikes, turrets, and repair drones**. Spend **scrap** at the **upgrade bench** to level your weapons.
- Earn **XP** to level up and bank **skill points**; survive runs to earn **Bio-Cores** that unlock & upgrade classes between games.
- Every **4th wave** is a 🌑 **Blood Moon** (bigger, nastier horde). Every **10th wave** is a 👹 **Boss Fight** against scaling Behemoths.

## 🧟 Features

- **8 classes** — Soldier, Heavy, Medic, Scout, Engineer, Pyro, plus buyable **Berserker** & **Sniper**, and the champion-only **Revenant**. Each has a unique active ability (Space).
- **Weapon scavenging + inventory** — machete start, 6 firearm types dropped by zombies, kept in a switchable hotbar, upgradable with scrap.
- **10 zombie variants** — walker, runner, crawler, brute, armored, spitter, toxic, leaper, screamer, exploder — and the **Behemoth** boss.
- **Base building** — grid-snapped walls/spikes/turrets, auto-repair drones, a delete tool, and the generator objective.
- **Progression** — XP & levels, a 7-skill tree (incl. a boss-locked Scrap Magnet), persistent Bio-Cores, buyable classes, and per-class ability upgrades.
- **Co-op** — WebRTC peer-to-peer, downed/revive (a teammate can pick you up), AI ally bots.
- **Atmosphere** — a very dense forest beyond the border, blood-moon overlay, a day counter, full procedural audio, and a local high-score leaderboard with monthly champions.

## ⌨️ Controls

| | |
|---|---|
| `WASD` | move |
| `Mouse` | aim · `Click` fire / swing |
| `Shift` | sprint (stamina) |
| `Space` | class ability |
| `1`–`6` | switch weapons (hotbar) |
| `R` | reload |
| `B` | build mode · `X` delete tool |
| `E` | upgrade bench (near it) |
| `K` | skills · `Tab` scoreboard |
| `M` | mute · `Esc` pause / quit |

## 🛠️ Run it locally

It's one HTML file plus a vendored PeerJS — just serve the folder over HTTP:

```bash
python -m http.server 5614
# then open http://localhost:5614
```

(Opening `index.html` directly works too, but a local server is recommended so WebRTC/audio behave.)

## License

MIT — do whatever you like.

---

*Made with Canvas 2D, WebRTC, and a lot of zombies. 🧟‍♂️*
