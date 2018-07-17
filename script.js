$( document ).ready(function() {
	// links active
	$("#portfolio-link").on("click", function() {
		$("nav > ul > li").css("background", "#32b734;");
	});

	// portfolio - h4 and p appear on hover
	$("#old-portfolio, #drag-and-drop, #smooth-transitions, #code, #bootstrap, #drumkit").mouseover(function() {
		$(".project-description", this).css("visibility", "visible");
	});

	$("#old-portfolio, #drag-and-drop, #smooth-transitions, #code, #bootstrap, #drumkit").mouseout(function() {
		$(".project-description", this).css("visibility", "hidden");
	});


	// display: none - sections
	$(".skills-link").on("click", function() {
		$("#coding, #courses, #passions").css("display", "block");
		$("#home, #portfolio, #contact").css("display", "none");
	});

	$(".portfolio-link").on("click", function() {
		$("#portfolio").css("display", "block");
		$("#home, #coding, #courses, #passions, #contact").css("display", "none");
	});

	$(".contact-link").on("click", function() {
		$("#contact").css("display", "block");
		$("#home, #coding, #courses, #passions, #portfolio").css("display", "none");
	});

	// FORM
	$("form").submit(function(event) {
		var errorMessage = "";

		event.preventDefault();

		if ($("#name").val() == "") {
			errorMessage = errorMessage + "Please enter your name <br/>";
			$("#error").css("visibility", "visible");
		}

		function isValidEmailAddress(emailAddress) {
			var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			return pattern.test(emailAddress);
		}

		if ($("#email").val() == "") {
			errorMessage = errorMessage + "Please enter your email address <br/>";
			$("#error").css("visibility", "visible");
		}

		if (!isValidEmailAddress($("#email").val()) && $("#email").val() != "") {
			errorMessage = errorMessage + "Please enter a valid email address <br/>";
			$("#error").css("visibility", "visible");
		}

		if ($("#message").val() == "") {
			errorMessage = errorMessage + "Please enter your message";
			$("#error").css("visibility", "visible");
		}

		if (errorMessage == "") {
			$("#error").css("color", "green");
			$("#error").css("border", "1px solid green");
			$("#error").html("Your message was sent.");
			$("#error").css("visibility", "visible");
			$(".inputs").val("");
		} else {
			$("#error").html(errorMessage);
		}
	});
});
