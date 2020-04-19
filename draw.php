<?php

$x = intval($_REQUEST['x']);
$y = intval($_REQUEST['y']);

if ($_REQUEST['submit']) {
    print_r($_REQUEST);
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