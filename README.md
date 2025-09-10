# Fantasy Efficacy Score (FES)

**Author:** Joseph Corritone  
**Last Updated:** September 2025

## :football: Overview
The **Fantasy Efficacy Score (FES)** is a custom fantasy football metric designed to quantify the value a player provides **above positional expectations** while accounting for how often that player is actually trusted in fantasy lineups. FES is not a fantasy points metric, rather, it provides insights into **a player’s contextual value**.

## :pushpin: Why FES?

Fantasy points alone don't tell the whole story:
- **Positional context matters** — 15 points from a TE can win you a week; 15 points from an RB might not.
- **Usage matters** — A breakout bench player only scores points for few fantasy managers, while a widely-started player impacts far more matchups.
- **Winning in context** — FES aims to better align with playoff advance rate, showing which players *actually* drive team success.

## :clipboard: How It Works

### 1. Establish a Baseline
For each position (QB, RB, WR, TE, etc.), calculate:

`Baseline = (Player Fantasy Points × % Started) / (Total % Started / 100)`

The Baseline represents the **expected** weekly output for a starting-caliber player at that position.

### 2. Calculate Weekly Value

For each player and week:

`Weekly FES = (Player Fantasy Points − Baseline) × % Started`

This rewards players who outperform expectations **and** are in starting lineups.

### 3. Season-Long Score

Sum all weekly FES Values for the season to get a player’s **total FES**.

### Example from Week 1 2025

| Player         | Position | Week | Fantasy Points | % Started |  Baseline  | Weekly FES |
|----------------|----------|------|----------------|-----------|------------|------------|
| Josh Allen     | QB       | 1    | 38.76          | 0.973     | 21.216120  | 17.070     |
| Derrick Henry  | RB       | 1    | 29.20          | 0.991     | 14.678080  | 14.391     |

*% Started = Percentage of ESPN leagues where the player was in starting lineups that week.*

## :bar_chart: Why It’s Effective

- **Cross-positional comparability** — Compare the value of a WR vs. TE without bias.
- **Playoff correlation** — By factoring in start %, FES tracks players who actually influence matchup wins.
- **Draft & trade insight** — Identify undervalued players with high FES relative to perceived fantasy points.

## :wrench: Limitations 

Flex usage means some players are started in cross-positional slots, which can slightly inflate or deflate their FES relative to actual lineup impact. For simplicity, FES uses the player’s listed position as the baseline reference.

## :calendar: Future Plans
- Validate FES against multi-year playoff advance rate data.
- Explore per-game FES trends for start/sit optimization.
- Integrate with open-source fantasy football datasets.

## :bust_in_silhouette: Author

Created by Joseph Corritone — aspiring sports analytics professional experienced in R, Python, data visualization, and statistical modeling. Passionate about applying advanced metrics to real-world sports strategy.
