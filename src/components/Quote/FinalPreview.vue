<script setup>
import { useQuotationStore } from "../../store/quotationStore"

const quotatonStore = useQuotationStore()

const items = [
  {
    title: "Monthly Breakdown",
    id: 1,
    data: [
      {
        id: 1,
        title: "App Teams +2",
        price: "£10.00",
        quantity: 1,
        total: "£10.00"
      },
      {
        id: 2,
        title: "Item 2",
        price: "£20.00",
        quantity: 2,
        total: "£40.00"
      },
      {
        id: 3,
        title: "Item 3",
        price: "£30.00",
        quantity: 3,
        total: "£90.00"
      },
      {
        id: 4,
        title: "Item 4",
        price: "£40.00",
        quantity: 4,
        total: "£160.00"
      },
      {
        id: 5,
        title: "Item 5",
        price: "£50.00",
        quantity: 5,
        total: "£250.00"
      },
      {
        id: 6,
        title: "Item 6",
        price: "£60.00",
        quantity: 6,
        total: "£360.00"
      },
      {
        id: 7,
        title: "Item 7",
        price: "£70.00",
        quantity: 7,
        total: "£490.00"
      },
      {
        id: 8,
        title: "Item 8",
        price: "£80.00",
        quantity: 8,
        total: "£640.00"
      },
      {
        id: 9,
        title: "Item 9",
        price: "£90.00",
        quantity: 9,
        total: "£810.00"
      },
      {
        id: 10,
        title: "Item 10",
        price: "£100.00",
        quantity: 10,
        total: "£1000.00"
      }
    ]
  },
  {
    title: "Monthly Breakdown",
    id: 2,
    data: [
      {
        id: 1,
        title: "App Teams +2",
        price: "£10.00",
        quantity: 1,
        total: "£10.00"
      },
      {
        id: 2,
        title: "Item 2",
        price: "£20.00",
        quantity: 2,
        total: "£40.00"
      },
      {
        id: 3,
        title: "Item 3",
        price: "£30.00",
        quantity: 3,
        total: "£90.00"
      },
      {
        id: 4,
        title: "Item 4",
        price: "£40.00",
        quantity: 4,
        total: "£160.00"
      },
      {
        id: 5,
        title: "Item 5",
        price: "£50.00",
        quantity: 5,
        total: "£250.00"
      },
      {
        id: 6,
        title: "Item 6",
        price: "£60.00",
        quantity: 6,
        total: "£360.00"
      },
      {
        id: 7,
        title: "Item 7",
        price: "£70.00",
        quantity: 7,
        total: "£490.00"
      },
      {
        id: 8,
        title: "Item 8",
        price: "£80.00",
        quantity: 8,
        total: "£640.00"
      },
      {
        id: 9,
        title: "Item 9",
        price: "£90.00",
        quantity: 9,
        total: "£810.00"
      },
      {
        id: 10,
        title: "Item 10",
        price: "£100.00",
        quantity: 10,
        total: "£1000.00"
      }
    ]
  },

]

</script>

<template>
  <div>
    <div class="seventh-1">
      <div class="p-7 text-center">
        <h4 class="text-primary">Your Quotation</h4>
        <p>For: Hassan</p>
        <p>Date: 01 April 2024</p>
        <div class="relative overflow-x-auto">
          <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
            <tbody>
              <template v-for="item in items" :key="item.id">
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td colspan="4" class="px-6 py-4">
                    <h5 class="text-center">{{ item.title }}</h5>
                  </td>
                </tr>
                <tr v-for="d in item.data" :key="d.id"
                  class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td class="px-6 py-4">{{ d.title }}</td>
                  <td class="px-6 py-4">{{ d.price }}</td>
                  <td class="px-6 py-4">{{ d.quantity }}</td>
                  <td class="px-6 py-4">{{ d.total }}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div class="my-8 text-left">
          <h4 class="text-primary">Set-up cost: £4290.00</h4>
          <p class="text-primary">Price including VAT £6790.00</p>
          <h4 class="text-primary">Contract</h4>
          <p class="mt-1 text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            exercitationem
            repellendus modi maiores
            repudiandae,
            saepe deserunt cumque molestiae facilis tempore laudantium autem perspiciatis nisi illum nostrum enim
            necessitatibus
            cum, itaque reprehenderit veritatis assumenda id quisquam deleniti ad! Unde dicta fuga suscipit saepe
            voluptatum,
            culpa natus non eos atque accusamus dolores!</p>
        </div>
      </div>
    </div>
    <div class="w-100 text-center pb-7">
      <button class="btn btn-green mt-10 text-lg">Order Today</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>