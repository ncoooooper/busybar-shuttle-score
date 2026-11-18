# Shuttle Score

Keep badminton rally score, the serving side and deuce rules without tapping a phone.

Use the same button to log the rally and update the next serve. The front score faces the players while the rear tells the scorer which side serves and from which court.

A small court beside the score marks where the next serve comes from. Home occupies the left half and Away the right. The light moves when the serving side or service court changes.

## Award a rally

1. Turn the wheel until the rear names the side that won the rally. The side selected for the next point can differ from the present server.
2. Click once to give that side a point. The rally winner becomes the serving side.
3. Read the front in Home–Away order. In the opening clip Away wins two rallies and the score reaches 0–2.

![The score advances from 0–0 to 0–1 and 0–2.](media/guide/score-away-rallies.gif)

## Correct the last point

1. Press **Start** if a rally went to the wrong side. Both the previous score and previous server are restored.
2. Turn to the correct side and click. In this example undo brings the score back to 0–1, then a Home point ties it at 1–1.
3. Use the rear for the next serve. An even score for the server shows right court; an odd one shows left.

![The score goes back one Away point before Home ties the game at 1–1.](media/guide/correct-and-tie.gif)

## Example from the emulator

This app uses a game to 21 with a two-point lead, capped at 30. At 20–20 another point alone does not end the game. At 29–29 the next rally does. Hold **Start** to clear the game when both sides are ready.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)
