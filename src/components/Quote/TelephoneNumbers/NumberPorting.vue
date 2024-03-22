<script setup>

</script>

<template>
  <div class="fifth-1 pt-page current">
    <div class="fifth-2 pt-page ">
      <div class="key-feature-grid  grid p-7  text-center">
        <h4 class="text-primary">Number Porting</h4>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
          gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
          tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
          Curabitur convallis sem id condimentum vulputate.</p>
        <div class="key-feature-grid grid gap-7 sm:grid-cols-2 md:grid-cols-3 p-7">
          <div>
            <h4>UK Geopgrahic Numbers</h4>
            <p class="text-blue mb-2">$5 per block</p>
            <!-- Input Number -->
            <div class="flex gap-3 justify-center">
              <button data-action="decrement"><i class="fa-solid fa-minus"></i></button>
              <input type="text" value="0" class="form-control w-14 text-center">
              <button data-action="increment"><i class="fa-solid fa-plus"></i></button>
            </div>
            <!-- End Input Number -->
          </div>
          <div>
            <h4>UK Geopgrahic Numbers</h4>
            <p class="text-blue mb-2">$5 per block</p>
            <!-- Input Number -->
            <div class="flex gap-3 justify-center">
              <button data-action="decrement"><i class="fa-solid fa-minus"></i></button>
              <input type="text" value="0" class="form-control w-14 text-center">
              <button data-action="increment"><i class="fa-solid fa-plus"></i></button>
            </div>
            <!-- End Input Number -->
          </div>
          <div>
            <h4>03 Non Geopgrahic Numbers</h4>
            <p class="text-blue mb-2">$5 per block</p>

            <!-- Input Number -->
            <div class="flex gap-3 justify-center">
              <button data-action="decrement"><i class="fa-solid fa-minus"></i></button>
              <input type="text" value="0" class="form-control w-14 text-center">
              <button data-action="increment"><i class="fa-solid fa-plus"></i></button>
            </div>
            <!-- End Input Number -->
          </div>
        </div>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
          gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
          tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
          Curabitur convallis sem id condimentum vulputate.</p>


      </div>
    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="$emit('onClickPrev')"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="$emit('onClickNext')" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
