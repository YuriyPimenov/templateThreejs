import {DirectionalLight, Vector3} from 'three'
export default class AppLight{
    constructor(color, intensity){
        const light = new DirectionalLight( color, intensity );
        this.light = light;
    }

    setPosition(x, y ,z){
        this.light.position.set( x, y ,z );
        // if(typeof x !== undefined) {
        //     this.light.position.x = x;
        // }
        // if(typeof y !== undefined) {
        //     this.light.position.y = y;
        // }
        // if(typeof z !== undefined) {
        //     this.light.position.z = z;
        // }

    }
    setLookAt(x, y, z){
        this.light.lookAt(new Vector3(x, y, z));
    }
    addLight(scene){
        scene.add( this.light );
    }
}
