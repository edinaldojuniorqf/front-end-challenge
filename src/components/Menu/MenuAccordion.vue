<template>
  <div>
    <template v-for="(item, index) in items">

      <template v-if="isAccordion(item)">
        <ItemMenuAccordion
          :key="'item' + index"
          v-b-toggle="getIdAccordion(index)"
          :open="show[index]"
          v-bind="item">
          {{ item.title }}
        </ItemMenuAccordion>
      </template>
      <template v-else>
        <ItemMenu
          v-bind="item"
          :href="item.href"
          :key="'item' + index">
          {{ item.title }}
        </ItemMenu>
      </template>

      <template v-for="(itemSub, indexSub) in item.items">
        <b-collapse
          :id="getIdAccordion(index)"
          :key="'itemSub' + index + indexSub"
          :accordion="'accordion_' + _uid"
          v-model="show[index]">
          <template v-if="itemSub.comp">
            <component
              v-bind="itemSub"
              :is="comps[itemSub.comp] || itemSub.comp"
              class="ItemMenu--submenu"
              @close="handleClose" />
          </template>
          <template v-else>
            <ItemMenu
              v-bind="itemSub"
              :href="itemSub.href"
              class="ItemMenu--submenu">
              {{ itemSub.title }}
            </ItemMenu>
          </template>
        </b-collapse>
      </template>
    </template>
  </div>
</template>

<script>
import ItemMenu from '@/components/Menu/ItemMenu'
import ItemMenuAccordion from '@/components/Menu/ItemMenuAccordion'

export default {
  name: 'MenuAccordion',

  components: {
    ItemMenu,
    ItemMenuAccordion
  },

  props: {
    items: {
      type: Array,
      required: true
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

  methods: {
    isAccordion (item) {
      return item.items && item.items.length > 0
    },

    getIdAccordion (index) {
      return 'item_' + index + '_' + this._uid
    },

    handleClose () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
