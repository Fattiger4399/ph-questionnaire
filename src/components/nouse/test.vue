<template>
  <div>
    <el-button @click="outcode" type="primary" style="">
      schema
    </el-button>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <el-input type="textarea" v-model="code" autosize>

      </el-input>
      <div>{{ dsl.children }}</div>
    </el-drawer>
  </div>
</template>

<script>
import { convertDSLToVueFile } from './outcode';

// let vueFileContent = convertDSLToVueFile(dsl)
// console.log(convertDSLToVueFile(dsl))
export default {
  props:{
    dsl:{
      default:function(){
        return {}
      },
      type:Object
    }
  },
  data(){
    return{
      drawer:false
    }
  },
  methods:{
    outcode(){
      this.drawer = true;
      let code = convertDSLToVueFile(this.dsl)
      // console.log(code)
    }
  },
  computed:{
    code:function(){
      return convertDSLToVueFile(this.dsl)
    }
  }

}
</script>

<style></style>