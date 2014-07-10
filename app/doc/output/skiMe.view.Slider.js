Ext.data.JsonP.skiMe_view_Slider({"tagname":"class","name":"skiMe.view.Slider","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Slider.js","href":"Slider2.html#skiMe-view-Slider"}],"aliases":{"widget":["sliderView"]},"alternateClassNames":[],"extends":"Ext.Container","mixins":[],"requires":["Ext.TitleBar"],"uses":[],"members":[{"name":"cls","tagname":"cfg","owner":"skiMe.view.Slider","id":"cfg-cls","meta":{"private":true}},{"name":"fullscreen","tagname":"cfg","owner":"skiMe.view.Slider","id":"cfg-fullscreen","meta":{"private":true}},{"name":"items","tagname":"cfg","owner":"skiMe.view.Slider","id":"cfg-items","meta":{"private":true}},{"name":"layout","tagname":"cfg","owner":"skiMe.view.Slider","id":"cfg-layout","meta":{"private":true}},{"name":"showAnimation","tagname":"cfg","owner":"skiMe.view.Slider","id":"cfg-showAnimation","meta":{"private":true}},{"name":"getCls","tagname":"method","owner":"skiMe.view.Slider","id":"method-getCls","meta":{}},{"name":"getFullscreen","tagname":"method","owner":"skiMe.view.Slider","id":"method-getFullscreen","meta":{}},{"name":"getItems","tagname":"method","owner":"skiMe.view.Slider","id":"method-getItems","meta":{}},{"name":"getLayout","tagname":"method","owner":"skiMe.view.Slider","id":"method-getLayout","meta":{}},{"name":"getShowAnimation","tagname":"method","owner":"skiMe.view.Slider","id":"method-getShowAnimation","meta":{}},{"name":"initialize","tagname":"method","owner":"skiMe.view.Slider","id":"method-initialize","meta":{}},{"name":"setCls","tagname":"method","owner":"skiMe.view.Slider","id":"method-setCls","meta":{}},{"name":"setFullscreen","tagname":"method","owner":"skiMe.view.Slider","id":"method-setFullscreen","meta":{}},{"name":"setItems","tagname":"method","owner":"skiMe.view.Slider","id":"method-setItems","meta":{}},{"name":"setLayout","tagname":"method","owner":"skiMe.view.Slider","id":"method-setLayout","meta":{}},{"name":"setShowAnimation","tagname":"method","owner":"skiMe.view.Slider","id":"method-setShowAnimation","meta":{}}],"code_type":"ext_define","id":"class-skiMe.view.Slider","component":false,"superclasses":["Ext.Container"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Container<div class='subclass '><strong>skiMe.view.Slider</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.TitleBar</div><h4>Files</h4><div class='dependency'><a href='source/Slider2.html#skiMe-view-Slider' target='_blank'>Slider.js</a></div></pre><div class='doc-contents'><p>Container grouping all 3 containers that composes the slider : FriendsPanel, MapPanel and NotifsPanel</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-cls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-cfg-cls' class='name expandable'>cls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'slider'</code></p></div></div></div><div id='cfg-fullscreen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-fullscreen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-cfg-fullscreen' class='name expandable'>fullscreen</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-cfg-items' class='name expandable'>items</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{xtype: 'friendsPanel', width: 250}, {xtype: 'mapPanel', width: '100%'}, {xtype: 'notifsPanel', width: 250}]</code></p></div></div></div><div id='cfg-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-cfg-layout' class='name expandable'>layout</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'fit'</code></p></div></div></div><div id='cfg-showAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-showAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-cfg-showAnimation' class='name expandable'>showAnimation</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'pop'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-getCls' class='name expandable'>getCls</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of cls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.view.Slider-cfg-cls\" rel=\"skiMe.view.Slider-cfg-cls\" class=\"docClass\">cls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFullscreen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-fullscreen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-getFullscreen' class='name expandable'>getFullscreen</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of fullscreen. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.view.Slider-cfg-fullscreen\" rel=\"skiMe.view.Slider-cfg-fullscreen\" class=\"docClass\">fullscreen</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-getItems' class='name expandable'>getItems</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of items. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.view.Slider-cfg-items\" rel=\"skiMe.view.Slider-cfg-items\" class=\"docClass\">items</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-getLayout' class='name expandable'>getLayout</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of layout. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.view.Slider-cfg-layout\" rel=\"skiMe.view.Slider-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getShowAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-showAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-getShowAnimation' class='name expandable'>getShowAnimation</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of showAnimation. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.view.Slider-cfg-showAnimation\" rel=\"skiMe.view.Slider-cfg-showAnimation\" class=\"docClass\">showAnimation</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires an event to notify the main view is initializing and the data can be loaded ...</div><div class='long'><p>Fires an event to notify the main view is initializing and the data can be loaded</p>\n<h3 class='pa'>Fires</h3><ul><li>applicationLaunch</li></ul></div></div></div><div id='method-setCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-setCls' class='name expandable'>setCls</a>( <span class='pre'>cls</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of cls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.view.Slider-cfg-cls\" rel=\"skiMe.view.Slider-cfg-cls\" class=\"docClass\">cls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFullscreen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-fullscreen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-setFullscreen' class='name expandable'>setFullscreen</a>( <span class='pre'>fullscreen</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of fullscreen. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.view.Slider-cfg-fullscreen\" rel=\"skiMe.view.Slider-cfg-fullscreen\" class=\"docClass\">fullscreen</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fullscreen</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-setItems' class='name expandable'>setItems</a>( <span class='pre'>items</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of items. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.view.Slider-cfg-items\" rel=\"skiMe.view.Slider-cfg-items\" class=\"docClass\">items</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-setLayout' class='name expandable'>setLayout</a>( <span class='pre'>layout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of layout. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.view.Slider-cfg-layout\" rel=\"skiMe.view.Slider-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layout</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setShowAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.view.Slider'>skiMe.view.Slider</span><br/><a href='source/Slider2.html#skiMe-view-Slider-cfg-showAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.view.Slider-method-setShowAnimation' class='name expandable'>setShowAnimation</a>( <span class='pre'>showAnimation</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of showAnimation. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.view.Slider-cfg-showAnimation\" rel=\"skiMe.view.Slider-cfg-showAnimation\" class=\"docClass\">showAnimation</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>showAnimation</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});