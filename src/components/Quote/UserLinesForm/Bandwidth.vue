<script setup>

</script>

<template>
  <div class="screen-2-1 pt-page ">
    <div class="key-feature-grid grid p-7">
      <h4 class="text-primary text-center">Internet Options</h4>
      <img alt="" src="/images/internet-options.jpg" class="mx-auto">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <h5>Broadband</h5>
            <p class="font-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              urna elit, congue eget metus sed, <a href="#"> tempus purus.</a> Donec scelerisque urna
              eget enim interdum, nec euismod nibh consectetur.</p>

          </div>
        </div>
      </div>
      <div class="relative overflow-x-auto">
        <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">

          <tbody>
            <tr class="border border-neutral-200 bg-black/[0.02]  whitespace-nowrap">
              <td class="px-6 py-4" style="white-space: normal;">
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
                <p>Vivamus urna elit, congue eget metus sed, rhoncus tempus purus. Donec scelerisque
                  urna eget enim interdum, nec euismod nibh consectetur.</p>
              </td>
              <td class="px-6 py-4">$33/month</td>
              <td class="px-6 py-4"><input type="text" class="form-control"></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    <div class="w-100 flex justify-between">
      <button @click="$emit('moveToPrevious')"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="$emit('moveToNext')" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>