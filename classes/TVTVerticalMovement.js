var VerticalMovement = IgeEntity.extend({
        classId: 'VerticalMovement',
	
	
	tick: function (ctx) {
		this._super(ctx);
		if(this.obj[0]>=236 && this.vel[0]>0){
			this.vel[0]*=-1;
			this.obj[0].velocity.y(this.vel[0]);
		}else if(this.obj[0]<=-937 && this.vel[0]<0){
			this.vel[0]*=-1;
			this.obj[0].velocity.y(this.vel[0]);
		}
	},
	init: function(){
		var count = 0;
		var obj = [];
		var vel = [];		
	},
	addEntity: function(entity,velocity){
		this.obj[count] = entity;
		this.vel[count] = velocity;
		entity.addComponent(IgeVelocityComponent);
		entity.velocity.y(0.1);
		count++;
	}
});