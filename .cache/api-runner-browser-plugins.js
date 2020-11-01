module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Starter","short_name":"Gatsby Starter","start_url":"/","background_color":"black","theme_color":"black","display":"minimal-ui","icon":"src/images/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"58034edeb8b3d851b16e0f00dfcb6bf2"},
    },{
      plugin: require('../node_modules/gatsby-plugin-react-redux/gatsby-browser.js'),
      options: {"plugins":[],"pathToCreateStoreModule":"./src/state/store","serialize":{"space":0,"isJSON":true,"unsafe":false}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
