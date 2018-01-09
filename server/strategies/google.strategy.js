// var passport = require("passport");
// var GoogleStrategy = require("passport-google-oauth20").Strategy;
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});

// used to deserialize the user
// passport.deserializeUser(function(id, done) {
//   userModel.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "361456232186-4l4ee4s09o3bdf4nng9ahnvf1ju4t5a0.apps.googleusercontent.com",
      clientSecret: "oq6x0VLoaC4ruAzNYNkMVXYP",
      callbackURL: "http://localhost:3000/auth/google/callback",
      enableProof: true,
      profileFields: [
        "id",
        "emails",
        "gender",
        "link",
        "locale",
        "name",
        "timezone",
        "updated_time",
        "verified"
      ],
      enableProof: true,
      scope: [
        "profile",
        "https://www.googleapis.com/auth/plus.me",
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/plus.profile.emails.read",
      ]
    },
    function(accessToken, refreshToken, profile, cb) {
      // var data = profile.json();
      var data = JSON.stringify(profile)
      //console.log(`user data is ${JSON.stringify(profile)}`);
      console.log(`profile gender is  ${profile.gender}`);
      
      console.log(`user display name is ${profile.displayName}`);
      console.log(`users email is ${profile._json.emails[0].value}`)
      //console.log(`user email is ${data.emails}`);
      //console.log(`${profile.name}`);
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      return cb(null, profile);
    }
  )
);
passport.use(new FacebookStrategy({
  clientID: "156365405006935",
  clientSecret: "9dcea6a19b352c2396da11f67fcddd28",
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'photos', 'email']
},
function(accessToken, refreshToken, profile, cb) {
     console.log(`User Profile email is ${profile.email}`)
  // User.findOrCreate({ facebookId: profile.id }, function (err, user) {

  //   return cb(err, user);
  // });
}
));



module.exports = passport;
