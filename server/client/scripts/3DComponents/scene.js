import { Scene, Color } from 'three'
export default class AppScene{
    constructor(){
        const scene = new Scene();
        this.scene = scene;
    }

    setColor(color='white'){
        this.scene.background = new Color(color);
    }
}
