<template>
    <div class="page-inner">
      <HeaderView :title="title" :href="href"/>
        <div class="row clearfix">
                  <!--================================-->
                  <!-- Annual Report and Bar Chart Start -->	
                  <!--================================-->
                  <div class="col-xl-9">
                     <div class="card mg-b-30">
                        <div class="card-body">
                           <div class="row">
                              <div  class="col-xl-3">
                                 <div class="row mg-b-20">
                                    <div class="col-sm-12 col-md-6 col-xl-12 mg-t-0">
                                       <div class="d-flex justify-content-between">
                                          <h6 class="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Today Sales</h6>
                                       </div>
                                       <div class="d-flex align-items-end justify-content-between mg-b-5">
                                          <h5 class="mg-b-0 tx-dark tx-rubik tx-normal"><span class="counter">$1,860</span></h5>
                                          <div class="d-flex align-items-center tx-gray-700"><span class="small text-success mr-2 d-flex align-items-center"><i class="ti-arrow-up mr-1 tx-8"></i>+351</span></div>
                                       </div>
                                       <div class="progress ht-3 mg-b-0">
                                          <div class="progress-bar bg-teal wd-70p" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                       </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-xl-12 mg-t-30 mg-md-t-0 mg-xl-t-30">
                                       <div class="d-flex justify-content-between">
                                          <h6 class="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Today Earning</h6>
                                       </div>
                                       <div class="d-flex align-items-end justify-content-between mg-b-5">
                                          <h5 class="mg-b-0 tx-dark tx-rubik tx-normal"><span class="counter">$2,530</span></h5>
                                          <div class="d-flex align-items-center tx-gray-700"><span class="small text-success mr-2 d-flex align-items-center"><i class="ti-arrow-up mr-1 tx-8"></i>+425</span></div>
                                       </div>
                                       <div class="progress ht-3 mg-b-0">
                                          <div class="progress-bar bg-success wd-80p" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                       </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-xl-12 mg-t-30">
                                       <div class="d-flex justify-content-between">
                                          <h6 class="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Average Order</h6>
                                       </div>
                                       <div class="d-flex align-items-end justify-content-between mg-b-5">
                                          <h5 class="mg-b-0 tx-dark tx-rubik tx-normal"><span class="counter">$2,148</span></h5>
                                          <div class="d-flex align-items-center tx-gray-700"><span class="small text-danger mr-2 d-flex align-items-center"><i class="ti-arrow-down mr-1 tx-8"></i>-211</span></div>
                                       </div>
                                       <div class="progress ht-3 mg-b-0">
                                          <div class="progress-bar bg-danger wd-70p" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                       </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-xl-12 mg-t-30">
                                       <div class="d-flex justify-content-between">
                                          <h6 class="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Total Revenue</h6>
                                       </div>
                                       <div class="d-flex align-items-end justify-content-between mg-b-5">
                                          <h5 class="mg-b-0 tx-dark tx-rubik tx-normal"><span class="counter">$11,290</span></h5>
                                          <div class="d-flex align-items-center tx-gray-700"><span class="small text-success mr-2 d-flex align-items-center"><i class="ti-arrow-up mr-1 tx-8"></i>+151</span></div>
                                       </div>
                                       <div class="progress ht-3 mg-b-0">
                                          <div class="progress-bar bg-primary wd-65p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div  class="col-xl-9">
                                 <div class="clearfix">
                                    <div id="salesBarChart"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-md-6">
                           <div class="card mg-b-30">
                              <div class="card-body">
                                 <div class="pd-b-20">
                                    <h3 class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-0">Profit Share</h3>
                                    <p class="tx-13 tx-gray-500 mb-0">Profit Share between customers</p>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-50p ht-100" id="salesDonut1"></div>
                                    <div>
                                       <div class="d-flex align-items-center">
                                          <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-primary mr-2"></div>
                                          <div class="tx-gray-500">37% Sport Tickets</div>
                                       </div>
                                       <div class="d-flex align-items-center">
                                          <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-warning mr-2"></div>
                                          <div class="tx-gray-500">47% Business Events</div>
                                       </div>
                                       <div class="d-flex align-items-center">
                                          <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-success mr-2"></div>
                                          <div class="tx-gray-500">19% Others</div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="card mg-b-30">
                              <div class="card-body">
                                 <div class="pd-b-20">
                                    <h3 class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-0">Revenue Change</h3>
                                    <p class="tx-13 tx-gray-500 mb-0">Revenue change breakdown by cities</p>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-50p ht-100" id="salesDonut2"></div>
                                    <div>
                                       <div class="d-flex align-items-center">
                                          <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-primary mr-2"></div>
                                          <div class="tx-gray-500">+10% New York</div>
                                       </div>
                                       <div class="d-flex align-items-center">
                                          <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-warning mr-2"></div>
                                          <div class="tx-gray-500">-7% London</div>
                                       </div>
                                       <div class="d-flex align-items-center">
                                          <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-success mr-2"></div>
                                          <div class="tx-gray-500">+20% California</div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!--/ Annual Report and Bar Chart End -->
                  <!--================================-->
                  <!-- Earnings Details Start -->	
                  <!--================================-->
                  <div class="col-xl-3">
                     <div class="card mg-b-30">
                        <div class="row">
                           <div class="col-sm-4 col-md-4 col-lg-4 col-xl-12">
                              <div class="media pd-t-20 pd-x-20">
                                 <div class="wd-40 ht-40 bg-primary tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                    <i data-feather="bar-chart-2"></i> 
                                 </div>
                                 <div class="media-body">
                                    <h6 class="tx-uppercase tx-10 tx-spacing-1 tx-gray-500 mg-b-5">Gross Earnings</h6>
                                    <h5 class="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">$51,958<small class="tx-12">.50</small></h5>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-4 col-md-4 col-lg-4 col-xl-12">
                              <div class="media pd-y-20 pd-x-20">
                                 <div class="wd-40 ht-40 bg-warning tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                    <i data-feather="bar-chart-2"></i> 
                                 </div>
                                 <div class="media-body">
                                    <h6 class="tx-uppercase tx-10 tx-spacing-1 tx-gray-500 mg-b-5">Net Earnings</h6>
                                    <h5 class="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">$31,608<small class="tx-12">.50</small></h5>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-4 col-md-4 col-lg-4 col-xl-12">
                              <div class="media pd-b-20 pd-x-20 pd-md-t-20 pd-xl-t-0">
                                 <div class="wd-40 ht-40 bg-pink tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                    <i data-feather="bar-chart-2"></i> 
                                 </div>
                                 <div class="media-body">
                                    <h6 class="tx-uppercase tx-10 tx-spacing-1 tx-gray-500 mg-b-5">Tax Withheld</h6>
                                    <h5 class="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">$24,769<small class="tx-12">.50</small></h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="card-body pd-0">
                           <div class="table-responsive">
                              <table class="table table-hover tx-12 mb-0">
                                 <thead class="tx-10 tx-uppercase">
                                    <tr>
                                       <th class="wd-40">Date</th>
                                       <th class="wd-25 text-right">Orders</th>
                                       <th class="wd-35 text-right">Earnings</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td class="tx-13">05/04/2019</td>
                                       <td class="text-right tx-teal">2,369</td>
                                       <td class="text-right tx-pink">$258,963</td>
                                    </tr>
                                    <tr>
                                       <td class="tx-13">01/05/2019</td>
                                       <td class="text-right tx-teal">1,950</td>
                                       <td class="text-right tx-pink">$123,654</td>
                                    </tr>
                                    <tr>
                                       <td class="tx-13">02/05/2019</td>
                                       <td class="text-right tx-teal">1,198</td>
                                       <td class="text-right tx-pink">$369,852</td>
                                    </tr>
                                    <tr>
                                       <td class="tx-13">12/06/2019</td>
                                       <td class="text-right tx-teal">1,456</td>
                                       <td class="text-right tx-pink">$789,125</td>
                                    </tr>
                                    <tr>
                                       <td class="tx-13">20/06/2019</td>
                                       <td class="text-right tx-teal">1,198</td>
                                       <td class="text-right tx-pink">$357,489</td>
                                    </tr>
                                    <tr>
                                       <td class="tx-13">02/06/2019</td>
                                       <td class="text-right tx-teal">1,458</td>
                                       <td class="text-right tx-pink">$541,478</td>
                                    </tr>
                                    <tr>
                                       <td class="tx-13">01/07/2019</td>
                                       <td class="text-right tx-teal">1,257</td>
                                       <td class="text-right tx-pink">$951,357</td>
                                    </tr>
                                    <tr>
                                       <td class="tx-13">02/07/2019</td>
                                       <td class="text-right tx-teal">1,147</td>
                                       <td class="text-right tx-pink">$124,452</td>
                                    </tr>
                                    <tr>
                                       <td class="tx-13">04/08/2019</td>
                                       <td class="text-right tx-teal">1,478</td>
                                       <td class="text-right tx-pink">$145,452</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                           <!-- table-responsive -->
                        </div>
                     </div>
                  </div>
                  <!--/ Earnings Details End -->
               </div>
    </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
export default {
   name:"AboutView",
   components:{
      HeaderView
   },
   data(){
      return {
         title:"About",
         href:"/"
      }
   }
}
</script>