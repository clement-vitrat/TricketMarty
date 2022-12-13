<?php
 
//Si le fichier log.txt n'existe pas, le créé
if (!file_exists('log.txt')) {
        
        fopen('log.txt', 'w+');
        
} else {
        
        //Vérifie si le formulaire à reçu une entrée
        if (isset($_POST['entry'])) {
                
                //Ouvre le fichier en écrasant l'ancien log.txt
                $entries_log = fopen('log.txt', 'w+');
                
                //Entre les données dans le fichier
                fputs($entries_log, $_POST['entry']);
                
                //Ferme le curseur
                fclose($entries_log);
                
        }
}
 
?>
 
<html>
 
	<?php
        
        //Ouvre log.txt en lecture seule
        $display_line = fopen('log.txt', 'r');
        
        //Affiche le contenu du fichier
        echo htmlspecialchars(fgets($display_line));
        
        //Ferme le fichier
        fclose($display_line);
        
        ?>
 
	<!--Ton formulaire-->
	<form method="post" action="loged_test.php">
 
		<input type="text" name="entry" id="entry" />
		<input type="submit" value="ok" />
 
	</form>
 
</html>