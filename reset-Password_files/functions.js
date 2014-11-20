$(document).ready(function() {
	/*
	function show_products(company_random_characters) {
		asdf = Regex.Replace(company_random_characters, @"[^-A-Za-z0-9+&@#/%?=~_|!:,.;\(\)]", "");
		$.getJSON('/members/products.php?company_random_characters=' + company_random_characters);
	}
	*/
	
	
	
	$('select#select-manufacturer').on('change', function() {
		var random_chars = $('select#select-manufacturer').val();
		var encoded = encodeURIComponent(random_chars);
		$('div#members-products-container').load('products.php?company_random_characters=' + random_chars);
	});
	
	
	$('.transaction-selector').change(function() {
		id = $(this).attr('id');
		value = $(this).val();
		//alert(id);
		$('#message').load('change_transaction_status.php?id=' + id + '&value=' + value).slideToggle().delay(1000).slideToggle();
		//show_message('Saved');
	});
	
	
	// on merchants/view_receipt.php - check if drop-down changes
	$('.transaction-selector').on('change', function() {
		merchant_check_denied_reason();
	});
		merchant_check_denied_reason();
	
	
});

function show_submit_button(id, title) {
	$(id).html('<p><label></label><input type="submit" value="' + title + '" class="button"></p>');
	console.log('99999999999999999999');
}


function show_message(message) {
	$('#message').html(message).slideToggle().delay(1000).slideToggle();
}

function show_search(search_id) {
	$(search_id).slideToggle();
}

function merchant_check_denied_reason() {
	if ($(".transaction-selector").val() == "denied") {
		$("#merchant-reason-denied").slideDown();
	}
	else {
		$("#merchant-reason-denied").slideUp();
	}
}