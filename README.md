# Chess tutor challenge

This two-part challenge will have you design an MVP feature for a web-based chess tutor, followed by an architectural discussion around building out a more complex feature.

We want to see your problem-solving approach, how you apply HTML, CSS and JavaScript and how you communicate technically.

We're not looking at your design skills, memory of syntax or knowledge of any specific framework or library. Keep this in mind as you code your solution, don't overthink the design and feel free to open up MDN or Google.


## Part one - Legal moves

In this challenge we will work on a visualisation of how the pieces move on an International Chess board. Don't worry if you don't know how to play chess, we'll cover what you need to know.

There is some stub code to get started with, if you opt to use JavaScript to solve the challenge. Feel free to use as much or as little of this as you'd like.

### 1.1 Create the board

First create an empty chessboard.

The board will be square, with 8x8 evenly-sized tiles in an alternating black and white chequered effect. There should not be any gap between the tiles. The first square at the top left is empty/white. This is an exploded view to show the general effect:

```
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
```

### 1.2 Place a piece in the centre

Add a button above the board. When clicked, a castle/rook piece (♜) should appear on the board near the centre, in D5 position. The coding test provides images for this purpose. You do not need to show the grid numbers or letters in your visualisation, this is just for your reference.

```
8 □ ■ □ ■ □ ■ □ ■
7 ■ □ ■ □ ■ □ ■ □
6 □ ■ □ ■ □ ■ □ ■
5 ■ □ ■ ♜ ■ □ ■ □ <- this row, four from left
4 □ ■ □ ■ □ ■ □ ■
3 ■ □ ■ □ ■ □ ■ □
2 □ ■ □ ■ □ ■ □ ■
1 ■ □ ■ □ ■ □ ■ □
  a b c d e f g h
```

### 1.3 Stretch requirement if time allows - highlight legal moves

Highlight on the chess board the legal moves the castle/rook can make - it can move as many horizontal or vertical squares that are available. Since the "board" is empty, this means all the way to the edges.

```
□ ■ □ * □ ■ □ ■
■ □ ■ * ■ □ ■ □
□ ■ □ * □ ■ □ ■
* * * ♜ * * * *
□ ■ □ * □ ■ □ ■
■ □ ■ * ■ □ ■ □
□ ■ □ * □ ■ □ ■
■ □ ■ * ■ □ ■ □
```
Use any highlight style you wish.


## Part two - Playing against a computer

Discuss how you would approach the following requirements:

In the next iteration, the chess tutor will have a game-play mode; where the user plays against a computer player.

* An API will be provided that performs the computer's turns. It will accept the current game state and return the new game state with the computer player's move
* The game-play mode will be activated by navigation at the top of the screen
* An indicator panel will display the whether it is the computer or the player's turn, with a timer for how long the turn takes. A turn ends when a move is made
* The user will make a move by selecting the piece to move, then selecting a valid location to move it to.

This would be built from scratch -- you are free to choose any framework, library or technique.
