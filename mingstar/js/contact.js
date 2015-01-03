/*
    Showing required icon for the mandatory fields
        - http://formvalidation.io/examples/showing-required-icon/
    Bootstrap Validator
        - http://1000hz.github.io/bootstrap-validator/
        - http://formvalidation.io/
    Jsfiddle
        - http://jsfiddle.net/davimoreira/b9yoakyx/
*/

// $('#formbutton').click(function(evt) {
//     evt.preventDefault();
//     console.log($('#inputName').val());
// });

// // $('#contactusform').validator();
// $('#testbutton').click(function(evt) {
//     evt.preventDefault();
//     alert('click');
//     $('#testform').validate({
//         rules: {
//             firstname: {
//                 minlength: 3,
//                 maxlength: 15,
//                 required: true
//             },
//             lastname: {
//                 minlength: 3,
//                 maxlength: 15,
//                 required: true
//             }
//         },
//         highlight: function(element) {
//             $(element).closest('.form-group').addClass('has-error');
//         },
//         unhighlight: function(element) {
//             $(element).closest('.form-group').removeClass('has-error');
//         },
//         errorElement: 'span',
//         errorClass: 'help-block',
//         errorPlacement: function(error, element) {
//             if(element.parent('.input-group').length) {
//                 error.insertAfter(element.parent());
//             } else {
//                 error.insertAfter(element);
//             }
//         }
//     });
});


// alert('contact');
// // $(document).ready(function() {
//     $('#contactusform')
//         // IMPORTANT: You must declare .on('init.field.bv')
//         // before calling .bootstrapValidator(options)
//         .on('init.field.bv', function(e, data) {
//             // data.bv      --> The BootstrapValidator instance
//             // data.field   --> The field name
//             // data.element --> The field element

//             var $parent    = data.element.parents('.form-group'),
//                 $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
//                 options    = data.bv.getOptions(),                      // Entire options
//                 validators = data.bv.getOptions(data.field).validators; // The field validators

//             if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
//                 // The field uses notEmpty validator
//                 // Add required icon
//                 $icon.addClass(options.feedbackIcons.required).show();
//             }
//         })

//         .bootstrapValidator({
//             feedbackIcons: {
//                 required: 'fa fa-asterisk',
//                 valid: 'fa fa-check',
//                 invalid: 'fa fa-times',
//                 validating: 'fa fa-refresh'
//             },
//             fields: {
//                 name: {
//                     validators: {
//                         notEmpty: {
//                             message: 'The name is required'
//                         }
//                     }
//                 },
//                 description: {
//                     validators: {
//                         stringLength: {
//                             max: 300,
//                             message: 'The description must be less than 300 characters long'
//                         }
//                     }
//                 },
//                 price: {
//                     validators: {
//                         notEmpty: {
//                             message: 'The price is required'
//                         },
//                         numeric: {
//                             message: 'The price must be a number'
//                         }
//                     }
//                 },
//                 quantity: {
//                     validators: {
//                         notEmpty: {
//                             message: 'The quantity is required'
//                         },
//                         integer: {
//                             message: 'The quantity must be a number'
//                         }
//                     }
//                 }
//             }
//         })

//         .on('status.field.bv', function(e, data) {
//             // Remove the required icon when the field updates its status
//             var $parent    = data.element.parents('.form-group'),
//                 $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
//                 options    = data.bv.getOptions(),                      // Entire options
//                 validators = data.bv.getOptions(data.field).validators; // The field validators

//             if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
//                 $icon.removeClass(options.feedbackIcons.required).addClass('fa');
//             }
//         });
//     console.log($('#contactusform'));
// // });