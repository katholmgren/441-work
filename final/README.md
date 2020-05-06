
May 5, 2020

# I Spy Final

[I Spy Live Link](https://katholmgren.github.io/441-work/final/)

For my final project, I decided to make an I Spy game/puzzle based on the children's books by Walter Wick. It includes 3 levels with a total of 16 items to find. I gathered the items from around my house, then arranged and photographed them. I used the canvas, a grid system, jQuery, and if-statements to make the puzzle functional.

### Process

1. Took pictures
2. Set up the canvas with background images
3. Transitioned between background and texts on click (with JQuery)
4. Got mouse coordinate on click
5. Proceed to the next screen based on if a mouse click is in coordinate range
6. Change soda text red if soda can is clicked
7. Change rubber band text green if clicked
8. Added success sound
9. Added pen counter (if both pens have been clicked, change text color)
10. Added level counters (if all items found, proceed to next level)
11. Did the same process for level two and three
12. Added a congrats screen
13. Got text to turn colors on second and third levels
14. Troubleshooting


### Difficulties

My main difficulties were with changing the text color for the second and third levels, but I got that working with append. I also had trouble with the last screen because my jQuery was behaving funny. It didn't turn out quite as colorful as I was had hoped, but I can go back and change it later. Lastly, the clickable spaces from all levels are on the canvas, so sometimes a user might press off of an object and it will make a noise because that's where an item is on a different level. I got around this by having the hidden objects in different places.

Documentation video:

[www.youtube.com/watch?v=AsC3qOM8Yb0&t=55s](www.youtube.com/watch?v=AsC3qOM8Yb0&t=55s)

### Helpful Resources I Used

[stackoverflow.com/questions/14824747/overlay-html5-canvas-over-image](stackoverflow.com/questions/14824747/overlay-html5-canvas-over-image)

[stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/18053642#18053642](stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/18053642#18053642)

Coordinate grid system: [softwareengineering.stackexchange.com/questions/187880/algorithm-to-detect-a-click-within-square-range](softwareengineering.stackexchange.com/questions/187880/algorithm-to-detect-a-click-within-square-range)
