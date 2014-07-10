Ext.data.JsonP.skiMe_controller_Loader({"tagname":"class","name":"skiMe.controller.Loader","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Loader.js","href":"Loader.html#skiMe-controller-Loader"}],"author":[{"tagname":"author","name":"René Grossmann","email":null}],"aliases":{},"alternateClassNames":[],"extends":"Ext.app.Controller","mixins":[],"requires":[],"uses":[],"members":[{"name":"control","tagname":"cfg","owner":"skiMe.controller.Loader","id":"cfg-control","meta":{"private":true}},{"name":"nbFinishedTasks","tagname":"cfg","owner":"skiMe.controller.Loader","id":"cfg-nbFinishedTasks","meta":{"private":true}},{"name":"nbTotalTasks","tagname":"cfg","owner":"skiMe.controller.Loader","id":"cfg-nbTotalTasks","meta":{"private":true}},{"name":"refs","tagname":"cfg","owner":"skiMe.controller.Loader","id":"cfg-refs","meta":{"private":true}},{"name":"dataLoaded","tagname":"method","owner":"skiMe.controller.Loader","id":"method-dataLoaded","meta":{}},{"name":"getControl","tagname":"method","owner":"skiMe.controller.Loader","id":"method-getControl","meta":{}},{"name":"getNbFinishedTasks","tagname":"method","owner":"skiMe.controller.Loader","id":"method-getNbFinishedTasks","meta":{}},{"name":"getNbTotalTasks","tagname":"method","owner":"skiMe.controller.Loader","id":"method-getNbTotalTasks","meta":{}},{"name":"getRefs","tagname":"method","owner":"skiMe.controller.Loader","id":"method-getRefs","meta":{}},{"name":"loadData","tagname":"method","owner":"skiMe.controller.Loader","id":"method-loadData","meta":{}},{"name":"setControl","tagname":"method","owner":"skiMe.controller.Loader","id":"method-setControl","meta":{}},{"name":"setNbFinishedTasks","tagname":"method","owner":"skiMe.controller.Loader","id":"method-setNbFinishedTasks","meta":{}},{"name":"setNbTotalTasks","tagname":"method","owner":"skiMe.controller.Loader","id":"method-setNbTotalTasks","meta":{}},{"name":"setRefs","tagname":"method","owner":"skiMe.controller.Loader","id":"method-setRefs","meta":{}}],"code_type":"ext_define","id":"class-skiMe.controller.Loader","short_doc":"Loader of the skiMe Application\nLoads all the base data needed for application launch\nData loaded :\n-- Pistes\n-- Lift...","component":false,"superclasses":["Ext.app.Controller"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.Controller<div class='subclass '><strong>skiMe.controller.Loader</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Loader.html#skiMe-controller-Loader' target='_blank'>Loader.js</a></div></pre><div class='doc-contents'><p>Loader of the skiMe Application\nLoads all the base data needed for application launch\nData loaded :\n-- Pistes\n-- Lifts\n-- MeetinPoints\n-- Groups</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-cfg-control' class='name expandable'>control</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{mainView: {applicationLaunch: 'loadData'}}</code></p></div></div></div><div id='cfg-nbFinishedTasks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-nbFinishedTasks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-cfg-nbFinishedTasks' class='name expandable'>nbFinishedTasks</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-nbTotalTasks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-nbTotalTasks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-cfg-nbTotalTasks' class='name expandable'>nbTotalTasks</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>6</code></p></div></div></div><div id='cfg-refs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-cfg-refs' class='name expandable'>refs</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{mainView: 'sliderView', friendsPanel: 'friendsPanel'}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-dataLoaded' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-method-dataLoaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-dataLoaded' class='name expandable'>dataLoaded</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>When all the data is loaded, unmask the application and set the websocket connection ...</div><div class='long'><p>When all the data is loaded, unmask the application and set the websocket connection</p>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-getControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-getControl' class='name expandable'>getControl</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of control. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.controller.Loader-cfg-control\" rel=\"skiMe.controller.Loader-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNbFinishedTasks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-nbFinishedTasks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-getNbFinishedTasks' class='name expandable'>getNbFinishedTasks</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of nbFinishedTasks. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.controller.Loader-cfg-nbFinishedTasks\" rel=\"skiMe.controller.Loader-cfg-nbFinishedTasks\" class=\"docClass\">nbFinishedTasks</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNbTotalTasks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-nbTotalTasks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-getNbTotalTasks' class='name expandable'>getNbTotalTasks</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of nbTotalTasks. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.controller.Loader-cfg-nbTotalTasks\" rel=\"skiMe.controller.Loader-cfg-nbTotalTasks\" class=\"docClass\">nbTotalTasks</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-getRefs' class='name expandable'>getRefs</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of refs. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/skiMe.controller.Loader-cfg-refs\" rel=\"skiMe.controller.Loader-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-method-loadData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-loadData' class='name expandable'>loadData</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Load all the needed data for application launch ...</div><div class='long'><p>Load all the needed data for application launch</p>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-setControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-setControl' class='name expandable'>setControl</a>( <span class='pre'>control</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of control. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.controller.Loader-cfg-control\" rel=\"skiMe.controller.Loader-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setNbFinishedTasks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-nbFinishedTasks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-setNbFinishedTasks' class='name expandable'>setNbFinishedTasks</a>( <span class='pre'>nbFinishedTasks</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of nbFinishedTasks. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.controller.Loader-cfg-nbFinishedTasks\" rel=\"skiMe.controller.Loader-cfg-nbFinishedTasks\" class=\"docClass\">nbFinishedTasks</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>nbFinishedTasks</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setNbTotalTasks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-nbTotalTasks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-setNbTotalTasks' class='name expandable'>setNbTotalTasks</a>( <span class='pre'>nbTotalTasks</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of nbTotalTasks. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.controller.Loader-cfg-nbTotalTasks\" rel=\"skiMe.controller.Loader-cfg-nbTotalTasks\" class=\"docClass\">nbTotalTasks</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>nbTotalTasks</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='skiMe.controller.Loader'>skiMe.controller.Loader</span><br/><a href='source/Loader.html#skiMe-controller-Loader-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/skiMe.controller.Loader-method-setRefs' class='name expandable'>setRefs</a>( <span class='pre'>refs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of refs. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/skiMe.controller.Loader-cfg-refs\" rel=\"skiMe.controller.Loader-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refs</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});