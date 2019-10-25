import { BoxBufferGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh } from 'three'
export default class ManagerObjects{
    constructor(){
        this.objects = [
            {
                type: 'mesh',
                constructor: 'BoxBufferGeometry',
                name: 'helloCube',
                sizes: {
                    x: 2,
                    y: 2,
                    z: 2
                },
                material:{
                    //Объект спецификации
                    specObject:{
                        color: 0x800080
                    }
                },
                animate: (mesh)=>{
                    mesh.rotation.z += 0.01;
                    mesh.rotation.x += 0.01;
                    mesh.rotation.y += 0.01;
                }
            }
        ];
        this.meshes = [];
    }

    createObjects(){
        for(let object of this.objects){
            switch (object.constructor) {
                case 'BoxBufferGeometry':
                    let geometry = new BoxBufferGeometry( object.sizes.x, object.sizes.y, object.sizes.z );
                    geometry.name = object.name;
                    let material = new MeshStandardMaterial(object.material.specObject);
                    // material.color.set( '0xff0000' )
                    let mesh = new Mesh( geometry, material );
                    this.meshes.push(mesh);
                    break;
                default:
                    console.log('Нет такого конструктора');
            }
        }
    }
    addObjects(scene){
        for(let mesh of this.meshes){
            scene.add( mesh );
        }
    }

    animate(){

        for(let i=0; i<this.meshes.length;i++){
            let mesh = this.meshes[i];
            let obj = this.objects[i];
            obj.animate(mesh);
        }
    }
}
