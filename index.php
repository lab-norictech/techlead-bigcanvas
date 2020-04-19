<?php

$time = time();

print <<<EOF
    <!doctype html>
    <html>
        <head>
            <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js"></script>
            <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-firestore.js"></script>
        
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="index.js?version=$time"></script>

            <style>
                body { background-color: #f0f0f0; margin: 16px; font-family: Arial }
                #myCanvasWrapper { position: relative }
                #myCanvas { border: 1px #000 solid; background-color: #fff; cursor: pointer; }
                #selectedBox { border: 1px rgba(0, 50, 100, 0.5) solid; background-color: rgba(0, 50, 100, 0.25); position: absolute; pointer-events: none; } 
            </style>
        </head>
        <body>
            <div id=myCanvasWrapper>
                <canvas id=myCanvas></canvas>
            </div>
        </body>
    </html>
EOF;