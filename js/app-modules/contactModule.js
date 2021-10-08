

export class Contact {
    nameValid = false;
    emailValid = false;
    phoneValid = false;
    ageValid = false;
    passwordValid = false;
    confirmPassword = false;
    password = "";
    
    constructor() {
        this.nameInp = $("#nameInput");
        this.nameInp.keyup(() => {
            if (this.nameInp.val()) {
                if (this.testName()) {
                    $("#nameHint").hide();
                    this.nameValid = true;
                    this.testAll();
                } else {
                    $("#nameHint").show();
                    this.nameValid = false;
                    $("#submitBtn").addClass("disabled");
                }
            }

        });

        $("#emailInp").keyup(() => {
            if ($("#emailInp").val()) {
                if (this.testEmail()) {
                    $("#emailHint").hide();
                    this.emailValid = true;
                    this.testAll();
                } else {
                    $("#emailHint").show();
                    console.log("false");
                    this.emailValid = false;
                    $("#submitBtn").addClass("disabled")
                }
            } 

        });

        $("#phoneInp").keyup(() => {
            if ($("#phoneInp").val()) {
                if (this.testPhone()) {
                    $("#phoneHint").hide();
                    this.phoneValid = true;
                    this.testAll();
                } else {
                    $("#phoneHint").show();
                    this.phoneValid = false;
                    $("#submitBtn").addClass("disabled")
                }
            }
        });

        $("#ageInp").keyup(() => {
            if ($("#ageInp").val()) {
                if (this.testAge()) {
                    $("#ageHint").hide();
                    this.ageValid = true;
                    this.testAll();
                } else {
                    $("#ageHint").show();
                    this.ageValid = false;
                    $("#submitBtn").addClass("disabled")
                }
            }
        });

        $("#passwordInp").keyup(() => {
            if ($("#passwordInp").val()) {
                if (this.testPassword()) {
                    $("#passwordHint").hide();
                    this.passwordValid = true;
                    this.password = $("#passwordInp").val();
                    this.testAll();
                } else {
                    $("#passwordHint").show();
                    this.passwordValid = false;
                    $("#submitBtn").addClass("disabled")

                }
            }
        });

        $("#rePasswordInp").keyup(() => {
            if ($("#rePasswordInp").val()) {
                if (this.testRepassword()) {
                    $("#rePasswordHint").hide();
                    this.confirmPassword = true;
                    this.testAll();
                } else {
                    $("#rePasswordHint").show();
                    this.confirmPassword = false;
                    $("#submitBtn").addClass("disabled")
                }
            }
        });


    }

    testAll() {
        if (this.emailValid
        && this.passwordValid
        && this.phoneValid
        && this.ageValid
        && this.nameValid
        && this.confirmPassword
    ) {
        $("#submitBtn").removeClass("disabled")
        }  
    }

    testName() {
        const regex = /^[A-Z][A-z]{1,19}$/;
        let nameVal = $("#nameInput").val();
        return regex.test(nameVal);
    }

    testEmail() {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailVal = $("#emailInp").val();
        return regex.test(emailVal.toLowerCase());
    }

    testPhone() {
        const regex = /^(002|\+2)?(01)[01245]\d{8}$/
        let phoneVal = $("#phoneInp").val();
        return regex.test(phoneVal);
    }

    testAge() {
        const regex = /^([1-9][0-9]|100)$/
        let ageVal = $("#ageInp").val();
        return regex.test(ageVal);
    }

    testPassword() {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\$@#])[0-9a-zA-Z\$@#]{8,}$/
        let passVal = $("#passwordInp").val();
        return regex.test(passVal);
    }

    testRepassword() {
        if ($('#rePasswordInp').val() == this.password) {
            return true;
        }
    }


}