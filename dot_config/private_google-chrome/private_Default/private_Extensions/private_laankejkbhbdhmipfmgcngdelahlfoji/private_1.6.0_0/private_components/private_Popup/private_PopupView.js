define(["core/Logger","core/CoreAPI","core/vendor/jquery.min","core/vendor/DropletJS.PubSub.min","core/vendor/Brightline.min","core/vendor/text!components/Popup/popup.tpl"],function(o,t,i,e,n,s){return t.Class.create({model:null,construct:function(o){this.model=o,e.listen("Popup.timer.tick",this.updateDisplayTimer.bind(this))},init:function(){this.inject(),this.addListeners()},render:function(){var o=new n(s);return o.set("baseDomain",this.model.baseDomain),o.set("fullDomain",this.model.fullDomain),o.render()},inject:function(){i("body").append(this.render()),t.Settings.get("hideAllowSiteLink")?i(".allow").hide():i("#allow-entire").show(),this.model.fullDomain!==this.model.baseDomain&&i(".only-allow, .only-block").show(),t.StayFocusd.localizeHTML(document),this.bindUIHandlers()},bindUIHandlers:function(){var o=this;i("#show-help").click(function(){e.publish("PopupView.button.clicked",{button:"help"})}),i("#show-options").click(function(){e.publish("PopupView.button.clicked",{button:"options"})}),i("#show-nuclear-option").click(function(){e.publish("PopupView.button.clicked",{button:"nuclearOption"})}),i("a.close").click(function(){e.publish("PopupView.button.clicked",{button:"close"})}),i("#showBlockedSitesOptions").click(function(){e.publish("PopupView.button.clicked",{button:"blockedSites"})}),i("#show-advanced-options").click(function(){i("#advanced-options").slideToggle("fast")}),i("#block-entire").click(function(){e.publish("PopupView.button.clicked",{button:"addToList",domain:o.model.baseDomain,listType:"black"})}),i("#block-custom").click(function(){e.publish("PopupView.button.clicked",{button:"addToList",domain:i("#custom-url").val(),listType:"black"})}),i("#allow-custom").click(function(){e.publish("PopupView.button.clicked",{button:"addToList",domain:i("#custom-url").val(),listType:"white"})}),i("#allow-entire").click(function(){e.publish("PopupView.button.clicked",{button:"addToList",domain:o.model.baseDomain,listType:"white"})}),i("#only-block").click(function(){e.publish("PopupView.button.clicked",{button:"addToList",domain:o.model.fullDomain,listType:"black"})}),i("#only-allow").click(function(){e.publish("PopupView.button.clicked",{button:"addToList",domain:o.model.fullDomain,listType:"white"})})},addListeners:function(){var o=this;e.listen("*.domain.added",function(t,i){o.showAddToListStatus(i.success)}),e.listen("PopupModel.timer.updated",function(t,i){o.updateDisplayTimer(i.timer)})},showAddToListStatus:function(o){o===!0?(i("#status-msg").removeClass("error").addClass("success").html(t.Chrome.Translation.get("success").toUpperCase()+"!"),setTimeout(function(){window.close()},1500)):(i("#status-msg").removeClass("success").addClass("error").html(t.Chrome.Translation.get("error").toUpperCase()),setTimeout(function(){i("#status-msg").hide()},2e3)),i("#status-msg").show()},updateDisplayTimer:function(o){var e="",n=i("#display-timer");this.model.isNuclear()?(e=t.Chrome.Translation.get("nuclear"),n.addClass("nuclear")):this.model.isActive()===!1?e=t.Chrome.Translation.get("inactive"):(e=o,"00:00:00"===e&&n.addClass("expired")),n.html(e)}})});