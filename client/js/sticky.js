	function pricingSticky(){
		window.onscroll = function() { stickyFunction() };

		var fixHead = document.getElementById("fix-head");
		var sticky = fixHead.offsetTop;

		function stickyFunction() {
		  if (window.pageYOffset > sticky) {
		    fixHead.classList.add("sticky");
		  } else {
		    fixHead.classList.remove("sticky");
		  }
		}
	}
	pricingSticky();


	








