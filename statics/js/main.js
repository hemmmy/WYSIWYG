'use strict'

function load()
{
	dhtmlframe.document.designMode = "On";
}
function htmledit(excute,values)
{
		if(values==null)
		{
				dhtmlframe.document.execCommand(excute);
		}
		else
		{
				dhtmlframe.document.execCommand(excute,"",values);
		}
}
//fontSize
function changeSize() {
    var selectBox = document.getElementById("fontSizeBox");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	dhtmlframe.document.execCommand('fontSize',"",selectedValue);
}
//fontType
function changeType() {
    var selectBox = document.getElementById("fontTypeBox");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	dhtmlframe.document.execCommand('fontName',"",selectedValue);
}
//fontColor
function changeColor() {
    var selectBox = document.getElementById("fontColorBox");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	dhtmlframe.document.execCommand('foreColor',"",selectedValue);
}

// 본문 이미지 첨부
var imgInp = document.getElementById("img-item");
if(imgInp){
	imgInp.onchange = function() {
		if (imgInp.files && imgInp.files[0]) {
		  var reader = new FileReader();
		  reader.onload = function(event) {
			dhtmlframe.focus();
			htmledit('insertImage', false, event.target.reader);
			imgInp.value = "";
		  }
		  reader.readAsDataURL(imgInp.files[0]);
		}
	  }
}