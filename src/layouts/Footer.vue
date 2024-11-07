<script setup>
const industries = [
  { title: "Small Business VoIP Phone System", url: "small-business-voip" },
  { title: "Phone system for Recruitment", url: "recruitment-phones" },
  { title: "Phone system for UK Offices", url: "uk-office-phones" },
  { title: "Phone system for GP's, NHS & Dentists", url: "medical-phones" },
  { title: "Phone system for Charities", url: "charity-phones" },
  { title: "Phone system for Finance", url: "finance-phones" },
  { title: "Phone system for Funeral Providers", url: "funeral-provider-phones" },
  { title: "Phone system for Opticians", url: "optician-phones" },
  { title: "Telephone Systems for Business", url: "business-telephones" },
  { title: "Phone system for Marketing", url: "marketing-phones" },
  { title: "Phone system for Hospitality", url: "hospitality-phones" },
  { title: "Phone system for Vets", url: "vet-phones" },
  { title: "Phone system for Care Homes", url: "care-home-phones" },
  { title: "Phone system for Start-Ups", url: "startup-phones" },
  { title: "Office Phone system", url: "office-phones" },
  { title: "Phone system with CRM", url: "crm-phones" }
];

</script>

<template>
  <footer class="footer">
          <div class="bg-gray-900">
               <div class="container">
                    <div class="row gx-5 pb-6 pt-[52px]">
                        <div class="col-12 mt-6 md:col-6 lg:col-3">
                          <router-link to="/">
                            <img src="/new-logo.svg" alt="" />
                          </router-link>
                          <p class="text-gray-400 mt-5">DMV Communications T/A Cloud Telephone.co.uk</p>
                          <p class="text-gray-400">Fairgate House</p>
                          <p class="text-gray-400">205 Kings Road, B11 2AA</p>
                          <p class="text-gray-400">Birmingham</p>
                          <p class="text-gray-400"><a class="hover:font-semibold" href="tel:441213690121">(44) 121 369 0121</a></p>
                        </div>
                        <div class="col-12 mt-6 md:col-6 lg:col-9">
                            <h5>Services</h5>
                            <div class="w-full grid grid-cols-3 gap-y-1 mt-4">
                                <router-link v-for="item in industries" :key="item.url" class="text-sm text-gray-400 hover:text-gray-600"
                                :to="`/industries/${item.url}`">{{ item.title }}</router-link>
                            </div>
                        </div>
                        
                        <div class="col-12 mt-6 md:col-12 lg:col-12">
                          <h5>Quick Links</h5>
                          <ul class="flex flex-row flex-nowrap items-center gap-5">
                            <li class="just-a-border h-full text-left flex-1 flex-grow">
                              <router-link to="/faq">FAQs</router-link>
                            </li>
                            <li class="just-a-border h-full text-left flex-1 flex-grow">
                              <router-link to="/how-it-works">How It Works</router-link>
                            </li>
                            <li class="just-a-border h-full text-left flex-1 flex-grow">
                              <router-link to="/why-cloudtelephone">Why CloudTelephone</router-link>
                            </li>
                            <li class="just-a-border h-full text-left flex-1 flex-grow">
                              <router-link to="/quote">Get A Quote For Your Business</router-link>
                            </li>
                            <li class="just-a-border h-full text-left flex-1 flex-grow">
                              <router-link to="/quote/residential">Get A Quote For Your Home</router-link>
                            </li>
                          </ul>
                        </div>
                      
                    </div>
                <div>
        
         </div>
    </div>
          </div>
          <div class="bg-gray-900  border-t border-border">
               <div class="container">
         <div class="row items-center">
          <div class="col-12 md:col-6 lg:col-6 pt-5">
                <div class="footer-copyright ">
                  <p>&copy; CloudTelephone.co.uk T/A DMV Communications Ltd | All Rights Reserved.</p>
                </div>
          </div>
            <div class="col-12 md:col-6 lg:col-6 pt-5">
                <ul class="social-icons justify-end flex">
                  <li>
                    <a href="https://facebook.com/cloudtelephoneuk">
                      <svg width="19" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.1056 10.4495C19.1056 5.09642 15 0.759277 9.9327 0.759277C4.86539 0.759277 0.759766 5.09642 0.759766 10.4495C0.759766 15.2946 4.08865 19.3191 8.49018 20.0224V13.2627H6.15996V10.4495H8.49018V8.33951C8.49018 5.91696 9.85872 4.54939 11.93 4.54939C12.9657 4.54939 14.0013 4.74476 14.0013 4.74476V7.12823H12.8547C11.7081 7.12823 11.3382 7.87063 11.3382 8.65209V10.4495H13.8904L13.4835 13.2627H11.3382V20.0224C15.7398 19.3191 19.1056 15.2946 19.1056 10.4495Z"
                          fill="#222222" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/cloudtelephoneuk">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.3308 3.92621C17.0129 3.42889 17.6269 2.83209 18.1044 2.13583C17.4904 2.40108 16.7742 2.60001 16.0579 2.66632C16.8083 2.2353 17.354 1.5722 17.6269 0.743317C16.9447 1.14118 16.1603 1.43958 15.3758 1.60535C14.6937 0.909093 13.7728 0.51123 12.7496 0.51123C10.7714 0.51123 9.16837 2.06952 9.16837 3.99252C9.16837 4.25777 9.20248 4.52301 9.27069 4.78825C6.3034 4.62247 3.64307 3.22995 1.86952 1.14118C1.56256 1.63851 1.39202 2.2353 1.39202 2.8984C1.39202 4.09199 2.00595 5.15296 2.99504 5.7829C2.41523 5.74975 1.83541 5.61713 1.35792 5.35189V5.38504C1.35792 7.07596 2.58576 8.46847 4.22289 8.80002C3.95003 8.86633 3.60897 8.93265 3.302 8.93265C3.06326 8.93265 2.85862 8.89949 2.61987 8.86633C3.06326 10.2589 4.39342 11.2535 5.96233 11.2867C4.73449 12.215 3.19968 12.7786 1.52845 12.7786C1.22149 12.7786 0.948636 12.7455 0.675781 12.7123C2.24469 13.707 4.12057 14.2706 6.16698 14.2706C12.7496 14.2706 16.3308 8.99896 16.3308 4.39039C16.3308 4.22461 16.3308 4.09199 16.3308 3.92621Z"
                          fill="#222222" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/uk/cloudtelephone">
                      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.56609 15.2704V5.45315H0.948103V15.2704H4.56609ZM2.73764 4.1398C3.90474 4.1398 4.83841 3.31895 4.83841 2.33394C4.83841 1.38176 3.90474 0.59375 2.73764 0.59375C1.60945 0.59375 0.675781 1.38176 0.675781 2.33394C0.675781 3.31895 1.60945 4.1398 2.73764 4.1398ZM18.0654 15.2704H18.1044V9.8857C18.1044 7.259 17.4041 5.22331 13.7472 5.22331C11.9966 5.22331 10.8295 6.04415 10.3237 6.79933H10.2848V5.45315H6.82246V15.2704H10.4404V10.411C10.4404 9.13053 10.7128 7.91568 12.5801 7.91568C14.4475 7.91568 14.4864 9.36036 14.4864 10.5095V15.2704H18.0654Z"
                          fill="#222222" />
                      </svg>
                    </a>
                  </li>
               </ul>
            </div>
         </div>
    </div>
          </div>
    
    
  </footer>
</template>


<style lang="scss" scoped></style>