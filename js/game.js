function game_init()
{
    //get canvas and context
    game_canvas = document.getElementById("game_canvas");
    window.ctx = game_canvas.getContext("2d");

    //canvas setup
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;


    game_loop();
}

function game_loop()
{
    update_game();
    draw_game();
    
    window.requestAnimationFrame(game_loop);
}

function update_game()
{

}

function draw_game()
{
    //clear the screen
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = "20px Monospace";
    ctx.fillText("DarkOS Web", 20, 20);
    
}
