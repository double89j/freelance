/*
    Showing required icon for the mandatory fields
        - http://formvalidation.io/examples/showing-required-icon/
    Bootstrap Validator
        - http://1000hz.github.io/bootstrap-validator/
        - http://formvalidation.io/
    Jsfiddle
        - http://jsfiddle.net/davimoreira/b9yoakyx/
    Bootstrap DatetimePicker
        - http://eonasdan.github.io/bootstrap-datetimepicker/
    Bootstrap DatePicker
        - https://bootstrap-datepicker.readthedocs.org/en/release/#
*/

$('#datepicker').datepicker({
    format: 'dd MM, yyyy',
    todayBtn: 'linked',
    autoclose: true,
    todayHighlight: true
});
$('#contactusform').validate({
    rules: {
        name: 'required',
        phone: 'required',
        email: 'required'
        // firstname: "required",
        // lastname: "required",
        // username: {
        //     required: true,
        //     minlength: 2
        // },
        // password: {
        //     required: true,
        //     minlength: 5
        // },
        // confirm_password: {
        //     required: true,
        //     minlength: 5,
        //     equalTo: "#password"
        // },
        // email: {
        //     required: true,
        //     email: true
        // },
        // topic: {
        //     required: "#newsletter:checked",
        //     minlength: 2
        // },
        // agree: "required"
    },
    messages: {
        name: 'The name is required.',
        phone: 'The phone is required.',
        email: 'The email is required.'
        // firstname: "Please enter your firstname",
        // lastname: "Please enter your lastname",
        // username: {
        //     required: "Please enter a username",
        //     minlength: "Your username must consist of at least 2 characters"
        // },
        // password: {
        //     required: "Please provide a password",
        //     minlength: "Your password must be at least 5 characters long"
        // },
        // confirm_password: {
        //     required: "Please provide a password",
        //     minlength: "Your password must be at least 5 characters long",
        //     equalTo: "Please enter the same password as above"
        // },
        // email: "Please enter a valid email address",
        // agree: "Please accept our policy"
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});
// $('#formbutton').click(function(evt) {
//     evt.preventDefault();
//     alert('under development');
// });