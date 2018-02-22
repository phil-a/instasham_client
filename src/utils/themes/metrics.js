const makeCircle = size => ({
  height: size,
  width: size,
  borderRadius: size / 2
});

const makeHitSlop = size => ({
  top: size,
  right: size,
  bottom: size,
  left: size,
})

export { makeCircle, makeHitSlop };