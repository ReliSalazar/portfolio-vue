module.exports = Array(100)
  .fill(0)
  .map((x, i) => {
    return {
      path: `/blog/${i + 1}`,
      name: `entry${i + 1}`,
      component: () => import(`../blogEntries/entry-${i + 1}.vue`),
    };
  });
