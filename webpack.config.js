var config = {
  entry: './index.js', //our point of entry that renders our react components
  output: {
     path:'/public',
     filename: 'bundle.js', //here is where our jsx will be transpiled to actual js that can live in our browser
  },
  devServer: {
     inline: true, //this allows our changes to take place immediately without refreshing
     port: 9000 //the port where our app will be served from
  },
  module: {
      loaders: [
      {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loaders: [
            'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2' //babel is what transpiles our jsx code into javascript
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}  
            }
          ]
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
}
module.exports = config;
