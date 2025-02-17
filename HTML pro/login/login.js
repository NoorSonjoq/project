let sta = 'Homepage.html';
let errpass=document.getElementById('errorpass');
function login(){
    console.log('Test'); 
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        console.log(response);
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Invalid email or password");
        }
    })
     .then((data) => {
    console.log(data);
    localStorage.setItem('token', data.token);
    window.location.href = sta;
     })
     .catch((error) => {
        errpass.innerText = error.message; 
    });
            }
            function togglePassword() {
                const passField = document.getElementById('password');
                const toggleIcon = document.querySelector('.toggle-pass');
            
                if (passField.type === 'password') {
                    passField.type = 'text';
                    toggleIcon.classList.remove('fa-eye-slash');
                    toggleIcon.classList.add('fa-eye');
                } else {
                    passField.type = 'password';
                    toggleIcon.classList.remove('fa-eye');
                    toggleIcon.classList.add('fa-eye-slash');
                }
            }


            function onSignIn(googleUser) {
                var profile = googleUser.getBasicProfile();
                var idToken = googleUser.getAuthResponse().id_token;
            
                fetch('/auth/google', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ idToken: idToken })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        window.location.href = '/dashboard';
                    } else {
                        console.log('فشل تسجيل الدخول');
                    }
                })
                .catch(error => console.error('Error:', error));
            }
            