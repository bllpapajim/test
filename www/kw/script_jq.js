    $(document).ready(function() {
        if (window.localStorage.getItem('user') !== undefined || window.localStorage.getItem('user') !== null) {
            $("#username").val(window.localStorage.getItem('user'));
            $("#passwd").val(window.localStorage.getItem('passwd'));
            var username = $("#username").val();
            var passwd = $("#passwd").val();
	    var mobile =1;
            $("#stage2").load('https://kapaweb.gr/controlpanel/login-exec.php', {"passwd": passwd, "username": escape(username), "mobile":mobile} );
        } else {
            var username = $("#username").val();
            var passwd = $("#passwd").val();
            var mobile =1;
            if(username !== '' && passwd!== '') {
                $("#stage2").load('https://kapaweb.gr/controlpanel/login-exec.php', {"passwd": passwd, "username": escape(username), "mobile":mobile} );
            }
        }

        $("#driver").click(function(event){
            var uname = $("#uname").val();
            var password = $("#password").val();
            var cpassword = $("#cpassword").val();
            var mobile = 1;
            $("#stage").load('https://kapaweb.gr/controlpanel/login-exec.php', {"password":password,"cpassword":cpassword,"uname":uname, "mobile":mobile} );
        });


        $("#driver2").click(function(event){
            var passwd = $("#passwd").val();
            var username = $("#username").val();
            window.localStorage.setItem('user', username);
            window.localStorage.setItem('passwd', passwd);
            var mobile = 1;
            $("#stage2").load('https://kapaweb.gr/controlpanel/login-exec.php', {"passwd":passwd,"username":escape(username),"mobile":mobile} );
        });
        var passwd = $("#passwd").val();
        var uname = $("#username").val();

        window.localStorage.setItem('user', username);
        window.localStorage.setItem('passwd', passwd);
        var mobile = 1;
        $("#stage2").load('https://kapaweb.gr/controlpanel/login-exec.php', {"passwd":passwd,"username":escape(username),"mobile":mobile} );
    });
