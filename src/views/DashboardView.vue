<template>
    <div class="page-inner">
       
        <!--================================-->
        <HeaderView :title="data.title" />
        <div class="row clearfix">
            <!--================================-->
            <!-- Heard Card Start -->
            <!--================================-->
            <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="card mg-b-30">
                    <div class="card-body">
                        <h5 class="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Today Sales</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">$1,181</h2>
                        </div>
                        <div class="d-flex align-items-center tx-gray-500 tx-11"><span
                                class="tx-success mr-2 d-flex align-items-center"><i
                                    class="ti-arrow-up tx-8 mr-1 tx-8"></i>+1,551</span>since last day</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="card mg-b-30">
                    <div class="card-body">
                        <h5 class="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Today Earning</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">$11,241</h2>
                        </div>
                        <div class="d-flex align-items-center tx-gray-500 tx-11"><span
                                class="tx-danger mr-2 d-flex align-items-center"><i
                                    class="ti-arrow-down tx-8 mr-1 tx-8"></i>-1,003</span>since last day</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="card mg-b-30">
                    <div class="card-body">
                        <h5 class="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Average Order Value</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">$3,241</h2>
                        </div>
                        <div class="d-flex align-items-center tx-gray-500 tx-11"><span
                                class="tx-success mr-2 d-flex align-items-center"><i
                                    class="ti-arrow-up tx-8 mr-1 tx-8"></i>+2,012</span>since last day</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="card mg-b-30">
                    <div class="card-body">
                        <h5 class="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Total Earning</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">$74,254</h2>
                        </div>
                        <div class="d-flex align-items-center tx-gray-500 tx-11"><span
                                class="tx-danger mr-2 d-flex align-items-center"><i
                                    class="ti-arrow-down tx-8 mr-1 tx-8"></i>-1,120</span>since last month</div>
                </div>
            </div>
        </div>
        <!--/ Heard Card End -->
    </div>
</div>
</template>
<script>
import HeaderView from './HeaderView.vue'
export default {
   name:"DashboardView",
   components:{
      HeaderView
   },
   data(){
    return {
        data:{
            title:"Dashboard",
            href:"/"
        }
    }
   }

}
</script>