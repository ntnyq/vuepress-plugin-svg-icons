
module.exports = {
  plugins: [
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'fill-rule', 'class'],
      },
    },
  ],
}
