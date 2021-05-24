# FYU
Do your users take your website for granted? Do want to make them using your website living hell? Look no further, F.Y.U. is here! Oh yeah, FYU stands for something 👀.

(PS you might recognize my name from my [url lengthener](https://ax56.pro) which went viral a few weeks back)

## Getting the script
Getting the script is super easy, as it is hosted with jsDelivr (seriously that site is awesome!). All you need to do is put this at the end of the `body` of your site:
```html
<script src="https://cdn.jsdelivr.net/npm/fyu@1/fyu.min.js"></script>
```

## Activating the Script
Actually using the script is really easy, but you might not want to use every function, so here's a litte guide:

- `makeithell()` - You have no care for the world. Every knob at the max.
- `shiftHorizontalRandom()` - Shifts each element randomly left or right 4 times per second
- `shiftVerticalRandom()` - Shifts each element randomly up or down 4 times per second
- `shiftRandom()` - Does both `shiftHorizontalRandom()` and `shiftHorizontalRandom` at once
- `rotateRandom()` - Rotates each element randomly 4 times per second. Highly unreccomended as it can interfere with the shifting functions and just look exceptionally displeasing on it's own.
- `runAway()` - Makes every element "run away" from the cursor when hovered over
- `colorsRandom()` - Changes every element's color and background color every 2.5 seconds
- `opacityRandom()` - Changes every element's opacity every 5 seconds

## Selecting Certain Elements
Now, lets say you want some elements to stay unchanged, like if you have a div which pretty much contains the entire site. All you need to do is add the `dontNuke` class to those HTML elements. For example, here is a `<p>` which would be affected and one which wouldn't:

Affected:
```html
<p>Hello there! uwu</p>
```

Not Affected:
```html
<p class="dontNuke">Hello there! uwu</p>
```

## Contributing
If you would like to add your own nuking functions to this script, simply make a pr with the ***asyncronous*** function added to `fyu.js` and the call to the said function inside of `makeItHell()`. Don't worry about minifying `fyu.js`, as I'll end up doing that myself. If the function(s) you add aren't asyncronous, I'll comment on your pr to make the change. The reason we want to do this is to not interfere with any other scripts or functions within this script.