var curr_lb_div;
var is_modal = false;

function ShowLightBox(lb_div, isModal) {
document.getElementById(lb_div).style.display='block';
document.getElementById('fade').style.display='block';
curr_lb_div = lb_div;
 if (isModal)
	 is_modal = true;
 else is_modal = false;
 
 setCenter(lb_div, isModal);
 //setDimensions(lb_div);
}

function HideLightBox() {
	if (document.getElementById(curr_lb_div)) {
		  document.getElementById(curr_lb_div).style.display='none';
		  document.getElementById('fade').style.display='none';
		  curr_lb_div = '';
	 }
}

function setCenter(lb_div, isModal) {
var div = document.getElementById(lb_div);

var newX = div.offsetWidth / 2;
var newY = div.offsetHeight / 2;

div.style.marginLeft = '-'+newX+'px';
div.style.marginTop = '-'+newY+'px';

}