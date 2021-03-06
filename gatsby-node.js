const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPost.edges.map(({ node }) => {
        createPage({
          path: `posts/${node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  const loadCampaigns = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulCampaign {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulCampaign.edges.map(({ node }) => {
        createPage({
          path: `campaigns/${node.slug}/`,
          component: path.resolve(`./src/templates/campaign.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  const loadMonsters = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulMonster {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allContentfulMonster.edges.map(res => {
          console.log(res);
          const { node } = res;
          createPage({
            path: `monsters/${node.slug}/`,
            component: path.resolve(`./src/templates/monster.js`),
            context: {
              slug: node.slug
            }
          });
        });
        resolve();
      })
      .catch(err => {
        console.log(err);
      });
  });

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPage.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  return Promise.all([loadPosts, loadCampaigns, loadMonsters, loadPages]);
};
