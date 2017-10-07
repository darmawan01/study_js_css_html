function kosong() {
	var nama = document.getElementById('nama').value="";
	var hadir = document.getElementById('hadir').value ="";
	var pot = document.getElementById('pot').value ="";
	var m = document.getElementById('mHadir').value ="";
	var gaji = document.getElementById('pokok').value ="";
	var tot = document.getElementById('total').value ="";
}
function cek() {
	var nama = document.getElementById('nama');
	var m1 = document.getElementById('mNama');
	var pattern = /^[a-zA-Z]+$/;
	if (nama.value == null || nama.value == "") {
		m1.innerHTML = "Nama Tidak boleh kosong";
		nama.focus();
	}else{
		if (!nama.value.match(pattern)) {
			m1.innerHTML = "Nama hanya berisi huruf";
		}else{
			m1.innerHTML ="";
		}
	}
}
function cek2() {
	var pend = document.getElementById('pend');
	var gaji = document.getElementById('pokok');
	if (pend.value == "sma") {
		gaji.value="1500000";
	}
	if (pend.value == "s1") {
		gaji.value="2500000";
	}
	if (pend.value =="s2"){
		gaji.value="3500000";
	}
}
function cek3() {
	var hadir = document.getElementById('hadir');
	var pot = document.getElementById('pot');
	var m = document.getElementById('mHadir');
	var gaji = document.getElementById('pokok');
	var tot = document.getElementById('total');
	var pattern = /^[0-9]+$/;
	if (hadir.value == null || hadir.value == "") {
		m.innerHTML="Jumlah Kehadiran tidak Boleh kosong";
		hadir.focus();
	}else{  
		if (!hadir.value.match(pattern)) {
			m.innerHTML = "Tolong inputkan angka dan angka harus positif";
			hadir.focus();
		}else{
			if (hadir.value < 0) {
				m.innerHTML = "Jumlah Kehadiran tidak boleh minus";
				hadir.focus();
			}else{
				if (hadir.value > 31) {
					m.innerHTML = "Jumlah kehadiran tidak lebih dari 1 bulan";
					hadir.focus();
				}else{
					m.innerHTML = "";
					if (hadir.value >=25) {
						pot.value = 0;
					}else if (hadir.value >= 15) {
						pot.value = gaji.value/2;
					}else if (hadir.value > 7) {
						pot.value = gaji.value*(75/100);
					}else{
						pot.value =gaji.value;
					}
					tot.value = gaji.value - pot.value;
				}
			}
		}
	}
}