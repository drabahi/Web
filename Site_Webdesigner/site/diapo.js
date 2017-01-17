// JavaScript Document


 var diapoEnCour=0;
var imageEnCours;
var mesImages = new Array();
mesImages[0]="portfolio/IMG_2717.jpg"
mesImages[1]="portfolio/IMG_2855n.jpg"
mesImages[2]="portfolio/IMG_3170n.jpg"
mesImages[3]="portfolio/IMG_2940.jpg"
mesImages[4]="portfolio/IMG_4231_533x355.jpg"
mesImages[5]="portfolio/IMG_4286_800x533.jpg"
mesImages[6]="portfolio/IMG_4328_800x533.jpg"
mesImages[7]="portfolio/IMG_4355_800x533.jpg"
mesImages[8]="portfolio/IMG_4407 _800x533.jpg"
mesImages[9]="portfolio/IMG_4429 _800x533.jpg"
mesImages[10]="portfolio/IMG_4446_800x533.jpg"
mesImages[11]="portfolio/IMG_4505_533x355.jpg"
mesImages[12]="portfolio/IMG_4546_800x533.jpg"
mesImages[13]="portfolio/IMG_4686_800x533.jpg"
mesImages[14]="portfolio/IMG_4720_533x355.jpg"
mesImages[15]="portfolio/IMG_4766_800x533.jpg"
mesImages[16]="portfolio/IMG_4780_800x533.jpg"
mesImages[17]="portfolio/logo.jpg"
mesImages[18]="portfolio/tete_en_fleur.jpg"
mesImages[19]="portfolio/une-clope.jpg"
mesImages[20]="portfolio/XinZhao2.gif"


function initDiaporama(){
imageEnCours=Math.ceil(Math.random() *
mesImages.length -1);	
document.getElementById("diaporama"). src=mesImages[imageEnCours];
}

function imageSuivante(){
	if(imageEnCours ==mesImages.length-1){
		imageEnCours =0;}
	else{imageEnCours ++;}
document.getElementById("diaporama"). src=mesImages[imageEnCours];
	
}

function imageRecedente(){
	if(imageEnCours ==0){
		imageEnCours =mesImages.length-1;}
	else{imageEnCours --;}
document.getElementById("diaporama"). src=mesImages[imageEnCours];
}


var t;

function lecture(){
	diapoEnCour=1;
	if(imageEnCours ==mesImages.length-1){
		imageEnCours =0;}
	else{imageEnCours ++;}
document.getElementById("diaporama"). src=mesImages[imageEnCours];
t=setTimeout("lecture()",1600);
}


function stoplecture(){
	diapoEnCour=0;
	clearTimeout(t);
}

function montreImage(image){
	
	if(diapoEnCour==1){stoplecture();}
	diapoEnCour=0;	
	imageEnCours=image;
	document.getElementById("diaporama").src=mesImages[image];
	
}
	