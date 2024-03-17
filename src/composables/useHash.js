import { ref, computed } from 'vue'

export default function useHash () {
  const hash = ref( window.location.hash.slice( 1 ) ) // Remove leading '#'

  // Optionally handle potential hash changes dynamically
  window.addEventListener( 'hashchange', () => {
    hash.value = window.location.hash.slice( 1 )
  } )

  return computed( () => hash.value )
}