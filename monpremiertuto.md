# Danseur endiablé

Programme le micro:bit pour qu'un danseur s'anime

## @showdialog
## Avant de commencer
Supprime le bloc ``||basic:au démarrage||``
#### Glisse-le vers la gauche, tu verras apparaître une poubelle

```blocks
basic.forever(function ()
})
```
## Étape 1

Ajoute le bloc ``||basic:montrer LEDs||`` dans le bloc ``||function:toujours||``

 ```blocks
basic.forever(function () {
    for (let index = 0; index < 4; index++) {

    }
})
```
## Étape 2

Ajoute le bloc montrez LEDs dans le bloc toujours
#### Dessine le corps du danseur.

```blocks
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            # # # # #
            . . # . #
            . # # . .
            . # . # .
            `)


```

## Étape 3

Ajoute le bloc Pause sous le bloc montrez leds
#### Conserve le chiffre 4

```blocks

basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            # # # # #
            . . # . #
            . # # . .
            . # . # .
            `)
        basic.pause(100)

```

## Étape 4

Duplique le bloc montrez LEDs (bouton droit de la souris)
#### Modifie la position des bras du danseur

```blocks
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            # # # # #
            . . # . #
            . # # . .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . #
            # # # # #
            # . # . .
            . # # . .
            . # . # .
            `)
    }
})


   

```

## Terminé! 

Bravo! Tu as réussi!