<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hospital Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Componets/jquery-3.3.1.min.js"></script>
<script src="Componets/main.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">

				<h1 class="m-3">Hospital details</h1>

				<form id="formHospital">

					<!-- NAME -->
					<div class="input-group input-group-sm mb-3">
					
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Name: </span>
						</div>
						<input type="text" id="txtName" name="txtName">
					</div>
					<!-- ADDRESS -->
					<div class="input-group input-group-sm mb-3">
					
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Address: </span>
						</div>
						<input type="text" id="txtAddress" name="txtAddress">
					</div>
					
					<!-- Charge -->
					<div class="input-group input-group-sm mb-3">
					
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Charge: </span>
						</div>
						<input type="text" id="txtCharge" name="txtCharge">
					</div>
					
					<!-- PHONE -->
					<div class="input-group input-group-sm mb-3">
					
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Phone Number: </span>
						</div>
						<input type="text" id="txtPhone" name="txtPhone">
					</div>
					
					<!-- ROOMCOUNT -->
					<div class="input-group input-group-sm mb-3">
					
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Room Count: </span>
						</div>
						<input type="text" id="txtCount" name="txtCount">
					</div>
					
					
					
					<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div>
					<input type="button" id="btnSave" value="Save"
						class="btn btn-primary">
				</form>
			</div>
		</div>

		<br>

		<div class="row">
			<div class="col-12" id="colHospital"></div>
		</div>
	</div>
</body>

<!--  
<h2>Jersey RESTful Web Application!</h2>
<p>
	<a href="webresources/hospitals">Jersey resource</a>
<p>
	Visit the <a href="http://jersey.java.net">Project Jersey website</a>
	for more information on Jersey!
-->	
</html>