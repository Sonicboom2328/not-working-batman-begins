class Drop{
    constructor(x,y){
        this.index=null;
        this.matter.body=circle();
       friction=0.1;
       diameter=2;
       density=3;
       var drops;
       var maxDrops=100;
       for (var i=0; i<maxDrops; i++){
        drops.push(new createDrops(random(0,400), random(0,400)));
    }


    }
    update(){
        var Dropindex = "Drops" + this.index;
          Dropindex.set({
        X=0,
        
        });
      }
}