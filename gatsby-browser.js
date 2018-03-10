exports.onClientEntry = () => {
  console.log("We've started!")
}

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
}

exports.onRouteUpdate = ({ location }) => {
  console.log('New pathname', location.pathname)
  if (!!ga) {
    ga('send', 'pageview', location.pathname);
  }
}