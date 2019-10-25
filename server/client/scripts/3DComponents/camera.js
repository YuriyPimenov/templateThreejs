import { PerspectiveCamera, Vector3 } from 'three'
export default class AppCamera{
    constructor(fov, aspect, near, far){
        const camera = new PerspectiveCamera( fov, aspect, near, far );
        this.camera = camera;
    }

    setPosition(x, y ,z){
        // camera.position.set( 0, 0, 10 );
        if(typeof x !== undefined) {
            this.camera.position.x = x;
        }
        if(typeof y !== undefined) {
            this.camera.position.y = y;
        }
        if(typeof z !== undefined) {
            this.camera.position.z = z;
        }

    }
    setLookAt(x, y, z){
        this.camera.lookAt(new Vector3(x, y, z));
    }
}
