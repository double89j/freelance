$(document).ready(function() {

    $('.datepicker').datepicker({
        format: 'dd MM, yyyy',
        todayBtn: 'linked',
        autoclose: true,
        todayHighlight: true
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