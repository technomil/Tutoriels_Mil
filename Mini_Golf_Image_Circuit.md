# Afficher une image grâce à un circuit électrique
Programme le micro:bit pour qu'un bonhomme sourire apparaisse lorsqu'un circuit électrique est fermé.


## @showdialog
## Avant de commencer

Supprime le bloc ``||basic:toujours||``.
#### Glisse-le vers la gauche, tu verras apparaître une poubelle

```blocks
basic.forever(function ()
})
```

## Étape 1
Place le bloc ``||basic:afficher LEDs||`` dans le bloc ``||basic:au démarrage||``
#### Dessine le chiffre 0
```blocks
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
    ```
## Étape 2
Place le bloc ``|input:lorsque la broche est activé||``
#### Choisis la broche P1.
```blocks

input.onPinPressed(TouchPin.P1, function () {
	
})

basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)

```

## Étape 3
Place le bloc ``||basic:afficher LEDs||`` dans le bloc ``|input:lorsque la broche est activé||``
#### Dessine un bonhomme sourire
```blocks
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
    
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
})
```
## Effectue les branchements avec des fils à pinces crocodile.
Une pince doit être branchée sur la broche P1 et une autre dans le ground (GND).

## Ferme ton circuit.
Installe un morceau d'aluminium à l'autre extrémité de chaque pince crocodile.

## Teste ton circuit.
Lorsque les deux morceaux d'aluminium se touchent, le bonhomme sourire apparaît!