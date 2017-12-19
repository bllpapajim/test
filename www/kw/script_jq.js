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
			$("#driver").fadeOut(100);
            var uname = $("#uname").val();
            var password = $("#password").val();
            var cpassword = $("#cpassword").val();
            var mobile = 1;
            $("#stage").load('https://dedicated.gr/index.php', {"password":password,"cpassword":cpassword,"uname":uname, "mobile":mobile} );
			$("#stage2").load('http://homeburger.gr/app2/order.php', {"passwd":passwd,"uname":escape(uname),"mobile":mobile} );
			
            $("#stage").load('https://kapaweb.gr/controlpanel/login-exec.php', {"password":password,"cpassword":cpassword,"uname":uname, "mobile":mobile} );
			$("#driver").fadeIn(2000);
        });


        $("#driver2").click(function(event){
			$("#driver2").fadeOut(100);
            var passwd = $("#passwd").val();
            var username = $("#username").val();
            window.localStorage.setItem('user', username);
            window.localStorage.setItem('passwd', passwd);
            var mobile = 1;
            $("#stage2").load('https://kapaweb.gr/controlpanel/login-exec.php', {"passwd":passwd,"username":escape(username),"mobile":mobile} );
			$("#driver2").fadeIn(2000);
        });
        var passwd = $("#passwd").val();
        var uname = $("#username").val();

        window.localStorage.setItem('user', username);
        window.localStorage.setItem('passwd', passwd);
        var mobile = 1;
        $("#stage2").load('https://kapaweb.gr/controlpanel/login-exec.php', {"passwd":passwd,"username":escape(username),"mobile":mobile} );
    });
