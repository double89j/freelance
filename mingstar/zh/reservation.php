<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function call_message() {
            alert('Form sent.');
        }
    </script>
</head>
<body>
    <?php
        $guest_name = $_POST["guest_name"];
        $guest_phone = $_POST["guest_phone"];
        $guest_email = $_POST["guest_email"];
        $check_in_date = $_POST["check_in_date"];
        $check_out_date = $_POST["check_out_date"];
        $guest_room_type = $_POST["guest_room_type"];
        $adults = $_POST["adults"];
        $kids = $_POST["kids"];
        $remarks = $_POST["remarks"];

        $message .= "<h2>Online Room Reservation</h2>";
        $message .= "<table><tbody>";

        // $message .= "Guest Name: $guest_name<br />";
        // $message .= "Guest Phone: $guest_phone<br />";
        // $message .= "Guest Email: $guest_email<br /><br />";

        // $message .= "Check-In Date: $check_in_date<br />";
        // $message .= "Check-Out Date: $check_out_date<br />";
        // $message .= "Room Type: $guest_room_type<br /><br />";

        // $message .= "No. of Adults: $adults<br />";
        // $message .= "No. of Children: $kids<br /><br /><br />";

        // $message .= "Reamrks: $remarks<br /><br /><br />";

        $message .= "<tr><td style='width:100px;'>Name:</td><td>$guest_name</td></tr>";
        $message .= "<tr><td>Phone:</td><td>$guest_phone</td></tr>";
        $message .= "<tr><td>Email:</td><td>$guest_email</td></tr>";
        $message .= "<tr><td colspan='2'>&nbsp;</td></tr>";

        $message .= "<tr><td>Check-In Date:</td><td>$check_in_date</td></tr>";
        $message .= "<tr><td>Check-Out Date:</td><td>$check_out_date</td></tr>";
        $message .= "<tr><td>Room Type:</td><td>$guest_room_type</td></tr>";
        $message .= "<tr><td colspan='2'>&nbsp;</td></tr>";

        $message .= "<tr><td>No. of Adults:</td><td>$adults</td></tr>";
        $message .= "<tr><td>No. of Kids:</td><td>$kids</td></tr>";
        $message .= "<tr><td colspan='2'>&nbsp;</td></tr>";

        $message .= "<tr><td>Reamrks:</td><td>$remarks</td></tr>";

        $message .= "</table></tbody>";

        $redirect = "thankyou.html";

        require("class.phpmailer.php");

        $mail = new PHPMailer();

        $mail->IsSMTP(); //set mailer to use SMTP
        $mail->Host = "mail.mingstarhotel.com"; // specify SMTP mail server
        $mail->Port = "2525"; // specify SMTP Port
        $mail->SMTPAuth = true; // turn on SMTP authentication
        // $mail->Username = "testuser@mingstarhotel.com"; //Full SMTP username
        // $mail->Password = "TestUser123"; //SMTP password
        $mail->Username = "sales@mingstarhotel.com"; //Full SMTP username
        $mail->Password = "ms6228666/"; //SMTP password

        // $mail->From = "testuser@mingstarhotel.com";
        // $mail->FromName = "testuser@mingstarhotel.com";
        // $mail->AddAddress("testuser@mingstarhotel.com");
        $mail->From = "sales@mingstarhotel.com";
        $mail->FromName = "sales@mingstarhotel.com";
        $mail->AddAddress("sales@mingstarhotel.com");
        $mail->AddReplyTo($email, $name);

        $mail->IsHTML(true); //set email format to HTML
        $mail->CharSet="UTF-8";

        $mail->Subject = "Room Reservation - " . date("D d M, Y h:i:s A");
        $mail->Body = $message;
        // $mail->AltBody = $message;

        if (!$mail->Send()) {
            echo "There was a problem sending the mail. Please try again.";
            exit;
        }

        echo "<script type=\"text/javascript\">alert('Form sent.');</script>";
        echo "call_message();";
        echo "Message has been sent";

        header("Location: $redirect");
    ?>
</body>
</html>