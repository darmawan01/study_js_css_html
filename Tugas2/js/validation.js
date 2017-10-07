function cek() {
	var nama = document.getElementById("nama");
	var m1 = document.getElementById('mName');
	var letters = /^[a-zA-Z]+$/; 
	
	if (nama.value == null || nama.value =="") {
		m1.innerHTML = "Silahkan Isi Nama Anda"
		nama.focus();
	}else{
		if (nama.value.match(letters)) {
			m1.innerHTML ="";
		}else{
			m1.innerHTML ="Nama tidak boleh mengandung angka dan simbol";
		}
	}
}
function cek2() {
	var addr = document.getElementById("pAddr");
	var m2 = document.getElementById('mAddress');
	if (addr.value == null || addr.value =="") {
		m2.innerHTML = "Silahkan Isi Alamat Anda"
		addr.focus();
	}else{
		m2.innerHTML ="";
	}
}
function cek3() {
	var user = document.getElementById("pUser");
	var m3 = document.getElementById('mUser');
	if (user.value == null || user.value =="") {
		m3.innerHTML = "Silahkan Isi Username"
		user.focus();
	}else{
		m3.innerHTML ="";
	}
}
function cek4() {
	var pass = document.getElementById("pPass");
	var m4 = document.getElementById('mPass');
	var letters = /^[a-zA-Z]+$/; 
	var letters2 = /^[0-9]+$/;
	if (pass.value == null || pass.value =="") {
		m4.innerHTML = "Silahkan Isi Password Anda"
		pass.focus();
	}else{
		
		if (pass.value.match(letters) && pass.value.match(letters2)) {
			m4.innerHTML ="";
		}else{
			m4.innerHTML ="password harus berisi dengan alphanumeric";
		}
	}
}
function cek5() {
	var pass2 = document.getElementById("pCpass");
	var m5 = document.getElementById('mCpass');
	if (pass2.value!=pass.value) {
		m5.innerHTML = "Password tidak cocok"
		pass2.focus();
	}else{
		m5.innerHTML = "";
	}
}
function cekall() {
	cek();
	cek2();
	cek3();
	cek4();
	cek5();
}