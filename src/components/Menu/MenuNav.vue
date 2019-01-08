<template>
  <div class="MenuNav">
    <template v-for="(item, index) in items">
      <MenuToggle v-if="showSubmenu(item)" :key="index"
        v-model="show[index]">
        <ItemMenuNav
          slot="btn"
          :showIcon="true"
          v-bind="item" :key="index"
          :open="show[index]"
          @click="handleBtnMenuToggleClick(index)">
          {{ item.title }}
        </ItemMenuNav>
        
        <VuePerfectScrollbar class="MenuNav__scroll" :settings="settings">
          <template v-for="(itemSub, indexSub) in item.items">
            <template v-if="itemSub.comp">
              <component
                v-bind="itemSub"
                :is="comps[itemSub.comp] || itemSub.comp"
                :key="indexSub"
                @close="handleClose(index)" />
            </template>
            <template v-else>
              <ItemMenu
                v-bind="itemSub"
                :href="itemSub.href"
                :key="indexSub">
                {{ itemSub.title }}
              </ItemMenu>
            </template>  
          </template>
        </VuePerfectScrollbar>

      </MenuToggle>
      <ItemMenuNav v-else
        v-bind="item" :key="index">
        {{ item.title }}
      </ItemMenuNav>
    </template>
  </div>
</template>

<script>
import MenuToggle from '@/components/Menu/MenuToggle'
import ItemMenuNav from '@/components/Menu/ItemMenuNav'

export default {
  name: 'MenuNav',

  components: {
    MenuToggle,
    ItemMenuNav
  },

  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },

    comps: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      show: [],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.3
      }
    }
  },

  created () {
    this.$emit('setItems')
  },

  methods: {
    showSubmenu (item) {
      return item.items && item.items.length > 0
    },

    handleBtnMenuToggleClick (index) {
      this.show[index] = !this.show[index]
    },

    handleClose (index) {
      this.$nextTick(() => {
        this.show[index] = false
        this.$forceUpdate() // vue não monitora mudança no array
      })
    }
  }
}
</script>

<style lang="scss">
.MenuNav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .MenuToggle {
    position: relative;
  }

  .MenuNav__scroll {
    position: relative;
    max-height: 270px;
  }
}
</style>
