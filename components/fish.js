AFRAME.registerComponent("flying-fish",{
    init:function(){
        for (var i=1;i<=20;i++){
            var id = `ring${i}`
            var posX = (Math.random()*3000 + (-1000))
            var posY = (Math.random()*2 + (-1))
            var posZ = (Math.random()*3000 + (-1000))
            var position = {x:posX,y:posY,z:posZ}
            this.flyingfishes(id,position)
        }
    },
    flyingfishes:function(id,position){
        var islandEl = document.querySelector("#islandMap")
        var fishEl = document.createElement("a-entity")
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("scale",{x:500,y:500,z:500})
        fishEl.setAttribute("gltf-model","./assets/fish/scene.gltf")
        fishEl.setAttribute("animation-mixer",{})
        fishEl.setAttribute("position",position)
        islandEl.appendChild(fishEl)
    }
})