$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 300, 20, 290);
createPlatform(1000, 650, 20, 50);
createPlatform(200, 650, 200, 50);
createPlatform(500, 700, 20, 500);
createPlatform(1200, 550, 20, 50);
createPlatform(1300, 500, 20, 50);
createPlatform(1100, 600, 20, 50);
createPlatform(1100, 350, 20, 50);
createPlatform(1200, 360, 30, 40);
createPlatform(1000, 300, 20, 50);
createPlatform(900, 250, 20, 50);
createPlatform(825, 200, 20, 50, "gold" );
createPlatform(1350, 400, 20, 50);


    // TODO 3 - Create Collectables
createCollectable("steve", 1200, 370);
createCollectable("max",1000, 290);
createCollectable("database",1100, 330);
    createCollectable("database",1100, 330);
    createCollectable("database",825, 190);
    createCollectable("database",900, 230);
    // TODO 4 - Create Cannons
createCannon("top", 200, 1000);
createCannon("top", 600, 1000);
    createCannon("bottom", 200, 1000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
