import { WebGLRenderer } from 'three'
export default class AppRenderer{
    constructor(specObj){
        const renderer = new WebGLRenderer(specObj);
        this.renderer = renderer;
    }
    setSize(width, height){
        this.renderer.setSize( width, height );
    }
    addRenderer(container){
        container.appendChild( this.renderer.domElement );
    }
    render( scene, camera ){
        this.renderer.render( scene, camera );
    }
}
