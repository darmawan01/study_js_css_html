<!DOCTYPE html>
<html>
<head>
	<title>Tugas2</title>
	<link rel="stylesheet" type="text/css" href="css/mycss.css">
</head>
<body onload="kosong();">
<form action="" method="post">
	<table>
		<tr>
			<td colspan="3"><center><h2>Penggajian</h2></center></td>
		</tr>
		<tr>
			<td>Nama</td>
			<td>:</td>
			<td><input type="text" name="" id="nama" onchange="cek();"><p><i id="mNama"></i></p></td>
		</tr>
		<tr> 
			<td>Pendidikan Terakhir</td>
			<td>:</td>
			<td>
				<select id="pend" onchange="cek2();">
					<option value="sma">SMA</option>
					<option value="s1">S1</option>
					<option value="s2">S2</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Gaji Pokok</td>
			<td>:</td>
			<td><input readonly="" type="text" name="" id="pokok" value=""></td>
		</tr>
		<tr>
			<td>Jumlah Kehadiran</td>
			<td>:</td>
			<td><input type="text" name="" id="hadir" onchange="cek3();"><p><i id="mHadir"></i></p></td>
		</tr>
		<tr>
			<td>Potongan</td>
			<td>:</td>
			<td><input readonly type="text" name="" id="pot"><p><i id="mPot"></i></p></td>
		</tr>
		<tr>
			<td>Total Gaji</td>
			<td>:</td>
			<td><input readonly type="text" name="" id="total"><p><i id="mTot"></i></p></td>
		</tr>
		<tr>
			<td colspan="2"></td>
			<td><button>Simpan</button></td>
		</tr>
	</table>
</form>
<script src="js/my.js"></script>
<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script> 
</body>
</html>