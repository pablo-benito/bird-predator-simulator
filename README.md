# Bird-Predator simulator

#### A bird predator simulator, based on [p5js](http://p5js.org) library. 


There are three different elements: The *food* (black dot), the *predator* (white dot) and the *birds* (coloured triangles).

The *predator* always follows the best *bird*, that is, the closest to the *food*.

The *birds*, move around the canvas based on three premises: 

 * Try to go to the best position remembered, visited by the *bird* in the past. 
 * Follow the best *bird* (the one closest to the *food* location)
 * Move away of the *predator* 

The first premise, called *Cognitive Factor* can be modulated with the keys **q** (increase), **a** (decrease), **z** (set to zero). 

The second premise, called *Social Factor* can be modulated with the keys **w** (increase), **s** (decrease), **x** (set to zero).

The last premise, called *Fear Factor* can be modulated with the keys **e** (increase), **d** (decrease), **c** (set to zero).

(https://pablo-benito.github.io/bird-predator-simulator/)
