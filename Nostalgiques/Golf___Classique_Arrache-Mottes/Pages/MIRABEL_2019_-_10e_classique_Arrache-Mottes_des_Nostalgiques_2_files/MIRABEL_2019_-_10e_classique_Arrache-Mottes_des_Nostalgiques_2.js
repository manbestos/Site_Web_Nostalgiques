// Created by iWeb 3.0.4 local-build-20260102

function createMediaStream_id2()
{return IWCreatePhotocast("http://Nostalgiques/Golf___Classique_Arrache-Mottes/Pages/MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://Nostalgiques/Golf___Classique_Arrache-Mottes/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://Nostalgiques/Golf___Classique_Arrache-Mottes/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(166,166),new IWSize(166,112),new IWSize(204,293),27,27,0,new IWSize(6,6)),new IWPhotoFrame([IWCreateImage('MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/comic-1_01.png'),IWCreateImage('MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/comic-1_02.png'),IWCreateImage('MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/comic-1_03.png'),IWCreateImage('MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/comic-1_06.png'),IWCreateImage('MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/comic-1_09.png'),IWCreateImage('MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/comic-1_08.png'),IWCreateImage('MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/comic-1_07.png'),IWCreateImage('MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/comic-1_04.png')],null,0,1.000000,4.000000,4.000000,1.000000,1.000000,5.000000,5.000000,6.000000,6.000000,71.000000,115.000000,71.000000,115.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2_files/MIRABEL_2019_-_10e_classique_Arrache-Mottes_des_Nostalgiques_2Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
