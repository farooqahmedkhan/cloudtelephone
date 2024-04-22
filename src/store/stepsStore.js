import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

export const useStepsStore = defineStore( 'steps', () => {
  const route = useRoute()
  const initialStep = parseInt( route.query.step ) || 11
  const currentStep = ref( initialStep )

  const next = () => {
    if ( currentStep.value < 15 ) {
      currentStep.value++
    }
  }

  const moveToStep = ( step ) => {
    currentStep.value = step
  }

  const prev = () => {
    if ( currentStep.value > 2 ) {
      currentStep.value--
    }
  }

  const stepButtons = computed( () => [
    {
      id: 1,
      title: "Your Details",
      slug: "details",
      active: currentStep.value === 1,
      moveTo: 1,
      disabled: true,
      desc: "Some info about you."
    },
    {
      id: 2,
      title: "Users & Lines",
      slug: "user-lines",
      active: currentStep.value >= 2 && currentStep.value <= 4,
      moveTo: 2,
      disabled: currentStep.value < 2,
      desc: "Where we sending it?"
    },
    {
      id: 3,
      title: "Equipment",
      slug: "equipment",
      active: currentStep.value >= 5 && currentStep.value <= 7,
      moveTo: 5,
      disabled: currentStep.value < 5,
      desc: "Where we sending it?"
    },
    {
      id: 5,
      title: "Extra Features",
      slug: "extra-features",
      active: currentStep.value >= 8 && currentStep.value <= 10,
      moveTo: 8,
      disabled: currentStep.value < 8,
      desc: "Where we sending it?"
    },
    {
      id: 6,
      title: "Telephone Numbers",
      slug: "tel-numbers",
      active: currentStep.value >= 11 && currentStep.value <= 13,
      moveTo: 11,
      disabled: currentStep.value < 11,
      desc: "Lorem ipsum dolor sit"
    },
    {
      id: 7,
      title: "Install & Support",
      slug: "install-support",
      active: currentStep.value == 14,
      moveTo: 14,
      disabled: currentStep.value < 14,
      desc: "Show us the money."
    },
    {
      id: 8,
      title: "Complete",
      slug: "complete",
      moveTo: 15,
      active: currentStep.value == 15,
      disabled: currentStep.value < 15,
      desc: "Show us the money."
    },
  ] )

  return {
    currentStep,
    next,
    moveToStep,
    prev,
    stepButtons
  }
} )
