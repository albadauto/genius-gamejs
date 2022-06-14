document.getElementById("showPassword").addEventListener('change', function(){
    if (this.checked){
        document.getElementById("senha").type = 'text'
    }else{
        document.getElementById("senha").type = 'password'
    }
})



function verifyPassword(event){
     if (hasNumbers(event.value) && isUpperCase(event.value) && hasSpecialCaracter(event.value)){
        document.getElementById("restricao").style.display = "none";
        document.getElementById("aceita").style.display = "inline";

     }else{
        document.getElementById("restricao").style.display = "inline";
        document.getElementById("aceita").style.display = "none";

     }

     if (hasNumbers(event.value)){
        isNumericCaracter.checked = true;
    }else{
        isNumericCaracter.checked = false;
    }

    if (hasSpecialCaracter(event.value)){
        specialCaracter.checked = true;
    }else{
        specialCaracter.checked = false;
    }

    if (isUpperCase(event.value)){
        isUppercaseCaracter.checked = true;
    }else{
        isUppercaseCaracter.checked = false;
    }

    if (isLowerCase(event.value)){
        lowerCase.checked = true;

    }else{
        lowerCase.checked = false;
    }


}


function hasNumbers(t){
    var regex = /\d/g;
    return regex.test(t);
}  


function isUpperCase(string){
    let regex = /[A-Z]/g;
    return regex.test(string);
}

function hasSpecialCaracter(string){
    let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return regex.test(string);
}

function isLowerCase(string){
    var regex = /[a-z]/;
    return regex.test(string);
}
