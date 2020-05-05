$(document).ready(function()
{
	 $("#alertSuccess").hide();
	 $("#alertError").hide();
}); 
// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
// Clear -------------
		 $("#alertSuccess").text("");
		 $("#alertSuccess").hide();
		 $("#alertError").text("");
		 $("#alertError").hide();
		// Form validation----------------
		var status = validateItemForm();
		// If not valid-------------------
		if (status != true)
		 {
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
		 }
		// If valid----------------------
		var hospital = getHospitalCard($("#txtName").val().trim(), $("#txtAddress").val().trim(), $("#txtCharge").val().trim(),
							$("#txtPhone").val().trim(), $("#txtCount").val().trim());

				$("#colHospital").append(hospital);
				
				 $("#alertSuccess").text("Saved successfully.");
				 $("#alertSuccess").show();
				
				 $("#formHospital")[0].reset();
});
// REMOVE==========================================
$(document).on("click", ".remove", function(event)
		{
				 $(this).closest(".hospital").remove();
				
				 $("#alertSuccess").text("Removed successfully.");
				 $("#alertSuccess").show();
		}); 

// CLIENT-MODEL=================================================================
	function validateItemForm()
	{
	// NAME
			if ($("#txtName").val().trim() == "")
			 {
					return "Insert Hospital name.";
			 }
			if ($("#txtAddress").val().trim() == "")
			 {
					return "Insert Address.";
			 }
			if ($("#txtCharge").val().trim() == "")
			 {
					return "Insert Charge.";
			 }
			if ($("#txtPhone").val().trim() == "")
			 {
					return "Insert Phone number.";
			 }
			if ($("#txtCount").val().trim() == "")
			 {
					return "Insert Room count.";
			 }
			
			return true; 
	}
	
	function getHospitalCard(name, address, charge, phone, count)
	{
			
			var hospital = "";
			hospital += "<div class=\"hospital card bg-light m-2\"style=\"max-width: 15rem; float: left;\">"; 
			hospital += "<div class=\"card-body\">";
			hospital += "Name :"+ name + " ";
			hospital += "<br>";
			hospital += "Address :"+address + " ";
			hospital += "<br>";
			hospital += "Rs: "+ charge +".00";
			hospital += "<br>";
			hospital += "Phone Number :"+phone + " ";
			hospital += "<br>";
			hospital += "Room Count :"+count + " ";
			hospital += "</div>";
			hospital += "<input type=\"button\" value=\"Remove\"class=\"btn btn-danger remove\">";
			 
			hospital += "</div>";
			return hospital;
	}
