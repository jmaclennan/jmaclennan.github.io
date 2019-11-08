/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const projectData = require("./src/data/projects.json")

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    projectData.forEach(project => {
        createPage({
            path: `/projects/${project.id}`,
            component: require.resolve(`./src/templates/project.js`),
            context: { id: project.id },
        })
    })
}
