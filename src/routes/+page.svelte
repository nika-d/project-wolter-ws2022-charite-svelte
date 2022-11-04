<h1>Hello Pattern Library! 😊</h1>

<h2>HTML Formular als Beispiel</h2>
<p>Das ist ein Formular.</p>
<form action="#" method="post">
	<table width="800px" cellspacing="0" cellpadding="10" border="1">
		<tbody
			><tr>
				<td width="150px">Anrede</td>
				<td><input type="text" name="Anrede" size="40" /></td>
				<td width="100px">text</td>
			</tr>
			<tr>
				<td>Vorname</td>
				<td><input type="text" name="Vorname" size="40" /></td>
				<td>text</td>
			</tr>
			<tr>
				<td>Nachname</td>
				<td><input type="text" name="Nachname" size="40" /></td>
				<td>text</td>
			</tr>
			<tr>
				<td>Kommentar</td>
				<td><textarea rows="5" cols="40" name="Kommentar" /></td>
				<td>textarea</td>
			</tr>
			<tr>
				<td>Lieblingsfarben (mehrere Farben möglich)</td>
				<td
					><input type="checkbox" value="Lieblingsfarbe_Gelb" /> Gelb<br />
					<input type="checkbox" value="Lieblingsfarbe_Rot" /> Rot<br />
					<input type="checkbox" value="Lieblingsfarbe_Blau" /> Blau<br /></td
				>
				<td>checkbox</td>
			</tr>
			<tr>
				<td>Lieblingsfarbe (nur 1 Auswahl möglich)</td>
				<td
					><input type="radio" name="Lieblingsfarbe" value="Gelb" /> Gelb<br />
					<input type="radio" name="Lieblingsfarbe" value="Rot" /> Rot<br />
					<input type="radio" name="Lieblingsfarbe" value="Blau" /> Blau<br /></td
				>
				<td>radio button</td>
			</tr>
			<tr>
				<td>Passwort</td>
				<td><input type="password" name="Passwort" size="20" /></td>
				<td>password</td>
			</tr>
			<tr>
				<td>Auswahlliste</td>
				<td
					><select name="Land">
						<option value="n/a" selected="selected">-</option>
						<option value="CH">Schweiz</option>
						<option value="D">Deutschland</option>
						<option value="F">Frankreich</option>
					</select>
				</td>
				<td>select / option</td>
			</tr>
			<tr>
				<td><button class="btn" type="button">Ab die Post</button></td>
				<td><button class="btn" type="button">Eingaben löschen</button></td>
				<td>submit / reset</td>
			</tr>
		</tbody>
	</table>
</form>
