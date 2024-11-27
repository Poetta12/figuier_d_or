const express = require("express");
const app = express();

// Configuration : remplacez les valeurs ci-dessous par le token attendu et sa réponse
const CHALLENGE_TOKEN = "174549768"; // Le token fourni par Let's Encrypt (expected value)
const CHALLENGE_RESPONSE = "174549768.EXAMPLE_SECRET"; // La valeur attendue par le challenge

// Route pour gérer la validation HTTP-01
app.get("/.well-known/acme-challenge/:token", (req, res) => {
  const token = req.params.token;

  if (token === CHALLENGE_TOKEN) {
    res.send(CHALLENGE_RESPONSE); // Répondre avec la valeur attendue
  } else {
    res.status(404).send("Token not found"); // Token incorrect
  }
});

// Lancer le serveur sur le port 80 (HTTP)
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
