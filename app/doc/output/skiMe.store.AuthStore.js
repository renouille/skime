Ext.data.JsonP.skiMe_store_AuthStore({"tagname":"class","name":"skiMe.store.AuthStore","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"AuthStore.js","href":"AuthStore.html#skiMe-store-AuthStore"}],"aliases":{"widget":["authStore"]},"alternateClassNames":[],"extends":"Ext.data.Store","mixins":[],"requires":["Ext.data.proxy.LocalStorage"],"uses":[],"members":[{"name":"autoSync","tagname":"cfg","owner":"skiMe.store.AuthStore","id":"cfg-autoSync","meta":{"private":true}},{"name":"autoload","tagname":"cfg","owner":"skiMe.store.AuthStore","id":"cfg-autoload","meta":{"private":true}},{"name":"model","tagname":"cfg","owner":"skiMe.store.AuthStore","id":"cfg-model","meta":{"private":true}},{"name":"storeId","tagname":"cfg","owner":"skiMe.store.AuthStore","id":"cfg-storeId","meta":{"private":true}},{"name":"getAutoSync","tagname":"method","owner":"skiMe.store.AuthStore","id":"method-getAutoSync","meta":{}},{"name":"getAutoload","tagname":"method","owner":"skiMe.store.AuthStore","id":"method-getAutoload","meta":{}},{"name":"getModel","tagname":"method","owner":"skiMe.store.AuthStore","id":"method-getModel","meta":{}},{"name":"getStoreId","tagname":"method","owner":"skiMe.store.AuthStore","id":"method-getStoreId","meta":{}},{"name":"setAutoSync","tagname":"method","owner":"skiMe.store.AuthStore","id":"method-setAutoSync","meta":{}},{"name":"setAutoload","tagname":"method","owner":"skiMe.store.AuthStore","id":"method-setAutoload","meta":{}},{"name":"setModel","tagname":"method","owner":"skiMe.store.AuthStore","id":"method-setModel","meta":{}},{"name":"setStoreId","tagname":"method","owner":"skiMe.store.AuthStore","id":"method-setStoreId","meta":{}}],"code_type":"ext_define","id":"class-skiMe.store.AuthStore","component":false,"superclasses":["Ext.data.Store"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>skiMe.store.AuthStore</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.data.proxy.LocalStorage</div><h4>Files</h4><div class='dependency'><a href='source/AuthStore.html#skiMe-store-AuthStore' target='_blank'>AuthStore.js</a></div></pre><div class='doc-contents'><p>Store to manage the sessions of a User\nType: LocalStorage</p>\n\n<p>@autor René Grossmann</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoSync' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-autoSync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-cfg-autoSync' class='name expandable'>autoSync</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-autoload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-autoload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-cfg-autoload' class='name expandable'>autoload</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-model' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-cfg-model' class='name expandable'>model</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'skiMe.model.Auth'</code></p></div></div></div><div id='cfg-storeId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-cfg-storeId' class='name expandable'>storeId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'authStore'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getAutoSync' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-autoSync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-method-getAutoSync' class='name expandable'>getAutoSync</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of autoSync. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.AuthStore-cfg-autoSync\" rel=\"skiMe.store.AuthStore-cfg-autoSync\" class=\"docClass\">autoSync</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAutoload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-autoload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-method-getAutoload' class='name expandable'>getAutoload</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of autoload. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.AuthStore-cfg-autoload\" rel=\"skiMe.store.AuthStore-cfg-autoload\" class=\"docClass\">autoload</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-method-getModel' class='name expandable'>getModel</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of model. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.AuthStore-cfg-model\" rel=\"skiMe.store.AuthStore-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStoreId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-method-getStoreId' class='name expandable'>getStoreId</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of storeId. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.AuthStore-cfg-storeId\" rel=\"skiMe.store.AuthStore-cfg-storeId\" class=\"docClass\">storeId</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAutoSync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-autoSync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-method-setAutoSync' class='name expandable'>setAutoSync</a>( <span class='pre'>autoSync</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of autoSync. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.AuthStore-cfg-autoSync\" rel=\"skiMe.store.AuthStore-cfg-autoSync\" class=\"docClass\">autoSync</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>autoSync</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAutoload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-autoload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-method-setAutoload' class='name expandable'>setAutoload</a>( <span class='pre'>autoload</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of autoload. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.AuthStore-cfg-autoload\" rel=\"skiMe.store.AuthStore-cfg-autoload\" class=\"docClass\">autoload</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>autoload</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-method-setModel' class='name expandable'>setModel</a>( <span class='pre'>model</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of model. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.AuthStore-cfg-model\" rel=\"skiMe.store.AuthStore-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setStoreId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AuthStore'>skiMe.store.AuthStore</span><br/><a href='source/AuthStore.html#skiMe-store-AuthStore-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AuthStore-method-setStoreId' class='name expandable'>setStoreId</a>( <span class='pre'>storeId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of storeId. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.AuthStore-cfg-storeId\" rel=\"skiMe.store.AuthStore-cfg-storeId\" class=\"docClass\">storeId</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>storeId</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});