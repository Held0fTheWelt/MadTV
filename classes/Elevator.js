var Elevator = IgeEntity.extend({
    classId: 'Elevator',
        init: function () {
            this._super();
	    this.currentHeading = 11;
	    this.currentFloor = 0;
	    this.count = 0;
        },
	/** function for getting the correct height, when moving to some floor */
	getFloorsHeight: function(floornumber){
	    if(floornumber == 0){
		return 263;
	    } else if (floornumber == 1){
		return 163;
	    } else if (floornumber == 2){
		return 63;
	    } else if (floornumber == 3){
		return -37;
	    } else if (floornumber == 4){
		return -137;
	    } else if (floornumber == 5){
		return -237;
	    } else if (floornumber == 6){
		return -337;
	    } else if (floornumber == 7){
		return -437;
	    } else if (floornumber == 8){
		return -537;
	    } else if (floornumber == 9){
		return -637;
	    } else if (floornumber == 10){
		return -737;
	    } else if (floornumber == 11){
		return -837;
	    } else if (floornumber == 12){
		return -937;
	    }
	    // goes anywhere if something went wrong
	    return 500;
	},
	moveTo: function (x,y) {
		
		distX = x - this.translate().x(),
		distY = y - this.translate().y(),
		distance = Math.distance(
			this.translate().x(),
			this.translate().y(),
			x,
			y
		),
		speed = 0.25,
		time = (distance / speed);

		if (Math.abs(distY) > 1) {
		    	this.animation.select('opened');
			this.velocity.y(distY / time);
		}else {
			this.velocity.y(0).translateTo(x, y, 0);
			this.currentFloor = this.currentHeading;
		}
		return this;
	},
	getHeading: function(){
	   if((this.currentFloor - this.currentHeading) < 0){
		return 1;
	   } else if((this.currentFloor - this.currentHeading) > 0){
		return -1;
	   }
	   else{
	    return 0;
	   }
	},
	tick: function (ctx) {
		//this.currentState = 'moveup';
		if(this.currentFloor != this.currentHeading){
		    this.moveTo(0,this.getFloorsHeight(this.currentHeading));
		}else{
		    if(this.count <= 20){
			this.animation.select('close');
			this.count++;

		    } else if(this.count <= 30){
			this.animation.select('closed');
			this.count++;
			
		    }
		    else if(this.count <= 50){
			this.animation.select('open');
			this.count++;
		    }
		    else {
			this.animation.select('opened');
			/*if(this.currentFloor == 0){
			    this.currentHeading = 5;
			}else{
        		    this.currentHeading = 0;
			}*/
		    }		    
		}
		this._super(ctx);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }