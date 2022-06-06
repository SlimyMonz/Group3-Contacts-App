<?php

	$inData = getRequestInfo();
	
	$searchResults = "";
	$searchCount = 0;

    # config file contains all values needed
    $config = parse_ini_file('config.ini');
    # server, user, pass, database
    $conn = new mysqli($config['hostname'], $config['username'], $config['password'], $config['database']);

	if ($conn->connect_error) 
	{
		returnWithError( $conn->connect_error );
	} 
	else
	{
		$propertyToSeach = $inData["property"] ?: "Name";

		if( $propertyToSeach == "Name")
		{
			$stmt = $conn->prepare("SELECT * FROM Contacts WHERE Name LIKE ? AND UserID=? ORDER BY Name Asc");
		}
		
		else if( $propertyToSeach == "Phone")
		{
			$stmt = $conn->prepare("SELECT * FROM Contacts WHERE Phone LIKE ? AND UserID=? ORDER BY Phone Asc");
		}

		else if( $propertyToSeach == "Email")
		{
			$stmt = $conn->prepare("SELECT * FROM Contacts WHERE Email LIKE ? AND UserID=? ORDER BY Email Asc");
		}

		$contactName = "%" . $inData["search"] . "%";
		$stmt->bind_param("ss", $contactName, $inData["userId"]);
		$stmt->execute();
		
		$result = $stmt->get_result();
		
		while($row = $result->fetch_assoc())
		{
			if( $searchCount > 0 )
			{
				$searchResults .= ",";
			}
			$searchCount++;
			$searchResults .= '{"id":"' . $row["ID"] . '",' . '"name":"' . $row["Name"] . '","phone":"' . $row["Phone"] . '",' . '"email":"' . $row["Email"] . '"}';
		}
		
		if( $searchCount == 0 )
		{
			returnWithError( "No Records Found" );
		}
		else
		{
			returnWithInfo( $searchResults );
		}
		
		$stmt->close();
		$conn->close();
	}

	function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}
	
	function returnWithError( $err )
	{
		$retValue = '{"id":0,"firstName":"","lastName":"","error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
	
	function returnWithInfo( $searchResults )
	{
		$retValue = '{"searchResult":[' . $searchResults . '],"error":""}';
		sendResultInfoAsJson( $retValue );
	}
	
?>