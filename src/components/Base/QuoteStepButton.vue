<script setup>
import useStep from "@/composables/useStep.js"


const { jumpToStep } = useStep()

const props = defineProps( {
  step: Object
} )



function onClick () {
  if ( props.step.disabled ) return
  jumpToStep( props.step.id )
}
</script>

<template>
  <li class="relative flex items-center gap-2 p-4 group">
    <span class="arrow absolute -right-2 top-1/2 size-4 -translate-y-1/2 rotate-45 border group-[.ative]:block hidden
      sm:block border-b-0 border-l-0 bg-gray-50" />
    <template v-if="step.slug === 'details'">
      <a class="flex gap-3">
        <svg class="size-7 shrink-0 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
        <p class="leading-none">
          <strong class="block font-medium"> {{ step.title }} </strong>
          <small class="mt-1"> {{ step.desc }} </small>
        </p>
      </a>
    </template>

    <button v-else class="flex gap-3" :disabled="step.disabled" @click="onClick">
      <template v-if="step.slug === 'user-lines'">
        <svg class="size-7 shrink-0 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path  fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
            d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z">
          </path>
        </svg>
      </template>
      <template v-else-if="step.slug === 'equipment'">
        <svg class="size-7 shrink-0 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path  fill="currentColor" 
            d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>
      </template>
      <template v-else-if="step.slug === 'extra-features'">
        <svg class="size-7 shrink-0 mb-2" xmlns:x="http://ns.adobe.com/Extensibility/1.0/"
          xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
          viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve">
          <switch  fill="currentColor" >
            <foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1"
              height="1" />
            <g i:extraneous="self">
              <g>
                <path
                  d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" />
                <path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" />
                <path
                  d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" />
                <path
                  d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" />
              </g>
              <g>
                <path
                  d="M28.4,14l-6.7-0.5c-0.6-0.1-1.1-0.4-1.4-1l-2.6-6.2c-0.6-1.3-2.5-1.3-3,0l-2.6,6.2c-0.2,0.6-0.8,1-1.4,1L4,14     c-1.5,0.1-2,1.9-0.9,2.9l5.1,4.4c0.5,0.4,0.7,1,0.5,1.6l-1.6,6.6c-0.3,1.4,1.2,2.5,2.5,1.8l5.8-3.5c0.5-0.3,1.2-0.3,1.7,0     l5.8,3.5c1.2,0.8,2.8-0.4,2.5-1.8l-1.6-6.6c-0.1-0.6,0.1-1.2,0.5-1.6l5.1-4.4C30.5,15.9,29.9,14.1,28.4,14z" />
                <path
                  d="M42.2,25.9h50.2c2.8,0,5.1-2.3,5.1-5.1s-2.3-5.1-5.1-5.1H42.2c-2.8,0-5.1,2.3-5.1,5.1S39.4,25.9,42.2,25.9z" />
                <path
                  d="M28.4,45.6l-6.7-0.5c-0.6,0-1.1-0.4-1.4-1l-2.6-6.2c-0.6-1.3-2.5-1.3-3,0l-2.6,6.2c-0.2,0.6-0.8,1-1.4,1L4,45.6     c-1.5,0.1-2,1.9-0.9,2.9l5.1,4.4c0.5,0.4,0.7,1,0.5,1.6l-1.6,6.6c-0.3,1.4,1.2,2.5,2.5,1.8l5.8-3.5c0.5-0.3,1.2-0.3,1.7,0     l5.8,3.5c1.2,0.8,2.8-0.4,2.5-1.8l-1.6-6.6c-0.1-0.6,0.1-1.2,0.5-1.6l5.1-4.4C30.5,47.6,29.9,45.8,28.4,45.6z" />
                <path
                  d="M92.4,47.4H42.2c-2.8,0-5.1,2.3-5.1,5.1c0,2.8,2.3,5.1,5.1,5.1h50.2c2.8,0,5.1-2.3,5.1-5.1     C97.5,49.7,95.2,47.4,92.4,47.4z" />
                <path
                  d="M28.4,77.3l-6.7-0.5c-0.6,0-1.1-0.4-1.4-1l-2.6-6.2c-0.6-1.3-2.5-1.3-3,0l-2.6,6.2c-0.2,0.6-0.8,1-1.4,1L4,77.3     c-1.5,0.1-2,1.9-0.9,2.9l5.1,4.4c0.5,0.4,0.7,1,0.5,1.6l-1.6,6.6c-0.3,1.4,1.2,2.5,2.5,1.8l5.8-3.5c0.5-0.3,1.2-0.3,1.7,0     l5.8,3.5c1.2,0.8,2.8-0.4,2.5-1.8l-1.6-6.6c-0.1-0.6,0.1-1.2,0.5-1.6l5.1-4.4C30.5,79.2,29.9,77.4,28.4,77.3z" />
                <path
                  d="M92.4,79.1H42.2c-2.8,0-5.1,2.3-5.1,5.1c0,2.8,2.3,5.1,5.1,5.1h50.2c2.8,0,5.1-2.3,5.1-5.1     C97.5,81.3,95.2,79.1,92.4,79.1z" />
              </g>
            </g>
          </switch>
        </svg>
      </template>
      <template v-else>
        <svg class="size-7 shrink-0 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path fill="currentColor"  stroke-linecap="round" stroke-linejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      </template>
      <p class="leading-none text-left">
        <strong class="block font-medium"> {{ step.title }} </strong>
        <small class="mt-1"> {{ step.desc }} </small>
      </p>
    </button>
  </li>
</template>

<style lang="scss" scoped></style>