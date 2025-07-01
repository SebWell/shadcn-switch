<template>
  <div :class="wrapperClasses">
    <label v-if="content.label" :class="labelClasses">
      {{ content.label }}
      <span v-if="content.required" class="text-destructive ml-1">*</span>
    </label>
    
    <div 
      :class="switchClasses"
      :aria-checked="isChecked"
      :tabindex="content.disabled ? -1 : 0"
      role="switch"
      @click="handleToggle"
      @keydown.space.prevent="handleToggle"
      @keydown.enter.prevent="handleToggle"
    >
      <div :class="thumbClasses" />
    </div>
    
    <span v-if="content.description" :class="descriptionClasses">
      {{ content.description }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebSwitch',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        checked: false,
        disabled: false,
        required: false,
        label: '',
        description: '',
        size: 'default',
        customClasses: ''
      })
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const isChecked = computed(() => {
      return props.modelValue !== undefined ? props.modelValue : props.content.checked
    })

    const sizeClasses = {
      sm: 'h-4 w-7',
      default: 'h-6 w-11',
      lg: 'h-8 w-14'
    }

    const thumbSizeClasses = {
      sm: 'h-3 w-3',
      default: 'h-5 w-5',
      lg: 'h-7 w-7'
    }

    const wrapperClasses = computed(() => cn(
      "flex flex-col space-y-2",
      props.content.customClasses
    ))

    const labelClasses = computed(() => cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    ))

    const switchClasses = computed(() => cn(
      "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      sizeClasses[props.content.size] || sizeClasses.default,
      {
        "bg-primary": isChecked.value,
        "bg-input": !isChecked.value,
        "cursor-not-allowed opacity-50": props.content.disabled
      }
    ))

    const thumbClasses = computed(() => {
      const baseClasses = "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform"
      const sizeClass = thumbSizeClasses[props.content.size] || thumbSizeClasses.default
      
      let translateClass = ''
      if (isChecked.value) {
        if (props.content.size === 'sm') translateClass = 'translate-x-3'
        else if (props.content.size === 'lg') translateClass = 'translate-x-6'
        else translateClass = 'translate-x-5'
      } else {
        translateClass = 'translate-x-0'
      }
      
      return cn(baseClasses, sizeClass, translateClass)
    })

    const descriptionClasses = computed(() => cn(
      "text-sm text-muted-foreground"
    ))

    const handleToggle = () => {
      if (props.content.disabled) return

      const newValue = !isChecked.value
      emit('update:modelValue', newValue)
      emit('change', newValue)

      // Update Weweb variable if defined
      if (props.content.wewebVariable && typeof wwLib !== 'undefined') {
        wwLib.wwVariable.updateValue(props.content.wewebVariable, newValue)
      }

      // Execute Weweb workflow if defined
      if (props.content.changeWorkflowId && typeof wwLib !== 'undefined') {
        wwLib.executeWorkflow(props.content.changeWorkflowId)
      }
    }

    return {
      isChecked,
      wrapperClasses,
      labelClasses,
      switchClasses,
      thumbClasses,
      descriptionClasses,
      handleToggle
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 