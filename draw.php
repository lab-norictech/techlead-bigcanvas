<?php

$x = intval($_REQUEST['x']);
$y = intval($_REQUEST['y']);

if (isset($_REQUEST['submit']) && $_REQUEST['submit']) {
    $data = $_POST['data'];
    $data = json_encode($data);

    $key = "$x,$y";
    $filename = './tmp/' . $key;
    file_put_contents($filename, $data);
    
    $result = shell_exec("node save.js $x $y");
    
    if ($result) {
        die('Error saving!');
    }
    print '<script>window.location="index.php"</script>';
    
    return;
}

$time = time();
print <<<EOF
    <html>
        <head>
            <link rel="stylesheet" href="pickr/dist/themes/classic.min.css" />

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="pickr/dist/pickr.min.js"></script>
            <script src="draw.js?version=$time"></script>
        </head>
        <body>
            <div id=picker></div>
            <div>
                <canvas id=myCanvas width=500 height=500 style='margin:8px;border:1px #000 solid'></canvas>
            </div>

            <input type=submit value=Save onclick='save($x, $y)'>
        </body>
    </html>
EOF;