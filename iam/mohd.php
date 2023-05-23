<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = 'your_email@example.com'; // استبدله بعنوان البريد الإلكتروني الذي ترغب في استلام الرسائل عليه

    $subject = 'New Contact Request';
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Message: $message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if(mail($to, $subject, $email_message, $headers)){
        echo "تم إرسال الرسالة بنجاح.";
    } else{
        echo "حدث خطأ أثناء إرسال الرسالة.";
    }
}
?>
