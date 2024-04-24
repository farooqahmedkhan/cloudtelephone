import { computed } from 'vue'

export default function useLeadId () {
  const leadId = computed( () => {
    const urlParams = new URLSearchParams( window.location.search )
    const value = urlParams.get( 'leadId' )
    return value ? parseInt( value ) : null
  } )

  return leadId.value
}
