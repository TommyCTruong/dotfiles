define(["core/Logger","core/CoreAPI","core/vendor/jquery.min","core/vendor/Brightline.min","core/vendor/text!components/List/list.tpl"],function(e,t,n,i,r){return t.Class.create({model:null,rendered:!1,init:function(){this.addListeners()},isRendered:function(){return this.rendered===!0},setJQuery:function(e){n=e||n},inject:function(e){e=e||n("body"),e.html(this.render()),this.bindUIHandlers()},render:function(e){e=e||"";var t=new i(e);return t.set("list",this.renderList()),this.rendered=!0,t.render()},renderList:function(e){e=e||"";var n=new i(r),s=this.model.get();if(0===s.length)n.set("noSitesYet",t.Chrome.Translation.get("noSitesYet"));else for(var o=0;o<s.length;o++)n.set("id",this.getInstanceName()+"-"+o),n.set("imgClass",e),n.set("removeFromList",t.Chrome.Translation.get("removeFromList")),n.set("domain",s[o]),n.parse("removeDomain");return n.render()},refreshList:function(e,t,n){e.html(this.renderList(n)),t.val(""),this.bindListUIHandlers()},bindUIHandlers:function(){this.bindListUIHandlers()},bindListUIHandlers:function(){for(var e=this.model.get(),i=this,r=0;r<e.length;r++)!function(e,r){n("#"+r+" img").click(function(){t.PubSub.publish(i.getClassName()+".domain.remove."+i.model.descriptor,{domain:e})})}(e[r],this.getInstanceName()+"-"+r)},addListeners:function(){var e=this;t.PubSub.listen(["*.list.loaded."+this.model.descriptor,"*.list.saved."+this.model.descriptor],function(){e.isRendered()&&e.refreshList()})},getNewDomains:function(e){e=e||"";var t=[];if(""!==e)for(var n=e.split("\n"),i=0;i<n.length;i++){var r=n[i];r.length>0&&t.push(r)}return t}})});