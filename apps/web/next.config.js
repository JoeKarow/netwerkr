const withTM = require( "next-transpile-modules" )( [ "@joekarow/netwerkr-ui" ] );

module.exports = withTM( {
  reactStrictMode: true,
} );
