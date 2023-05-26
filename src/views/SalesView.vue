<template>
    <div class="page-inner">
      <HeaderView :title="data.title" :href="data.href"/>
        <div class="row">
            <div class="col-lg-6 col-xl-4">
                     <div class="card mg-b-40">
                        <div class="card-header d-flex align-items-center justify-content-between">
                           <h6 class="tx-13 mb-0">New Customers</h6>
                           <div class="card-header-btn">
                              <div class="dropdown">
                                 <a href="" class="" data-toggle="dropdown"><i class="ti-more"></i></a>
                                 <div class="dropdown-menu dropdown-menu-right">
                                    <a href="" class="dropdown-item"><i data-feather="info" class="wd-16 mr-2"></i>View Details</a>
                                    <a href="" class="dropdown-item"><i data-feather="share" class="wd-16 mr-2"></i>Share</a>
                                    <a href="" class="dropdown-item"><i data-feather="download" class="wd-16 mr-2"></i>Download</a>
                                    <a href="" class="dropdown-item"><i data-feather="copy" class="wd-16 mr-2"></i>Copy to</a>
                                    <a href="" class="dropdown-item"><i data-feather="folder" class="wd-16 mr-2"></i>Move to</a>
                                    <a href="" class="dropdown-item"><i data-feather="edit" class="wd-16 mr-2"></i>Rename</a>
                                    <a href="" class="dropdown-item"><i data-feather="trash" class="wd-16 mr-2"></i>Delete</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="card-body pd-y-20">
                           <ul class="list-unstyled mb-0">
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-online"><span class="avatar-initial rounded-circle bg-gray-800">A</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Archie Cantones</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 01 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-online"><span class="avatar-initial rounded-circle bg-primary">H</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Holmes Cherryman</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 06 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-online"><span class="avatar-initial rounded-circle bg-danger">M</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Malanie Hanvey</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 11 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-teal">K</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Kenneth Hune</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 12 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-success">V</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Valentine Maton</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 15 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-primary">M</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Madsen Daniel</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 20 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center">
                                 <a href="">
                                    <div class="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-warning">M</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Jesse Ross</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 21 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6 col-xl-4">
                     <div class="card mg-b-40">
                        <div class="card-header d-flex align-items-center justify-content-between">
                           <h6 class="tx-13 mb-0">New Customers</h6>
                           <div class="card-header-btn">
                              <div class="dropdown">
                                 <a href="" class="" data-toggle="dropdown"><i class="ti-more"></i></a>
                                 <div class="dropdown-menu dropdown-menu-right">
                                    <a href="" class="dropdown-item"><i data-feather="info" class="wd-16 mr-2"></i>View Details</a>
                                    <a href="" class="dropdown-item"><i data-feather="share" class="wd-16 mr-2"></i>Share</a>
                                    <a href="" class="dropdown-item"><i data-feather="download" class="wd-16 mr-2"></i>Download</a>
                                    <a href="" class="dropdown-item"><i data-feather="copy" class="wd-16 mr-2"></i>Copy to</a>
                                    <a href="" class="dropdown-item"><i data-feather="folder" class="wd-16 mr-2"></i>Move to</a>
                                    <a href="" class="dropdown-item"><i data-feather="edit" class="wd-16 mr-2"></i>Rename</a>
                                    <a href="" class="dropdown-item"><i data-feather="trash" class="wd-16 mr-2"></i>Delete</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="card-body pd-y-20">
                           <ul class="list-unstyled mb-0">
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-online"><span class="avatar-initial rounded-circle bg-gray-800">A</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Archie Cantones</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 01 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-online"><span class="avatar-initial rounded-circle bg-primary">H</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Holmes Cherryman</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 06 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-online"><span class="avatar-initial rounded-circle bg-danger">M</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Malanie Hanvey</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 11 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-teal">K</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Kenneth Hune</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 12 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-success">V</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Valentine Maton</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 15 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center mg-b-15">
                                 <a href="">
                                    <div class="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-primary">M</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Madsen Daniel</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 20 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center">
                                 <a href="">
                                    <div class="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-warning">M</span><i></i></div>
                                 </a>
                                 <div class="media-body pd-l-15 lh-2">
                                    <p class="tx-medium mg-b-2"><a href="">Jesse Ross</a></p>
                                    <span class="tx-12 tx-gray-500">Joined: 21 Mar, 2019</span>
                                 </div>
                                 <div class="mg-l-auto d-flex align-self-center action-icon">
                                    <nav class="nav nav-icon-only">
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Send Message"><i data-feather="mail" class="wd-16"></i></a>							 
                                       <a href="" data-toggle="tooltip" class="mr-2 tx-gray-500" title="" data-placement="top" data-original-title="Add to Fiend"><i data-feather="user-plus" class="wd-16"></i></a>							  
                                       <a href="" class="mr-2 tx-gray-500" data-toggle="tooltip" title="" data-placement="top" data-original-title="Flag User"><i data-feather="flag" class="wd-16"></i></a>
                                       <a href="" data-toggle="tooltip" class="tx-gray-500" title="" data-placement="top" data-original-title="More Options"><i data-feather="more-vertical" class="wd-16"></i></a>
                                    </nav>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
        </div>
    </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
export default {
   name:"SalesView",
   components:{
      HeaderView
   },
   data(){
      return {
         data:{
            title:"Sales",
            href:"/"
         }
      }
   }
}
</script>