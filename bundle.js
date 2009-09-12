// Copyright (c) JLarky <jalrky@gmail.com>, 2009
// Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt licenses.
// Code was changed by JLarky for LMNFY.com based on Jim Garvin's code, whose copyright notice placed below.


// Copyright (c) Jim Garvin (http://github.com/coderifous), 2008.
// Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
// Written by Jim Garvin (@coderifous) for use on LMGTFY.com.
// http://github.com/coderifous/jquery-localize
// Based off of Keith Wood's Localisation jQuery plugin.
// http://keith-wood.name/localisation.html

(function($) {
  $.localize = function(pkg, options) {
    var $wrappedSet          = this;
    var intermediateLangData = {};
    options = options || {};
    var saveSettings = {async: $.ajaxSettings.async, timeout: $.ajaxSettings.timeout};
    $.ajaxSetup({async: false, timeout: (options && options.timeout ? options.timeout : 500)});

    function loadLanguage(pkg, lang, level) {
	return 0;
      level = level || 1;
      var file;
      if (options && options.loadBase && level == 1) {
        intermediateLangData = {};
        file = pkg + '.json';
        jsonCall(file, pkg, lang, level);
      }
      else if (level == 1) {
        intermediateLangData = {};
        loadLanguage(pkg, lang, 2);
      }
      else if (level == 2 && lang.length >= 2) {
        file = pkg + '-' + lang.substring(0, 2) + '.json';
        jsonCall(file, pkg, lang, level);
      }
      else if (level == 3 && lang.length >= 5) {
        file = pkg + '-' + lang.substring(0, 5) + '.json';
        jsonCall(file, pkg, lang, level);
      }
    }

    function jsonCall(file, pkg, lang, level) {
      if (options.pathPrefix) file = options.pathPrefix + "/" + file;
      $.getJSON(file, null, function(d){
        $.extend(intermediateLangData, d);
        notifyDelegateLanguageLoaded(intermediateLangData);
        loadLanguage(pkg, lang, level + 1);
      });
    }

    function defaultCallback(data) {
      $.localize.data[pkg] = data;
      var keys, value;
      $wrappedSet.each(function(){
        elem = $(this);
        key = elem.attr("rel").match(/localize\[(.*?)\]/)[1];
        value = valueForKey(key, data);
        if (elem.attr('tagName') == "INPUT") {
          elem.val(value);
        }
        else {
          elem.text(value);
        }
      });
    }

    function notifyDelegateLanguageLoaded(data) {
      if (options.callback) {
        // pass the defaultCallback so it can be used in addition to some custom behavior
        options.callback(data, defaultCallback);
      }
      else {
        defaultCallback(data);
      }
    }

    function valueForKey(key, data){
      var keys  = key.split(/\./);
      var value = data;
      while (keys.length > 0) {
        if(value){
          value = value[keys.shift()];
        }
        else{
          return null;
        }
      }
      return value;
    }

    function regexify(string_or_regex_or_array){
      if (typeof(string_or_regex_or_array) == "string") {
        return "^" + string_or_regex_or_array + "$";
      }
      else if (string_or_regex_or_array.length) {
        var matchers = [];
        var x = string_or_regex_or_array.length;
        while (x--) {
          matchers.push(regexify(string_or_regex_or_array[x]));
        }
        return matchers.join("|");
      }
      else {
        return string_or_regex_or_array;
      }
    }

    var lang = normaliseLang(options && options.language ? options.language : $.defaultLanguage);

    if (options.skipLanguage && lang.match( regexify(options.skipLanguage) )) return;
    loadLanguage(pkg, lang, 1);

    $.ajaxSetup(saveSettings);
  };

  $.fn.localize = $.localize;

  // Storage for retrieved data
  $.localize.data = {};

  // Retrieve the default language set for the browser.
  $.defaultLanguage = normaliseLang(navigator.language
    ? navigator.language       // Mozilla
    : navigator.userLanguage   // IE
  );

  // Ensure language code is in the format aa-AA.
  function normaliseLang(lang) {
   lang = lang.replace(/_/, '-').toLowerCase();
   if (lang.length > 3) {
     lang = lang.substring(0, 3) + lang.substring(3).toUpperCase();
   }
   return lang;
  }
})(jQuery);

// QueryString Engine v1.0.1 (modified)
// By James Campbell (modified by coderifous)
(function($) {
  $.querystringvalues = $.queryStringValues = $.QueryStringValues = $.QueryStringvalues = $.queryStringValues = $.queryStringvalues = $.querystringValues = $.getqueryString = $.queryString = $.querystring = $.QueryString = $.Querystring = $.getQueryString = $.getquerystring = $.getQuerystring  = function(options)
  {
    defaults = { defaultvalue: null };
    options = $.extend(defaults , options);
    qs = location.search.substring(1, location.search.length);
    if (qs.length == 0) return options.defaultvalue;
      qs = qs.replace(/\+/g, ' ');
      var args = qs.split('&');
      for (var i = 0; i < args.length; i ++ )
      {
        var value;
        var pair = args[i].split('=');
        var name = gentlyDecode(pair[0]);

      if (pair.length == 2)
      {
        value = gentlyDecode(pair[1]);
      }
      else
      {
        value = name;
      }
      if (name == options.id || i == options.id-1)
      {
          return value;
      }
      }
    return options.defaultvalue;
  };
})(jQuery);
$.sendToClipboard = function(text) {
  var copier = $("#flash_copier");
  if (copier.size() == 0) {
    copier = $('<div id="flash_copier"></div>').appendTo("body");
  }
  copier.html('<embed src="_clipboard.swf" FlashVars="clipboard='+encodeURIComponent(text)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>');
};

$.fn.centerOver = function(element, topOffset, leftOffset) {
  topOffset = topOffset || 0;
  leftOffset = leftOffset || 0;
  var self = this;
  self.css({
    top: (element.position().top + element.outerHeight()/2 - self.height()/2 + topOffset).px(),
    left: (element.position().left + element.outerWidth()/2 - self.width()/2 + leftOffset).px()
  });
  return self;
};

$.fn.sponsor = function(programFile, callback) {
  var self = this;
  $.getJSON(programFile, function(program) {
    var sponsor = program.slots[rand(program.slots.length)];
    var id = sponsor.id;
    var anchor = self.find("a");
    anchor.attr("href", sponsor.url);
    anchor.find("img").attr("src", sponsor.image);
    anchor.find("p").html(sponsor.message);
    if (pageTracker) {
      pageTracker._trackPageview("/sponsor/" + id);
      anchor.unbind("click");
      anchor.click(function() { pageTracker._trackPageview("/outgoing/sponsor/" + id); });
    }
    if (callback) callback.call(self);
  });
  return self;
};

function rand(max) {
  return Math.floor(Math.random() * max);
}

Number.prototype.px = function(){ return this.toString() + "px"; };

function gentlyEncode(string) {
  return ( encodeURIComponent
           ? encodeURIComponent(string).replace(/%20(\D)?/g, "+$1").replace(/'/g, escape("'"))
           : escape(string).replace(/\+/g, "%2B").replace(/%20/g, "+") );
}

function gentlyDecode(string) {
  return decodeURIComponent ? decodeURIComponent(string) : unescape(string);
}
// default lang necessities
$.localize.data.lmgtfy = {
  setup: {
    type_question: "Напиши запрос и нажми кнопку",
    share_link:    "Дай ссылку другу",
    or:            "or"
  },

  play: {
    step_1: "Шаг 1: Введи запрос",
    step_2: "Шаг 2: Нажми на кнопку",
    pwnage: "Разве это так трудно?",
    nice:   "Вот и всё!"
  },

  link: {
    creating:  "Creating...",
    fetching:  "Fetching...",
    copied:    "URL copied to clipboard",
    shortened: "TinyURL copied to clipboard"
  }
};

$(function(){
  initializeLocalization();
  initializeAboutLink();
  initializeControls();

  var searchString = $.getQueryString({ id: "q" });
  var quicksearch  = $.getQueryString({ id: "qs" });
  var inputField   = $("input[type=text]:first");
  var fakeMouse    = $("#fake_mouse");
  var instructions = $("#instructions > div");
  var button       = $("#find");
  var inputLink    = $("#link input.link");
  var linkButtons  = $("#link_buttons");
  var linkMessage  = $("#link_message");

  if (searchString) {
    nigmaItForThem();
  } else {
    getTheSearchTerms();
  }
  if (quicksearch) {
    inputField.attr("value", quicksearch);
    button.click();
  }


  function initializeAboutLink() {
    $("a[name=about]").click(function() {
      $("#about").toggle();
      $('html,body').animate({ scrollTop: $("#about").offset().top }, 1000);
      return false;
    });
    linkifyAbout();
  }

  function initializeControls() {
    $('input.copyable').click(function() { $(this).select(); });
    $("#link").hover(function(){ linkButtons.fadeIn("fast"); }, function(){ linkButtons.fadeOut("fast"); });
    $("#go").click(function(){ window.location = inputLink.val(); return false; });
    $("#reset").click(function(){ showTheUrl($(this).attr("url")); return false; });
    $("#tiny").click(function(){
      linkStatus("link.fetching", 0, true);
      $.getJSON("http://json-tinyurl.appspot.com/?callback=?&url=" + gentlyEncode(inputLink.val()), function(data) {
        inputLink.val(data.tinyurl).focus().select();
        linkStatus("link.fetching", 1500);
      });
      $(this).hide();
      $("#reset").show();
      return false;
    });
    $("#language select").change(function(e){
      var l = window.location;
      var hostnameMinusSubdomain = l.hostname.match(/[^.]+\.(?:[^.]+)$/)[0];
      var url = l.protocol + "//" + $(this).val() + "." + hostnameMinusSubdomain + l.pathname;
      window.location = url;
    });

    $("#types a").click(function() {
      $("#types span").removeClass("search_type_active").addClass("search_type_passive");
      $(this).parent().removeClass("search_type_passive").addClass("search_type_active");
      if (inputField.val()) if (!searchString) button.click();
    });
  }

  function initializeLocalization() {
    var localize_opts = {
      pathPrefix: 'lang',
      skipLanguage: /^en/,
      callback: function(data, defaultCallback) {
        defaultCallback(data);
        linkifyAbout();
      }
    };
    var lang = $.getQueryString({ id: "lang" }) || sniffUrlForLanguage();
    if (lang) localize_opts.language = lang;
    $("[rel*=localize]").localize('lmgtfy', localize_opts);
  }

  function sniffUrlForLanguage() {
    return sniffSubdomainForLanguage() || sniffDomainForLanguage();
  }

  function sniffSubdomainForLanguage() {
    var first = window.location.hostname.split(".")[0];
    var match = first.match(/^[a-z]{2}(?:-[a-z]{2})?$/i);
    return match ? match[0] : null;
  }

  function sniffDomainForLanguage() {
    var domainLanguageOverrides = {
      "haddkeressemmegneked": "hu",
      "klingon": "xx-KL"
    };

    for (var domain in domainLanguageOverrides) {
      if (window.location.hostname.match(domain)) {
        return domainLanguageOverrides[domain];
      }
    }
    return null;
  }

  function langString(langkey) {
    var keys = langkey.split(/\./);
    return keys.length == 1 ? $.localize.data.lmgtfy[keys[0]] : $.localize.data.lmgtfy[keys[0]][keys[1]];
  }

  function linkifyAbout() {
    return true;
    $("#about p").each(function() {
      $(this).html($(this).text().replace(/(@([a-zA-Z0-9_]+))/g, '<a href="http://twitter.com/$2">$1</a>'));
    });
  }

  function instruct(langkey) {
    instructions.html(langString(langkey));
  }

  function linkStatus(langkey, millis, stuck) {
    millis = millis || 2500;
    linkMessage.html(langString(langkey)).show().centerOver(inputLink);
    if (!stuck) {
      setTimeout(function(){ linkMessage.fadeOut(millis/4*3); }, millis/4);
    }
  }

  function gettype() {
      return $(".search_type_active a").attr("id");
  }


  function getTheSearchTerms() {
//    $("#sponsor").sponsor("/s/program.json", function() { this.fadeIn(1000); });
    $("form").submit(function(){ $("#find").click(); return false; });
    instruct("setup.type_question");
    inputField.focus().select();

    $("input[type=button]").click(function(e){
      instruct("setup.share_link");

      var l   = window.location;
      var url = l.protocol + "//" + l.hostname + l.pathname + "?";
      var searchString = gentlyEncode(inputField.val());
      var type = gettype();

      strings = [ "q=" + searchString ];
      if (type != "web") {
	  strings[1] = "t="+type;
      }

      url += strings.join("&");

      showTheUrl(url);
    });
  }

  function showTheUrl(url) {
    $("#copy").hide();

    $("#link").centerOver($("#link_placeholder")).show();
    $("#reset").attr("url", url).hide();
    $("#tiny").show();

    linkStatus("link.creating", 1500);
    inputLink.val(url).focus().select();
    linkButtons.centerOver(inputLink, 28);
  }

  function nigmaItForThem() {
    if ($.getQueryString({ id: "fwd" })) redirect();

    $("body").css("cursor", "wait");
    fakeMouse.show();
    instruct("play.step_1");

    var in_left=(inputField.offset().left + 10).px();
    var in_delay=2000;

    var srchtype = $.getQueryString({ id: "t" });
    if (srchtype) if (srchtype!="web") {
	    var tab = $("#"+srchtype);
	    var self_left=(tab.offset().left + 10).px();
	    var in_left=((parseInt(in_left)+parseInt(self_left))/2).px();
	    var in_delay=700;
	    fakeMouse.animate({
		top:  (tab.offset().top  + 5).px(),
		left: self_left
		}, 2000, 'swing', function() {tab.click()})
	}


    fakeMouse.animate({
      top:  (inputField.offset().top  + 5).px(),
      left: in_left
    }, in_delay, 'swing', function(){
      inputField.focus();
      fakeMouse.animate({ top: "+=18px", left: "+=10px" }, 'fast', function() { fixSafariRenderGlitch(); });
      type(searchString, 0);
    });

    function type(string, index){
      var val = string.substr(0, index + 1);
      inputField.attr('value', val);
      if (index < string.length) {
        setTimeout(function(){ type(string, index + 1); }, Math.random() * 240);
      }
      else {
        doneTyping();
      }
    }

    function doneTyping(){
      instruct("play.step_2");
      fakeMouse.animate({
        top:  (button.offset().top  + 10).px(),
        left: (button.offset().left + 30).px()
      }, 2500, 'swing', function(){
      //var key = $.getQueryString({ id: "n" }) == 1 ? "play.nice" : "play.pwnage";
	var key = "play.nice";
        instruct(key);
        button.focus();
        setTimeout(redirect, 2000);
      });
    }

    function redirect(){
      var type= gettype();
      var ui="257";

      var loc = "http://www.nigma.ru/index.php?ui="+ui+"&t="+type+"&q=";
      var loc = loc + gentlyEncode(searchString); 

      if ($.getQueryString({ id: "debug" })) return;
      window.location = loc;
    }

    function fixSafariRenderGlitch() {
      if ($.browser.safari) inputField.blur().focus();
    }
  }
});

