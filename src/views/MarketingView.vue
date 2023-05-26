<template>
    <div class="page-inner">
      <HeaderView :title="data.title" :href="data.href"/>
        <div class="row">
                  <!--================================-->
                  <!-- New Customers Start -->	
                  <!--================================-->			   
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
                  <!--/ New Customers End -->
                  <!--================================-->
                  <!-- Transaction History Start -->	
                  <!--================================-->
                  <div class="col-lg-6 col-xl-4">
                     <div class="card mg-b-30">
                        <div class="card-header d-flex align-items-center justify-content-between">
                           <h6 class="tx-13 mb-0">Transaction History</h6>
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
                        <div class="card-body pd-0 pd-y-15">
                           <ul class="list-group list-group-flush tx-13">
                              <li class="list-group-item d-flex pd-y-9 pd-sm-x-20">
                                 <div class="d-none d-sm-block"><span class="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-primary tx-white"><i class="ti-check"></i></span></div>
                                 <div class="pd-sm-l-10">
                                    <p class="mg-b-0">Lorem Ipsum is simply <a href="" class="tx-dark mg-b-0 tx-semibold">#985632</a></p>
                                    <span class="tx-12 mg-b-0 tx-gray-500">Transaction ID: #857423</span>
                                 </div>
                                 <div class="mg-l-auto text-right">
                                    <p class="mg-b-0 tx-rubik">$4,550<small class="tx-8">.50</small></p>
                                    <span class="tx-success tx-12">Completed</span>
                                 </div>
                              </li>
                              <li class="list-group-item d-flex pd-y-9 pd-sm-x-20">
                                 <div class="d-none d-sm-block"><span class="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-warning tx-dark"><i class="ti-anchor"></i></span></div>
                                 <div class="pd-sm-l-10">
                                    <p class="mg-b-0">Lorem Ipsum is simply <a href="" class="tx-dark mg-b-0 tx-semibold">#698524</a></p>
                                    <span class="tx-12 mg-b-0 tx-gray-500">Transaction ID: #452356</span>
                                 </div>
                                 <div class="mg-l-auto text-right">
                                    <p class="mg-b-0 tx-rubik">$2,645<small class="tx-8">.40</small></p>
                                    <span class="tx-warning tx-12">Pending</span>
                                 </div>
                              </li>
                              <li class="list-group-item d-flex pd-y-9 pd-sm-x-20">
                                 <div class="d-none d-sm-block"><span class="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-primary tx-white"><i class="ti-check"></i></span></div>
                                 <div class="pd-sm-l-10">
                                    <p class="mg-b-0">Lorem Ipsum is simply <a href="" class="tx-dark mg-b-0 tx-semibold">#458762</a></p>
                                    <span class="tx-12 mg-b-0 tx-gray-500">Transaction ID: #354155</span>
                                 </div>
                                 <div class="mg-l-auto text-right">
                                    <p class="mg-b-0 tx-rubik">$3,248<small class="tx-8">.80</small></p>
                                    <span class="tx-success tx-12">Completed</span>
                                 </div>
                              </li>
                              <li class="list-group-item d-flex pd-y-9 pd-sm-x-20">
                                 <div class="d-none d-sm-block"><span class="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-warning tx-dark"><i class="ti-anchor"></i></span></div>
                                 <div class="pd-sm-l-10">
                                    <p class="mg-b-0">Lorem Ipsum is simply <a href="" class="tx-dark mg-b-0 tx-semibold">#698524</a></p>
                                    <span class="tx-12 mg-b-0 tx-gray-500">Transaction ID: #452356</span>
                                 </div>
                                 <div class="mg-l-auto text-right">
                                    <p class="mg-b-0 tx-rubik">$1,243<small class="tx-8">.60</small></p>
                                    <p class="mg-b-0 tx-12 tx-warning">Pending</p>
                                 </div>
                              </li>
                              <li class="list-group-item d-flex pd-y-9 pd-sm-x-20">
                                 <div class="d-none d-sm-block"><span class="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-primary tx-white"><i class="ti-check"></i></span></div>
                                 <div class="pd-sm-l-10">
                                    <p class="mg-b-0">Lorem Ipsum is simply <a href="" class="tx-dark mg-b-0 tx-semibold">#365845</a></p>
                                    <span class="tx-12 mg-b-0 tx-gray-500">Transaction ID: #748562</span>
                                 </div>
                                 <div class="mg-l-auto text-right">
                                    <p class="mg-b-0 tx-rubik">$5,319<small class="tx-10">.10</small></p>
                                    <span class="tx-success tx-12">Completed</span>
                                 </div>
                              </li>
                              <li class="list-group-item d-flex pd-y-9 pd-sm-x-20">
                                 <div class="d-none d-sm-block"><span class="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-danger tx-white"><i class="ti-close"></i></span></div>
                                 <div class="pd-sm-l-10">
                                    <p class="mg-b-0">Lorem Ipsum is simply <a href="" class="tx-dark mg-b-0 tx-semibold">#475821</a></p>
                                    <span class="tx-12 mg-b-0 tx-gray-500">Transaction ID: #457771</span>
                                 </div>
                                 <div class="mg-l-auto text-right">
                                    <p class="mg-b-0 tx-rubik">$4,347<small class="tx-8">.90</small></p>
                                    <span class="tx-danger tx-12">Canceled</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!--/ Transaction History End -->
                  <!--================================-->
                  <!-- Customer Satisfaction Start -->	
                  <!--================================-->			  
                  <div class="col-xl-4">
                     <div class="card mg-b-30">
                        <div class="card-header d-flex align-items-center justify-content-between">
                           <h6 class="tx-13 mb-0">Customer Satisfaction</h6>
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
                        <div class="card-body">
                           <div class="d-flex align-items-baseline">
                              <h1 class="mg-b-0 mg-r-5">9.5<span class="tx-10 tx-success">(<i class="ti-arrow-up tx-8 tx-success tx-8 mr-1"></i>8.60%)</span></h1>
                              <div class="tx-16">
                                 <i class="fa fa-star tx-warning"></i>
                                 <i class="fa fa-star tx-warning"></i>
                                 <i class="fa fa-star tx-warning"></i>
                                 <i class="fa fa-star tx-warning"></i>
                                 <i class="fa fa-star-half-empty tx-warning"></i>
                              </div>
                           </div>
                           <p class="tx-11 tx-sm-12 mg-b-20 tx-gray-500">Habi tasse labo rum purus, vesti bulum at<span class="d-none d-sm-inline"> vivamus tempor port titor vulpu</span>... <a href="">Learn More</a></p>
                           <div class="card-progressbar">
                              <label class="tx-10 tx-uppercase tx-gray-500 mg-b-0">Score</label>
                              <div class="progress" style="height: 3px">
                                 <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                 <div class="progress-bar bg-danger" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                 <div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                 <div class="progress-bar bg-info" role="progressbar" style="width: 10%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                 <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <label class="tx-10 tx-uppercase tx-gray-500 mg-b-0">85%<i class="ti-arrow-up tx-8 tx-success tx-8 ml-1"></i></label>
                           </div>
                           <div class="list-group list-group-flush m-t-10 tx-13">
                              <div class="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-primary mr-2"></div>
                                    <span class="tx-semibold">Excellent</span>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <div class="mg-r-5">3,345</div>
                                    <div class="tx-10 tx-gray-500">(<i class="ti-arrow-up tx-8 tx-success tx-8 mr-1"></i>4.7%)</div>
                                 </div>
                              </div>
                              <div class="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-danger mr-2"></div>
                                    <span class="tx-semibold">Very Good</span>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <div class="mg-r-5">2,854</div>
                                    <div class="tx-10 tx-gray-500">(<i class="ti-arrow-down tx-8 tx-danger tx-8 mr-1"></i>5.8%)</div>
                                 </div>
                              </div>
                              <div class="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-warning mr-2"></div>
                                    <span class="tx-semibold">Good</span>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <div class="mg-r-5">2,145</div>
                                    <div class="tx-10 tx-gray-500">(<i class="ti-arrow-up tx-8 tx-success tx-8 mr-1"></i>2.8%)</div>
                                 </div>
                              </div>
                              <div class="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-info mr-2"></div>
                                    <span class="tx-semibold">Fair</span>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <div class="mg-r-5">1,574</div>
                                    <div class="tx-10 tx-gray-500">(<i class="ti-arrow-down tx-8 tx-danger tx-8 mr-1"></i>3.7%)</div>
                                 </div>
                              </div>
                              <div class="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                                 <div class="d-flex align-items-center">
                                    <div class="wd-12 ht-12 bd bd-3 rounded-circle bd-success mr-2"></div>
                                    <span class="tx-semibold">Poor</span>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <div class="mg-r-5">1,540</div>
                                    <div class="tx-10 tx-gray-500">(<i class="ti-arrow-up tx-8 tx-success tx-8 mr-1"></i>5.5%)</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!--/ Customer Satisfaction End -->
               </div>
    </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
export default {
   name:"MarketingView",
   components:{
      HeaderView
   },
   data(){
      return {
         data:{
            title:"Marketing",
            href:"/"
         }
      }
   }
}
</script>