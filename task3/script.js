function validate(){
$(document).ready(function(){
    $('#form-detail').validate({
        rules:{
            'uname':{
                required:true,
                maxlength:12,
                minlength:2
            },
            'email':{
                required:true,
                email:true,
            },
            'password':{
                required:true,
                
            },
            'mobile':{
                required:true,
                patternm:/^([0-9]{3}-[0-9]{3}-[0-9]{4})$/
            }
        },
        messages:{
            'required':"Please enter a valid username with alphabets .",
            'required':"This field is required.",
            'email'   :"This field is required",
            'email'   :"Email should follow abc@gmail.com format",
            'required':"This field is required",
            'patternp':"Password should contain numbers,alphabets,special characters etc",
            'required':"This field is required",
            'patternm':"Mobile number should follow 999-999-9999",
        }
    });
});
}