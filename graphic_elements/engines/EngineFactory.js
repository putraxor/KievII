K2.ENGINE = {};

K2.ENGINE.engineFactory = function (type, args) {
    
    switch(type)
    {
    case 'CANVAS2D':
      if (args.canvas !== undefined) {
          return new canvasEngineCreator (args.canvas);
      }
      else {
          throw ("Engine: args is undefined");
      }
      break;
    default:
      throw ("Engine type not recognized: " + type);
    }

    function canvasEngineCreator (canvas) {
        
        // Utility functions
        // Resets the canvas
        this.reset = function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        // Constructor
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.type = 'CANVAS2D';
        
        this.getContext = function () {
        	return this.context;
        }
        this.getCanvas = function () {
            return this.canvas;
        }
    }

}