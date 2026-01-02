// Created by iWeb 3.0.4 local-build-20260102

function createMediaStream_id2()
{return IWCreatePhotocast("http://Nostalgiques/Galerie_photo_2018-2021/Pages/MLB_-_6e_Assises_des_Nostalgique_2019_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://Nostalgiques/Galerie_photo_2018-2021/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://Nostalgiques/Galerie_photo_2018-2021/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(186,186),new IWSize(186,112),new IWSize(229,313),27,27,0,new IWSize(21,23)),new IWPhotoFrame([IWCreateImage('MLB_-_6e_Assises_des_Nostalgique_2019_files/NewTravel_C_TL.png'),IWCreateImage('MLB_-_6e_Assises_des_Nostalgique_2019_files/NewTravel_S_T.png'),IWCreateImage('MLB_-_6e_Assises_des_Nostalgique_2019_files/NewTravel_C_TR.png'),IWCreateImage('MLB_-_6e_Assises_des_Nostalgique_2019_files/NewTravel_S_R.png'),IWCreateImage('MLB_-_6e_Assises_des_Nostalgique_2019_files/NewTravel_C_BR.png'),IWCreateImage('MLB_-_6e_Assises_des_Nostalgique_2019_files/NewTravel_S_B.png'),IWCreateImage('MLB_-_6e_Assises_des_Nostalgique_2019_files/NewTravel_C_BL.png'),IWCreateImage('MLB_-_6e_Assises_des_Nostalgique_2019_files/NewTravel_S_L.png')],null,1,0.900000,71.000000,0.000000,62.000000,62.000000,83.000000,9.000000,73.000000,77.000000,8.000000,8.000000,8.000000,9.000000,null,null,null,0.400000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('MLB_-_6e_Assises_des_Nostalgique_2019_files/MLB_-_6e_Assises_des_Nostalgique_2019Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
