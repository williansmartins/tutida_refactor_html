document.write('\x3Cscript src="' + (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//webfonts.creativecloud.com/open-sans:n8,n6:all;lato:n4,n7,n9,n3:all;paytone-one:n4:all;league-gothic:n4:all;hammersmith-one:n4:all;black-ops-one:n4:all;josefin-slab:n3:all.js" type="text/javascript">\x3C/script>');

$(document).ready(function() { 
	try {
		(function(){var a={},b=function(a){if(a.match(/^rgb/))return a=a.replace(/\s+/g,"").match(/([\d\,]+)/gi)[0].split(","),(parseInt(a[0])<<16)+(parseInt(a[1])<<8)+parseInt(a[2]);if(a.match(/^\#/))return parseInt(a.substr(1),16);return 0};(function(){$('link[type="text/css"]').each(function(){var b=($(this).attr("href")||"").match(/\/?css\/([\w\-]+\.css)\?(\d+)/);b&&b[1]&&b[2]&&(a[b[1]]=b[2])})})();(function(){$("body").append('<div class="version" style="display:none; width:1px; height:1px;"></div>');
		for(var c=$(".version"),d=0;d<Muse.assets.required.length;){var f=Muse.assets.required[d],g=f.match(/([\w\-\.]+)\.(\w+)$/),k=g&&g[1]?g[1]:null,g=g&&g[2]?g[2]:null;switch(g.toLowerCase()){case "css":k=k.replace(/\W/gi,"_").replace(/^([^a-z])/gi,"_$1");c.addClass(k);var g=b(c.css("color")),h=b(c.css("background-color"));g!=0||h!=0?(Muse.assets.required.splice(d,1),"undefined"!=typeof a[f]&&(g!=a[f]>>>24||h!=(a[f]&16777215))&&Muse.assets.outOfDate.push(f)):d++;c.removeClass(k);break;case "js":k.match(/^jquery-[\d\.]+/gi)&&
		typeof $!="undefined"?Muse.assets.required.splice(d,1):d++;break;default:throw Error("Unsupported file type: "+g);}}c.remove();if(Muse.assets.outOfDate.length||Muse.assets.required.length)c="Some files on the server may be missing or incorrect. Clear browser cache and try again. If the problem persists please contact website author.",(d=location&&location.search&&location.search.match&&location.search.match(/muse_debug/gi))&&Muse.assets.outOfDate.length&&(c+="\nOut of date: "+Muse.assets.outOfDate.join(",")),d&&Muse.assets.required.length&&(c+="\nMissing: "+Muse.assets.required.join(","))})()})();
		/* body */
		Muse.Utils.transformMarkupToFixBrowserProblemsPreInit();/* body */
		Muse.Utils.prepHyperlinks(true);/* body */
		$('#u8402').registerBackgroundPositionScrollEffect([{"in":[-Infinity,1000.8],"speed":[0,0.4]},{"in":[1000.8,Infinity],"speed":[0,0.5]}]);/* scroll effect */
		Muse.Utils.initWidget('.MenuBar', function(elem) { return $(elem).museMenu(); });/* unifiedNavBar */
		Muse.Utils.initWidget('#widgetu15608', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu15608 */
		Muse.Utils.initWidget('#pamphletu15598', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'loose',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu15598 */
		$('#u10397').registerBackgroundPositionScrollEffect([{"in":[-Infinity,-99.7],"speed":[0,0]},{"in":[-99.7,Infinity],"speed":[0,0]}]);/* scroll effect */
		Muse.Utils.resizeHeight()/* resize height */
		Muse.Utils.initWidget('#pamphletu16227', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu16227 */
		$('#u10277').registerBackgroundPositionScrollEffect([{"in":[-Infinity,756.7],"speed":[0,0.9]},{"in":[756.7,Infinity],"speed":[0,0.9]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu10279', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu10279 */
		$('#u10272').registerPositionScrollEffect([{"in":[-Infinity,928],"speed":[0,1]},{"in":[928,Infinity],"speed":[1.3,1]}]);/* scroll effect */
		$('#u10266').registerPositionScrollEffect([{"in":[-Infinity,852],"speed":[0,1]},{"in":[852,Infinity],"speed":[-1.2,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu10344', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu10344 */
		$('#u10342').registerBackgroundPositionScrollEffect([{"in":[-Infinity,1199.01],"speed":[0,0.9]},{"in":[1199.01,Infinity],"speed":[0,0.9]}]);/* scroll effect */
		$('#u10337').registerPositionScrollEffect([{"in":[-Infinity,989.45],"speed":[0,1]},{"in":[989.45,Infinity],"speed":[-1.3,1]}]);/* scroll effect */
		$('#u10314').registerBackgroundPositionScrollEffect([{"in":[-Infinity,1200.66],"speed":[0,0.9]},{"in":[1200.66,Infinity],"speed":[0,0.9]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu10295', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu10295 */
		$('#u10294').registerPositionScrollEffect([{"in":[-Infinity,1277.8],"speed":[0,1]},{"in":[1277.8,Infinity],"speed":[1.3,1]}]);/* scroll effect */
		$('#u10401').registerBackgroundPositionScrollEffect([{"in":[-Infinity,1736],"speed":[0,0]},{"in":[1736,Infinity],"speed":[0,0]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu14924', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu14924 */
		$('#u10332').registerBackgroundPositionScrollEffect([{"in":[-Infinity,2542.96],"speed":[0,0.9]},{"in":[2542.96,Infinity],"speed":[0,0.9]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu10316', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu10316 */
		$('#u10315').registerPositionScrollEffect([{"in":[-Infinity,2601.7],"speed":[0,1]},{"in":[2601.7,Infinity],"speed":[-1,1]}]);/* scroll effect */
		$('#u10269').registerPositionScrollEffect([{"in":[-Infinity,2601.8],"speed":[0,1]},{"in":[2601.8,Infinity],"speed":[1.2,1]}]);/* scroll effect */
		$('#u9870').registerBackgroundPositionScrollEffect([{"in":[-Infinity,3050.26],"speed":[0,0.9]},{"in":[3050.26,Infinity],"speed":[0,0.9]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu9871', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu9871 */
		$('#u9864').registerPositionScrollEffect([{"in":[-Infinity,3109],"speed":[0,1]},{"in":[3109,Infinity],"speed":[-1,1]}]);/* scroll effect */
		$('#u9986').registerBackgroundPositionScrollEffect([{"in":[-Infinity,3050.26],"speed":[0,0.9]},{"in":[3050.26,Infinity],"speed":[0,0.9]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu9989', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu9989 */
		$('#u9983').registerPositionScrollEffect([{"in":[-Infinity,3127.4],"speed":[0,1]},{"in":[3127.4,Infinity],"speed":[1.3,1]}]);/* scroll effect */
		$('#u10059').registerBackgroundPositionScrollEffect([{"in":[-Infinity,3520.26],"speed":[0,0.9]},{"in":[3520.26,Infinity],"speed":[0,0.9]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu10062', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu10062 */
		$('#u10056').registerPositionScrollEffect([{"in":[-Infinity,3597.4],"speed":[0,1]},{"in":[3597.4,Infinity],"speed":[-1.3,1]}]);/* scroll effect */
		$('#u10107').registerPositionScrollEffect([{"in":[-Infinity,3599.9],"speed":[0,1]},{"in":[3599.9,Infinity],"speed":[1.2,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu10193', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu10193 */
		$('#u10192').registerPositionScrollEffect([{"in":[-Infinity,4030.63],"speed":[0.5,1]},{"in":[4030.63,Infinity],"speed":[0,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu10078', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu10078 */
		$('#u10077').registerPositionScrollEffect([{"in":[-Infinity,4030.63],"speed":[1,1]},{"in":[4030.63,Infinity],"speed":[0,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu10094', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu10094 */
		$('#u10093').registerPositionScrollEffect([{"in":[-Infinity,4030.63],"speed":[1.5,1]},{"in":[4030.63,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u9886').registerBackgroundPositionScrollEffect([{"in":[-Infinity,4498.52],"speed":[0,0]},{"in":[4498.52,Infinity],"speed":[0,0]}]);/* scroll effect */
		Muse.Utils.initWidget('#slideshowu20999', function(elem) { $(elem).data('widget', new WebPro.Widget.ContentSlideShow(elem, {autoPlay:false,displayInterval:3000,slideLinkStopsSlideShow:false,transitionStyle:'fading',lightboxEnabled_runtime:true,shuffle:false,transitionDuration:500,enableSwipe:true,elastic:'off',resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false})); });/* #slideshowu20999 */
		Muse.Utils.initWidget('#widgetu16173', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu16173 */
		$('#u15204').registerPositionScrollEffect([{"in":[-Infinity,7794.64],"speed":[0,2]},{"in":[7794.64,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u15209').registerPositionScrollEffect([{"in":[-Infinity,7786.24],"speed":[0,1.5]},{"in":[7786.24,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u15214').registerPositionScrollEffect([{"in":[-Infinity,7786.24],"speed":[0,2]},{"in":[7786.24,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u15219').registerPositionScrollEffect([{"in":[-Infinity,7786.24],"speed":[0,1.5]},{"in":[7786.24,Infinity],"speed":[0,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#widgetu15689', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu15689 */
		Muse.Utils.initWidget('#pamphletu15642', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'loose',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu15642 */
		Muse.Utils.fullPage('#page');/* 100% height page */
		Muse.Utils.showWidgetsWhenReady();/* body */
		Muse.Utils.transformMarkupToFixBrowserProblems();/* body */
	} catch(e) { 
		if (e && 'function' == typeof e.notify) e.notify(); else Muse.Assert.fail('Error calling selector function:' + e); 
	}
});