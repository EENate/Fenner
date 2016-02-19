<?php

	require("constants.php");
	//1. Create a database connection
	$connection = mysql_connect(DB_SERVER, DB_USER, DB_PASS);
	
	// Checks to see if there is an active database connection
	if (!$connection) {
		die("This did not work because of: " . mysql_error());	
	}
	
	//2. Select database to use
	$db_select = mysql_select_db(DB_NAME,$connection);
	if (!$db_select) {
		die("Database connection failed: " . mysql_error());	
	}
?>