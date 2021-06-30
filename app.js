/* Fill your code*/
function formValidate() {
    var name = document.forms["RegForm"]["Name"];
    var address = document.forms["RegForm"]["Address"];
    var email = document.forms["RegForm"]["EMail"];
    var pwd = document.forms["RegForm"]["Password"];
    var cpwd = document.forms["RegForm"]["cPassword"];
    var phone = document.forms["RegForm"]["phone"];

    var errname = document.getElementById("name");
    var erraddress = document.getElementById("address");
    var erremail = document.getElementById("email");
    var errpwd = document.getElementById("pwd");
    var errcpwd = document.getElementById("cpwd");
    var errphone = document.getElementById("phone");

    if(name.value == "")
    {
        errname.innerHTML = "Name is Required";
        name.focus();
        return false;
    }
    else if(name.value.length < 8 || name.value.length > 15)
    {
        errname.innerHTML = "Atleast 8 to 15 characters is required";
        name.focus();
        return false;
    }
    else
        errname.innerHTML = "";

    if(address.value == "")
    {
        erraddress.innerHTML = "Kindly fill Address field";
        address.focus();
        return false;
    }  
    else
        erraddress.innerHTML = "";
    
    if(email.value=="")
    {
        erremail.innerHTML= "Kindly fill Email Field";
        email.focus();
        return false;
    }
    else if(email.value.includes("@")== true && email.value.includes(".")== true)
        erremail.innerHTML="";
    else
    {
        erremail.innerHTML="Enter a valid Email";
        email.focus();
        return false;
    }
        
    const pwdValidation=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    if(pwd.value=="")
    {
        errpwd.innerHTML="Kindly fill Password field";
        pwd.focus();
        return false;
    }    
    else if(pwd.value.length <8)
    {
        errpwd.innerHTML="Password should contain atleast 8 characters in length";
        pwd.focus();
        return false;
    }
    else if(pwdValidation.test(pwd.value))
        errpwd.innerHTML="";
    else{
        errpwd.innerHTML="Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number and must contain any one of the following special characters !@#$%^&*()";
        pwd.focus();
        return false;
    }

    if(cpwd.value=="")
    {
        errcpwd.innerHTML="Kindly fill Password field";
        cpwd.focus();
        return false;
    }    
    else if(cpwd.value.length <8)
    {
        errcpwd.innerHTML="Password should contain atleast 8 characters in length";
        cpwd.focus();
        return false;
    }
    else if(pwdValidation.test(cpwd.value))
        errcpwd.innerHTML="";
    else{
        errcpwd.innerHTML="Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number and must contain any one of the following special characters !@#$%^&*()";
        cpwd.focus();
        return false;
    }

    var phoneValidation=/(?=.*\d[0-9])/
    if(phone.value=="")
    {
        errphone.innerHTML="Kindly fill phone number field";
        phone.focus();
        return false;
    }
    else if(phone.value.length < 10 || phone.value.length > 10)
    {
        errphone.innerHTML="Phone number field should contain 10 digits";
        phone.focus();
        return false;
    }
    else if(phone.value.match(phoneValidation))
        errphone.innerHTML="";
    else
    {
        errphone.innerHTML="Kindly fill valid phone number";
        phone.focus();
        return false;
    }
    
    return true;
}