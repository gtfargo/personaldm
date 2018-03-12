
// /* eslint-disable react/no-danger */

// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { JssProvider } from 'react-jss';
// import getPageContext from './src/getPageContext';
// import { ServerStyleSheet, StyleSheetManager } from "styled-components";


// exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
//   // Get the context of the page to collected side effects.
//   const pageContext = getPageContext();

//   const sheet = new ServerStyleSheet();
//   const store = createStore();


//   const bodyHTML = renderToString(
//     <JssProvider
//       registry={pageContext.sheetsRegistry}
//       generateClassName={pageContext.generateClassName}
//     >
//       <Provider store={store}>
//         <StyleSheetManager sheet={sheet.instance}>
//           {/* {bodyComponent} */}
//           {React.cloneElement(bodyComponent, {
//           pageContext,
//         })}
//         </StyleSheetManager>
//       </Provider>
//     </JssProvider>,
//   );

//   replaceBodyHTMLString(bodyHTML);
//   setHeadComponents([
//     sheet.getStyleElement(),
//     <style
//       type="text/css"
//       id="server-side-jss"
//       key="server-side-jss"
//       dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
//     />,
//   ]);
// };