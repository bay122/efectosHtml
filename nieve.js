// Numero de copos, recomendados entre 30 y 40
var nieve_cantidad=35

// Colores de los copos se mostraran de forma aleatoria
var nieve_colorr=new Array("#aaaacc","#ddddFF","#ccccDD")

// Tipo de letra de los copos
var nieve_tipo=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS")

// Valor o letra de los copos
var nieve_letra="*"

// velocidad de caida
var nieve_velocidad=0.6

// tamaño mas grande de los copos
var nieve_cantidadsize=30

// tamaño mas pequeño de los copos
var nieve_chico=8

// 1 toda la pagina - 2 zona izquierda - 3 centro de pagina - 4 zona derecha
var nieve_zona=1

var nieve=new Array()
var marginbottom
var marginright
var timer
var i_nieve=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)
var browserok=ie5||ns6||opera

function aleatorio(range) {
    rand=Math.floor(range*Math.random())
    return rand
}

function initnieve() {
    if (ie5 || opera) {
        marginbottom = document.body.clientHeight
        marginright = document.body.clientWidth
    }
    else if (ns6) {
        marginbottom = window.innerHeight
        marginright = window.innerWidth
    }
    var nievesizerange=nieve_cantidadsize-nieve_chico
    for (i=0;i<=nieve_cantidad;i++) {
        crds[i] = 0;
        lftrght[i] = Math.random()*15;
        x_mv[i] = 0.03 + Math.random()/10;
        nieve[i]=document.getElementById("s"+i)
        nieve[i].style.fontFamily=nieve_tipo[aleatorio(nieve_tipo.length)]
        nieve[i].size=aleatorio(nievesizerange)+nieve_chico
        nieve[i].style.fontSize=nieve[i].size
        nieve[i].style.color=nieve_colorr[aleatorio(nieve_colorr.length)]
        nieve[i].sink=nieve_velocidad*nieve[i].size/5
        if (nieve_zona==1) {nieve[i].posx=aleatorio(marginright-nieve[i].size)}
        if (nieve_zona==2) {nieve[i].posx=aleatorio(marginright/2-nieve[i].size)}
        if (nieve_zona==3) {nieve[i].posx=aleatorio(marginright/2-nieve[i].size)+marginright/4}
        if (nieve_zona==4) {nieve[i].posx=aleatorio(marginright/2-nieve[i].size)+marginright/2}
        nieve[i].posy=aleatorio(2*marginbottom-marginbottom-2*nieve[i].size)
        nieve[i].style.left=nieve[i].posx
        nieve[i].style.top=nieve[i].posy
    }
    movenieve()
}

function movenieve() {
    for (i=0;i<=nieve_cantidad;i++) {
        crds[i] += x_mv[i];
        nieve[i].posy+=nieve[i].sink
        nieve[i].style.left=nieve[i].posx+lftrght[i]*Math.sin(crds[i]);
        nieve[i].style.top=nieve[i].posy

        if (nieve[i].posy>=marginbottom-2*nieve[i].size || parseInt(nieve[i].style.left)>(marginright-3*lftrght[i])){
            if (nieve_zona==1) {nieve[i].posx=aleatorio(marginright-nieve[i].size)}
            if (nieve_zona==2) {nieve[i].posx=aleatorio(marginright/2-nieve[i].size)}
            if (nieve_zona==3) {nieve[i].posx=aleatorio(marginright/2-nieve[i].size)+marginright/4}
            if (nieve_zona==4) {nieve[i].posx=aleatorio(marginright/2-nieve[i].size)+marginright/2}
            nieve[i].posy=0
        }
    }
    var timer=setTimeout("movenieve()",50)
}

for (i=0;i<=nieve_cantidad;i++) {
    document.write("<span id='s"+i+"' style='position:absolute;top:-"+nieve_cantidadsize+"'>"+nieve_letra+"</span>")
}
if (browserok) {
    window.onload=initnieve
}

/*
     FILE ARCHIVED ON 23:53:20 Dec 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:47:19 Apr 01, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 79.364 (3)
  esindex: 0.009
  captures_list: 109.419
  CDXLines.iter: 11.337 (3)
  PetaboxLoader3.datanode: 109.724 (5)
  exclusion.robots: 0.276
  exclusion.robots.policy: 0.261
  RedisCDXSource: 14.749
  PetaboxLoader3.resolve: 129.229 (3)
  load_resource: 180.945
*/