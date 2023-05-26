<template>
    <div class="page-inner">
      <HeaderView :title="title" :href="href"/>
        <div class="row">
                  <!--================================-->
                  <!-- Expansions Details Start -->	
                  <!--================================-->
                  <div class="col-xl-6">
                     <div class="card mg-b-30">
                        <div class="card-body pd-b-0">
                           <div class="row mg-b-20">
                              <div class="col-lg-6">
                                 <h5 class="mb-0 tx-14 tx-semibold">Your Most Recent Earnings</h5>
                                 <div class="tx-12 tx-gray-500">Customers who have upgraded the level of your products or service.</div>
                              </div>
                              <div class="col-lg-6 d-none d-lg-block">
                                 <div class="d-inline-ock btn-group mb-3 mb-md-0 ft-right" role="group">
                                    <button type="button" class="btn btn-default">Today</button>
                                    <button type="button" class="btn btn-default d-none d-md-block">Week</button>
                                    <button type="button" class="btn btn-default">Month</button>
                                    <button type="button" class="btn btn-default">Year</button>
                                 </div>
                              </div>
                           </div>
                           <div class="row clearfix mg-b-20">
                              <div class="col-md-4 col-lg-4 col-xl-4 mg-t-20 mg-sm-t-0 mg-md-t-20 mg-lg-t-0">
                                 <div class="media">
                                    <div class="wd-40 ht-40 rounded bd bd-2 bd-primary d-flex flex-shrink-0 align-items-center justify-content-center">
                                       <i data-feather="bar-chart-2" class="wd-20 ht-20 tx-primary"></i>
                                    </div>
                                    <div class="media-body mg-l-10">
                                       <p class="tx-10 tx-uppercase tx-primary tx-spacing-1 mg-b-0 tx-medium">Expansions</p>
                                       <h5 class="tx-normal tx-rubik lh-1 mg-b-5">$92,350<small>.50</small></h5>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 col-xl-4 mg-t-20 mg-sm-t-0 mg-md-t-20 mg-lg-t-0">
                                 <div class="media">
                                    <div class="wd-40 ht-40 rounded bd bd-2 bd-danger d-flex flex-shrink-0 align-items-center justify-content-center">
                                       <i data-feather="bar-chart-2" class="wd-20 ht-20 tx-danger"></i>
                                    </div>
                                    <div class="media-body mg-l-10">
                                       <p class="tx-10 tx-uppercase tx-danger tx-spacing-1 mg-b-0 tx-medium">Cancellations</p>
                                       <h5 class="tx-normal tx-rubik lh-1 mg-b-5">$10,301<small>.00</small></h5>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 col-xl-4 mg-t-20 mg-sm-t-0 mg-md-t-20 mg-lg-t-0">
                                 <div class="media">
                                    <div class="wd-40 ht-40 rounded bd bd-2 bd-success d-flex flex-shrink-0 align-items-center justify-content-center">
                                       <i data-feather="bar-chart-2" class="wd-20 ht-20 tx-success"></i>
                                    </div>
                                    <div class="media-body mg-l-10">
                                       <p class="tx-10 tx-uppercase tx-success tx-spacing-1 mg-b-0 tx-medium">Revenue</p>
                                       <h5 class="tx-normal tx-rubik lh-1 mg-b-5">$45,254<small>.00</small></h5>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="clearfix mg-b-20">
                              <div id="stackedBarChart" style="height: 220px"></div>
                           </div>
                        </div>
                        <div class="table-responsive">
                           <table class="table table-dashboard mg-b-0">
                              <thead class="tx-10 tx-uppercase">
                                 <tr>
                                    <th>Date</th>
                                    <th class="text-right">Gross Earnings</th>
                                    <th class="text-right">Total Orders</th>
                                    <th class="text-right">Net Earnings</th>
                                 </tr>
                              </thead>
                              <tbody class="tx-13">
                                 <tr>
                                    <td class="">02/04/2019</td>
                                    <td class="tx-success tx-right">$30,123<small>.50</small></td>
                                    <td class="tx-primary tx-right">5,258</td>
                                    <td class="tx-gray-500 tx-right">$25,147 <span class="mg-l-5 tx-10  tx-success"><i class="ti-arrow-up tx-8"></i> 2.41%</span></td>
                                 </tr>
                                 <tr>
                                    <td class="">03/04/2019</td>
                                    <td class="tx-success tx-right">$28,325<small>.50</small></td>
                                    <td class="tx-primary tx-right">4,257</td>
                                    <td class="tx-gray-500 tx-right">$24,152 <span class="mg-l-5 tx-10  tx-danger"><i class="ti-arrow-down tx-8"></i> 2.41%</span></td>
                                 </tr>
                                 <tr>
                                    <td class="">01/05/2019</td>
                                    <td class="tx-success tx-right">$26,789<small>.50</small></td>
                                    <td class="tx-primary tx-right">3,271</td>
                                    <td class="tx-gray-500 tx-right">$20,369 <span class="mg-l-5 tx-10  tx-success"><i class="ti-arrow-up tx-8"></i> 2.41%</span></td>
                                 </tr>
                                 <tr>
                                    <td class="">08/05/2019</td>
                                    <td class="tx-success tx-right">$22,963<small>.50</small></td>
                                    <td class="tx-primary tx-right">2,854</td>
                                    <td class="tx-gray-500 tx-right">$19,475 <span class="mg-l-5 tx-10  tx-success"><i class="ti-arrow-up tx-8"></i> 2.41%</span></td>
                                 </tr>
                                 <tr>
                                    <td class="">12/06/2019</td>
                                    <td class="tx-success tx-right">$20,145<small>.50</small></td>
                                    <td class="tx-primary tx-right">2,147</td>
                                    <td class="tx-gray-500 tx-right">$14,478 <span class="mg-l-5 tx-10  tx-danger"><i class="ti-arrow-down tx-8"></i> 2.41%</span></td>
                                 </tr>
                                 <tr>
                                    <td class="">22/06/2019</td>
                                    <td class="tx-success tx-right">$18,123<small>.50</small></td>
                                    <td class="tx-primary tx-right">1,563</td>
                                    <td class="tx-gray-500 tx-right">$12,452 <span class="mg-l-5 tx-10  tx-success"><i class="ti-arrow-up tx-8"></i> 2.41%</span></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
                  <!--/ Expansions Details End -->
                  <!--================================-->
                  <!-- Search Result Details Start -->	
                  <!--================================-->
                  <div class="col-xl-6">
                     <div class="card mg-b-30">
                        <div class="card-body pd-b-0">
                           <div id="world-map" style="height: 340px;"></div>
                           <div class="row search-statistic">
                              <div class="col-sm-4 col-md-4 col-lg-4 pd-20 bd-r bd-b">
                                 <div class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Organic Search</div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-primary mr-2"></div>
                                    <div class="tx-12 tx-gray-500">1,125,367 <small class="tx-success">+27%</small></div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 pd-20 bd-r bd-b">
                                 <div class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Google Search</div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-success mr-2"></div>
                                    <div class="tx-12 tx-gray-500">1,125,367 <small class="tx-success">+34%</small></div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 pd-20">
                                 <div class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Bing Search</div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-warning mr-2"></div>
                                    <div class="tx-12 tx-gray-500">1,125,367 <small class="tx-danger">-32%</small></div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                                 <div class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Yandex Search</div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-danger mr-2"></div>
                                    <div class="tx-12 tx-gray-500">1,125,367 <small class="tx-danger">-22%</small></div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                                 <div class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">DuckDuckGo Search</div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-teal mr-2"></div>
                                    <div class="tx-12 tx-gray-500">1,125,367 <small class="tx-success">+42%</small></div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 pd-20 bd-t">
                                 <div class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Baidu Search</div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-info mr-2"></div>
                                    <div class="tx-12 tx-gray-500">1,125,367 <small class="tx-success">+15%</small></div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                                 <div class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">DuckDuckGo Search</div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-teal mr-2"></div>
                                    <div class="tx-12 tx-gray-500">1,125,367 <small class="tx-success">+42%</small></div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                                 <div class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Baidu Search</div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-info mr-2"></div>
                                    <div class="tx-12 tx-gray-500">1,125,367 <small class="tx-success">+15%</small></div>
                                 </div>
                              </div>
                              <div class="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                                 <div class="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Yandex Search</div>
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-danger mr-2"></div>
                                    <div class="tx-12 tx-gray-500">1,125,367 <small class="tx-danger">-22%</small></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!--/ Search Result Details End -->
               </div>   
    </div>
</template>
<script>
import HeaderView from './HeaderView.vue'
export default {
   name:"ContactView",
   components:{
      HeaderView
   },
   data(){
      return {
         title:"Contacts"
      }
   }
}
</script>