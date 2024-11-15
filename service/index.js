const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// updateScores considers a new score for inclusion in the high scores.
function updateScores(newScore, scores) {
  let found = false;

  // Insert newScore in sorted order (based on score and pegsRemaining)
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  // If newScore isn't added by the loop, add it at the end
  if (!found) {
    scores.push(newScore);
  }

  // Sort the scores based on pegsRemaining and numMoves
  scores.sort((a, b) => {
    if (a.pegsRemaining === b.pegsRemaining) {
      return a.numMoves - b.numMoves;  // Sort by moves if pegs remaining are tied
    }
    return a.pegsRemaining - b.pegsRemaining;  // Sort by pegs remaining
  });

  // Keep only the top 10 scores
  if (scores.length > 10) {
    scores.length = 10;
  }

  // Return the updated scores array
  return scores;
}