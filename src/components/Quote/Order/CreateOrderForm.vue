<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { useForm } from 'vee-validate';
import Input from '../../Base/Input.vue';
import { useOrderStore } from "@/store/orderStore";
import SignatureField from "./SignatureField.vue";
import { useRouter } from "vue-router";

const { validate } = useForm();
const orderStore = useOrderStore();

const props = defineProps({
  lead: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const signatureField = ref(null)

const form = reactive({
  companyName: props.lead.customer.company,
  contactName: props.lead.customer.name,
  jobTitle: '',
  telephone: props.lead.customer.telephone,
  email: props.lead.customer.email,
  password: props.lead.customer.password || '',
  bank_acc_number: '',
  bank_sort_code: '',
  bank_name: '',
  acc_name: '',
  po_number: '',
  billing_address1: '',
  billing_address2: '',
  billing_city: '',
  billing_county: '',
  billing_country: '',
  billing_postcode: '',
  billing_contact: '',
  billing_email: '',
  billing_mobile: '',
  source: '',
  agreeTerms: false,
  signature: ''
});

function prepopulateForm() {
  form.password = form.password || '12345678';
  form.jobTitle = 'Manager';
  form.bank_acc_number = '12345678';
  form.bank_sort_code = '12-34-56';
  form.bank_name = 'Bank of Vue';
  form.acc_name = 'John Doe';
  form.po_number = 'PO123456';
  form.billing_address1 = '123 Vue Street';
  form.billing_address2 = 'Suite 100';
  form.billing_city = 'Vue City';
  form.billing_county = 'Vue County';
  form.billing_country = 'Vue Country';
  form.billing_postcode = '12345';
  form.billing_contact = 'Jane Smith';
  form.billing_email = 'jane.smith@example.com';
  form.billing_mobile = '0987654321';
  form.source = 'google';
  form.agreeTerms = true;
}

function handleKeyDown(event) {
  if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
    event.preventDefault();
    prepopulateForm();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

async function submitForm() {
  await signatureField.value.uploadToSupabase()
  const { valid } = await validate()
  if (!valid || !form.signature) return
  try {
    await orderStore.createOrder({ leadId: props.lead.id, ...form })
    router.push('/thanks')
  } catch (error) {
    console.error(error);
  }
}


</script>

<template>
  <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-3 text-left">
    <Input name="Company Name" v-model="form.companyName" label="Company Name" placeholder="Company Name" disabled />
    <Input name="Contact Name" v-model="form.contactName" label="Contact Name" placeholder="Contact Name" disabled />
    <Input name="Job Title" rules="required" v-model="form.jobTitle" label="Job Title" placeholder="Job Title" />
    <Input type="tel" name="Contact Telephone Number" v-model="form.telephone" label="Contact Telephone Number"
      placeholder="Telephone Number" disabled />
    <Input name="Email Address" v-model="form.email" label="Email Address" placeholder="Email Address" disabled />
    <Input type="password" name="Password" rules="required|min:8" v-model="form.password" label="My Account Password"
      placeholder="Password" :disabled="lead.customer.password" />
    <Input name="Bank Account No" rules="required" v-model="form.bank_acc_number" label="Bank Account No"
      placeholder="Bank Account No" />
    <Input name="Bank Sort Code" rules="required" v-model="form.bank_sort_code" label="Bank Sort Code"
      placeholder="Bank Sort Code" />
    <Input name="Bank Name" rules="required" v-model="form.bank_name" label="Bank Name" placeholder="Bank Name" />
    <Input name="Account Name" rules="required" v-model="form.acc_name" label="Account Name"
      placeholder="Account Name" />
    <Input name="PO Number" rules="required" v-model="form.po_number" label="PO Number" placeholder="PO Number" />
    <Input name="Billing Address 1" rules="required" v-model="form.billing_address1" label="Billing Address 1"
      placeholder="Billing Address 1" />
    <Input name="Billing Address 2" rules="required" v-model="form.billing_address2" label="Billing Address 2"
      placeholder="Billing Address 2" />
    <Input name="Billing Town/City" rules="required" v-model="form.billing_city" label="Billing Town/City"
      placeholder="Town/City" />
    <Input name="Billing County" rules="required" v-model="form.billing_county" label="Billing County"
      placeholder="County" />
    <Input name="Billing Country" rules="required" v-model="form.billing_country" label="Billing Country"
      placeholder="Country" />
    <Input name="Billing Postcode" rules="required" v-model="form.billing_postcode" label="Billing Postcode"
      placeholder="Postcode" />
    <Input name="Billing Contact" rules="required" v-model="form.billing_contact" label="Billing Contact"
      placeholder="Billing Contact Name" />
    <Input name="Billing Email" rules="required|email" v-model="form.billing_email" label="Billing Email"
      placeholder="Billing Email" />
    <Input name="Billing Mobile" type="tel" rules="required" v-model="form.billing_mobile" label="Billing Mobile"
      placeholder="Billing Mobile" />
    <div class="form-group">
      <label for="source">Where did you find us?</label>
      <br>
      <select id="source" v-model="form.source" required>
        <option value="" disabled>Select an option</option>
        <option value="google">Google</option>
        <option value="referral">Referral</option>
        <option value="advert">Advertisement</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-group flex items-center gap-x-2">
      <input type="checkbox" id="terms" v-model="form.agreeTerms" required />
      <label for="terms">I agree to the Terms & Conditions.</label>
    </div>
    <signature-field ref="signatureField" v-model="form.signature" />
    <div class="w-100 text-center pb-7 col-span-2">
      <button type="submit" class="btn btn-green mt-10 text-lg w-full">Submit</button>
    </div>
  </form>
</template>