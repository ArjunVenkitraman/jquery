function validate(){
$(document).ready(function(){
    $('#form-detail').validate({
        rules:{
            uname:{ 
                required:true,
                maxlength:12,
                minlength:2,
                pattern: /^[a-zA-Z]+$/
            },
            email:{
                required:true,
                email:true,
            },
            password:{
                required:true,
                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#])[A-Za-z\d@$#]{8,16}$/
            },
            mobile:{
                required:true,
                pattern:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
            },
        },
        messages:{
            uname:{
            required:"Please enter a valid username with alphabets .",
            maxlength:"Username should not exeed 12 characters",
            minlength:"Username should be atleast 2 characters",
            pattern:"It should contain only alphabets"
            },
            email:{
            required:"This field is required.",
            email   :"Email should follow abc@gmail.com format",
            },
            password:{
            required:"This field is required",
            pattern:"Password should contain numbers,alphabets,special characters etc",
            },
            mobile:{
            required:"This field is required",
            pattern:"Mobile number should follow 999-999-9999",
            },
        },
    });
});
}