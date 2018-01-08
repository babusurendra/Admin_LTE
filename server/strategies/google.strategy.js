// var passport = require("passport");
// var GoogleStrategy = require("passport-google-oauth20").Strategy;
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
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
        "email",
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
        "emails",
        "user:email",
        "https://www.googleapis.com/auth/plus.me",
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/plus.profile.emails.read",
        'include_email=true',
        "https://www.google.com/m8/feeds",
      ]
    },
    function(accessToken, refreshToken, profile, cb) {
      // var data = profile.json();
      console.log(`profile gender is  ${profile.gender}`);
      
      console.log(`user display name is ${profile.displayName}`);
      console.log(`user email is ${ profile.email}`);
      //console.log(`${profile.name}`);
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      return cb(profile);
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
