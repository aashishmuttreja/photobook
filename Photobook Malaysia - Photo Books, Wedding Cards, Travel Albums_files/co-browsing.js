(function(){return function t(e,a,n){function i(l,s){if(!a[l]){if(!e[l]){var c="function"==typeof require&&require
if(!s&&c)return c(l,!0)
if(o)return o(l,!0)
var d=new Error("Cannot find module '"+l+"'")
throw d.code="MODULE_NOT_FOUND",d}var u=a[l]={exports:{}}
e[l][0].call(u.exports,function(t){return i(e[l][1][t]||t)},u,u.exports,t,e,a,n)}return a[l].exports}for(var o="function"==typeof require&&require,l=0;l<n.length;l++)i(n[l])
return i}})()({1:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=r(t("./constants/cbConstants")),i=r(t("./utils/timer")),o=r(t("./utils/DOMUtils")),l=r(t("./components/mic")),s=r(t("./components/tab-channels")),c=r(t("./components/remote-control")),d=r(t("./components/audio")),u=r(t("./components/cb-ui")),f=r(t("./utils/storage"))
r(t("./cbtemplate"))
function r(t){return t&&t.__esModule?t:{default:t}}function _(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}var m=function(){return _(this,this),{agentName:null,isLoaded:!1,cb_data:null,startCoborowsing:function(){i.default.setStartTime()
var t=this.cb_data,e=t.name,a=t.app_alias,l=t.role,s=t.viewerId,c=t.conversationId,d=t.sdata,u=t.messageId,r=t.agentName,_=t.messageUserId,m=t.isMuted,h=t.cobrowsingId,v=t.channelId,g=t.pic
this.agentName=r||n.default.unknown,this.cb_data?OneClickCbUtils.cobrowsingStart(e,l,s,d,a,c,_):OneClickCbUtils.cobrowsingStart()
var b=OneClickCbUtils.getRoom(),C=!0
b||(C=!1),window.frames.fc_widget.postMessage({event_id:"startScreenShare",cb_data:{room:b,name:e,isCbstarted:C,conversationId:c,messageId:u,messageUserId:_,app_alias:a,role:l,viewerId:s,sdata:d,cobrowsingId:h,channelId:v,startTime:i.default.getStarttime()}},this.host),r||(r=n.default.unknown),OneClickCbUtils.safeSessionSetItem("_fc_cb_agentName",r||n.default.unknown),f.default.setItem(n.default.STORAGE.LOCALSTORAGE,"_fc_cb_agentName",r||n.default.unknown),f.default.setItem(n.default.STORAGE.LOCALSTORAGE,"_fc_cb_agentPic",g),f.default.setItem(n.default.STORAGE.LOCALSTORAGE,"_fc_mute_value",m),o.default.setAttribute(o.default.endSession,"data-channelId",v)},onCobrowsingStart:function(){s.default.register(),u.default.updateNameAndMike(),i.default.startTimer(),f.default.getItem(n.default.STORAGE.SESSIONSTORAGE,"_fc_isRequested")&&c.default.requestControl(),f.default.getItem(n.default.STORAGE.SESSIONSTORAGE,"_fc_isControlling")&&c.default.allowControlDomEvents.call(this,!0),c.default.checkforControl()},onCobrowsingEnd:function(){this.cleanUp()},allowScreenShare:function(t){d.default.showPopup(t.data.cbData)},requestForAudioCall:function(){d.default.showAudioPopup()},requestForControl:function(){c.default.requestControl()},gainedControlBack:function(){c.default.gainedControlBack()},lostControl:function(){c.default.transferComplete()},init:function(){"true"===f.default.getItem(n.default.STORAGE.SESSIONSTORAGE,"1click-cobrowsing")&&u.default.generate(),d.default.addStyleSheet()},loadOrStartCobrowsing:function(){this.isLoaded?this.startCoborowsing():u.default.generate(function(){_(this,this),this.startCoborowsing()}.bind(this))},cleanUp:function(){f.default.removeItem(n.default.STORAGE.SESSIONSTORAGE,"_fc_call_initated"),f.default.removeItem(n.default.STORAGE.SESSIONSTORAGE,"_fc_audio_window_initialized"),document.getElementsByTagName("html")[0].classList.remove("lc-cb-controlling-vi"),o.default.hide(o.default.headerContainer),i.default.clearTimer(),o.default.hide(o.default.messageContainer),o.default.hide(o.default.audioContainer),o.default.hide(o.default.notifyContainer),f.default.removeItem(n.default.STORAGE.SESSIONSTORAGE,"_fc_isControlling"),f.default.removeItem(n.default.STORAGE.SESSIONSTORAGE,"_fc_isRequested"),f.default.removeItem(n.default.STORAGE.LOCALSTORAGE,"_fc_mute_value"),OneClickCbUtils.cobrowsingEnd(),i.default.resetStartTime(),c.default.checkforControl(),l.default.hide(),s.default.commonChannel.send({event:"_fc_cobrowsing_closed",value:!0}),window._fc_cb_AudioConnection=null}}}.bind(void 0)()
a.default=m},{"./cbtemplate":2,"./components/audio":3,"./components/cb-ui":4,"./components/mic":5,"./components/remote-control":8,"./components/tab-channels":9,"./constants/cbConstants":10,"./utils/DOMUtils":13,"./utils/storage":15,"./utils/timer":16}],2:[function(t,e,a){"use strict"
window._fc_cbtemplate=window._fc_cbtemplate||{},_fc_cbtemplate.audiopopup='\x3c!-- Audio Control Modal --\x3e<div id="_fc_cb_audio_container" class="fc-request-audio-container fc-modal fc-micro-phone-container">\x3c!-- Modal content --\x3e<div class="fc-modal-content"><div class="fc-modal-header"><h2>{{audiopopup.title}} <span class="fc-agent-name-modal fc-agent-name-on-audio-request"></span></h2></div><div class="fc-modal-body"><p class="fc-call-desc"><span class="fc-agent-name-modal fc-agent-name-on-audio-request"></span> {{audiopopup.call_desc}}</p><p id="_fc_micro_phone_desc" class="fc-micro-phone-desc">{{audiopopup.micro_phone_desc}}</p></div><div class="fc-modal-footer"><input type="button" id="_fc_deny_call" value="{{deny}}" /><input type="button" id="_fc_accept_call" value="{{accept}}" /></div></div></div>',_fc_cbtemplate.cobrowse='\x3c!-- <link href="//webchat-msgreen.freshpori.com/cb_static_file/fc_cb_style.css" rel="stylesheet"> --\x3e<link href="{{host}}/cb_static_file/fc_cb_style.css" rel="stylesheet"><link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"><div class="fc-screen-viewing" id="_fc_cb_header_container"><div class="fc-header-status"><span id="fc-agent-name-modal-header-name" class="fc-agent-name-modal-header"></span></div><div class="fc-header-div" id="_fc-control-div"><div id="_fc_hide_control" class="cb-tooltip-top fc-hide-bar" data-cb-tooltip="{{cobrowse.tooltip.hide}}"><img src="{{host}}/cb_static_file/images/icons/ic_minimize.svg"></div><div class="fc-control-bar"><div class="fc-request-section"><div id="_fc_getBack_Control" class="cb-tooltip-top fc-request-icon-bar"><div id="_fc_getBack_Control_div" class="fc-request-control"></div></div></div><div class="fc-info-section"><div class="fc-image-container fc-wave"><div class="fc-visitor-icon-small fc-wave cb-tooltip-top" data-cb-tooltip="{{cobrowse.tooltip.you}}"><img class="fc-visitor-default" src="{{host}}/cb_static_file/images/icons/ic_user.svg" /></div><div id="_fc_visitor_circle" class="fc-circle"></div></div><div id="_fc_timer" class="fc-timer">00:00</div><div class="fc-image-container fc-wave cb-tooltip-top" id="_fc_agent_data_tooltip" data-cb-tooltip="{{cobrowse.tooltip.unknown}}"><div class="fc-agent-icon-small"><img class="fc-agent-default" src="{{host}}/cb_static_file/images/icons/ic_user.svg" id="_fc_agent_pic"/><span class="fc-agent-status"><div id="_fc_eye_icon" class="fc-view-only"></div></span></div><div id="_fc_agent_circle" class="fc-circle"></div></div></div><div class="fc-action-section"><div id="_fc_muteMic" class="cb-tooltip-top fc-microphone fc-mute fc-mic-hide" data-cb-tooltip="{{cobrowse.tooltip.mute}}"><div class="fc-mute" id="_fc_muteMic-div"></div></div><div id="_fc_endsession" class="cb-tooltip-top fc-endSession" data-cb-tooltip="{{cobrowse.tooltip.end_session}}"><img src="{{host}}/cb_static_file/images/icons/ic_end_session.svg" /></div></div></div></div><div class="fc-footer-hide-bar" id="_fc-footer-hide-bar"><div class="cb-tooltip-top fc-show-bar" data-cb-tooltip="{{cobrowse.tooltip.show}}" id="_fc_show_control"><img src="{{host}}/cb_static_file/images/icons/ic_maximize.svg"></div><div class="fc-timer">00:00</div><div id="_fc_muteMic_small" class="fc-microphone-small fc-mute fc-mic-hide" data-cb-tooltip="{{cobrowse.tooltip.mute}}"><div class="fc-mute" id="_fc_muteMic_small_div"></div></div></div></div>\x3c!-- Access control Modal --\x3e<div id="_fc_cb_message_container" class="fc-request-msg-container fc-modal">\x3c!-- Modal content --\x3e<div class="fc-modal-content"><div class="fc-modal-header"><h2><span class="fc-agent-name-modal _fc_agent_name_req"></span> {{cobrowse.access_control.title}}</h2></div><div class="fc-modal-body"><p><span class="fc-agent-name-modal _fc_agent_name_req"></span> {{cobrowse.access_control.desc}}</p></div><div class="fc-modal-footer"><input type="button" id="_fc_DenyedControl" value="{{deny}}" /><input type="button" id="_fc_allowControl" value="{{allow}}" /></div></div></div>\x3c!-- Session confirmation Modal --\x3e<div id="_fc_cb_notifyContainer" class="fc-confirm-msg-container fc-modal">\x3c!-- Modal content --\x3e<div class="fc-modal-content"><div class="fc-modal-header"><h2>{{cobrowse.end_session.title}}</h2></div><div class="fc-modal-body"><p>{{cobrowse.end_session.desc}}</p></div><div class="fc-modal-footer"><input type="button" id="_fc_close_modal_window" value="{{no}}" /><input type="button" id="_fc_close_session" value="{{yes}}" /></div></div></div>\x3c!-- Session Notification--\x3e<div id ="_fc_close_msg" class="fc-notify-exit fc-notification"><div class="fc-notify"><p class="fc-notify-text" id="_fc-notify-text"></p><span id="_fc_notify_close"><span>x</span></span></div></div>'},{}],3:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=r(t("./../utils/DOMUtils")),i=r(t("./../cb")),o=r(t("./../utils/events")),l=r(t("./../utils/storage")),s=r(t("./../constants/cbConstants")),c=r(t("./../utils/translate")),d=r(t("../../config/cb_environment")),u=r(t("./tab-channels")),f=r(t("./notification"))
function r(t){return t&&t.__esModule?t:{default:t}}var _=function(){return function(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{isAudioPopupLoaded:!1,acceptCall:function(){l.default.setItem(s.default.STORAGE.LOCALSTORAGE,"_fc_audio_permission",!0),l.default.getItem(s.default.STORAGE.SESSIONSTORAGE,"_fc_audio_window_initialized")?u.default.commonChannel.send({event:"_fc_audio_call_value",value:!0}):(this.initializeAudioWindow(),this.isAutomaticCall&&i.default.loadOrStartCobrowsing()),n.default.hide(n.default.audioContainer)},denyCall:function(){l.default.getItem(s.default.STORAGE.SESSIONSTORAGE,"_fc_audio_window_initialized")?(u.default.commonChannel.send({event:"_fc_audio_call_value",value:!1}),f.default.show(s.default.deniedAudioCall)):this.isAutomaticCall?i.default.loadOrStartCobrowsing():this.sendEventToParent("deniedAudioCall"),n.default.hide(n.default.audioContainer)},showPopup:function(t){i.default.cb_data=t,i.default.agentName=t.agentName||s.default.unknown
var e=t&&t.cobrowsingSettings&&t.cobrowsingSettings.audio
this.isAutomaticCall=!e||e===s.default.cobrowsingSettings.audio.startAutomatically,this.isAutomaticCall?l.default.getItem(s.default.STORAGE.LOCALSTORAGE,"_fc_audio_permission")?(this.initializeAudioWindow(),i.default.loadOrStartCobrowsing()):this.showAudioPopup():i.default.loadOrStartCobrowsing()},requestForAudioCall:function(){l.default.getItem(s.default.STORAGE.SESSIONSTORAGE,"_fc_call_initated")?this.showAudioPopup():this.acceptCall()},showAudioPopup:function(){var t=l.default.getItem(s.default.STORAGE.LOCALSTORAGE,"_fc_audio_permission")
this.isAudioPopupLoaded||this.generatePopupDom(),t?n.default.removeClass(n.default.audioContainer,"fc-micro-phone-container"):n.default.addClass(n.default.audioContainer,"fc-micro-phone-container"),n.default.show(n.default.audioContainer),n.default.setValue(n.default.agentNameOnAudioRequest,i.default.agentName)},disconnectedByDialer:function(){n.default.hide(n.default.audioContainer)},initializeAudioWindow:function(){if(!l.default.getItem(s.default.STORAGE.SESSIONSTORAGE,"_fc_audio_window_initialized")){var t=i.default.cb_data,e=t.app_alias,a=t.viewerId,n=t.conversationId,o=e+"-"+n+"-"+a
window.open(i.default.host+"/cb_static_file/audio.html?isMuted=false&app_alias="+e+"&clientId="+o+"&conversationId="+n+"&viewerId="+a,"_blank","audioWindow","toolbar=no, scrollbars=yes, resizable=no, top=30, left=100, width=auto, height=auto"),l.default.setItem(s.default.STORAGE.SESSIONSTORAGE,"_fc_audio_window_initialized",!0)}},readyToAcceptCall:function(){this.isAutomaticCall||this.sendEventToParent("acceptedAudioCall")},sendEventToParent:function(t){window.frames.fc_widget.postMessage({event_id:t,data:i.default.cb_data},i.default.host)},generatePopupDom:function(){this.isAudioPopupLoaded=!0
var t=c.default.i18n(window._fc_cbtemplate.audiopopup,i.default.locale)
document.body.appendChild(document.createRange().createContextualFragment(t)),n.default.audioInit(),o.default.addListnersForAudio()},addStyleSheet:function(){var t,e=document,a=e.createElement("link")
if(d.default&&d.default.config){var n=d.default.config.type,o=d.default.config.cdn
t=o.protocol[n]+(o.enabled.forAssets?o.assets:"")+o.domain[n]}else t=i.default.host
a.href=t+"/css/cb.css?t="+(new Date).getTime(),a.rel="stylesheet",e.getElementsByTagName("head")[0].appendChild(a)},init:function(t){var e=t.max,a=t.whoIsSpeeking
e?"you"===a?(n.default.addClass(n.default.visitoCircle,"delay1"),n.default.removeClass(n.default.agentCircle,"delay1")):(n.default.addClass(n.default.agentCircle,"delay1"),n.default.removeClass(n.default.visitoCircle,"delay1")):(n.default.removeClass(n.default.visitoCircle,"delay1"),n.default.removeClass(n.default.agentCircle,"delay1"))}}}.bind(void 0)()
a.default=_},{"../../config/cb_environment":18,"./../cb":1,"./../constants/cbConstants":10,"./../utils/DOMUtils":13,"./../utils/events":14,"./../utils/storage":15,"./../utils/translate":17,"./notification":7,"./tab-channels":9}],4:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=u(t("./../utils/DOMUtils")),i=u(t("./../utils/events")),o=u(t("./mic")),l=u(t("./../cb")),s=u(t("./../constants/cbConstants")),c=u(t("./../utils/storage")),d=u(t("./../utils/translate"))
function u(t){return t&&t.__esModule?t:{default:t}}var f=function(){return function(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{generate:function(t){l.default.isLoaded=!0
var e=document.createElement("script")
e.src="".concat(l.default.host,"/cb_static_file/fcCblib.js"),t&&(e.onload=t),document.body.appendChild(e)
var a=d.default.i18n(window._fc_cbtemplate.cobrowse,l.default.locale)
document.body.appendChild(document.createRange().createContextualFragment(a.replace(new RegExp("{{host}}","g"),l.default.host))),n.default.init(),c.default.getItem(s.default.STORAGE.SESSIONSTORAGE,"_fc_call_initated")&&(n.default.removeClass(n.default.muteMic,"fc-hide-div"),"true"===c.default.getItem(s.default.STORAGE.LOCALSTORAGE,"_fc_mute_value")?n.default.replaceClass(n.default.muteMic,"fc-unmute","fc-mute"):n.default.replaceClass(n.default.muteMic,"fc-mute","fc-unmute"))
var o=c.default.getItem(s.default.STORAGE.LOCALSTORAGE,"_fc_cb_agentPic")
o&&(n.default.agentPic.src=o,n.default.replaceClass(n.default.agentPic,"fc-agent-default","fc-agent")),i.default.addListnersForControl()},updateNameAndMike:function(){var t=OneClickCbUtils.safeSessionGetItem("_fc_cb_agentName"),e="true"===c.default.getItem(s.default.STORAGE.LOCALSTORAGE,"_fc_mute_value")
n.default.agentName.innerText="".concat(t," ").concat(s.default.isViewing),n.default.setAttribute(n.default.agentDataToolTip,"data-cb-tooltip","".concat(t," (").concat(s.default.view,")"))
var a=document.getElementsByTagName("html")&&document.getElementsByTagName("html")[0]
a&&a.classList&&Object.values(a.classList)&&-1===Object.values(a.classList).indexOf("lc-cb-controlling-vi")&&a.classList.add("lc-cb-controlling-vi"),o.default.toggleDOM(e),n.default.show(n.default.headerContainer),n.default.show(n.default.topHeader)}}}.bind(void 0)()
a.default=f},{"./../cb":1,"./../constants/cbConstants":10,"./../utils/DOMUtils":13,"./../utils/events":14,"./../utils/storage":15,"./../utils/translate":17,"./mic":5}],5:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=c(t("./../utils/DOMUtils")),i=c(t("./../constants/cbConstants")),o=c(t("./tab-channels")),l=c(t("./../utils/storage")),s=c(t("./notification"))
function c(t){return t&&t.__esModule?t:{default:t}}var d=function(){return function(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{show:function(){l.default.setItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_call_initated",!0),n.default.removeClass(n.default.muteMicSmall,"fc-mic-hide"),n.default.removeClass(n.default.muteMic,"fc-mic-hide"),s.default.show(i.default.audioStarted)},hide:function(){n.default.addClass(n.default.muteMic,"fc-mic-hide"),n.default.addClass(n.default.muteMicSmall,"fc-mic-hide"),l.default.getItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_call_initated")&&s.default.show(i.default.audioEnded)},updateIcon:function(t){t?this.toggleDOM(!0):this.toggleDOM(!1)},toggleDOM:function(t){t?(n.default.replaceClass(n.default.muteMicContainer,"fc-mute","fc-unmute"),n.default.replaceClass(n.default.muteMic,"fc-mute","fc-unmute"),n.default.replaceClass(n.default.muteMicSmallContainer,"fc-mute","fc-unmute"),n.default.replaceClass(n.default.muteMicSmall,"fc-mute","fc-unmute"),n.default.setAttribute(n.default.muteMic,"data-cb-tooltip",i.default.unmute),n.default.setAttribute(n.default.muteMicSmall,"data-cb-tooltip",i.default.unmute)):(n.default.replaceClass(n.default.muteMicContainer,"fc-unmute","fc-mute"),n.default.replaceClass(n.default.muteMic,"fc-unmute","fc-mute"),n.default.replaceClass(n.default.muteMicSmallContainer,"fc-unmute","fc-mute"),n.default.replaceClass(n.default.muteMicSmall,"fc-unmute","fc-mute"),n.default.setAttribute(n.default.muteMic,"data-cb-tooltip",i.default.mute),n.default.setAttribute(n.default.muteMicSmall,"data-cb-tooltip",i.default.mute)),l.default.setItem(i.default.STORAGE.LOCALSTORAGE,"_fc_mute_value",t)},muteMic:function(){var t=n.default.muteMic,e=t&&t.classList&&Object.values(t.classList)&&Object.values(t.classList).indexOf("fc-mute")>-1
o.default.commonChannel.send({event:"_fc_mute_value",value:e}),this.toggleDOM(e)}}}.bind(void 0)()
a.default=d},{"./../constants/cbConstants":10,"./../utils/DOMUtils":13,"./../utils/storage":15,"./notification":7,"./tab-channels":9}],6:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n,i=(n=t("./../utils/DOMUtils"))&&n.__esModule?n:{default:n}
var o=function(){return function(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{hideEndSession:function(){i.default.hide(i.default.notifyContainer)},showEndSession:function(){i.default.show(i.default.notifyContainer)}}}.bind(void 0)()
a.default=o},{"./../utils/DOMUtils":13}],7:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n,i=(n=t("./../utils/DOMUtils"))&&n.__esModule?n:{default:n}
var o=function(){return function(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{notifyTimer:function(){setTimeout(this.close.bind(this),3e3)},show:function(t){i.default.notifyText.innerText=t,i.default.removeClass(i.default.closeMessage,"fc-notify-exit"),clearTimeout(this.notifyTimer),this.notifyTimer()},close:function(){i.default.addClass(i.default.closeMessage,"fc-notify-exit"),clearTimeout(this.notifyTimer)}}}.bind(void 0)()
a.default=o},{"./../utils/DOMUtils":13}],8:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=c(t("./../utils/DOMUtils")),i=c(t("./../constants/cbConstants")),o=c(t("./notification")),l=c(t("./../cb")),s=c(t("./../utils/storage"))
function c(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}var u=function(){return d(this,this),{getBackCtrl:function(){if(s.default.getItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_isControlling")){OneClickCbUtils.takeControl(),this.gainedControlCSSAction(),n.default.getBackControl.removeAttribute("data-cb-tooltip"),n.default.replaceClass(n.default.eyeIcon,"fc-view-control","fc-view-only")
var t=OneClickCbUtils.safeSessionGetItem("_fc_cb_agentName")
n.default.agentName.innerText="".concat(t," ").concat(i.default.isViewing),n.default.setAttribute(n.default.agentDataToolTip,"data-cb-tooltip","".concat(t," (").concat(i.default.view,")")),s.default.removeItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_isControlling"),o.default.show(i.default.gainedControl)}},transferCompleteCSSAction:function(){n.default.replaceClass(n.default.getBackControl,"fc-request-control","fc-return-control"),n.default.replaceClass(n.default.getBackControlContainer,"fc-request-control","fc-return-control")},gainedControlCSSAction:function(){n.default.replaceClass(n.default.getBackControl,"fc-return-control","fc-request-control"),n.default.replaceClass(n.default.getBackControlContainer,"fc-return-control","fc-request-control")},endScreenonClick:function(){OneClickCbUtils.cobrowsingEnd()
var t=window.frames.fc_widget,e=n.default.getAttribute(n.default.endSession,"data-channelId")
t.postMessage({event_id:"endScreenShare",channelId:e},l.default.host)},denyControl:function(){s.default.removeItem(i.default.STORAGE.SESSIONSTORAGE,"isRequested"),OneClickCbUtils.master.send({type:"denyControl"}),n.default.hide(n.default.messageContainer),o.default.show(i.default.deniedControl)},allowControl:function(){OneClickCbUtils.giveControl(),this.allowControlDomEvents.call(this)},allowControlDomEvents:function(t){var e=OneClickCbUtils.safeSessionGetItem("_fc_cb_agentName")
n.default.agentName.innerText="".concat(i.default.onCobrowsing," ").concat(e,"."),n.default.setAttribute(n.default.agentDataToolTip,"data-cb-tooltip","".concat(e," (").concat(i.default.control,")")),n.default.hide(n.default.messageContainer),t||o.default.show(i.default.givenControl),n.default.setAttribute(n.default.getBackControl,"data-cb-tooltip",i.default.getBackControl),n.default.replaceClass(n.default.eyeIcon,"fc-view-only","fc-view-control")},hideControlDiv:function(){n.default.replaceClass(n.default.controlContainer,"fc-slideOutUp","fc-slideOutDown"),n.default.hide(n.default.controlContainer),setTimeout(function(){d(this,this),n.default.replaceClass(n.default.footerHideBar,"fc-slideOutDown","fc-slideInUp"),n.default.show(n.default.footerHideBar)}.bind(this),100)},hideFooterDiv:function(){n.default.replaceClass(n.default.footerHideBar,"fc-slideOutUp","fc-slideOutDown"),n.default.hide(n.default.footerHideBar),setTimeout(function(){d(this,this),n.default.replaceClass(n.default.controlContainer,"fc-slideOutDown","fc-slideInUp"),n.default.show(n.default.controlContainer)}.bind(this),100)},requestControl:function(){n.default.show(n.default.messageContainer),n.default.setValue(n.default.agentNameOnRequest,l.default.agentName),s.default.setItem(i.default.STORAGE.SESSIONSTORAGE,"isRequested",!0),this.hideControlDiv.call(this)},transferComplete:function(){s.default.setItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_isControlling",!0),this.transferCompleteCSSAction(),this.allowControlDomEvents.call(this,!0),window.fcWidget.close()},gainedControlBack:function(){s.default.removeItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_isControlling")
var t=OneClickCbUtils.safeSessionGetItem("_fc_cb_agentName")
n.default.agentName.innerText="".concat(t," ").concat(i.default.isViewing),this.gainedControlCSSAction(),n.default.replaceClass("_fc_eye_icon","fc-view-control","fc-view-only"),o.default.show(i.default.gainedControl)},checkforControl:function(){s.default.getItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_isControlling")?this.transferCompleteCSSAction():this.gainedControlCSSAction()}}}.bind(void 0)()
a.default=u},{"./../cb":1,"./../constants/cbConstants":10,"./../utils/DOMUtils":13,"./../utils/storage":15,"./notification":7}],9:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=o(t("./mic")),i=o(t("./audio"))
function o(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}var s=function(){return l(this,this),{audioChannel:null,commonChannel:null,register:function(){this.audioChannel||(this.audioChannel=new TabsChannel({id:"_fc_channel_for_audio_data"}),this.audioChannel.onReceive=function(t){switch(l(this,this),t&&t.event){case"initAudioBar":i.default.init(t)
break
case"showMic":n.default.show()
break
case"hideMic":n.default.hide()
break
case"_fc_mute_value":n.default.updateIcon(t.value)
break
case"requestForAudioCall":i.default.requestForAudioCall()
break
case"readyToAcceptCall":i.default.readyToAcceptCall()
break
case"disconnectedByDialer":i.default.disconnectedByDialer()}}.bind(this)),this.commonChannel||(this.commonChannel=new TabsChannel({id:"_fc_common_channel"}),this.commonChannel.onReceive=function(t){switch(l(this,this),event){case"showMic":n.default.show()
break
case"_fc_mute_value":n.default.updateIcon(t.value)}}.bind(this))}}}.bind(void 0)()
a.default=s},{"./audio":3,"./mic":5}],10:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
a.default={unknown:"Unknown",view:"View only",control:"View & Control",isViewing:"is viewing your screen.",onCobrowsing:"You are on a Co-browsing session with",givenControl:"Agent can now view & control this tab.",gainedControl:"You have gained back control over the tab.",deniedControl:"You have denied the view & control request.",deniedAudioCall:"You have declined the audio call.",audioStarted:"Audio call connected",audioEnded:"Audio call ended",unmute:"Unmute",mute:"Mute",getBackControl:"Get back control",STORAGE:{LOCALSTORAGE:"localStorage",SESSIONSTORAGE:"sessionStorage"},cobrowsingSettings:{audio:{disableAudioCalls:"DISABLE_AUDIO_CALLS",initiate:"AGENTS_CAN_INITIATE_AUDIO_CALL",startAutomatically:"AUTOMATICALLY_START_AUDIO_CALL"}}}},{}],11:[function(t,e,a){"use strict"
var n,i,o,l,s,c=(n=t("./cb"))&&n.__esModule?n:{default:n}
i=window,o=c.default,l=i.fc_cobrowse&&i.fc_cobrowse.host,s=i.fc_cobrowse.locale,l&&(o.host=l,o.locale=s,i.fc_cobrowse=o,o.init())},{"./cb":1}],12:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
a.default={"en-us":{audiopopup:{title:"Incoming audio call from",call_desc:"is requesting for an audio call with this co-browsing session (Once you accept, you can mute the call at any time).",micro_phone_desc:"This will require access to your microphone. Please ensure you 'allow' access."},cobrowse:{access_control:{title:"wants to co-browse with you",desc:"will be able to view & control actions on the current tab only."},end_session:{title:"End Session",desc:"Are you sure you want to end this session?"},tooltip:{mute:"Mute",show:"Show",end_session:"End session",unknown:"Unknown",you:"You",hide:"Hide"}},yes:"Yes",no:"No",allow:"Allow",deny:"Deny",accept:"Accept"}}},{}],13:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=function(){return function(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{init:function(){this.agentPic=this.getByID("_fc_agent_pic"),this.agentName=this.getByID("fc-agent-name-modal-header-name"),this.muteMic=this.getByID("_fc_muteMic"),this.notifyText=this.getByID("_fc-notify-text"),this.getBackControl=this.getByID("_fc_getBack_Control"),this.getBackControlContainer=this.getByID("_fc_getBack_Control_div"),this.agentNameOnRequest=document.getElementsByClassName("_fc_agent_name_req"),this.muteMicSmall=this.getByID("_fc_muteMic_small"),this.endSession=this.getByID("_fc_endsession"),this.closeModalWindow=this.getByID("_fc_close_modal_window"),this.closeSession=this.getByID("_fc_close_session"),this.denyedControl=this.getByID("_fc_DenyedControl"),this.allowControl=this.getByID("_fc_allowControl"),this.hideControl=this.getByID("_fc_hide_control"),this.showControl=this.getByID("_fc_show_control"),this.notifyClose=this.getByID("_fc_notify_close"),this.agentDataToolTip=this.getByID("_fc_agent_data_tooltip"),this.visitoCircle=this.getByID("_fc_visitor_circle"),this.agentCircle=this.getByID("_fc_agent_circle"),this.closeMessage=this.getByID("_fc_close_msg"),this.muteMicContainer=this.getByID("_fc_muteMic-div"),this.muteMicSmallContainer=this.getByID("_fc_muteMic_small_div"),this.eyeIcon=this.getByID("_fc_eye_icon"),this.controlContainer=this.getByID("_fc-control-div"),this.footerHideBar=this.getByID("_fc-footer-hide-bar"),this.headerContainer=this.getByID("_fc_cb_header_container"),this.notifyContainer=this.getByID("_fc_cb_notifyContainer"),this.topHeader=this.getByID("_fc_hide_top"),this.messageContainer=this.getByID("_fc_cb_message_container")},audioInit:function(){this.audioContainer=this.getByID("_fc_cb_audio_container"),this.agentNameOnAudioRequest=document.getElementsByClassName("fc-agent-name-on-audio-request"),this.acceptCall=this.getByID("_fc_accept_call"),this.denyCall=this.getByID("_fc_deny_call")},bindEvent:function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
t&&(t.addEventListener?(t.removeEventListener(e,a,n),t.addEventListener(e,a,n)):(t.detachEvent(e,a,n),t.attachEvent(e,a,n)))},unbindEvent:function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
t&&(t.removeEventListener?t.removeEventListener(e,a,n):t.detachEvent(e,a,n))},getByID:function(t){return document.getElementById(t)},show:function(t){return t&&(t.style.display="block"),this},hide:function(t){return t&&(t.style.display="none"),this},setAttribute:function(t,e,a){return t&&t.setAttribute(e,a)},getAttribute:function(t,e){return t&&t.getAttribute(e)},addClass:function(t,e){return t&&t.classList&&e&&t.classList.add(e)},removeClass:function(t,e){return t&&t.classList&&e&&t.classList.remove(e)},replaceClass:function(t,e,a){this.removeClass(t,e),this.addClass(t,a)},setValue:function(t,e){if(t)for(var a=t.length,n=0;n<a;n++)t[n].innerText=e}}}.bind(void 0)()
a.default=n},{}],14:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=d(t("./DOMUtils")),i=d(t("./../components/mic")),o=d(t("./../components/remote-control")),l=d(t("./../components/modal")),s=d(t("./../components/notification")),c=d(t("./../components/audio"))
function d(t){return t&&t.__esModule?t:{default:t}}var u=function(){return function(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{addListnersForControl:function(){n.default.bindEvent(n.default.muteMic,"click",i.default.muteMic.bind(i.default)),n.default.bindEvent(n.default.muteMicSmall,"click",i.default.muteMic.bind(i.default)),n.default.bindEvent(n.default.getBackControl,"click",o.default.getBackCtrl.bind(o.default)),n.default.bindEvent(n.default.endSession,"click",l.default.showEndSession.bind(l.default)),n.default.bindEvent(n.default.closeModalWindow,"click",l.default.hideEndSession.bind(l.default)),n.default.bindEvent(n.default.closeSession,"click",o.default.endScreenonClick.bind(o.default)),n.default.bindEvent(n.default.denyedControl,"click",o.default.denyControl.bind(o.default)),n.default.bindEvent(n.default.allowControl,"click",o.default.allowControl.bind(o.default)),n.default.bindEvent(n.default.hideControl,"click",o.default.hideControlDiv.bind(o.default)),n.default.bindEvent(n.default.showControl,"click",o.default.hideFooterDiv.bind(o.default)),n.default.bindEvent(n.default.notifyClose,"click",s.default.close.bind(s.default))},addListnersForAudio:function(){n.default.bindEvent(n.default.acceptCall,"click",c.default.acceptCall.bind(c.default)),n.default.bindEvent(n.default.denyCall,"click",c.default.denyCall.bind(c.default))}}}.bind(void 0)()
a.default=u},{"./../components/audio":3,"./../components/mic":5,"./../components/modal":6,"./../components/notification":7,"./../components/remote-control":8,"./DOMUtils":13}],15:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=function(){return function(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{isAvailable:function(t){var e,a="__storage_test__"
try{return(e=window[t]).setItem(a,a),e.removeItem(a),!0}catch(n){return n instanceof window.DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}},setItem:function(t,e,a){this.isAvailable(t)?window[t].setItem(e,a):(window.fc_store_fall_back||(window.fc_store_fall_back={localStorage:{},sessionStorage:{}}),window.fc_store_fall_back[t][e]=a)},getItem:function(t,e){return this.isAvailable(t)?window[t].getItem(e):window.fc_store_fall_back&&window.fc_store_fall_back[t]&&window.fc_store_fall_back[t][e]},removeItem:function(t,e){this.isAvailable(t)?window[t].removeItem(e):window.fc_store_fall_back&&window.fc_store_fall_back[t]&&window.fc_store_fall_back[t][e]&&delete window.fc_store_fall_back[t][e]}}}.bind(void 0)()
a.default=n},{}],16:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n=o(t("./storage")),i=o(t("./../constants/cbConstants"))
function o(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}var s=function(){return l(this,this),{timeOut:null,setStartTime:function(){n.default.setItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_start_time",new Date)},getStarttime:function(){return n.default.getItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_start_time")},resetStartTime:function(){n.default.removeItem(i.default.STORAGE.SESSIONSTORAGE,"_fc_start_time")},secondsToHms:function(){var t=Number(((new Date).getTime()-new Date(this.getStarttime()).getTime())/1e3)
return{h:Math.floor(t/3600),m:Math.floor(t%3600/60),s:Math.floor(t%3600%60)}},clearTimer:function(){this.timeOut&&clearInterval(this.timeOut)},startTimer:function(){this.clearTimer()
var t=0,e=0,a=0
if(this.getStarttime()){var n=this.secondsToHms()
t=n.s,e=n.m,a=n.h}else this.setStartTime()
var i=function(){l(this,this)
var n=document.getElementsByClassName("fc-timer");++t>=60&&(t=0,++e>=60&&(e=0,a++))
for(var i=0;i<n.length;i++){n[i].textContent=(a?a>9?a:"0"+a:"00")+":"+(e?e>9?e:"0"+e:"00")+":"+(t>9?t:"0"+t)}}.bind(this)
this.timeOut=setInterval(i,1e3)}}}.bind(void 0)()
a.default=s},{"./../constants/cbConstants":10,"./storage":15}],17:[function(t,e,a){"use strict"
Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0
var n,i=(n=t("./../translations/config"))&&n.__esModule?n:{default:n}
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(){return function(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{i18n:function(t,e){e||(e=window.navigator.languages&&window.navigator.languages.length&&window.navigator.languages[0]||window.navigator.language),i.default.hasOwnProperty(e)||(e="en-us")
var a=i.default[e]
return this.data=t,this.doTraverse(a),this.data},doTraverse:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
for(var a in t)t.hasOwnProperty(a)&&("object"===o(t[a])?this.doTraverse(t[a],(e?e+".":"")+a):this.doTranslate(t[a],(e?e+".":"")+a))},doTranslate:function(t,e){this.data&&(this.data=this.data.replace(new RegExp("{{"+e+"}}","g"),t))}}}.bind(void 0)()
a.default=l},{"./../translations/config":12}],18:[function(t,e,a){a.config={type:"production",cdn:{enabled:{forAssets:!1,forApi:!1},assets:"assetscdn-",api:"apicdn-",domain:{production:"wchat.freshchat.com",staging:"webchat-msgreen.freshpori.com",local:"localhost:8580"},subDomain:"",protocol:{local:"http://",production:"https://",staging:"https://"}}}},{}]},{},[11])
