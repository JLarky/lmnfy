<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="ru" dir="ltr" xml:lang="ru" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Давай я поищу через nigma.ru для тебя (Let Me Nigma.ru For You)!</title>
  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <style type="text/css" media="all">
    @import "style.css";
  </style>
  <script charset="utf-8" type="text/javascript" src="http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js"></script>
  <script src="bundle.js" type='text/javascript'></script>
  <link href='lmnfy.xml' rel='search' title='LMNFY' type='application/opensearchdescription+xml' />
</head>
<body>
<div style="margin:0px;width:100%;height:100%;position:absolute;">
<span class="about">
 <a style="color: rgb(0, 0, 0);" name="about" href="#">В чём прикол?</a>
</span>
<div style="height:50%;min-height:200px;"></div>
<div style="margin:auto;width:100%;text-align:center;margin-top:-180px;">
<div>
<div class="logo">
<span>Давай я поищу через</span>
<img id="logo" src="http://www.nigma.ru/themes/nigma/img/logos/nigma-logo.png" alt="nigma.ru" height="82px" width="260px" />
<span>для тебя</span>
</div>

<table style="border-collapse:collapse;margin:auto;width:50%;">
<tr id="types"><td>
<table width="100%" style="border-collapse:collapse;"><tbody><tr>
<td id="srchTypes" style="padding-top: 2px;" class="green_line">
<table style="border-collapse:collapse;"><tbody><tr>
<td><span class="search_type_active"><a id="web" href="#web">Интернет</a></span></td>
<td><span class="search_type_passive"><a id="img" href="#img">Картинки</a></span></td>
<td><span class="search_type_passive"><a id="lib" href="#lib">Библиотеки</a></span></td>
<td><span class="search_type_passive"><a id="music" href="#music">Музыка</a></span></td>
</tr></tbody></table>
</td>
<td></td>
</tr></tbody></table>
</td></tr>
<tr><td>
<form action="#">
<table style="margin-top: 1px;"><tr>
<td style="width:100%">
 <input id="query" class="searchform" size="100" maxlength="250" name="s" value="" type="text"/>
</td>
<td style="padding-left:7px;">
 <input type="button" class="searchform-btn" value="Найти!" id="find"/>
</td>
</tr></table>
</form>
</td></tr>
</table>

<div id="instructions">
    <div>Необходимо включить JavaScript</div>
</div>
<!--[if lt IE 7]>
  <div style='border: 1px solid #F7941D; background: #FEEFDA; text-align: center; clear: both; height: 75px; position: relative;width:666px;margin:10px auto;'>
    <div style='position: absolute; right: 3px; top: 3px; font-family: courier new; font-weight: bold;'><a href='#' onclick='javascript:this.parentNode.parentNode.style.display="none"; return false;'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-cornerx.jpg' style='border: none;' alt='Close this notice'/></a></div>
    <div style='width: 640px; margin: 0 auto; text-align: left; padding: 0; overflow: hidden; color: black;'>
      <div style='width: 75px; float: left;'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-warning.jpg' alt='Warning!'/></div>
      <div style='width: 275px; float: left; font-family: Arial, sans-serif;'>
        <div style='font-size: 14px; font-weight: bold; margin-top: 12px;'>Вы пользуетесь устаревшим браузером</div>
        <div style='font-size: 12px; margin-top: 6px; line-height: 12px;'>Для более комфортного использования этого сайта, пожалуйста, обновите ваш браузер.</div>
      </div>
      <div style='width: 75px; float: left;'><a href='http://www.mozilla-europe.org/ru/firefox/' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-firefox.jpg' style='border: none;' alt='Get Firefox 3.5'/></a></div>
      <div style='width: 75px; float: left;'><a href='http://www.microsoft.com/downloads/details.aspx?FamilyID=341c2ad5-8c3d-4347-8c03-08cdecd8852b&DisplayLang=ru' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-ie8.jpg' style='border: none;' alt='Get Internet Explorer 8'/></a></div>
      <div style='width: 73px; float: left;'><a href='http://www.apple.com/ru/safari/download/' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-safari.jpg' style='border: none;' alt='Get Safari 4'/></a></div>
      <div style='float: left;'><a href='http://www.google.com/chrome?hl=ru' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-chrome.jpg' style='border: none;' alt='Get Google Chrome'/></a></div>
    </div>
  </div>
  <![endif]-->

      <div id='link_placeholder'></div>
      <div id='link'>
        <input class='link copyable' readonly='readonly' type='text' />
        <div id='link_message'></div>
        <div id='link_buttons'>
          <a class='link_button' href='#' id='copy' rel='localize[link.copy]'>copy</a>
          <a class='link_button' href='#' id='reset' rel='localize[link.reset]'>reset</a>

          <a class='link_button' href='#' id='tiny' rel='localize[link.shorten]'>укоротить</a>
          <a class='link_button' href='#' id='go' rel='localize[link.go]'>перейти</a>
        </div>
      </div>


</div>
</div>
<div id='about' style='display: none'>
<p>Этот сайт поможет вам справиться с теми, кто ленится искать самостоятельно, ни в коем случае не как замена обычному поиску. Типичный пример от <a href="http://ru.wikiquote.org/wiki/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A5%D0%B0%D1%83%D1%81#.D0.A1.D0.B5.D0.B7.D0.BE.D0.BD_1._.D0.AD.D0.BF.D0.B8.D0.B7.D0.BE.D0.B4_19._Kids_.28.D0.94.D0.B5.D1.82.D0.BA.D0.B8.29">доктора</a>:</p>
<ul style="margin: auto; text-align: left; width: 510px;">
<li>- Др. Хаус: Ты знаешь что такое «геморрой»?</li>
<li>- Мальчк: Нет</li>
<li>- Др. Хаус: Тогда <a href="http://lmnfy.com/?q=%D0%B3%D0%B5%D0%BC%D0%BE%D1%80%D1%80%D0%BE%D0%B9">http://lmnfy.com/?q=геморрой</a>!</li>
</ul>
      <p>Или чтобы показать уникальные возможности поисковика nigma.ru:</p>
<ul style="margin: auto; text-align: left; width: 450px;">
<li>- она: 200$ это сколько денег?</li>
<li>- он: <a href="http://lmnfy.com/?q=200%24">http://lmnfy.com/?q=200$</a></li>
</ul>
      <p>Сайтик сделан по мотивам <a href="http://lmgtfy.com/">LetMeGoogleThatForYou.com</a> и с использованием их кода. Однако уже сейчас функциональность заметно <acronym title="хотя по правде сказать я вырезал функционал локализации и рекламы">выше</acronym>, особенно это оценят пользователи Firefox, т.к. они могут использовать плагин быстрого поиска.</p>
    </div>
<div id="copyright">&copy; 2009 <a href="http://juick.com/JLarky/">JLarky</a></div>
</div>
<div><img style="display:none" src="images/mouse_arrow.png" id="fake_mouse" alt="x" width="15px" height="21px"/></div>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-5041583-3");
pageTracker._trackPageview();
} catch(err) {}</script>
</body>
</html>
