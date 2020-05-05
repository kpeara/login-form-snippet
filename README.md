# My Login Form Snippet

Another snippet I made when learning Vue and Tailwind CSS that I made for anyone to use. Thanks to the power of vue components and tailwind classes, this login page can comes in a variety of colors and is responsive to different sizes.

Future plans:
- [ ] Utilize vue transitions

<img src="/images/wide.png">
<p align="middle">
    <img src="/images/purple.png" width="250">
    <img src="/images/blue.png" width="250">
    <img src="/images/green.png" width="250">
</p>

### How to change color

The form uses the default colors provided by tailwind: blue, teal, indigo, orange, red etc.

main.js

```javascript

var app = new Vue({
    el: "#app",
    data: {
        formColor: "purple" // change color here
    }
})

```
