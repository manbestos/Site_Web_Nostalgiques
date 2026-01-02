// Created by iWeb 3.0.4 local-build-20260102

function createMediaStream_id2()
{return IWCreatePhotocast("http://Nostalgiques/Galerie_photo_2014-2017/Pages/NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://Nostalgiques/Galerie_photo_2014-2017/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://Nostalgiques/Galerie_photo_2014-2017/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(213,213),new IWSize(213,98),new IWSize(256,326),27,27,0,new IWSize(-2,20)),new IWPhotoFrame([IWCreateImage('NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/GraphPaper_01.png'),IWCreateImage('NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/GraphPaper_02.png'),IWCreateImage('NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/GraphPaper_01_1.png'),IWCreateImage('NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/GraphPaper_01_2.png'),IWCreateImage('NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/GraphPaper_09.png'),IWCreateImage('NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/GraphPaper_08.png'),IWCreateImage('NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/GraphPaper_07.png'),IWCreateImage('NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/GraphPaper_01_3.png')],null,0,0.793651,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_Bastos_files/NOS_-_Vainqueur_2017_SUPERCOUPE_An_1_-_George_BastosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
