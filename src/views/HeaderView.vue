<template>
 <div class="pageheader pd-t-75 pd-b-35">
     <div class="d-flex justify-content-between">
                     <div class="clearfix">
                        <div class="pd-t-5 pd-b-5">
                           <h1 class="pd-0 mg-0 tx-20 tx-dark">{{ title}}</h1>
                        </div>
                        <div class="breadcrumb pd-0 mg-0">
                           <span class="breadcrumb-item"><router-link to="/">home</router-link></span>
                           <span class="breadcrumb-item">{{ title }}</span>
                      
                        </div>
                     </div>
                     <div class="d-flex align-items-center">
                        <button id="dashboardDate" class="btn btn-default dropdown-toggle mr-2 d-none d-md-block pd-y-8-force"></button>
                        <button type="button" class="btn btn-default mr-2 d-none d-none d-lg-block pd-t-6-force pd-b-5-force">
                        <i data-feather="log-in" class="wd-16 mr-2"></i>Import</button>
                        <button type="button" class="btn btn-default mr-2 mb-2 mb-md-0 d-none d-lg-block pd-t-6-force pd-b-5-force">
                        <i data-feather="printer" class="wd-16 mr-2"></i>Print</button>
                        <button type="button" class="btn btn-default mb-2 mb-md-0 d-none d-lg-block pd-t-6-force pd-b-5-force">
                        <i data-feather="download" class="wd-16 mr-2"></i>Download Report</button>
                     </div>
                  </div>
               </div>
</template>
<script>
export default {
    name:"HeaderView",
    props:[
      'title',"to"
    ]
   
}
</script>