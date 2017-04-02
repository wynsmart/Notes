(function (){
	var rlh = document.createElement("div");
	document.body.appendChild(rlh);
	rlh.id = "redline-helper";
	rlh.style.pointerEvents = "none";
	rlh.style.position = "absolute";
    rlh.style.zIndex = 999;
	rlh.style.left = "0px";
	rlh.style.width = "100%";
	rlh.style.height = "2px";
	rlh.style.backgroundColor = "red";
	rlh.style.opacity = 0.5;

	window.addEventListener("mousemove", function(e){
		var hl = document.getElementById("redline-helper");
		hl.style.top = e.pageY+"px";
	});
})();
