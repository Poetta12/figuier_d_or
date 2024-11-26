module.exports = {
  env: {
    node: true, // Active l'environnement Node.js
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // Ajoute ici des règles personnalisées si nécessaire
  },
};
