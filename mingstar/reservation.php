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
        $guest_room_type = $_POST["guest_room_type"];
        $adults = $_POST["adults"];
        $children = $_POST["children"];
        $guest_note = $_POST["guest_note"];

        $message .= "Online Room Reservation:<br /><br />";
        $message .= "Guest Name: $guest_name<br />";
        $message .= "Guest Phone: $guest_phone<br />";
        $message .= "Guest Email: $guest_email<br /><br />";
        $message .= "Check-in Date: $check_in_date<br />";
        $message .= "Room Type: $guest_room_type<br /><br />";
        $message .= "No. of Adults: $adults<br />";
        $message .= "No. of Children: $children<br /><br /><br />";
        $message .= "Note: $guest_note<br /><br /><br />";

        $redirect = "contact.html";

        require("class.phpmailer.php");

        $mail = new PHPMailer();

        $mail->IsSMTP(); //set mailer to use SMTP
        $mail->Host = "mail.mingstarhotel.com"; // specify SMTP mail server
        $mail->Port = "2525"; // specify SMTP Port
        $mail->SMTPAuth = true; // turn on SMTP authentication
        $mail->Username = "testuser@mingstarhotel.com"; //Full SMTP username
        $mail->Password = "TestUser123"; //SMTP password

        $mail->From = "testuser@mingstarhotel.com";
        $mail->FromName = "testuser@mingstarhotel.com";
        $mail->AddAddress("testuser@mingstarhotel.com");
        $mail->AddReplyTo($email, $name);

        $mail->IsHTML(true); //set email format to HTML

        $mail->Subject = "Room Reservation" . date("D d M, Y h:m:s A");
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