import { defineStore } from 'pinia'
import { reactive } from "vue"
import { useQuotationStore } from "./quotationStore"
import axios from "axios"


export const useAvailabilityStore = defineStore('check-availability', () => {
  const quotationStore = useQuotationStore()
  

  const availability = reactive({
    status: false,
    json: null
  })

  function xmlToJson(xmlString) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      // Function to convert an XML node to JSON
      function xmlNodeToJson(node) {
          // Initialize object to hold node attributes and child nodes
          const obj = {};

          // Add attributes if any
          if (node.attributes.length > 0) {
              for (let i = 0; i < node.attributes.length; i++) {
                  const attribute = node.attributes[i];
                  obj[attribute.nodeName] = attribute.nodeValue;
              }
          }

          // Add child nodes if any
          if (node.childNodes.length > 0) {
              for (let i = 0; i < node.childNodes.length; i++) {
                  const child = node.childNodes[i];

                  // Handle text nodes (nodeValue) and element nodes (recursively convert)
                  if (child.nodeType === 3) {
                      // Text node
                      if (child.nodeValue.trim()) {
                          obj["value"] = child.nodeValue.trim();
                      }
                  } else if (child.nodeType === 1) {
                      // Element node (recursively convert)
                      if (!obj[child.nodeName]) {
                          obj[child.nodeName] = xmlNodeToJson(child);
                      } else {
                          if (!Array.isArray(obj[child.nodeName])) {
                              obj[child.nodeName] = [obj[child.nodeName]];
                          }
                          obj[child.nodeName].push(xmlNodeToJson(child));
                      }
                  }
              }
          }

          return obj;
      }

      // Start converting XML nodes starting from the documentElement
      return xmlNodeToJson(xmlDoc.documentElement);
  }

  // Send the request
  async function checkAvailability(postCode) {
    try {
      const { data } = await axios.post('/leads/check-availability', {
        postCode,
        telephone: quotationStore.userDetails.telephone
      })
      
      const json = xmlToJson(data);
      availability.status = true
      availability.json   = json.block[0].block[0].block
      console.log('data', availability);
    } catch (error) {
      availability.status = false
    }
  }

  return {
    checkAvailability, availability
  }
})
