module.exports = Array(100)
  .fill(0)
  .map((x, i) => {
    return {
      path: `/portfolio/${i + 1}`,
      name: `portfolio-entry-${i + 1}`,
      component: () => import(`../portfolioEntries/entry-${i + 1}.vue`),
    };
  });
