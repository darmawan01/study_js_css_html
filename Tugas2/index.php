<!DOCTYPE html>
<html>
<head>
	<title>Tugas 2</title>
	<link rel="stylesheet" type="text/css" href="css/mycss.css">
</head>
<body>
<form name="formV" class="formV" method="post" action="">

	<table>
		<tr>
			<td colspan="3"><center><h2>JavaScript</h2></center></td>
		</tr>
		<tr>
			<td>Nama</td>
			<td>:</td>
			<td><input type="text" name="pNama" id="nama" placeholder="Type Your Name" onchange="cek();" "><p><i id="mName"></i></p></td>
		</tr>
		<tr>
			<td>Jenis Kelamin</td>
			<td>:</td>
			<td><input type="radio" name="pJk" id="pJk"> Laki-Laki <input type="radio" name="pJk"> Perempuan</td>
		</tr>
		<tr>
			<td>Alamat</td>
			<td>:</td>
			<td><textarea placeholder="Type Your Address" name="pAddr" id="pAddr" onmouseleave="cek2();"></textarea><p><i id="mAddress"></i></p></td>
		</tr>
		<tr>
			<td>Username</td>
			<td>:</td>
			<td><input type="text" name="pUser" id="pUser" placeholder="Type Your Username" onmouseleave="cek3();"><p><i id="mUser"></i></p></td>
		</tr>
		<tr>
			<td>Password</td>
			<td>:</td>
			<td><input type="password" name="pPass" id="pPass" placeholder="Type Your Password" onmouseleave="cek4();"><p><i id="mPass"></i></p></td>
		</tr>
		<tr>
			<td>Retype Password</td>
			<td>:</td>
			<td><input type="password" name="pCpass" id="pCpass" placeholder="Retype Your Password" onmouseleave="cek5();"><p><i id="mCpass"></i></p></td>
		</tr>
		<tr>
			<td colspan="2"></td>
			<td><button>Save</button></td>
		</tr>
	</table>
	
</form>
<script src="js/validation.js"></script>
</body>
</html>