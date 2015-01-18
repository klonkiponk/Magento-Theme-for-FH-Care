jQuery(document).ready(function($) {      
	$("#qty").val("1");
	$("#plus").click(function(){
		var value = parseInt($("#qty").val(),10);
		value = value + 1;
		$("#qty").val(value);
		calculateTotal();		
	});
	$("#minus").click(function(){
		var value = parseInt($("#qty").val(),10);
		if (value == 0) {
			value = 1;
		}
		value = value - 1;
		$("#qty").val(value);
		calculateTotal();		
	});	
	calculateTotal();
	function calculateTotal(){
		
				
		

		
		$('#totalPriceSpan').removeClass('animated pulse');
		var price = $("[id*='product-price-'] .price").text().slice(0,-2);
		//var price = $('#pricecalculator').text().slice(0,-2);								
		var price = price.replace(",",'.');
		var price = parseFloat(price);
		var value = parseInt($("#qty").val(),10);
		var total = value * price;
		var total = total.toFixed(2);
		var total = total.replace(".",",");
		$("#totalPriceSpan").html(total+" €");
		$('#totalPriceSpan').addClass('animated pulse');
		setTimeout(function() {
			$('#totalPriceSpan').removeClass('animated pulse');					
		}, 1000);
		$('.price-box').addClass('animated pulse');
		setTimeout(function() {
			$('.price-box').removeClass('animated pulse');					
		}, 1000);
	};
	
	$("#qty").change(function(){
		calculateTotal();
	});
	
	$(".product-custom-option").change(function(){
		calculateTotal();
	});
	$("#abfuellmengenWrapper .radio").change(function(){
		setTimeout(function() {
			calculateTotal();
		}, 50);
	});	
	$("#abfuellmengenWrapper .label label").each(function(){
		var content = $(this).html();
		var splittedContent = content.split("ml ");
		var ml = splittedContent[0]+'ml';
		var abfuellmenge = splittedContent[1].split(" <span");
		var abfuellmenge = '<span class="abfuellmenge">'+abfuellmenge[0]+'</span>';
		var pricing = splittedContent[1].split(") ");
		var pricing = pricing[1];
		$(this).html(ml+ '&nbsp;' +abfuellmenge);		
	});
	
	
	$('#footer .pull-right a').smoothScroll();
}); 