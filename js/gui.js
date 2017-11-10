//--------------------------------------------------------------------
class GlobalParams extends dat.GUI {
  constructor(r) {
    super();
    //------------------------------------
    this.showDots = true;
	  this.add( this, "showDots" )
      .onChange( function( value ) {
        for (var k=0; k<cortex.numLayers; ++k) {
          cortex.nodeLayer[k].visible = value;
        }
      } );
    
    this.moving = false;
	  this.add( this, "moving" );
    
    this.numDendSegs = 20;
	  this.add( this, "numDendSegs", 1, 20, 1 )
      .onChange( function( value ) {
        this.numDendSegs = parseInt( value );
        cortex.updateProximalPos();
        cortex.updateProximalCol();
      } );
    
    //------------------------------------
    var prox = this.addFolder('Proximal');
    
	  this.showProxDend = true;
	  prox.add( this, "showProxDend" )
      .onChange( function( value ) {
        for (var k=1; k<cortex.numLayers; ++k) {
          cortex.proximalLayer[k].visible = value;
        }
      } );
    
    this.numProxDend = 10;
	  prox.add( this, "numProxDend", 1, 20, 1 )
      .onChange( function( value ) {
        this.numProxDend = parseInt( value );
        cortex.updateProximalConnections();
        cortex.updateProximalPos();
        cortex.updateProximalCol();
      } );
    
	  this.maxProxDist = 100;
	  prox.add( this, "maxProxDist", 10, r )
      .onChange( function( value ) {
        this.maxProxDist = parseFloat( value );
        cortex.updateProximalConnections();
        cortex.updateProximalPos();
        cortex.updateProximalCol();
      } );
    
    //------------------------------------
    var dist = this.addFolder('Distal');
    
	  this.showDistDend = true;
	  dist.add( this, "showDistDend" )
      .onChange( function( value ) {
        for (var k=1; k<cortex.numLayers; ++k) {
          cortex.distalLayer[k].visible = value;
        }
      } );
    
    this.numDistDend = 5;
	  dist.add( this, "numDistDend", 0, 20, 1 )
      .onChange( function( value ) {
        this.numDistDend = parseInt( value );
        cortex.updateDistalConnections();
      } );
	  this.maxDistDist = 100;
	  dist.add( this, "maxDistDist", 10, r )
      .onChange( function( value ) {
        this.maxDistDist = parseFloat( value );
        cortex.updateDistalConnections();
      } );
    
  }
};

