///<reference path='../node_modules/definitely-typed-requirejs/require.d.ts' />
/// <reference path="app/GameController.ts" />

require.config({
  baseUrl: 'scripts/app'
});

require(
  [
    "GameController"
  ],
  (gameController) => {
    new gameController.GameController()
  }
)
