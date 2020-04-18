<?php

print <<<EOF
    <html>
        <head>
            <link rel="stylesheet" href="pickr/dist/themes/classic.min.css" />

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="pickr/dist/pickr.min.js"></script>
            <script src="draw.js"></script>
        </head>
        <body>
            <div id=picker></div>
            <canvas id=myCanvas width=500 height=500 style='margin:8px;border:1px #000 solid'></canvas>
        </body>
    </html>
EOF;