<?php

$time = time();

print <<<EOF
    <!doctype html>
    <html>
        <head>
            <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js"></script>
            <script>
                var firebaseConfig = {
                    apiKey: "AIzaSyCHDW1hiVXE8WtsVZ4aSL0YDzmFCF_fUOE",
                    authDomain: "bigcanvas-ef0e6.firebaseapp.com",
                    databaseURL: "https://bigcanvas-ef0e6.firebaseio.com",
                    projectId: "bigcanvas-ef0e6",
                    storageBucket: "bigcanvas-ef0e6.appspot.com",
                    messagingSenderId: "834044913599",
                    appId: "1:834044913599:web:c2ff3465374e081720e30a"
                };
                firebase.initializeApp(firebaseConfig);
            </script>
            
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