/**
 * Login controller
 * Manage the login and logout actions
 *
 * @author René Grossmann
 */

Ext.define('skiMe.controller.LoginController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginView: 'loginView'
        },
        control: {
            loginView: {
                loginBtnTap: 'signIn'
            }
        }
    }, 

    /**
     * Send the login data (username+password) and loads the user data if signed up
     * @param {Ext.Panel} view Login view
     * @param {string} usermail Email of the user
     * @param {string} password Password of the user
     */
    signIn: function (view, usermail, password) {

        var loginController = this;
        var loginView = this.getLoginView();

        //Usermail and password must be setted
        if (usermail.length === 0 || password.length === 0) {
            loginView.showSignInFailedMessage('Please enter your email and password.');
            return;
        }

        loginView.setMasked({
            xtype: 'loadmask',
            message: 'Signing in...'
        });

        //Send login data to server
        Ext.Ajax.request({
            url: skiMe.config.Config.getWebservices()+'/login',
            type: 'rest',
            method: 'post',
            headers: {
                'SM-usermail': usermail,
                'SM-password': password,
                'SM-timestamp': Math.round(Date.now() / 1000),
                'Accept' : 'application/json'                 
            },
            success: function (response) {

                var loginResponse = Ext.JSON.decode(response.responseText);

                if (loginResponse.success) {

                    //Save the authoken in localstorage
                    var authToken = Ext.create('skiMe.model.Auth', {
                        id: 1,
                        user_id: loginResponse.user.id,
                        authToken: response.getResponseHeader('sm-authtoken')
                    });
                    authToken.save();
                    Ext.getStore('authStore').load();

                    //Get the user informations
                    skiMe.model.User.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

                    skiMe.model.User.load(loginResponse.user.id, { 
                        success: function(user) {

                            skiMe.app.user = user;
                            loginController.signInSuccess();
                        },
                        failure: function(user) {
                            loginController.signInFailure();
                        }
                    });                 
                } else {
                    loginController.signInFailure(loginResponse.message);
                }
            },
            failure: function (response) {
                loginController.sessionToken = null;
                loginController.signInFailure('Login failed. Please try again later.');
            }
        });
    }, 

    /**
     * Called if the user signed in successfuly. Show the main view of the Application
     */
    signInSuccess: function () {
        console.log('Signed in.'); 

        Ext.Viewport.add({xtype: 'sliderView'}).show();

        this.getLoginView().hide();
        this.getLoginView().onAfter('hide', function() {
            this.destroy();
        });
    },

    /**
     * Called if an error occured while signing in or if the usermail and password do not match
     * @param {string} message Error message to display
     */
    signInFailure: function (message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    }
});