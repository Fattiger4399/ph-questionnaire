<template>
  <el-col
      :span="record.span || 24"
  >
    <div :class="{ 'active': selectItem && record.key === selectItem.key , 'drag-box': isDrag , 'node-item': isDrag}"
         @click.stop="handleSelectItem(record)"
    >
      <div class="form-item-box" style="height: 100%;width: 100%;">
        <Item
            :models="models"
            :record="record"
            :isDragPanel="isDrag"
            :selectItem="selectItem"
            :preview="preview"
            :key="refreshKey"
            :prop-prepend="propPrepend"
            @submit="$emit('submit')"
            @reset="$emit('reset')"
            @handleSelectItem="handleSelectItem"
            @handleCopy="$emit('handleCopy')"
            @handleDetele="$emit('handleDetele')"
        >
         <!-- 递归传递插槽！！！ -->
          <template v-for="slot in Object.keys($slots)"  :slot="slot"> 
            <slot :name="slot" :record="record"/>
          </template>
        </Item>
      </div>
      
      <template v-if="isDrag">
        <div class="key-box" v-text="record.model"/>
        <div class="node-control">
          <div
              class="copy pointer"
              :title="t('ngform.item.copy')"
              :class="selectItem && record.key === selectItem.key ? 'active' : 'unactivated'"
              @click.stop="$emit('handleCopy')"
          >
            <i class="el-icon-document-copy"/>
          </div>

          <div
              class="delete pointer"
              :title="t('ngform.item.delete')"
              :class="selectItem && record.key === selectItem.key ? 'active' : 'unactivated'"
              @click.stop="$emit('handleDetele')"
          >
            <i class="el-icon-delete"/>
          </div>
        </div>
      </template>
    </div>
  </el-col>
</template>
<script>

import Item from '../items/index.vue'
import LocalMixin from '../../locale/mixin.js'

export default {
  name: 'ng-form-node',
  mixins: [LocalMixin],
  components: {
    Item
  },
  props: {
    record: {
      type: Object,
      required: true
    },
    selectItem: {
      type: Object,
      default: () => {
      }
    },
    // 当前是否拖拽面板
    isDrag: {
      type: Boolean,
      default: true
    },
    preview: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    models: {
      type: Object,
      default: () => {
        return {}
      }
    },
    propPrepend: {
      type: String
    }
  },
  data() {
    return {
      refreshKey: 1
    }
  },
  computed: {},
  created() {
    if (!this.isDrag) return
    if (this.record.type == 'controller' && !this.record.list) {
      this.$set(this.record, 'list', [])
    }
  },
  activated() {

  },
  mounted() {

  },
  methods: {
    handleSelectItem(rec, index) {
      if (!this.isDrag) return

      this.$emit('handleSelectItem', rec, index + 1)
    },
    handleRefresh() {
      this.refreshKey++
    }
  }

}
</script>
<style>
.node-item {
  padding: 10px;
  background: white;
  border-color: white;
  border-radius: 5px;
  margin-top: 10px;
}

.node-item.active {
  background: #d9f1ff;
  border-color: #d9f1ff;
}

.drag-box {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;
  transition: all 0.3s;
  min-height: 36px;
  background: white;
}

.drag-box .key-box {
  position: absolute;
  bottom: 2px;
  right: 5px;
  font-size: 14px;
  color: #409eff;
}

.drag-box.active {
  background: rgba(132, 185, 241, 0.49);
  outline-offset: 0;
}

.drag-box.active::before {
  right: 0;
}

.drag-box .form-item-box {
  position: relative;
  box-sizing: border-box;
  word-wrap: break-word;
  /*
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 888;
    }
    */
}

.drag-box .node-control {
  position: absolute;
  bottom: 2px;
  right: 5px;
  font-size: 14px;
  /* z-index: 999; */
  color: #409EFF;
}

.drag-box .node-control .copy, .drag-box .node-control .delete {
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  z-index: 989;
}

.drag-box .node-control .copy.unactivated, .drag-box .node-control .delete.unactivated {
  opacity: 0 !important;
  pointer-events: none;
}

.drag-box .node-control .copy.active, .drag-box .node-control .delete.active {
  opacity: 1 !important;
}

.drag-box .node-control .copy {
  border-radius: 0 0 0 8px;
  right: 30px;
  background: #409EFF;
}

.drag-box .node-control .delete {
  right: 0px;
  background: #409EFF;
}

.drag-box .node-control {
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.drag-box:hover {
  background: fade(#409EFF, 20%);
}

.drag-box:hover .node-control {
  /*visibility: visible;*/
  display: block;
}

.drag-box .right-menu {
  width: 190px;
  background: #fff;
  border: 1px solid #ccc;
  position: fixed;
  transition: all 0s;
  box-shadow: 3px 3px 5px #999;
  padding: 8px 0;
  z-index: 999;
}

.drag-box .right-menu ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.drag-box .right-menu ul li {
  cursor: pointer;
  user-select: none;
  padding: 0 15px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}

.drag-box .right-menu ul li:hover {
  background: #eee;
}

.active .key-box {
  color: #ff40ec;
}

.pointer {
  cursor: pointer;
}

</style>
<!--
<style lang="scss">
.node-item {
  padding: 10px;
  background: #f6f6f6;
  border-color: #f6f6f6;
  border-radius: 5px;
  margin-top: 10px;
}

.node-item.active{
  background: #d9f1ff;
  border-color: #d9f1ff;
}

.drag-box  {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;
  transition: all 0.3s;
  min-height: 36px;

  .key-box {
    position: absolute;
    bottom: 2px;
    right: 5px;
    font-size: 14px;
    color: #409eff;
  }

  // &::before {
  //   content: "";
  //   height: 5px;
  //   width: 100%;
  //   background: #409EFF;
  //   position: absolute;
  //   top: 0;
  //   right: -100%;
  // }


  &.active {
    background: #5ea8f57d;
    outline-offset: 0;

    &::before {
      right: 0;
    }
  }

  .form-item-box {
    position: relative;
    box-sizing: border-box;
    word-wrap: break-word;
/*
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 888;
    }
    */
  }

  .node-control {
    position: absolute;
    bottom: 2px;
    right: 5px;
    font-size: 14px;
   /* z-index: 999; */
    color: #409EFF;

    .copy , .delete  {
      position: absolute;
      top: 0;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      z-index: 989;

      &.unactivated {
        opacity: 0 !important;
        pointer-events: none;

      }

      &.active {
        opacity: 1 !important;
      }
    }

    .copy {
      border-radius: 0 0 0 8px;
      right: 30px;
      background: #409EFF;


    }

    .delete {
      right: 0px;
      background: #409EFF;
    }
  }

  .node-control {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  &:hover {
    background: fade(#409EFF, 20%);

    .node-control {
      /*visibility: visible;*/
      display: block;
    }

  }




  .right-menu {
    width: 190px;
    background: #fff;
    border: 1px solid #ccc;
    position: fixed;
    transition: all 0s;
    box-shadow: 3px 3px 5px #999;
    padding: 8px 0;
    z-index: 999;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        cursor: pointer;
        user-select: none;
        padding: 0 15px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;

        &:hover {
          background: #eee;
        }
      }
    }
  }

}

.active .key-box {
    color: #ff40ec;
}

.pointer {
  cursor: pointer;
}
</style>
  -->
