<?php
if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] == 0) {

    $archivo_tmp = $_FILES['imagen']['tmp_name'];
    $nombre = $_FILES['imagen']['name'];
    $extension = strtolower(pathinfo($nombre, PATHINFO_EXTENSION));

    if ($extension == 'png') {
        $img = imagecreatefrompng($archivo_tmp);
    } elseif ($extension == 'jpg' || $extension == 'jpeg') {
        $img = imagecreatefromjpeg($archivo_tmp);
    } else {
        die("Formato no válido. Solo se admiten imágenes PNG o JPG.");
    }

    $fp = fopen("resultado.txt", "w");
    $img = imagescale($img, 100);
    $w = imagesx($img);
    $h = imagesy($img);
    $chars = " .:-=+*#%@";

    for ($y = 0; $y < $h; $y++) {
        for ($x = 0; $x < $w; $x++) {
            $rgb = imagecolorat($img, $x, $y);
            $r = ($rgb >> 16) & 0xFF;
            $g = ($rgb >> 8) & 0xFF;
            $b = $rgb & 0xFF;
            $lum = ($r + $g + $b) / 3;
            $index = (int)(($lum / 255) * (strlen($chars) - 1));
            $char = $chars[$index];
            fwrite($fp, $char);
        }
        fwrite($fp, "\n");
    }

    fclose($fp);

    echo "<!DOCTYPE html>
    <html lang='es'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>ASCII generado</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>
    <body class='bg-light text-center py-5'>
        <h1>Conversión completada</h1>
        <p>Tu ASCII ha sido generado correctamente.</p>
        <a href='resultado.txt' download class='btn btn-success'>Descargar ASCII</a>
        <br><br>
        <a href='index.html' class='btn btn-secondary'>Volver</a>
    </body>
    </html>";

} else {
    echo "No se ha subido ninguna imagen.";
}
?>
