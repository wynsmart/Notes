var result;
var jxbid;
var result = {success:false};

jxbid = [
"DB66AF1E4A3B005CE043D2220035005C",
"DB66AF1E4A3E005CE043D2220035005C",
"DB190E43942F0190E043D22200360190",
"DB190E4394320190E043D22200360190",
"DB190E43943B0190E043D22200360190",
"DAAF6AB8A89A0092E043D22200350092",
"DAAF6AB8A8A00092E043D22200350092",
"DC092E4F55EB016CE043D2220036016C",
"DC092E4F55EE016CE043D2220036016C",
"DC092E4F55F1016CE043D2220036016C"
];

var i = 0;
fuckIt = function(id){
	if(!result.success){
		result = eval('(' + $.ajax({
			url : "elect.html?method=handleZxxk",
			data : {
				jxbid:id,
				xxlx: 5,
				xklc: top.zxXklcObj.lcid
			},
			async : false
		}).responseText + ')');
		console.log(result);	
		i++;
		i = i % jxbid.length;
	}
	else{
		window.clearInterval(timer);
		console.log("CONGRATULATIONS!!!");
	}
}
//fuck the xuanke system
var timer = window.setInterval("fuckIt(jxbid[i])",500);