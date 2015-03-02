racer-animate
=============


# Usage
racer.use(require('racer-animate'))

```html
<rect x={{animated_foo}}>
```

```coffee
model.animate('animated_foo', 'foo', {
  ease: 'bounce',
  duration: 1000
})
model.animate('fast_foo', 'foo', {
  ease: 'linear',
  duration: 100
})
model.animate('custom_foo', 'foo', {
  ease: (t) -> Math.sqrt(t),
  duration: 100
})
```