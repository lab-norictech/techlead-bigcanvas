$(document).ready(function() {
    let CANVAS = $('#myCanvas')
    let CTX = CANVAS.get(0).getContext("2d")
    let DIMENSION = 25
    let WIDTH = CANVAS.width()
    let HEIGHT = CANVAS.height()
    let PIXELSIZE = WIDTH / DIMENSION
    let COLOR = '#000'
    let ENABLED = true

    CTX.strokeStyle = 'rgba(0, 0, 0, 0.1)'

    1 * 500 / 25

    for (let i = 0; i < DIMENSION; i++) {
        x = Math.floor(i * WIDTH / DIMENSION)
        CTX.beginPath()
        CTX.moveTo(x, 0)
        CTX.lineTo(x, HEIGHT)
        CTX.stroke()

        y = Math.floor(i * HEIGHT / DIMENSION)
        CTX.beginPath()
        CTX.moveTo(0, y)
        CTX.lineTo(WIDTH, y)
        CTX.stroke()
    }

    const mouseFill = (e) => {
        if (!ENABLED) return

        let offsetX = e.offsetX
        let offsetY = e.offsetY

        if (e.which != 1) return
        pixel = [Math.floor(offsetX / PIXELSIZE), Math.floor(offsetY / PIXELSIZE)]
        fillPixel(pixel)
    }

    const fillPixel = (pixel) => {
        CTX.fillStyle = COLOR
        CTX.fillRect(pixel[0] * PIXELSIZE, pixel[1] * PIXELSIZE, PIXELSIZE - 1, PIXELSIZE - 1)
    }
    CANVAS.on('mousemove touchmove touchstart mousedown', mouseFill)

    // pickr
    const PICKR = Pickr.create({
        el: '#picker',
        theme: 'classic', // or 'monolith', or 'nano'

        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],

        components: {
            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                input: true
            }
        }
    });

    PICKR.on('init', () => PICKR.setColor(COLOR))
    PICKR.on('show', () => ENABLED = false)
    PICKR.on('hide', () => {
        setTimeout(() => {
            ENABLED = true
        }, 300)
    })
    PICKR.on('change', () => COLOR = PICKR.getColor().toHEXA().toString())
})