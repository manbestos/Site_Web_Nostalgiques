// Created by iWeb 3.0.4 local-build-20260102

function createMediaStream_id2()
{return IWCreateMediaCollection("http://Nostalgiques/Golf___Classique_Arrache-Mottes/Golf___Classique_Arrache-Mottes_files/rss.xml",true,255,["Pas encore de photos","%d photo","%d photos"],["","%d plan","%d plans"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://Nostalgiques/Golf___Classique_Arrache-Mottes',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget16'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://Nostalgiques/Golf___Classique_Arrache-Mottes',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(259,194),new IWSize(259,32),new IWSize(309,241),27,27,0,new IWSize(29,29)),new IWPhotoFrame([IWCreateImage('Golf___Classique_Arrache-Mottes_files/ul.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/top.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/ur.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/right.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/lr.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/bottom.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/ll.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/left.png')],null,0,0.500000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget16',null,'widget17',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Golf___Classique_Arrache-Mottes_files/comic-1_01.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/comic-1_02.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/comic-1_03.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/comic-1_06.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/comic-1_09.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/comic-1_08.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/comic-1_07.png'),IWCreateImage('Golf___Classique_Arrache-Mottes_files/comic-1_04.png')],null,0,1.000000,4.000000,4.000000,1.000000,1.000000,5.000000,5.000000,6.000000,6.000000,71.000000,115.000000,71.000000,115.000000,null,null,null,0.500000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Golf___Classique_Arrache-Mottes_files/Golf___Classique_Arrache-MottesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
