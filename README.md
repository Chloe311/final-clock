
# Particle clock

A particle clock that's formed by dots and it will flee away from your mouse.

## Summary

Particle Systems is a Technique for Modeling a Class of Fuzzy Objects. My clock is made up by a lot of dots that will change every second. Particle system will be common-used in the future such as argumented reality and virtual reality. 

## Component Parts

· font - preload a font for the number
· vehicles - the variable that hold datas from the Vehicles class

sketch class
· getPoint() - to hold the point that refresh every once in a second
   · hr,mn,sc - get current system time
· setup() - canvas, background, use point the outline the time(numbers)
   · push dots to outline the number(time) 
· draw() - draw the clock and call Vehiecle class to do actions

Vehicle class
· Vehicle(x,y) - create behaviors for the particle
· pos - random dots starting position
· vel - velocity of the vector
· r - radius for how far the dots will flee from the mouse
· flee() - calculation distance from mouse to the target
· mouseX, mouseY - mouse current location
· desire - target minus this current dots position
· update - update calculation
· show - show dots

Include what types of inputs/outputs/data it will use. You can also upload an image with a diagram showing how all those pieces are connected.

## When your project is completed, you will then add the following sections:

## Timeline

What did you do in each of the past four weeks?

- Week 1: Write Proposal, flush out initial code for your idea
- Week 2: to understand what is particle system and how to code particle system, code
- Week 3: understand the physics of the particle system for the flying dots and code
- Week 4: Present!
 
## Challenges

I have looked up many videos about the particle system because the physics were so difficult to understand(thanks to p5 reference and coding train) also I was having trouble to refreshing the time because I put them at the wrong component. 

## Completed Work

https://editor.p5js.org/Chloe311/sketches/XFviyECTk
![] 

## References and links

Tutorials, comments, videos, magazine articles - anything you found that helps you understand your project.

- https://www.openprocessing.org/sketch/448956/
- https://www.youtube.com/watch?v=UcdigVaIYAk
- https://www.youtube.com/watch?v=vdgiqMkFygc
- https://www.youtube.com/watch?v=krRpZFU6rSI
- https://p5js.org/reference/#/p5.MediaElement/time

