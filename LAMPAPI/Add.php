<?php
    $inData = getRequestInfo();

    # config file contains all values needed
    $config = parse_ini_file('config.ini');
    # server, user, pass, database
    $conn = new mysqli($config['hostname'], $config['username'], $config['password'], $config['database']);

	if( $conn->connect_error )
	{
		returnWithError( $conn->connect_error );
	}
	else
	{
        $stmt = $conn->prepare("INSERT into Contacts (Name, Phone, Email, UserID) VALUES(?,?,?,?)");
		$stmt->bind_param("ssss", $inData["name"], $inData["phone"], $inData["email"], $inData["userId"]);
		$stmt->execute();
        $stmt->close();
		$conn->close();
		returnWithError("");
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
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
?>