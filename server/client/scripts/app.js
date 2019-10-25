import AppScene from './3DComponents/scene'
import AppCamera from './3DComponents/camera'
import AppLight from './3DComponents/light'
import ManagerObjects from './3DComponents/managerObjects'
import AppRenderer from './3DComponents/renderer'

export default class App{
    constructor(container) {
        this.container = container;
        this.demension = {
            width: 100,
            height: 100,
        };
        this.updateDemension();
        //Инициализация обработчика событий
        this.initEventHandler();

        //Собираем сцену, камеру и свет
        this.buildScene();
        this.buildCamera();
        this.buildLight();
        this.appLight.addLight(this.appScene.scene);
        //Работаем с объектами
        this.managerObjects = new ManagerObjects();
        this.managerObjects.createObjects();
        this.managerObjects.addObjects(this.appScene.scene);
        //Собираем рендер
        this.buildRenderer();
        this.appRenderer.addRenderer(this.container);
        //Пошла анимация
        this.play();
        // this.animate();
    }
    updateDemension(){
        this.demension = {
            width: this.container.clientWidth,
            height: this.container.clientHeight,
        };
    }
    initEventHandler(){
        window.addEventListener( 'resize', ()=>{this.onWindowResize();} );
    }
    onWindowResize(){
        this.updateDemension();

        this.appCamera.camera.aspect = this.demension.width / this.demension.height;
        this.appCamera.camera.updateProjectionMatrix();
        this.appRenderer.setSize(this.demension.width, this.demension.height);

    }

    buildScene(){
        this.appScene = new AppScene();
        this.appScene.setColor('skyblue');
    }

    buildCamera(){
        const fov = 35; // AKA Field of View
        const aspect = this.demension.width / this.demension.height;
        const near = 0.1; // the near clipping plane
        const far = 100; // the far clipping plane
        this.appCamera = new AppCamera(fov, aspect, near, far);

        this.appCamera.setPosition(0, 0, 10);
        // this.appCamera.setLookAt(0, 0, 0);

    }

    buildLight(){

        this.appLight = new AppLight(0xffffff, 5.0);
        this.appLight.setPosition(10, 10, 10);

    }

    buildRenderer(){
        this.appRenderer = new AppRenderer({ antialias: true });
        this.appRenderer.setSize(this.demension.width, this.demension.height);
        this.appRenderer.renderer.setPixelRatio( window.devicePixelRatio );
    }
    play(){
        this.appRenderer.renderer.setAnimationLoop( () => {
            this.managerObjects.animate();
            this.appRenderer.render(this.appScene.scene, this.appCamera.camera);
        } );
    }
    stop() {
        this.appRenderer.renderer.setAnimationLoop( null );
    }
    // animate(){
    //     this.managerObjects.animate();
    //     this.appRenderer.render(this.appScene.scene, this.appCamera.camera);
    //     requestAnimationFrame(()=>{this.animate();} );
    // }

}
