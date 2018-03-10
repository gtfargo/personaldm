exports.onClientEntry = () => {
  console.log("We've started!");
};

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed");
};

exports.onRouteUpdate = ({ location }) => {
  console.log("New pathname", location.pathname);
  var _hsq = (window._hsq = window._hsq || []);
  if (location && _hsq) {
    _hsq.push(["setPath", location.pathname]);
    // Track the page view for the new page
    _hsq.push(["trackPageView"]);
  }
};
