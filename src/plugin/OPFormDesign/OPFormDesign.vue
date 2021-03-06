<template>
  <div class="op-form-design-main" :class="formDesignClass">
    <!-- 配置项容器 -->
    <div class="op-form-config-main" :class="formConfigClass">
      <template v-for="func in currFuncs">
        <div :key="func.id">
          <label>{{func.setting && func.setting.label}}</label>
          <component :is="func.settingComp" :value="currCompCfg[func.key]" @input="cfgChanged($event, func.key)"/>
        </div>
      </template>
    </div>

    <!-- 表单预览组件 -->
    <o-p-form-view
      v-bind="formConfig"
      @select-component="openTheCfg"
      :designData="designData"
      isDesign
    ></o-p-form-view>

    <!-- 组件库 -->
    <div class="op-form-input-store-main" :class="formInputStroeClass">
      <draggable
        :clone="cloneFormCfg"
        :group="group"
        :list="supportComponents"
      >
        <template v-for="comp in supportComponents">
          <a :key="comp.name">{{ comp.label }}</a>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
  import uuid from 'uuid/v1'
  import OPFormView from '@plug/OPFormView/OPFormView.vue'
  import draggable from 'vuedraggable'

  // 组件配置map, 便于搜寻组件信息
  const formConfigMap = {}
  // 组件map, 便于获取
  const formComponentMap = {}
  // 拖拽分组信息
  const group = {
    name: 'formComponent',
    pull: 'clone',
    put: false
  }

  /**
   * @Date 2019-12-06 22:34
   * @Description 财财正在被他妈暴打, 玩积木倒一地, 收拾不好就哭, 下飞行棋输了也哭
   * @Bystanders Lofee
   * @Remarks HAHAHAHA~~~
   */
  export default {
    name: 'OPFormDesign',
    components: { draggable },
    data () {
      return {
        // 支持的组件
        supportComponents: [],
        // 当前组件的功能
        currFuncs: [],
        // 当前组件功能的配置
        currCompCfg: null,
        // 表单设计相关的数据
        designData: {
          group: group.name
        },
        // 分组信息
        group
      }
    },
    methods: {
      // 添加一个组件 可触发一个添加组件事件
      addComponent (inx, cfg) {
        this.componentCfgs.splice(inx, 0, cfg)
        formConfigMap[cfg.id] = cfg
      },
      /**
       * 修改一个组件
       * 因为组件位置的特殊性(在数组内), 无法直接刷新UI, 必须使用修改子组件key的方式来调整
       * @param compCfg
       */
      modifyComponent (compCfg) {
        const currCfg = formConfigMap[compCfg.id]
        const oldId = currCfg.id
        currCfg.id = uuid()
        this.$nextTick(() => currCfg.id = oldId)
      },
      /**
       * 移除一个组件
       * @param id
       */
      removeComponent (id) {
        const cfgInx = this.componentCfgs.findIndex(cfg => cfg.id === id)
        this.componentCfgs.splice(cfgInx, 1)
        Reflect.deleteProperty(formConfigMap, id)
      },
      // 打开组件配置
      openTheCfg (compCfg) {
        const component = formComponentMap[compCfg.compName]
        if (!component) {
          throw new Error(`组件${compCfg.compName}未配置`)
        }
        component.functions.forEach(f => f.id = uuid())
        this.currFuncs = component.functions
        this.currCompCfg = compCfg
      },
      // 配置被修改
      cfgChanged (value, key) {
        this.currCompCfg[key] = value
        this.modifyComponent(this.currCompCfg)
      },
      // 转换组件信息为表单配置
      cloneFormCfg ({ name, functions }) {
        const joinComponent = {}

        if (!name) {
          throw new Error('该组件没有命名, 无法定位实际组件')
        }

        // 组件名称
        joinComponent.compName = name
        // 组件ID
        joinComponent.id = uuid()

        // 开始加载功能及相关默认值
        functions.forEach(func => {
          joinComponent[func.key] = func.defaultValue
        })

        return joinComponent
      }
    },
    computed: {
      // 获取组件配置
      componentCfgs () {
        return this.formConfig.formConfig
      }
    },
    created () {
      // 将配置映射到map中
      this.componentCfgs.forEach(cfg => formConfigMap[cfg.id] = cfg)

      // 设置组件信息
      OPFormView.formComponents.forEach(comp => formComponentMap[comp.name] = comp)
      if (this.supportComponentNames && this.supportComponentNames.length) {
        this.supportComponents = this.supportComponentNames.map(compName => formComponentMap[compName])
      }else{
        Array.prototype.push.apply(this.supportComponents, OPFormView.formComponents)
      }
    },
    props: {
      // 主模块样式
      formDesignClass: [String, Array],
      // 配置模块样式
      formConfigClass: [ String, Array ],
      // 组件库模块样式
      formInputStroeClass: [ String, Array ],
      // 表单预览模块样式
      formConfig: { type: Object, default () { return {} } },
      // 支持的组件
      supportComponentNames: { type: Array }
    }
  }
</script>

<style scoped>

</style>
