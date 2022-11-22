const myGameArea = {
    canvas: document.createElement("canvas"),
    frames: 0,

    start: function() {
        this.canvas.width = 500
        this.canvas.height = 650
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNode[0])
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval)
    },
}

class Something {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    update(){
        const ctx = myGameArea.context
        ctx.fillStyle = this.color
    }
}