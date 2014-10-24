/*
 * Sidr
 * https://github.com/artberri/sidr
 *
 * Copyright (c) 2013 Alberto Varela
 * Licensed under the MIT license.
 */
(function(e){var t=false,n=false;var r={isUrl:function(e){var t=new RegExp("^(https?:\\/\\/)?"+"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"+"((\\d{1,3}\\.){3}\\d{1,3}))"+"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"+"(\\?[;&a-z\\d%_.~+=-]*)?"+"(\\#[-a-z\\d_]*)?$","i");if(!t.test(e)){return false}else{return true}},loadContent:function(e,t){e.html(t)},addPrefix:function(e){var t=e.attr("id"),n=e.attr("class");if(typeof t==="string"&&""!==t){e.attr("id",t.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-id-$1"))}if(typeof n==="string"&&""!==n&&"sidr-inner"!==n){e.attr("class",n.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-class-$1"))}e.removeAttr("style")},execute:function(r,s,o){if(typeof s==="function"){o=s;s="sidr"}else if(!s){s="sidr"}var u=e("#"+s),a=e(u.data("body")),f=e("html"),l=u.outerWidth(true),c=u.data("speed"),h=u.data("side"),p=u.data("displace"),d=u.data("onOpen"),v=u.data("onClose"),m,g,y,b=s==="sidr"?"sidr-open":"sidr-open "+s+"-open";if("open"===r||"toggle"===r&&!u.is(":visible")){if(u.is(":visible")||t){return}if(n!==false){i.close(n,function(){i.open(s)});return}t=true;if(h==="left"){m={left:l+"px"};g={left:"0px"}}else{m={right:l+"px"};g={right:"0px"}}if(a.is("body")){y=f.scrollTop();f.css("overflow-x","hidden").scrollTop(y)}if(p){a.addClass("sidr-animating").css({width:a.width(),position:"absolute"}).animate(m,c,function(){e(this).addClass(b)})}else{setTimeout(function(){e(this).addClass(b)},c)}u.css("display","block").animate(g,c,function(){t=false;n=s;if(typeof o==="function"){o(s)}a.removeClass("sidr-animating")});d()}else{if(!u.is(":visible")||t){return}t=true;if(h==="left"){m={left:0};g={left:"-"+l+"px"}}else{m={right:0};g={right:"-"+l+"px"}}if(a.is("body")){y=f.scrollTop();f.removeAttr("style").scrollTop(y)}a.addClass("sidr-animating").animate(m,c).removeClass(b);u.animate(g,c,function(){u.removeAttr("style").hide();a.removeAttr("style");e("html").removeAttr("style");t=false;n=false;if(typeof o==="function"){o(s)}a.removeClass("sidr-animating")});v()}}};var i={open:function(e,t){r.execute("open",e,t)},close:function(e,t){r.execute("close",e,t)},toggle:function(e,t){r.execute("toggle",e,t)},toogle:function(e,t){r.execute("toggle",e,t)}};e.sidr=function(t){if(i[t]){return i[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="function"||typeof t==="string"||!t){return i.toggle.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.sidr")}};e.fn.sidr=function(t){var n=e.extend({name:"sidr",speed:200,side:"left",source:null,renaming:true,body:"body",displace:true,onOpen:function(){},onClose:function(){}},t);var s=n.name,o=e("#"+s);if(o.length===0){o=e("<div />").attr("id",s).appendTo(e("body"))}o.addClass("sidr").addClass(n.side).data({speed:n.speed,side:n.side,body:n.body,displace:n.displace,onOpen:n.onOpen,onClose:n.onClose});if(typeof n.source==="function"){var u=n.source(s);r.loadContent(o,u)}else if(typeof n.source==="string"&&r.isUrl(n.source)){e.get(n.source,function(e){r.loadContent(o,e)})}else if(typeof n.source==="string"){var a="",f=n.source.split(",");e.each(f,function(t,n){a+='<div class="sidr-inner">'+e(n).html()+"</div>"});if(n.renaming){var l=e("<div />").html(a);l.find("*").each(function(t,n){var i=e(n);r.addPrefix(i)});a=l.html()}r.loadContent(o,a)}else if(n.source!==null){e.error("Invalid Sidr Source")}return this.each(function(){var t=e(this),n=t.data("sidr");if(!n){t.data("sidr",s);var r,o;o=navigator.userAgent.match(/(Android|Backerry|iPhone|iPod|ios|iOS|iPad|WebOS|Symbian|Windows Phone|Phone)/i)!=null;r=o?"ontouchstart"in document.documentElement:false;if(r){t.bind("touchstart",function(e){var t=e.originalEvent.touches[0];this.touched=e.timeStamp});t.bind("touchend",function(e){var t=Math.abs(e.timeStamp-this.touched);if(t<200){e.preventDefault();i.toggle(s)}})}else{t.click(function(e){e.preventDefault();i.toggle(s)})}}})}})(jQuery)