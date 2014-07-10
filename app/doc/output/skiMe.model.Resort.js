Ext.data.JsonP.skiMe_model_Resort({"tagname":"class","name":"skiMe.model.Resort","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Resort.js","href":"Resort.html#skiMe-model-Resort"}],"author":[{"tagname":"author","name":"René Grossmann","email":null}],"aliases":{},"alternateClassNames":[],"extends":"Ext.data.Model","mixins":[],"requires":[],"uses":[],"members":[{"name":"belongsTo","tagname":"cfg","owner":"skiMe.model.Resort","id":"cfg-belongsTo","meta":{"private":true}},{"name":"fields","tagname":"cfg","owner":"skiMe.model.Resort","id":"cfg-fields","meta":{"private":true}},{"name":"hasMany","tagname":"cfg","owner":"skiMe.model.Resort","id":"cfg-hasMany","meta":{"private":true}},{"name":"hasOne","tagname":"cfg","owner":"skiMe.model.Resort","id":"cfg-hasOne","meta":{"private":true}},{"name":"idProperty","tagname":"cfg","owner":"skiMe.model.Resort","id":"cfg-idProperty","meta":{"private":true}},{"name":"proxy","tagname":"cfg","owner":"skiMe.model.Resort","id":"cfg-proxy","meta":{"private":true}},{"name":"validations","tagname":"cfg","owner":"skiMe.model.Resort","id":"cfg-validations","meta":{"private":true}},{"name":"getBelongsTo","tagname":"method","owner":"skiMe.model.Resort","id":"method-getBelongsTo","meta":{}},{"name":"getFields","tagname":"method","owner":"skiMe.model.Resort","id":"method-getFields","meta":{}},{"name":"getHasMany","tagname":"method","owner":"skiMe.model.Resort","id":"method-getHasMany","meta":{}},{"name":"getHasOne","tagname":"method","owner":"skiMe.model.Resort","id":"method-getHasOne","meta":{}},{"name":"getIdProperty","tagname":"method","owner":"skiMe.model.Resort","id":"method-getIdProperty","meta":{}},{"name":"getProxy","tagname":"method","owner":"skiMe.model.Resort","id":"method-getProxy","meta":{}},{"name":"getValidations","tagname":"method","owner":"skiMe.model.Resort","id":"method-getValidations","meta":{}},{"name":"setBelongsTo","tagname":"method","owner":"skiMe.model.Resort","id":"method-setBelongsTo","meta":{}},{"name":"setFields","tagname":"method","owner":"skiMe.model.Resort","id":"method-setFields","meta":{}},{"name":"setHasMany","tagname":"method","owner":"skiMe.model.Resort","id":"method-setHasMany","meta":{}},{"name":"setHasOne","tagname":"method","owner":"skiMe.model.Resort","id":"method-setHasOne","meta":{}},{"name":"setIdProperty","tagname":"method","owner":"skiMe.model.Resort","id":"method-setIdProperty","meta":{}},{"name":"setProxy","tagname":"method","owner":"skiMe.model.Resort","id":"method-setProxy","meta":{}},{"name":"setValidations","tagname":"method","owner":"skiMe.model.Resort","id":"method-setValidations","meta":{}}],"code_type":"ext_define","id":"class-skiMe.model.Resort","short_doc":"Model to manage the Resort informations\n\nFields:\n-- id:               Id of the Resort\n-- name:             Name of t...","component":false,"superclasses":["Ext.data.Model"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><strong>skiMe.model.Resort</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Resort.html#skiMe-model-Resort' target='_blank'>Resort.js</a></div></pre><div class='doc-contents'><p>Model to manage the Resort informations</p>\n\n<p>Fields:\n-- id:               Id of the Resort\n-- name:             Name of the Resort\n-- boundaries:       Boundaries of the Resort\n-- description:      Description of the Resort\n-- pisteskm:         Number of kilometers of pistes of the Resort\n-- liftsnumber:      Number of lifts of the Resort\n-- seasonstart:      Start date of the season\n-- seasonend:        End date of the season\n-- openfrom:        Opening time of the Resort\n-- openuntil:        Closing time of the Resort\n-- website:          Website url of the Resort\n-- country_code:     Code of the associated Country\n-- contact_tourism   Tel. number of the tourism office of the Resort\n-- contact_lifts     Tel. number of the lifts company of the Resort</p>\n\n<p>Belongs to:\n-- Country</p>\n\n<p>Has one:\n-- Profile Picture</p>\n\n<p>Has many:\n-- Webcams\n-- Pictures</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-belongsTo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-belongsTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-cfg-belongsTo' class='name expandable'>belongsTo</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: 'country', instanceName: 'country', model: 'skiMe.model.Country', getterName: 'getCountry', setterName: 'setCountry', associationKey: 'country', primaryKey: 'code', foreignKey: 'country_code'}]</code></p></div></div></div><div id='cfg-fields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-cfg-fields' class='name expandable'>fields</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: 'id', type: 'int'}, {name: 'name', type: 'string'}, {name: 'boundaries', type: 'string'}, {name: 'description', type: 'string'}, {name: 'pisteskm', type: 'float'}, {name: 'liftsnumber', type: 'int'}, {name: 'seasonstart', type: 'date'}, {name: 'seasonend', type: 'date'}, {name: 'openfrom', type: 'int'}, {name: 'openuntil', type: 'int'}, {name: 'website', type: 'string'}, {name: 'country_code', type: 'string'}, {name: 'contact_tourism', type: 'string'}, {name: 'contact_lifts', type: 'string'}]</code></p></div></div></div><div id='cfg-hasMany' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-hasMany' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-cfg-hasMany' class='name expandable'>hasMany</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: 'pictures', instanceName: 'pictures', model: 'skiMe.model.Picture', associationKey: 'pictures'}, {name: 'webcams', instanceName: 'webcams', model: 'skiMe.model.Webcam', associationKey: 'webcams'}]</code></p></div></div></div><div id='cfg-hasOne' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-hasOne' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-cfg-hasOne' class='name expandable'>hasOne</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: 'profilePicture', instanceName: 'profilePicture', model: 'skiMe.model.ProfilePicture', associationKey: 'profilePicture', getterName: 'getProfilePicture', setterName: 'setProfilePicture'}]</code></p></div></div></div><div id='cfg-idProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-cfg-idProperty' class='name expandable'>idProperty</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'id'</code></p></div></div></div><div id='cfg-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-cfg-proxy' class='name expandable'>proxy</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-validations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-validations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-cfg-validations' class='name expandable'>validations</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{type: 'presence', name: 'name', message: &quot;A name is required&quot;}]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getBelongsTo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-belongsTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-getBelongsTo' class='name expandable'>getBelongsTo</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of belongsTo. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Resort-cfg-belongsTo\" rel=\"skiMe.model.Resort-cfg-belongsTo\" class=\"docClass\">belongsTo</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-getFields' class='name expandable'>getFields</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of fields. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Resort-cfg-fields\" rel=\"skiMe.model.Resort-cfg-fields\" class=\"docClass\">fields</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHasMany' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-hasMany' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-getHasMany' class='name expandable'>getHasMany</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of hasMany. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Resort-cfg-hasMany\" rel=\"skiMe.model.Resort-cfg-hasMany\" class=\"docClass\">hasMany</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHasOne' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-hasOne' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-getHasOne' class='name expandable'>getHasOne</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of hasOne. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Resort-cfg-hasOne\" rel=\"skiMe.model.Resort-cfg-hasOne\" class=\"docClass\">hasOne</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getIdProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-getIdProperty' class='name expandable'>getIdProperty</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of idProperty. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Resort-cfg-idProperty\" rel=\"skiMe.model.Resort-cfg-idProperty\" class=\"docClass\">idProperty</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of proxy. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Resort-cfg-proxy\" rel=\"skiMe.model.Resort-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValidations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-validations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-getValidations' class='name expandable'>getValidations</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of validations. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Resort-cfg-validations\" rel=\"skiMe.model.Resort-cfg-validations\" class=\"docClass\">validations</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setBelongsTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-belongsTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-setBelongsTo' class='name expandable'>setBelongsTo</a>( <span class='pre'>belongsTo</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of belongsTo. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Resort-cfg-belongsTo\" rel=\"skiMe.model.Resort-cfg-belongsTo\" class=\"docClass\">belongsTo</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>belongsTo</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-setFields' class='name expandable'>setFields</a>( <span class='pre'>fields</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of fields. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Resort-cfg-fields\" rel=\"skiMe.model.Resort-cfg-fields\" class=\"docClass\">fields</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fields</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHasMany' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-hasMany' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-setHasMany' class='name expandable'>setHasMany</a>( <span class='pre'>hasMany</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of hasMany. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Resort-cfg-hasMany\" rel=\"skiMe.model.Resort-cfg-hasMany\" class=\"docClass\">hasMany</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hasMany</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHasOne' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-hasOne' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-setHasOne' class='name expandable'>setHasOne</a>( <span class='pre'>hasOne</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of hasOne. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Resort-cfg-hasOne\" rel=\"skiMe.model.Resort-cfg-hasOne\" class=\"docClass\">hasOne</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hasOne</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setIdProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-setIdProperty' class='name expandable'>setIdProperty</a>( <span class='pre'>idProperty</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of idProperty. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Resort-cfg-idProperty\" rel=\"skiMe.model.Resort-cfg-idProperty\" class=\"docClass\">idProperty</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>idProperty</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-setProxy' class='name expandable'>setProxy</a>( <span class='pre'>proxy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of proxy. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Resort-cfg-proxy\" rel=\"skiMe.model.Resort-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setValidations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Resort'>skiMe.model.Resort</span><br/><a href='source/Resort.html#skiMe-model-Resort-cfg-validations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Resort-method-setValidations' class='name expandable'>setValidations</a>( <span class='pre'>validations</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of validations. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Resort-cfg-validations\" rel=\"skiMe.model.Resort-cfg-validations\" class=\"docClass\">validations</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>validations</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});