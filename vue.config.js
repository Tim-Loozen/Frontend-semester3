// vue.config.js
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    devServer: {
        proxy: 'http://fontys_semester3_api.test/'
    }
}
console.log("loaded");
