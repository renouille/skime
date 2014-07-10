Ext.data.JsonP.skiMe_store_AddedGroupStore({"tagname":"class","name":"skiMe.store.AddedGroupStore","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"AddedGroupStore.js","href":"AddedGroupStore.html#skiMe-store-AddedGroupStore"}],"aliases":{"widget":["addedGroupStore"]},"alternateClassNames":[],"extends":"Ext.data.Store","mixins":[],"requires":[],"uses":[],"members":[{"name":"model","tagname":"cfg","owner":"skiMe.store.AddedGroupStore","id":"cfg-model","meta":{"private":true}},{"name":"proxy","tagname":"cfg","owner":"skiMe.store.AddedGroupStore","id":"cfg-proxy","meta":{"private":true}},{"name":"storeId","tagname":"cfg","owner":"skiMe.store.AddedGroupStore","id":"cfg-storeId","meta":{"private":true}},{"name":"getModel","tagname":"method","owner":"skiMe.store.AddedGroupStore","id":"method-getModel","meta":{}},{"name":"getProxy","tagname":"method","owner":"skiMe.store.AddedGroupStore","id":"method-getProxy","meta":{}},{"name":"getStoreId","tagname":"method","owner":"skiMe.store.AddedGroupStore","id":"method-getStoreId","meta":{}},{"name":"setModel","tagname":"method","owner":"skiMe.store.AddedGroupStore","id":"method-setModel","meta":{}},{"name":"setProxy","tagname":"method","owner":"skiMe.store.AddedGroupStore","id":"method-setProxy","meta":{}},{"name":"setStoreId","tagname":"method","owner":"skiMe.store.AddedGroupStore","id":"method-setStoreId","meta":{}}],"code_type":"ext_define","id":"class-skiMe.store.AddedGroupStore","component":false,"superclasses":["Ext.data.Store"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>skiMe.store.AddedGroupStore</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore' target='_blank'>AddedGroupStore.js</a></div></pre><div class='doc-contents'><p>Store to manage the Groups added to a Meeting Point\nType: Memory</p>\n\n<p>@autor René Grossmann</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-model' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AddedGroupStore'>skiMe.store.AddedGroupStore</span><br/><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AddedGroupStore-cfg-model' class='name expandable'>model</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'skiMe.model.Group'</code></p></div></div></div><div id='cfg-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AddedGroupStore'>skiMe.store.AddedGroupStore</span><br/><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AddedGroupStore-cfg-proxy' class='name expandable'>proxy</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: 'memory', rootProperty: 'group'}</code></p></div></div></div><div id='cfg-storeId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AddedGroupStore'>skiMe.store.AddedGroupStore</span><br/><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AddedGroupStore-cfg-storeId' class='name expandable'>storeId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'addedGroupStore'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getModel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AddedGroupStore'>skiMe.store.AddedGroupStore</span><br/><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AddedGroupStore-method-getModel' class='name expandable'>getModel</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of model. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.AddedGroupStore-cfg-model\" rel=\"skiMe.store.AddedGroupStore-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AddedGroupStore'>skiMe.store.AddedGroupStore</span><br/><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AddedGroupStore-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of proxy. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.AddedGroupStore-cfg-proxy\" rel=\"skiMe.store.AddedGroupStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStoreId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AddedGroupStore'>skiMe.store.AddedGroupStore</span><br/><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AddedGroupStore-method-getStoreId' class='name expandable'>getStoreId</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of storeId. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.store.AddedGroupStore-cfg-storeId\" rel=\"skiMe.store.AddedGroupStore-cfg-storeId\" class=\"docClass\">storeId</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AddedGroupStore'>skiMe.store.AddedGroupStore</span><br/><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AddedGroupStore-method-setModel' class='name expandable'>setModel</a>( <span class='pre'>model</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of model. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.AddedGroupStore-cfg-model\" rel=\"skiMe.store.AddedGroupStore-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AddedGroupStore'>skiMe.store.AddedGroupStore</span><br/><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AddedGroupStore-method-setProxy' class='name expandable'>setProxy</a>( <span class='pre'>proxy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of proxy. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.AddedGroupStore-cfg-proxy\" rel=\"skiMe.store.AddedGroupStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setStoreId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.store.AddedGroupStore'>skiMe.store.AddedGroupStore</span><br/><a href='source/AddedGroupStore.html#skiMe-store-AddedGroupStore-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.store.AddedGroupStore-method-setStoreId' class='name expandable'>setStoreId</a>( <span class='pre'>storeId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of storeId. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.store.AddedGroupStore-cfg-storeId\" rel=\"skiMe.store.AddedGroupStore-cfg-storeId\" class=\"docClass\">storeId</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>storeId</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});