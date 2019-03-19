# color-spacer
Utility for generating evenly-spaced colors around an HSV color wheel.

```
const { getColors } = require('./dist/index.js');

getColors(6); // [ '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff' ]
getColors(3); // [ '#ff0000', '#00ff00', '#0000ff' ]
getColors(3, { shift: Math.PI / 6 }); // [ '#ffff00', '#00ffff', '#ff00ff' ]
getColors(3, { s: 0.5 }); // [ '#ff8080', '#80ff80', '#8080ff' ]
getColors(3, { v: 0.5 }); // [ '#800000', '#008000', '#000080' ]
```