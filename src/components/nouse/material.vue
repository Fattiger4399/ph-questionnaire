<template>
    <div>
      <input type="text" v-model="keyword" placeholder="Search materials">
      <div class="materials">
        <div v-for="material in filteredMaterials" :key="material.id" 
             @dragstart="startDrag(material)" draggable>
          {{ material.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        keyword: '',
        materials: [
          { id: 1, name: 'Text' },
          { id: 2, name: 'Image' },
          { id: 3, name: 'Video' }
        ]
      };
    },
    computed: {
      filteredMaterials() {
        return this.materials.filter(material => material.name.toLowerCase().includes(this.keyword.toLowerCase()));
      }
    },
    methods: {
      startDrag(material) {
        event.dataTransfer.setData('text/plain', JSON.stringify(material));
      }
    }
  };
  </script>
  
  <style scoped>
  .materials {
    display: flex;
    flex-wrap: wrap;
  }
  .materials div {
    margin: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  </style>