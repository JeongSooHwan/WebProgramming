function firstScreen() {
	$('dl').html("");

	var mon_txt = "";
	var tue_txt = "";
	var wed_txt = "";
	var thu_txt = "";
	var fri_txt = "";

	$.ajax({
		url : "jsp/Monday.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data) {
			mon_txt = data;
			// alert(mon_txt);
		},
		error : function(xhr, message, errorThrown) {
		}
	});

	$.ajax({
		url : "jsp/Tuesday.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data) {
			tue_txt = data;
			// alert(tue_txt);
		},
		error : function(xhr, message, errorThrown) {
		}
	});

	$.ajax({
		url : "jsp/Wednesday.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data) {
			wed_txt = data;
		},
		error : function(xhr, message, errorThrown) {
		}
	});

	$.ajax({
		url : "jsp/Thursday.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data) {
			thu_txt = data;
		},
		error : function(xhr, message, errorThrown) {
		}
	});

	$.ajax({
		url : "jsp/Friday.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data) {
			fri_txt = data;
		},
		error : function(xhr, message, errorThrown) {
		}
	});

	/* 월요일 txt 읽어서 돔구조 추가 */
	var n_MonArr = mon_txt.split('/');
	var mon_items = mon_txt.match(/-/g);
	if (mon_items != null) {
		for (var i = 0; i < mon_items.length; i++) {
			var mon_item = n_MonArr[i].split('-');
			var titlevalue = mon_item[0];
			var textareavalue = mon_item[1];

			var litemp = document.createElement('li');
			var divtemp = document.createElement('div');
			var titleNode = document.createTextNode(titlevalue);
			var divcontent = document.createElement('div');
			var textareaNode = document.createTextNode(textareavalue);
			var divcheckBox = document.createElement('div');
			var checkBox = document.createElement('input');
			divcheckBox.appendChild(checkBox);
			divtemp.appendChild(divcheckBox);
			divtemp.appendChild(titleNode);
			divtemp.appendChild(divcontent);
			divcontent.appendChild(textareaNode);
			litemp.appendChild(divtemp);

			checkBox.setAttribute("type", "checkBox");
			checkBox.setAttribute("id", "id_checkBox");
			checkBox.style = "position: relative; right: 50px; width:17px; height:17px;";
			checkBox.setAttribute("onClick", "ifchecked(event)");
			divtemp.style = "cursor:pointer; border: solid 2px black; font-size: 20px; height: 80px; border-radius: 5px; margin: 10px;";
			divtemp.setAttribute("onClick", "clickRevision(event)");
			divcontent.style = "display: none;";
			mondl.appendChild(litemp);
			document.getElementById('mondiv').appendChild(mondl);
		}
	}

	/* 화요일 txt 읽어서 돔구조 추가 */
	var n_TueArr = tue_txt.split('/');
	var tue_items = tue_txt.match(/-/g);
	if (tue_items != null) {
		for (var i = 0; i < tue_items.length; i++) {
			var tue_item = n_TueArr[i].split('-');
			var titlevalue = tue_item[0];
			var textareavalue = tue_item[1];

			var litemp = document.createElement('li');
			var divtemp = document.createElement('div');
			var titleNode = document.createTextNode(titlevalue);
			var divcontent = document.createElement('div');
			var textareaNode = document.createTextNode(textareavalue);
			var divcheckBox = document.createElement('div');
			var checkBox = document.createElement('input');

			divcheckBox.appendChild(checkBox);
			divtemp.appendChild(divcheckBox);
			divtemp.appendChild(titleNode);
			divtemp.appendChild(divcontent);
			divcontent.appendChild(textareaNode);
			litemp.appendChild(divtemp);

			checkBox.setAttribute("type", "checkBox");
			checkBox.setAttribute("id", "id_checkBox");
			checkBox.style = "position: relative; right: 50px; width:17px; height:17px;";
			checkBox.setAttribute("onClick", "ifchecked(event)");
			divtemp.style = "cursor:pointer; border: solid 2px black; font-size: 20px; height: 80px; border-radius: 5px; margin: 10px;";
			divtemp.setAttribute("onClick", "clickRevision(event)");
			divcontent.style = "display: none;";
			tuedl.appendChild(litemp);
		}
	}

	/* 수요일 txt 읽어서 돔구조 추가 */
	var n_WedArr = wed_txt.split('/');
	var wed_items = wed_txt.match(/-/g);
	if (wed_items != null) {
		for (var i = 0; i < wed_items.length; i++) {
			var wed_item = n_WedArr[i].split('-');
			var titlevalue = wed_item[0];
			var textareavalue = wed_item[1];

			var litemp = document.createElement('li');
			var divtemp = document.createElement('div');
			var titleNode = document.createTextNode(titlevalue);
			var divcontent = document.createElement('div');
			var textareaNode = document.createTextNode(textareavalue);
			var divcheckBox = document.createElement('div');
			var checkBox = document.createElement('input');

			divcheckBox.appendChild(checkBox);
			divtemp.appendChild(divcheckBox);
			divtemp.appendChild(titleNode);
			divtemp.appendChild(divcontent);
			divcontent.appendChild(textareaNode);
			litemp.appendChild(divtemp);

			checkBox.setAttribute("type", "checkBox");
			checkBox.setAttribute("id", "id_checkBox");
			checkBox.style = "position: relative; right: 50px; width:17px; height:17px;";
			checkBox.setAttribute("onClick", "ifchecked(event)");
			divtemp.style = "cursor:pointer; border: solid 2px black; font-size: 20px; height: 80px; border-radius: 5px; margin: 10px;";
			divtemp.setAttribute("onClick", "clickRevision(event)");
			divcontent.style = "display: none;";
			weddl.appendChild(litemp);
		}
	}

	/* 목요일 txt 읽어서 돔구조 추가 */
	var n_ThuArr = thu_txt.split('/');
	var thu_items = thu_txt.match(/-/g);
	if (thu_items != null) {
		for (var i = 0; i < thu_items.length; i++) {
			var thu_item = n_ThuArr[i].split('-');
			var titlevalue = thu_item[0];
			var textareavalue = thu_item[1];

			var litemp = document.createElement('li');
			var divtemp = document.createElement('div');
			var titleNode = document.createTextNode(titlevalue);
			var divcontent = document.createElement('div');
			var textareaNode = document.createTextNode(textareavalue);
			var divcheckBox = document.createElement('div');
			var checkBox = document.createElement('input');

			divcheckBox.appendChild(checkBox);
			divtemp.appendChild(divcheckBox);
			divtemp.appendChild(titleNode);
			divtemp.appendChild(divcontent);
			divcontent.appendChild(textareaNode);
			litemp.appendChild(divtemp);

			checkBox.setAttribute("type", "checkBox");
			checkBox.setAttribute("id", "id_checkBox");
			checkBox.style = "position: relative; right: 50px; width:17px; height:17px;";
			checkBox.setAttribute("onClick", "ifchecked(event)");
			divtemp.style = "cursor:pointer; border: solid 2px black; font-size: 20px; height: 80px; border-radius: 5px; margin: 10px;";
			divtemp.setAttribute("onClick", "clickRevision(event)");
			divcontent.style = "display: none;";
			thudl.appendChild(litemp);
		}
	}

	/* 금요일 txt 읽어서 돔구조 추가 */
	var n_FriArr = fri_txt.split('/');
	var fri_items = fri_txt.match(/-/g);
	if (fri_items != null) {
		for (var i = 0; i < fri_items.length; i++) {
			var fri_item = n_FriArr[i].split('-');
			var titlevalue = fri_item[0];
			var textareavalue = fri_item[1];

			var litemp = document.createElement('li');
			var divtemp = document.createElement('div');
			var titleNode = document.createTextNode(titlevalue);
			var divcontent = document.createElement('div');
			var textareaNode = document.createTextNode(textareavalue);
			var divcheckBox = document.createElement('div');
			var checkBox = document.createElement('input');

			divcheckBox.appendChild(checkBox);
			divtemp.appendChild(divcheckBox);
			divtemp.appendChild(titleNode);
			divtemp.appendChild(divcontent);
			divcontent.appendChild(textareaNode);
			litemp.appendChild(divtemp);

			checkBox.setAttribute("type", "checkBox");
			checkBox.setAttribute("id", "id_checkBox");
			checkBox.style = "position: relative; right: 50px; width:17px; height:17px;";
			checkBox.setAttribute("onClick", "ifchecked(event)");
			divtemp.style = "cursor:pointer; border: solid 2px black; font-size: 20px; height: 80px; border-radius: 5px; margin: 10px;";
			divtemp.setAttribute("onClick", "clickRevision(event)");
			divcontent.style = "display: none;";
			fridl.appendChild(litemp);
		}
	}

}

/* Add Todo 버튼을 눌렀을 때 */
function clickATD() {
	document.getElementById('writingTransparentBorder').style.display = "inline";
	document.getElementById('writingFormContainer').style.display = "inline";
	document.getElementById('XBtn').style.display = "inline";
}

/* Add Todo 창 닫기 */
function clickX() {
	document.getElementById('writingTransparentBorder').style.display = "none";
	document.getElementById('writingFormContainer').style.display = "none";
	document.getElementById('XBtn').style.display = "none";
	document.getElementById('addTitle').value = "";
	document.getElementById('addContents').value = "";
}

/* Add Todo에서 내용을 입력하고 Add를 눌렀을 때 */
function clickAdd() {
	firstScreen();
	$.ajax({
		type : "POST",
		url : "HW2_201402430_add.jsp",
		async : false,
		data : {
			"day" : document.getElementById('addDay').value,
			"title" : document.getElementById('addTitle').value,
			"contents" : document.getElementById('addContents').value
		},
		success : function(xml) {
			// console.log(xml);
		},
		error : function(xhr, status, error) {
			// alert(error);
		}
	});

	var titlevalue = document.getElementById('addTitle').value;
	var textareavalue = document.getElementById('addContents').value;
	var litemp = document.createElement('li');
	var divtemp = document.createElement('div');
	var titleNode = document.createTextNode(titlevalue);
	var divcontent = document.createElement('div');
	var textareaNode = document.createTextNode(textareavalue);
	var divcheckBox = document.createElement('div');
	var checkBox = document.createElement('input');

	divcheckBox.appendChild(checkBox);
	divtemp.appendChild(divcheckBox);
	divtemp.appendChild(titleNode);
	divtemp.appendChild(divcontent);
	divcontent.appendChild(textareaNode);
	litemp.appendChild(divtemp);

	checkBox.setAttribute("type", "checkBox");
	checkBox.setAttribute("id", "id_checkBox");
	checkBox.style = "position: relative; right: 50px; width:17px; height:17px;";
	checkBox.setAttribute("onClick", "ifchecked(event)");
	divtemp.style = "cursor:pointer; border: solid 2px black; font-size: 20px; height: 80px; border-radius: 5px; margin: 10px;";
	divtemp.setAttribute("onClick", "clickRevision(event)");
	divcontent.style = "display: none;";

	var MonToFri = document.getElementById('addDay').value;
	switch (MonToFri) {
	case "Monday":
		mondl.appendChild(litemp);
		break;

	case "Tuesday":
		tuedl.appendChild(litemp);
		break;

	case "Wednesday":
		weddl.appendChild(litemp);
		break;

	case "Thursday":
		thudl.appendChild(litemp);
		break;

	case "Friday":
		fridl.appendChild(litemp);
		break;
	}
	clickX();
}
/* checkBox 눌렀을 때 */
function ifchecked(event) {
	event.stopPropagation();
}

/* 빨간색 Delete 눌렀을 때 */
function Alldelete() {
	var checked_MonArr = [];
	var checked_TueArr = [];
	var checked_WedArr = [];
	var checked_ThuArr = [];
	var checked_FriArr = [];

	for (var i = mondl.children.length - 1; i >= 0; i--) {
		if (mondl.childNodes[i].firstChild.firstChild.firstChild.checked == true) {
			checked_MonArr.push(mondl.childNodes[i].firstChild.innerText,
					mondl.childNodes[i].firstChild.childNodes[2].innerText);
			mondl.childNodes[i].remove(this);
		}
	}

	for (var i = tuedl.children.length - 1; i >= 0; i--) {
		if (tuedl.childNodes[i].firstChild.firstChild.firstChild.checked == true) {
			checked_TueArr.push(tuedl.childNodes[i].firstChild.innerText,
					tuedl.childNodes[i].firstChild.childNodes[2].innerText);
			tuedl.childNodes[i].remove(this);
		}
	}

	for (var i = weddl.children.length - 1; i >= 0; i--) {
		if (weddl.childNodes[i].firstChild.firstChild.firstChild.checked == true) {
			checked_WedArr.push(weddl.childNodes[i].firstChild.innerText,
					weddl.childNodes[i].firstChild.childNodes[2].innerText);
			weddl.childNodes[i].remove(this);
		}
	}

	for (var i = thudl.children.length - 1; i >= 0; i--) {
		if (thudl.childNodes[i].firstChild.firstChild.firstChild.checked == true) {
			checked_ThuArr.push(thudl.childNodes[i].firstChild.innerText,
					thudl.childNodes[i].firstChild.childNodes[2].innerText);
			thudl.childNodes[i].remove(this);
		}
	}

	for (var i = fridl.children.length - 1; i >= 0; i--) {
		if (fridl.childNodes[i].firstChild.firstChild.firstChild.checked == true) {
			checked_FriArr.push(fridl.childNodes[i].firstChild.innerText,
					fridl.childNodes[i].firstChild.childNodes[2].innerText);
			fridl.childNodes[i].remove(this);
		}
	}
}

function clickX1() {
	document.getElementById('writingTransparentBorder1').style.display = "none";
	document.getElementById('writingFormContainer1').style.display = "none";
	document.getElementById('XBtn1').style.display = "none";
}

function clickRevision(event) {

	document.getElementById('writingTransparentBorder1').style.display = "inline";
	document.getElementById('writingFormContainer1').style.display = "inline";
	document.getElementById('XBtn1').style.display = "inline";
	document.getElementById('XBtn1').setAttribute("onclick", "clickX1()");

	var title = document.getElementById('RevTitle');
	var con = document.getElementById('RevContents');
	var target_yoil = event.target.parentNode.parentNode.id;
	title.value = event.target.innerText;
	con.value = event.target.childNodes[2].innerText;
	var t_v = title.value;
	var c_v = con.value;

	document.getElementById('DoneBtn').onclick = function() {
		// title과 contents 수정
		event.target.childNodes[1].data = title.value;
		event.target.childNodes[2].childNodes[0].data = con.value;

		/* 수정 후 보내는 데이터 */
		$.ajax({
			type : "POST",
			url : "HW2_201402430_revision.jsp",
			async : false,
			data : {
				"yoil" : target_yoil,
				"before_title" : t_v,
				"before_contents" : c_v,
				"after_title" : document.getElementById('RevTitle').value,
				"after_contents" : document.getElementById('RevContents').value
			},
			success : function(xml) {
			},
			error : function(xhr, status, error) {
			}
		});

		clickX1();
	};

}

// 검색
function search() {
	var input_text = document.getElementById('textbox').value;
	var input_yoil = document.getElementById('daylist').value;

	switch (input_yoil) {
	case "day":
		for (var i = mondl.children.length - 1; i >= 0; i--) {
			if (mondl.childNodes[i].firstChild.innerText.match(input_text)) {
				mondl.childNodes[i].style.display = "block";
			} else {
				mondl.childNodes[i].style.display = "none";
			}
		}
		for (var i = tuedl.children.length - 1; i >= 0; i--) {
			if (tuedl.childNodes[i].firstChild.innerText.match(input_text)) {
				tuedl.childNodes[i].style.display = "block";
			} else {
				tuedl.childNodes[i].style.display = "none";
			}
		}
		for (var i = weddl.children.length - 1; i >= 0; i--) {
			if (weddl.childNodes[i].firstChild.innerText.match(input_text)) {
				weddl.childNodes[i].style.display = "block";
			} else {
				weddl.childNodes[i].style.display = "none";
			}
		}
		for (var i = thudl.children.length - 1; i >= 0; i--) {
			if (thudl.childNodes[i].firstChild.innerText.match(input_text)) {
				thudl.childNodes[i].style.display = "block";
			} else {
				thudl.childNodes[i].style.display = "none";
			}
		}
		for (var i = fridl.children.length - 1; i >= 0; i--) {
			if (fridl.childNodes[i].firstChild.innerText.match(input_text)) {
				fridl.childNodes[i].style.display = "block";
			} else {
				fridiv.childNodes[i].style.display = "none";
			}
		}
		break;

	case "Mon":
		for (var i = mondl.children.length - 1; i >= 0; i--) {
			if (mondl.childNodes[i].firstChild.innerText.match(input_text)) {
				mondl.childNodes[i].style.display = "block";
			} else {
				mondl.childNodes[i].style.display = "none";
			}
		}
		tuedl.style.display = "none";
		weddl.style.display = "none";
		thudl.style.display = "none";
		fridl.style.display = "none";
		break;

	case "Tue":
		for (var i = tuedl.children.length - 1; i >= 0; i--) {
			if (tuedl.childNodes[i].firstChild.innerText.match(input_text)) {
				tuedl.childNodes[i].style.display = "block";
			} else {
				tuedl.childNodes[i].style.display = "none";
			}
		}
		mondl.style.display = "none";
		weddl.style.display = "none";
		thudl.style.display = "none";
		fridl.style.display = "none";
		break;

	case "Wed":
		for (var i = weddl.children.length - 1; i >= 0; i--) {
			if (weddl.childNodes[i].firstChild.innerText.match(input_text)) {
				weddl.childNodes[i].style.display = "block";
			} else {
				weddl.childNodes[i].style.display = "none";
			}
		}
		mondl.style.display = "none";
		tuedl.style.display = "none";
		thudl.style.display = "none";
		fridl.style.display = "none";
		break;

	case "Thu":
		for (var i = thudl.children.length - 1; i >= 0; i--) {
			if (thudl.childNodes[i].firstChild.innerText.match(input_text)) {
				thudl.childNodes[i].style.display = "block";
			} else {
				thudl.childNodes[i].style.display = "none";
			}
		}
		mondl.style.display = "none";
		tuedl.style.display = "none";
		weddl.style.display = "none";
		fridl.style.display = "none";
		break;

	case "Fri":
		for (var i = fridl.children.length - 1; i >= 0; i--) {
			if (fridl.childNodes[i].firstChild.innerText.match(input_text)) {
				fridl.childNodes[i].style.display = "block";
			} else {
				fridl.childNodes[i].style.display = "none";
			}
		}
		mondl.style.display = "none";
		tuedl.style.display = "none";
		weddl.style.display = "none";
		thudl.style.display = "none";
		break;
	}
}

$(function() {
	$("#mondl, #tuedl, #weddl, #thudl, #fridl").sortable({
		connectWith : "#mondl, #tuedl, #weddl, #thudl, #fridl",
		start : function(event, ui) {
			ui.item.toggleClass("highlight");
		},
		stop : function(event, ui) {
			ui.item.toggleClass("highlight");
		}
	});
	$("#mondl, #tuedl, #weddl, #thudl, #fridl").disableSelection();
});
