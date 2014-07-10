Ext.data.JsonP.skiMe_model_Webcam({"tagname":"class","name":"skiMe.model.Webcam","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Webcam.js","href":"Webcam.html#skiMe-model-Webcam"}],"author":[{"tagname":"author","name":"René Grossmann","email":null}],"aliases":{},"alternateClassNames":[],"extends":"skiMe.model.Image","mixins":[],"requires":[],"uses":[],"members":[{"name":"belongsTo","tagname":"cfg","owner":"skiMe.model.Webcam","id":"cfg-belongsTo","meta":{"private":true}},{"name":"fields","tagname":"cfg","owner":"skiMe.model.Webcam","id":"cfg-fields","meta":{"private":true}},{"name":"idProperty","tagname":"cfg","owner":"skiMe.model.Image","id":"cfg-idProperty","meta":{"private":true}},{"name":"proxy","tagname":"cfg","owner":"skiMe.model.Webcam","id":"cfg-proxy","meta":{"private":true}},{"name":"validations","tagname":"cfg","owner":"skiMe.model.Image","id":"cfg-validations","meta":{"private":true}},{"name":"getBelongsTo","tagname":"method","owner":"skiMe.model.Webcam","id":"method-getBelongsTo","meta":{}},{"name":"getFields","tagname":"method","owner":"skiMe.model.Webcam","id":"method-getFields","meta":{}},{"name":"getIdProperty","tagname":"method","owner":"skiMe.model.Image","id":"method-getIdProperty","meta":{}},{"name":"getProxy","tagname":"method","owner":"skiMe.model.Webcam","id":"method-getProxy","meta":{}},{"name":"getValidations","tagname":"method","owner":"skiMe.model.Image","id":"method-getValidations","meta":{}},{"name":"setBelongsTo","tagname":"method","owner":"skiMe.model.Webcam","id":"method-setBelongsTo","meta":{}},{"name":"setFields","tagname":"method","owner":"skiMe.model.Webcam","id":"method-setFields","meta":{}},{"name":"setIdProperty","tagname":"method","owner":"skiMe.model.Image","id":"method-setIdProperty","meta":{}},{"name":"setProxy","tagname":"method","owner":"skiMe.model.Webcam","id":"method-setProxy","meta":{}},{"name":"setValidations","tagname":"method","owner":"skiMe.model.Image","id":"method-setValidations","meta":{}}],"code_type":"ext_define","id":"class-skiMe.model.Webcam","short_doc":"Model to manage the Webcam informations\n\nFields:\n-- title:         Title of the Webcam\n-- position:      Position of ...","component":false,"superclasses":["Ext.data.Model","skiMe.model.Image"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><a href='#!/api/skiMe.model.Image' rel='skiMe.model.Image' class='docClass'>skiMe.model.Image</a><div class='subclass '><strong>skiMe.model.Webcam</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Webcam.html#skiMe-model-Webcam' target='_blank'>Webcam.js</a></div></pre><div class='doc-contents'><p>Model to manage the Webcam informations</p>\n\n<p>Fields:\n-- title:         Title of the Webcam\n-- position:      Position of the Webcam\n-- resort_id:     Id of the associated Resort</p>\n\n<p>Belongs to:\n-- Resort</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-belongsTo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Webcam'>skiMe.model.Webcam</span><br/><a href='source/Webcam.html#skiMe-model-Webcam-cfg-belongsTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Webcam-cfg-belongsTo' class='name expandable'>belongsTo</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: 'resort', instanceName: 'resort', model: 'skiMe.model.Resort', associationKey: 'resort'}]</code></p></div></div></div><div id='cfg-fields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Webcam'>skiMe.model.Webcam</span><br/><a href='source/Webcam.html#skiMe-model-Webcam-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Webcam-cfg-fields' class='name expandable'>fields</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: 'title', type: 'string'}, {name: 'position', type: 'string'}, {name: 'resort_id', type: 'int'}]</code></p><p>Overrides: <a href=\"#!/api/skiMe.model.Image-cfg-fields\" rel=\"skiMe.model.Image-cfg-fields\" class=\"docClass\">skiMe.model.Image.fields</a></p></div></div></div><div id='cfg-idProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/skiMe.model.Image' rel='skiMe.model.Image' class='defined-in docClass'>skiMe.model.Image</a><br/><a href='source/Image.html#skiMe-model-Image-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Image-cfg-idProperty' class='name expandable'>idProperty</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'id'</code></p></div></div></div><div id='cfg-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Webcam'>skiMe.model.Webcam</span><br/><a href='source/Webcam.html#skiMe-model-Webcam-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Webcam-cfg-proxy' class='name expandable'>proxy</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-validations' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/skiMe.model.Image' rel='skiMe.model.Image' class='defined-in docClass'>skiMe.model.Image</a><br/><a href='source/Image.html#skiMe-model-Image-cfg-validations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Image-cfg-validations' class='name expandable'>validations</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{type: 'url', name: 'url', message: &quot;A valid image url is required&quot;}]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getBelongsTo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Webcam'>skiMe.model.Webcam</span><br/><a href='source/Webcam.html#skiMe-model-Webcam-cfg-belongsTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Webcam-method-getBelongsTo' class='name expandable'>getBelongsTo</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of belongsTo. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Webcam-cfg-belongsTo\" rel=\"skiMe.model.Webcam-cfg-belongsTo\" class=\"docClass\">belongsTo</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Webcam'>skiMe.model.Webcam</span><br/><a href='source/Webcam.html#skiMe-model-Webcam-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Webcam-method-getFields' class='name expandable'>getFields</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of fields. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Webcam-cfg-fields\" rel=\"skiMe.model.Webcam-cfg-fields\" class=\"docClass\">fields</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/skiMe.model.Image-method-getFields\" rel=\"skiMe.model.Image-method-getFields\" class=\"docClass\">skiMe.model.Image.getFields</a></p></div></div></div><div id='method-getIdProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/skiMe.model.Image' rel='skiMe.model.Image' class='defined-in docClass'>skiMe.model.Image</a><br/><a href='source/Image.html#skiMe-model-Image-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Image-method-getIdProperty' class='name expandable'>getIdProperty</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of idProperty. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Image-cfg-idProperty\" rel=\"skiMe.model.Image-cfg-idProperty\" class=\"docClass\">idProperty</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Webcam'>skiMe.model.Webcam</span><br/><a href='source/Webcam.html#skiMe-model-Webcam-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Webcam-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of proxy. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Webcam-cfg-proxy\" rel=\"skiMe.model.Webcam-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValidations' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/skiMe.model.Image' rel='skiMe.model.Image' class='defined-in docClass'>skiMe.model.Image</a><br/><a href='source/Image.html#skiMe-model-Image-cfg-validations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Image-method-getValidations' class='name expandable'>getValidations</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of validations. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.model.Image-cfg-validations\" rel=\"skiMe.model.Image-cfg-validations\" class=\"docClass\">validations</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setBelongsTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Webcam'>skiMe.model.Webcam</span><br/><a href='source/Webcam.html#skiMe-model-Webcam-cfg-belongsTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Webcam-method-setBelongsTo' class='name expandable'>setBelongsTo</a>( <span class='pre'>belongsTo</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of belongsTo. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Webcam-cfg-belongsTo\" rel=\"skiMe.model.Webcam-cfg-belongsTo\" class=\"docClass\">belongsTo</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>belongsTo</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Webcam'>skiMe.model.Webcam</span><br/><a href='source/Webcam.html#skiMe-model-Webcam-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Webcam-method-setFields' class='name expandable'>setFields</a>( <span class='pre'>fields</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of fields. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Webcam-cfg-fields\" rel=\"skiMe.model.Webcam-cfg-fields\" class=\"docClass\">fields</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fields</span> : Array<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/skiMe.model.Image-method-setFields\" rel=\"skiMe.model.Image-method-setFields\" class=\"docClass\">skiMe.model.Image.setFields</a></p></div></div></div><div id='method-setIdProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/skiMe.model.Image' rel='skiMe.model.Image' class='defined-in docClass'>skiMe.model.Image</a><br/><a href='source/Image.html#skiMe-model-Image-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Image-method-setIdProperty' class='name expandable'>setIdProperty</a>( <span class='pre'>idProperty</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of idProperty. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Image-cfg-idProperty\" rel=\"skiMe.model.Image-cfg-idProperty\" class=\"docClass\">idProperty</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>idProperty</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.model.Webcam'>skiMe.model.Webcam</span><br/><a href='source/Webcam.html#skiMe-model-Webcam-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Webcam-method-setProxy' class='name expandable'>setProxy</a>( <span class='pre'>proxy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of proxy. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Webcam-cfg-proxy\" rel=\"skiMe.model.Webcam-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setValidations' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/skiMe.model.Image' rel='skiMe.model.Image' class='defined-in docClass'>skiMe.model.Image</a><br/><a href='source/Image.html#skiMe-model-Image-cfg-validations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.model.Image-method-setValidations' class='name expandable'>setValidations</a>( <span class='pre'>validations</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of validations. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.model.Image-cfg-validations\" rel=\"skiMe.model.Image-cfg-validations\" class=\"docClass\">validations</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>validations</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});