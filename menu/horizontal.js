if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML.toLowerCase();var last=tt.indexOf("horizontal.js\"");if(last>0){var first=tt.lastIndexOf("\"",last);if(first>0&&first<last)loc=document.body.innerHTML.substr(first+1,last-first-1);}}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".horizontal_menu {z-index:999;border-color:#ffffff;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#d3d3d3;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".horizontal_plain, a.horizontal_plain:link, a.horizontal_plain:visited{text-align:left;background-color:#d3d3d3;color:#000000;text-decoration:none;border-color:#ffffff;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:9pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("a.horizontal_plain:hover, a.horizontal_plain:active{background-color:#ffffff;color:#000000;text-decoration:none;border-color:#ffffff;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:9pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xffffff;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("",0,0,2,1,0)
mainMenuItem("horizontal_b1",".gif",21,81,loc+"../index.html","","Volver a la pagina principal",2,2,"horizontal_plain");
mainMenuItem("horizontal_b2",".gif",21,145,loc+"../quienes_somos/quienes_somos.html","","Conozcanos",2,2,"horizontal_plain");
mainMenuItem("horizontal_b3",".gif",21,120,"javascript:;","","Normas de diseño",2,2,"horizontal_plain");
mainMenuItem("horizontal_b4",".gif",21,128,"javascript:;","","Servicios y Precios ",2,2,"horizontal_plain");
mainMenuItem("horizontal_b5",".gif",21,126,"javascript:;","","Contactenos",2,2,"horizontal_plain");
endMainMenu("",0,0);

startSubmenu("horizontal_b5","horizontal_menu",141);
submenuItem("Formulario de Contacto",loc+"../contactenos/contacto.html","","horizontal_plain");
submenuItem("Preguntas Frecuentes",loc+"../contactenos/faq.html","","horizontal_plain");
endSubmenu("horizontal_b5");

startSubmenu("horizontal_b4","horizontal_menu",133);
submenuItem("Servicios",loc+"../informacion/servicios.html","","horizontal_plain");
submenuItem("Proyectos",loc+"../informacion/proyectos.html","","horizontal_plain");
submenuItem("Posicionamiento Web",loc+"../informacion/posicionamiento.html","","horizontal_plain");
endSubmenu("horizontal_b4");

startSubmenu("horizontal_b3","horizontal_menu",201);
submenuItem("Políticas de Calidad",loc+"../diseno_web/politicas.html","","horizontal_plain");
submenuItem("Cronograma de Actividades",loc+"../diseno_web/cronograma.html","","horizontal_plain");
submenuItem("Registro Dominios y Subdominios",loc+"../diseno_web/dominios.html","","horizontal_plain");
endSubmenu("horizontal_b3");

loc="";
