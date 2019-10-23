<?

 //                    (-------, datebase username & name are usually the same)
$link = mysqli_connect("localhost","phpisse-3131350602", "phpisse94", "phpisse-3131350602")
//with retrieve database in ^

//show error if connection fails
if (mysqli_connect_error()) {
  die ("There was an error accessing database");
// die puts stop to database collection
}

//part 7 : will insert/update data ...NOTICE ACUTE ANGLE QUOTE & REGULAR QUOTE
$query = "INSERT INTO `users` (`email`,`password`)
VALUES ('ahmed_08@hotmail.com', 'ahmed97')"
// RUN ^ query by therefore will now add it to data
mysqli_query($link,$query);
//if user wants to update e.g. email etc..
$query = "UPDATE`users` SET email = 'isse94@hotmail.com'
WHERE id = 1 LIMIT 1" ; // can also do the same for password.


// Part 5 - retrieving data from data base
  $query = "SELECT * FROM users ";
 // IF YOU WANT TO SELECT ANYTHING FROM A E.G. TABLE made in phpMYADMIN
//now run query result.. usually with if statements
if ($result = mysqli_query($link, $query)) {
  $row =  mysqli_fetch_arrary($result);
  // will fetch arrary associated with result-- normally a row of database so we call it row.
  echo "your email is ".$row['email']."your password is ".$row['password'];
  // gets rid of array and makes it clearer. and can replace e.g. 'email' as [0]

}

?>
