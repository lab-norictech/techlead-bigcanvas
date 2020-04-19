$(document).ready(() => { 
    let CANVAS = $('#myCanvas')
    let CTX = CANVAS.get(0).getContext('2d')
    let PIXELSIZE = 2

    let REPEATSX = 20
    let REPEATSY = 15
    let DIMENSION = 25

    let WIDTH = DIMENSION * REPEATSX * PIXELSIZE
    let HEIGHT = DIMENSION * REPEATSY * PIXELSIZE
    let SELECTEDBOX = null

    CANVAS.attr('width', WIDTH)
    CANVAS.attr('height', HEIGHT)

    CTX.strokeStyle = 'rgba(0, 0, 0, 0.25)'
    for (let i = 0; i < DIMENSION * REPEATSX; ++i) {
        if (i % DIMENSION) { continue }
        
        x = i * PIXELSIZE
        CTX.beginPath()
        CTX.moveTo(x, 0)
        CTX.lineTo(x, HEIGHT)
        CTX.stroke()

        y = i * PIXELSIZE
        CTX.beginPath()
        CTX.moveTo(0, y)
        CTX.lineTo(WIDTH, y)
        CTX.stroke()
    }

    CANVAS.mousemove((e) => {
        let pixel = [Math.floor(e.offsetX / (PIXELSIZE * DIMENSION)), Math.floor(e.offsetY / (PIXELSIZE * DIMENSION))]

        if (!SELECTEDBOX) { 
            SELECTEDBOX = $('<div id=selectedBox></div>')
            SELECTEDBOX.css({
                width: DIMENSION * PIXELSIZE - 2,
                height: DIMENSION * PIXELSIZE - 2,
            })
            $('#myCanvasWrapper').prepend(SELECTEDBOX)
        }

        SELECTEDBOX.css({
            left: pixel[0] * PIXELSIZE * DIMENSION + 1,
            top: pixel[1] * PIXELSIZE * DIMENSION
        })
    })

    CANVAS.click((e) => {
        selectBox(e)
    })

    let SELECTED = 0
    function selectBox(e) {
        if (SELECTED) return
        SELECTED = 1

        let pixel = [Math.floor(e.offsetX / (PIXELSIZE * DIMENSION)), Math.floor(e.offsetY / (PIXELSIZE * DIMENSION))]
        window.location = 'draw.php?x='+pixel[0]+'&y='+pixel[1]
    }
})