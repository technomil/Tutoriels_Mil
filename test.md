# Mon premier tuto

## @showdialog
## Ce tutoriel a été créé par
Émilie LD

## Étape 1

Ajoute le bloc répéter dans le bloc toujours

 ```blocks
basic.forever(function () {
    for (let index = 0; index < 4; index++) {

    }
})
```
## Étape 2

Ajoute le bloc Montrez Leds dans le bloc répétez
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

Ajoute le bloc Pause sous le bloc Toujours

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

Duplique le bloc Montrez Leds
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