<template>
<div class="page-inner">
   <HeaderView :title="data.title" :href="data.href"/>
    <div class="row clearfix">
                  <div class="col-lg-6">
                     <div class="card mg-b-30">
                        <div class="card-body">
                           <div class="row">
                              <div class="col-md-5 col-lg-4 col-xl-6 order-1 order-sm-0 mg-t-20 mg-sm-t-0">
                                 <div class="clearfix">
                                    <div id="flotBarRecentOrders" style="height: 100px"></div>
                                 </div>
                              </div>
                              <div class="col-md-7 col-lg-8 col-xl-6">
                                 <div class="pd-0">
                                    <div class="d-flex align-items-baseline mg-b-5">
                                       <h1 class="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">1,245</h1>
                                       <span class="d-flex align-items-center tx-success mg-l-2 tx-10"><i class="ti-arrow-up tx-8 tx-success tx-8 mr-1"></i>11.24%</span>
                                    </div>
                                    <h6 class="tx-11 tx-primary tx-uppercase">Recent Orders</h6>
                                    <p class="tx-11 tx-sm-12 mg-b-0 tx-gray-500">Habi tasse labo rum purus, vesti bulum at<span class="d-none d-sm-inline"> vivamus tempor port titor vulpu</span>... <a href="">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                           <!-- row -->
                        </div>
                     </div>
                     <!-- card -->
                  </div>
                  <div class="col-lg-6">
                     <div class="card mg-b-30">
                        <div class="card-body">
                           <div class="row">
                              <div class="col-md-5 col-lg-4 col-xl-6 order-1 order-sm-0 mg-t-20 mg-sm-t-0">
                                 <div class="clearfix">
                                    <div id="flotBarCompleteOrders" style="height: 100px"></div>
                                 </div>
                              </div>
                              <div class="col-md-7 col-lg-8 col-xl-6">
                                 <div class="pd-0">
                                    <div class="d-flex align-items-baseline mg-b-5">
                                       <h1 class="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">9,540</h1>
                                       <span class="d-flex align-items-center tx-danger mg-l-2 tx-10"><i class="ti-arrow-down tx-8 tx-danger tx-8 mr-1"></i>10.9%</span>
                                    </div>
                                    <h6 class="tx-11 tx-pink tx-uppercase">Complete Orders</h6>
                                    <p class="tx-12 mg-b-0 tx-gray-500">Habi tasse labo rum purus, vesti bulum<span class="d-none d-sm-inline"> at vivamus tempor port titor vulpu</span>... <a href="">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                           <!-- row -->
                        </div>
                     </div>
                     <!-- card -->
                  </div>
               </div>
</div>
</template>

<script>
import HeaderView from './HeaderView.vue'
export default {
   name:"ManageView",
   components:{
      HeaderView
   },
   data(){
      return {
         data:{
            title:"Manage",
            href:"/"
         }
      }
   }
}
</script>