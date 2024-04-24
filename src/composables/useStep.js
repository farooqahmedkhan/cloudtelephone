import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from "vue-router"

export default function useStep () {
  const route = useRoute()
  const router = useRouter()
  const step = ref( route.query.step ? parseInt( route.query.step ) : 1 )

  watch( () => route.query.step, ( newValue, oldValue ) => {
    step.value = parseInt( newValue )
  } )


  const next = ( leadId = null ) => {
    if ( step.value === 15 ) return
    const nextStep = step.value + 1
    if ( leadId !== null && step.value === 1 ) {
      router.push( { query: { ...route.query, step: nextStep, leadId } } )
    } else {
      router.push( { query: { ...route.query, step: nextStep } } )
    }
  }

  const moveToStep = ( newStep ) => {
    if ( newStep <= 1 || newStep > 15 || newStep == step.value ) return
    console.log( 'cange' )
    router.push( { query: { ...route.query, step: newStep } } )
  }

  const prev = () => {
    if ( step.value <= 2 ) return
    const prevStep = step.value - 1
    router.push( { query: { ...route.query, step: prevStep } } )
  }

  const stepButtons = computed( () => [
    {
      id: 1,
      title: "Your Details",
      slug: "details",
      active: step.value === 1,
      moveTo: 1,
      disabled: true,
      desc: "Some info about you."
    },
    {
      id: 2,
      title: "Users & Lines",
      slug: "user-lines",
      active: step.value >= 2 && step.value <= 4,
      moveTo: 2,
      disabled: step.value < 2,
      desc: "Where we sending it?"
    },
    {
      id: 3,
      title: "Equipment",
      slug: "equipment",
      active: step.value >= 5 && step.value <= 7,
      moveTo: 5,
      disabled: step.value < 5,
      desc: "Where we sending it?"
    },
    {
      id: 5,
      title: "Extra Features",
      slug: "extra-features",
      active: step.value >= 8 && step.value <= 10,
      moveTo: 8,
      disabled: step.value < 8,
      desc: "Where we sending it?"
    },
    {
      id: 6,
      title: "Telephone Numbers",
      slug: "tel-numbers",
      active: step.value >= 11 && step.value <= 13,
      moveTo: 11,
      disabled: step.value < 11,
      desc: "Lorem ipsum dolor sit"
    },
    {
      id: 7,
      title: "Install & Support",
      slug: "install-support",
      active: step.value == 14,
      moveTo: 14,
      disabled: step.value < 14,
      desc: "Show us the money."
    },
    {
      id: 8,
      title: "Complete",
      slug: "complete",
      moveTo: 15,
      active: step.value == 15,
      disabled: step.value < 15,
      desc: "Show us the money."
    },
  ] )

  return {
    step,
    moveToNextStep: next,
    jumpToStep: moveToStep,
    moveToPreviousStep: prev,
    stepButtons
  }
}
