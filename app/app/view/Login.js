/**
 * Login form to authenticate a User with an email and a password
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: "loginView",
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
    config: {
    	style: 'background-color: #FFFFFF',
        title: 'Login',
        items: [{
        		xtype: 'panel',
        		layout: {
        			type: 'hbox',
        			align: 'bottom'
        		},
        		cls: 'sm-login-header',
        		items: [{
        				xtype: 'spacer'
        			}, {
        				xtype: 'image',
        				cls: 'sm-login-headerName'
        			}, {
        				xtype: 'image',
        				cls: 'sm-login-headerLogo',
        			}
        		]
        	}, {
				xtype: 'fieldset',
				items: [
					{
			        
			            xtype: 'textfield',
			            placeHolder: 'Email',
			            itemId: 'userNameTextField',
			            name: 'userNameTextField',
			            required: true,
			            clearIcon: false
			 		},
			        {
			            xtype: 'passwordfield',
			            placeHolder: 'Password',
			            itemId: 'passwordTextField',
			            name: 'passwordTextField',
			            required: true,
			            clearIcon: false
			        }
			    ]
			},  
			{
			    xtype: 'button',
			    itemId: 'logInButton',
			    ui: 'action',
			    padding: '10px',
			    text: 'Sign in',
			    cls: 'sm-button login'
			}, {
			    xtype: 'label',
			    html: 'Login failed. Please try again.',
			    itemId: 'signInFailedLabel',
			    hidden: true,
			    hideAnimation: 'fadeOut',
			    showAnimation: 'fadeIn',
			    cls: 'sm-label-error'
			}
        ],
        listeners: [{
		    delegate: '#logInButton',
		    event: 'tap',
	    	fn: 'onLogInButtonTap'
		}]
    }, 
    
    /**
     * Check if no fied is empty and fire an event to notify the login button was tapped
     */
	onLogInButtonTap: function () {

	    var me = this;

	    var usernameField = me.down('#userNameTextField'),
	        passwordField = me.down('#passwordTextField'),
	        label = me.down('#signInFailedLabel');

	    label.hide();

	    var username = usernameField.getValue(),
	        password = passwordField.getValue();

	    // Using a delayed task in order to give the hide animation above
	    // time to finish before executing the next steps.
	    var task = Ext.create('Ext.util.DelayedTask', function () {

	        label.setHtml('');

	        me.fireEvent('loginBtnTap', me, username, password);

	        usernameField.setValue('');
	        passwordField.setValue('');
	    });

	    task.delay(500);
	},

	/**
	 * Display an error message if the login failed
	 * @param {string} message Error message to display
	 */
	showSignInFailedMessage: function (message) {
	    var label = this.down('#signInFailedLabel');
	    label.setHtml(message);
	    label.show();
	}
});