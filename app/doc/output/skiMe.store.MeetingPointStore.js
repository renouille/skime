Ext.data.JsonP.skiMe_store_MeetingPointStore({"tagname":"class","name":"skiMe.store.MeetingPointStore","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"MeetingPointStore.js","href":"MeetingPointStore.html#skiMe-store-MeetingPointStore"}],"aliases":{"widget":["meetingPointStore"]},"alternateClassNames":[],"extends":"Ext.data.Store","mixins":[],"requires":["Ext.data.proxy.Rest"],"uses":[],"members":[{"name":"autoSync","tagname":"cfg","owner":"skiMe.store.MeetingPointStore","id":"cfg-autoSync","meta":{"private":true}},{"name":"autoload","tagname":"cfg","owner":"skiMe.store.MeetingPointStore","id":"cfg-autoload","meta":{"private":true}},{"name":"listeners","tagname":"cfg","owner":"skiMe.store.MeetingPointStore","id":"cfg-listeners","meta":{"private":true}},{"name":"model","tagname":"cfg","owner":"skiMe.store.MeetingPointStore","id":"cfg-model","meta":{"private":true}},{"name":"proxy","tagname":"cfg","owner":"skiMe.store.MeetingPointStore","id":"cfg-proxy","meta":{"private":true}},{"name":"storeId","tagname":"cfg","owner":"skiMe.store.MeetingPointStore","id":"cfg-storeId","meta":{"private":true}},{"name":"getAutoSync","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-getAutoSync","meta":{}},{"name":"getAutoload","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-getAutoload","meta":{}},{"name":"getListeners","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-getListeners","meta":{}},{"name":"getModel","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-getModel","meta":{}},{"name":"getProxy","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-getProxy","meta":{}},{"name":"getStoreId","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-getStoreId","meta":{}},{"name":"setAutoSync","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-setAutoSync","meta":{}},{"name":"setAutoload","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-setAutoload","meta":{}},{"name":"setListeners","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-setListeners","meta":{}},{"name":"setModel","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-setModel","meta":{}},{"name":"setProxy","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-setProxy","meta":{}},{"name":"setStoreId","tagname":"method","owner":"skiMe.store.MeetingPointStore","id":"method-setStoreId","meta":{}}],"code_type":"ext_define","id":"class-skiMe.store.MeetingPointStore","component":false,"superclasses":["Ext.data.Store"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>skiMe.store.MeetingPointStore</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.data.proxy.Rest</div><h4>Files</h4><div class='dependency'><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore' target='_blank'>MeetingPointStore.js</a></div></pre><div class='doc-contents'><p>Store to manage the Meeting Points of a User\nType: REST</p>\n\n<p>@autor René Grossmann</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoSync' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-autoSync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-cfg-autoSync' class='name expandable'>autoSync</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-autoload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-autoload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-cfg-autoload' class='name expandable'>autoload</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-cfg-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-model' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-cfg-model' class='name expandable'>model</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'skiMe.model.MeetingPoint'</code></p></div></div></div><div id='cfg-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-cfg-proxy' class='name expandable'>proxy</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: 'rest', reader: {type: 'json', rootProperty: 'meetingPoints', successProperty: 'success'}}</code></p></div></div></div><div id='cfg-storeId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-cfg-storeId' class='name expandable'>storeId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'meetingPointStore'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getAutoSync' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-autoSync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-getAutoSync' class='name expandable'>getAutoSync</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of autoSync. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-autoSync\" rel=\"skiMe.store.MeetingPointStore-cfg-autoSync\" class=\"docClass\">autoSync</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAutoload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-autoload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-getAutoload' class='name expandable'>getAutoload</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of autoload. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-autoload\" rel=\"skiMe.store.MeetingPointStore-cfg-autoload\" class=\"docClass\">autoload</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-getListeners' class='name expandable'>getListeners</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of listeners. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-listeners\" rel=\"skiMe.store.MeetingPointStore-cfg-listeners\" class=\"docClass\">listeners</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-getModel' class='name expandable'>getModel</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of model. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-model\" rel=\"skiMe.store.MeetingPointStore-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of proxy. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-proxy\" rel=\"skiMe.store.MeetingPointStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStoreId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-getStoreId' class='name expandable'>getStoreId</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of storeId. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-storeId\" rel=\"skiMe.store.MeetingPointStore-cfg-storeId\" class=\"docClass\">storeId</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAutoSync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-autoSync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-setAutoSync' class='name expandable'>setAutoSync</a>( <span class='pre'>autoSync</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of autoSync. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-autoSync\" rel=\"skiMe.store.MeetingPointStore-cfg-autoSync\" class=\"docClass\">autoSync</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>autoSync</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAutoload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-autoload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-setAutoload' class='name expandable'>setAutoload</a>( <span class='pre'>autoload</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of autoload. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-autoload\" rel=\"skiMe.store.MeetingPointStore-cfg-autoload\" class=\"docClass\">autoload</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>autoload</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-setListeners' class='name expandable'>setListeners</a>( <span class='pre'>listeners</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of listeners. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-listeners\" rel=\"skiMe.store.MeetingPointStore-cfg-listeners\" class=\"docClass\">listeners</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listeners</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-setModel' class='name expandable'>setModel</a>( <span class='pre'>model</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of model. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-model\" rel=\"skiMe.store.MeetingPointStore-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-setProxy' class='name expandable'>setProxy</a>( <span class='pre'>proxy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of proxy. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-proxy\" rel=\"skiMe.store.MeetingPointStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setStoreId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.MeetingPointStore'>skiMe.store.MeetingPointStore</span><br/><a href='source/MeetingPointStore.html#skiMe-store-MeetingPointStore-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.MeetingPointStore-method-setStoreId' class='name expandable'>setStoreId</a>( <span class='pre'>storeId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of storeId. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.MeetingPointStore-cfg-storeId\" rel=\"skiMe.store.MeetingPointStore-cfg-storeId\" class=\"docClass\">storeId</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>storeId</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});