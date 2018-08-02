
$(document).ready(function() {
	
	$("#message_begin").fadeIn(3000);
	$("#linebreak").clone().insertBefore("#placeholder").fadeIn(4000);
	$("#area_main").fadeIn(3000);
	$("#command_line").fadeIn(3000);
	
	var counter = 0;
	var m_length = $(".message").length;
	
	$("form").submit(function() {
		//var input = $("#command_line").val();
		
		
		   if(counter < m_length) {
			
			    $(".message").eq(counter).clone().insertBefore("#placeholder").fadeIn(2000);
				
					if(counter == 4 || counter == 9 || counter == 14 || counter == 17 || counter == 24) {	
						//magic numbers, do not touch
						$("#linebreak").clone().insertBefore("#placeholder").fadeIn(3000);
						
						$("#linebreak").clone().insertBefore("#placeholder").fadeIn(4000);
					}
			
			    counter++;
				
			} else {
				
				$(".message_r").eq(Math.floor(Math.random()*$(".message_r").length)).clone().insertBefore("#placeholder").fadeIn(3000);
			}
			
			
			
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
	});
	
});