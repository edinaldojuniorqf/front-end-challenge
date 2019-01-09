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
        
        <div class="MenuNav__scroll">
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
        </div>

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
import PerfectScrollbar from 'perfect-scrollbar'

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
      show: []
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
  },

  mounted () {
    new PerfectScrollbar('.MenuNav__scroll')
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
    margin: $margin-wee $margin-wee $margin-wee 0;
  }

  /*
  * Scrollbar rail styles
  */
  .ps--active-x > .ps__rail-x,
  .ps--active-y > .ps__rail-y {
    background-color: #d7d6d7;
  }

  .ps .ps__rail-x:hover,
  .ps .ps__rail-y:hover,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-y:focus,
  .ps .ps__rail-x.ps--clicking,
  .ps .ps__rail-y.ps--clicking {
    background-color: #d7d6d7;
    opacity: 1;
  }

  /*
  * Scrollbar thumb styles
  */
  .ps__thumb-x {
    background-color: #373435;
  }

  .ps__thumb-y {
    background-color: #373435;
  }

  .ps__rail-x:hover > .ps__thumb-x,
  .ps__rail-x:focus > .ps__thumb-x,
  .ps__rail-x.ps--clicking .ps__thumb-x {
    background-color: #373435;
  }

  .ps__rail-y:hover > .ps__thumb-y,
  .ps__rail-y:focus > .ps__thumb-y,
  .ps__rail-y.ps--clicking .ps__thumb-y {
    background-color: #373435;
  }
}
</style>
