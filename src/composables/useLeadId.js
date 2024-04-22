import { ref, onMounted, onUnmounted } from 'vue'

export default function useLeadId () {
  const leadId = ref( null )

  const updateLeadId = () => {
    const urlParams = new URLSearchParams( window.location.search )
    const value = urlParams.get( 'leadId' )
    leadId.value = value ? parseInt( value ) : null
  }

  // Function to handle URL changes
  const onUrlChange = () => {
    updateLeadId()
  }

  onMounted( () => {
    updateLeadId()
    window.addEventListener( 'popstate', onUrlChange )
  } )

  onUnmounted( () => {
    window.removeEventListener( 'popstate', onUrlChange )
  } )

  return leadId
}
