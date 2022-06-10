const withTM = require( "next-transpile-modules" )( [ "@joekarow/ui" ] );

module.exports = withTM( {
  reactStrictMode: true,
} );
