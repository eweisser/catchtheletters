# catchtheletters
A game where you shoot lasers at letters flying through space to capture them, written with p5.js.

Made summer of 2020, my first big project with p5. It's mostly functional, although there are still a few issues.

Clicking on a letter multiple times makes it show up in the bank multiple times, when it should be rendered inert after the first successful click.
The algorithm to determine the initial position and trajectory of a letter is pretty good, but should be altered to prevent any from skimming across the bottom of the screen, where the spaceship console obscures the view.
Sound doesn't work.
A few elements of the graphic design don't scale to other sizes correctly, especially the "START" label.
On some machines, time passes more slowly, making it easier to get letters.
I also plan to fork this into at least one other version, where players are instructed to spell specific words given a picture clue.
