// Created by iWeb 3.0.4 local-build-20260102

function createMediaStream_id2()
{return IWCreateMediaCollection("http://Nostalgiques/Galerie_photo_2014-2017/Galerie_photo_2014-2017_files/rss.xml",true,255,["Pas encore de photos","%d photo","%d photos"],["","%d plan","%d plans"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://Nostalgiques/Galerie_photo_2014-2017',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget34'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://Nostalgiques/Galerie_photo_2014-2017',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(259,194),new IWSize(259,32),new IWSize(309,241),27,27,0,new IWSize(29,29)),new IWPhotoFrame([IWCreateImage('Galerie_photo_2014-2017_files/ul.png'),IWCreateImage('Galerie_photo_2014-2017_files/top.png'),IWCreateImage('Galerie_photo_2014-2017_files/ur.png'),IWCreateImage('Galerie_photo_2014-2017_files/right.png'),IWCreateImage('Galerie_photo_2014-2017_files/lr.png'),IWCreateImage('Galerie_photo_2014-2017_files/bottom.png'),IWCreateImage('Galerie_photo_2014-2017_files/ll.png'),IWCreateImage('Galerie_photo_2014-2017_files/left.png')],null,0,0.500000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget34',null,'widget35',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Galerie_photo_2014-2017_files/Galerie_photo_2014-2017Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
