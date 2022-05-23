import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";
import OktaSignIn from '@okta/okta-signin-widget';

class HelloWorldApp extends LightningElement {
  constructor() {
    super();
    this.oktaSignIn = new OktaSignIn({
      baseUrl: "https://dev-39094278.okta.com",
      clientId: "0oa4x1jye7Q7g9cbB5d7",
      redirectUri: 'http://localhost:3000/',
      authParams: {
        issuer: "https://dev-39094278.okta.com/oauth2/default",
        responseType: ['token', 'id_token'],
        display: 'page'
      }
    });
    console.log("constructor started");
    console.log(this.oktaSignIn);
    console.log("Authe Client Token");
    this.oktaSignIn.authClient.token.getUserInfo().then(function (user) {
      console.log(user.email);
    }, function (error) {
      console.log(this.OktaSignIn);
      this.oktaSignIn.showSignInToGetTokens({
        el: '#widget-container'
      });
    }); // this.oktaSignIn.authClient.token.getUserInfo().then(function(user) {
    //   console.log(user.email)           
    // }, function(error) {
    //   alert(this.oktaSignIn)           
    //   this.oktaSignIn.showSignInToGetTokens({
    //     el: '#widget-container'
    //   }).then(function(tokens) {
    //     this.oktaSignIn.authClient.tokenManager.setTokens(tokens);
    //     this.oktaSignIn.remove();
    //     const idToken = tokens.idToken;
    //     document.getElementById("messageBox").innerHTML = "Hello, " + idToken.claims.email + "! You just logged in! :)";
    //     document.getElementById("logout").style.display = 'block';
    //   }).catch(function(err) {
    //     console.log(err)
    //     console.error(err);
    //   });
    // });
  }

}

_registerDecorators(HelloWorldApp, {
  fields: ["oktaSignIn"]
});

export default _registerComponent(HelloWorldApp, {
  tmpl: _tmpl
});