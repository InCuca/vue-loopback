export default function(path) {
  const paths = Object.keys(require.cache);
  paths.forEach((p) => {
    if (p.includes(path)) {
      // console.log('clearing', p);
      delete require.cache[p];
    }
  });
}
