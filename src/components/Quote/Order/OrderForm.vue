<script setup>
import { reactive } from 'vue';
import { useForm } from 'vee-validate';
import Input from '../../Base/Input.vue';

const { validate } = useForm();

const form = reactive({
  companyName: '',
  contactName: '',
  jobTitle: '',
  telephone: '',
  email: '',
  password: '',
  bankAccountNo: '',
  bankSortCode: '',
  bankName: '',
  accountName: '',
  poNumber: '',
  billingAddress1: '',
  billingAddress2: '',
  billingTownCity: '',
  billingCounty: '',
  billingCountry: '',
  billingPostcode: '',
  billingContact: '',
  billingEmail: '',
  billingMobile: '',
  source: '',
  agreeTerms: false,
  signature: ''
});

async function submitForm() {
  const { valid } = await validate();
  if (!valid) return;
  // Handle form submission
}
</script>

<template>
  <div class="grid grid-cols-2 gap-3 text-left">
    <Input name="Company Name" rules="required" v-model="form.companyName" label="Company Name"
      placeholder="Company Name" />
    <Input name="Contact Name" rules="required" v-model="form.contactName" label="Contact Name"
      placeholder="Contact Name" />
    <Input name="Job Title" rules="required" v-model="form.jobTitle" label="Job Title" placeholder="Job Title" />
    <Input type="tel" name="Contact Telephone Number" rules="required" v-model="form.telephone"
      label="Contact Telephone Number" placeholder="Telephone Number" />
    <Input rules="required|email" name="Email Address" v-model="form.email" label="Email Address"
      placeholder="Email Address" />
    <Input type="password" name="Password" rules="required|min:8" v-model="form.password" label="Password"
      placeholder="Password" />
    <Input name="Bank Account No" rules="required" v-model="form.bankAccountNo" label="Bank Account No"
      placeholder="Bank Account No" />
    <Input name="Bank Sort Code" rules="required" v-model="form.bankSortCode" label="Bank Sort Code"
      placeholder="Bank Sort Code" />
    <Input name="Bank Name" rules="required" v-model="form.bankName" label="Bank Name" placeholder="Bank Name" />
    <Input name="Account Name" rules="required" v-model="form.accountName" label="Account Name"
      placeholder="Account Name" />
    <Input name="PO Number" rules="required" v-model="form.poNumber" label="PO Number" placeholder="PO Number" />
    <Input name="Billing Address 1" rules="required" v-model="form.billingAddress1" label="Billing Address 1"
      placeholder="Billing Address 1" />
    <Input name="Billing Address 2" rules="required" v-model="form.billingAddress2" label="Billing Address 2"
      placeholder="Billing Address 2" />
    <Input name="Billing Town/City" rules="required" v-model="form.billingTownCity" label="Billing Town/City"
      placeholder="Town/City" />
    <Input name="Billing County" rules="required" v-model="form.billingCounty" label="Billing County"
      placeholder="County" />
    <Input name="Billing Country" rules="required" v-model="form.billingCountry" label="Billing Country"
      placeholder="Country" />
    <Input name="Billing Postcode" rules="required" v-model="form.billingPostcode" label="Billing Postcode"
      placeholder="Postcode" />
    <Input name="Billing Contact" rules="required" v-model="form.billingContact" label="Billing Contact"
      placeholder="Billing Contact Name" />
    <Input name="Billing Email" rules="required|email" v-model="form.billingEmail" label="Billing Email"
      placeholder="Billing Email" />
    <Input name="Billing Mobile" type="tel" rules="required" v-model="form.billingMobile" label="Billing Mobile"
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
    <div class="form-group">
      <input type="checkbox" id="terms" v-model="form.agreeTerms" required />
      <label for="terms">I agree to the Terms & Conditions.</label>
    </div>
    <div class="form-group">
      <label for="signature">Write your signature in box below:</label>
      <textarea id="signature" v-model="form.signature" placeholder="Signature" required></textarea>
    </div>
    <div class="w-100 text-center pb-7 col-span-2">
      <button @click="submitForm" class="btn btn-green mt-10 text-lg w-full">Submit</button>
    </div>
  </div>
</template>