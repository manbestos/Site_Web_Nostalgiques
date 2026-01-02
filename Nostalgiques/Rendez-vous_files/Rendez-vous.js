// Created by iWeb 3.0.4 local-build-20260102

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00}),reflection_1:new IWReflection({opacity:0.50,offset:1.00}),stroke_0:new IWEmptyStroke(),reflection_3:new IWReflection({opacity:0.50,offset:1.00}),reflection_2:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Rendez-vous_files/Rendez-vousMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
