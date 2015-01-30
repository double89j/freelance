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

$(document).ready(function() {
    $('.datepicker').datepicker({
        format: 'dd MM, yyyy',
        todayBtn: 'linked',
        autoclose: true,
        todayHighlight: true
        // startDate: 'd'
    });
    var validateForm = $('#contactusform').validate({
        rules: {
            guest_name: 'required',
            guest_phone: 'required',
            guest_email: {
                required: true,
                email: true
            }
        },
        messages: {
            guest_name: 'The name is required',
            guest_phone: 'The phone is required',
            guest_email: {
                required: 'The email is required',
                email: 'Please enter a valid email address'
            }
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
    $('#resetBtn').click(function(evt) {
        $('#resetForm').modal('hide');
        validateForm.resetForm();
    });
});