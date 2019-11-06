<template>
    <div>     
        <div class="nav"  :style="heightnav" @touchmove.prevent @mousewheel.prevent>
            <div class="nav_left_div">
                <div class="logo">
                 <img src="../../assets/man/logo2.png" alt="">
                </div>
                <ul class="nav_left_ul">
                    <li class="nav_left_li"  :class="ac_sex=='women'?'nav_bg':''"  @click="changesex('women')">
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon1-2.png" alt="" v-show="ac_sex=='women'?true:false">
                        <img src="../../assets/nan/tab1/nav-icon1.png" alt="" v-show="ac_sex=='women'?false:true">
                        </a><span>女 士</span>
                    </li>
                    <li class="nav_left_li"  :class="ac_sex=='women'?'':'nav_bg'" @click="changesex('man')">
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon2.png" alt="" v-show="ac_sex=='women'?true:false">
                        <img src="../../assets/nan/tab1/nav-icon2-2.png" alt="" v-show="ac_sex=='women'?false:true">
                        </a><span>男士</span>
                    </li>
                    <li class="nav_left_li" >
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon3.png" alt="" >
                        </a><span>全部分类</span>
                    </li>
                    <li class="nav_left_li" >
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon4.png" alt="" >
                        </a><span>新品驾到</span>
                    </li>
                    <li class="nav_left_li" >
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon5.png" alt="" >
                        </a><span>买手优选</span>
                    </li>
                    <li class="nav_left_li" >
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon6.png" alt="" >
                        </a><span>设计师</span>
                    </li>
                    <li class="nav_left_li" >
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon7.png" alt="" >
                        </a><span>明星style</span>
                    </li>
                    <li class="nav_left_li" >
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon8.png" alt="" >
                        </a><span>人气潮品</span>
                    </li>
                    <li class="nav_left_li" >
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon9.png" alt="" >
                        </a><span>直播</span>
                    </li>
                    <li class="nav_left_li" >
                        <a href="javascript:;">
                        <img src="../../assets/nan/tab1/nav-icon10.png" alt="" >
                        </a><span>积分有礼</span>
                    </li>
                    
                </ul>
            </div>
            <div class="nav_right" @click="hide"></div>
        
        </div>
        <titlebar :msg="msg" :img1="require('../../assets/logo.png')" :img2="require('../../assets/ic_add.png')"
            :active="active" @change1="change_tab" @change2="change_tab3" @show="show" 
            @is_logined="is_logined"
             :active_tab2="active_tab2"
            :active_tab3="active_tab3"></titlebar>
        <div style="height:52px"></div>
        <div style="height:20px" v-show="active=='tab5'?true:false"></div>
        <mt-tab-container v-model="active" class="mt-tab-container">
            <mt-tab-container-item id="tab1" class="mt-tab-container-item ">
                <div class="tab1">
                    <mt-swipe :auto="4000" class="swipe">
                        <mt-swipe-item class="swipe_item">
                            <img src="../../assets/nan/tab1/a1.jpg" alt="" class="full">
                        </mt-swipe-item>
                        <mt-swipe-item class="swipe_item">
                            <img src="../../assets/nan/tab1/a2.jpg" alt="" class="full">
                        </mt-swipe-item>
                        <mt-swipe-item class="swipe_item">
                            <img src="../../assets/nan/tab1/a3.jpg" alt="" class="full">
                        </mt-swipe-item>
                        <mt-swipe-item class="swipe_item">
                            <img src="../../assets/nan/tab1/a4.jpg" alt="" class="full">
                        </mt-swipe-item>
                        <mt-swipe-item class="swipe_item">
                            <img src="../../assets/nan/tab1/a5.jpg" alt="" class="full">
                        </mt-swipe-item>

                    </mt-swipe>
                    <ul class="nav_ul">
                        <li class="nav_li">
                            <router-link :to="{path:'/news'}">
                                <p> <img src="../../assets/nan/tab1/boys-1.jpg" alt=""></p><span>新品驾到</span>
                            </router-link>
                        </li>
                        <li class="nav_li">
                            <a href="javascript:;">
                                <p><img src="../../assets/nan/tab1/boys-2.jpg" alt=""></p><span>买手优选</span>
                            </a>
                        </li>
                        <li class="nav_li">
                            <a href="javascript:;">
                                <p> <img src="../../assets/nan/tab1/boys-3.jpg" alt=""></p><span>设计师</span>
                            </a>
                        </li>
                        <li class="nav_li">
                            <a href="javascript:;">
                                <p><img src="../../assets/nan/tab1/boys-4.jpg" alt=""></p> <span>全部分类</span>
                            </a>
                        </li>
                        <li class="nav_li">
                            <a href="javascript:;">
                                <p> <img src="../../assets/nan/tab1/boys-5.jpg" alt=""></p><span>新人专享</span>
                            </a>
                        </li>
                        <li class="nav_li">
                            <a href="javascript:;">
                                <p><img src="../../assets/nan/tab1/boys-6.jpg" alt=""></p><span>私人定制</span>
                            </a>
                        </li>
                        <li class="nav_li">
                            <a href="javascript:;">
                                <p><img src="../../assets/nan/tab1/boys-7.jpg" alt=""></p><span>人气潮品</span>
                            </a>
                        </li>
                        <li class="nav_li">
                            <a href="javascript:;">
                                <p><img src="../../assets/nan/tab1/boys-8.jpg" alt=""></p> <span>积分有礼</span>
                            </a>
                        </li>
                    </ul>
                    <div class="img_new">
                        <a href="javascript:;"> <img src="../../assets/nan/tab1/a7.jpg" alt=""></a>
                    </div>
                   
                    <div class="f1">
                        <p class="u-title">—&nbsp;热门品类&nbsp;—</p>
                        <div class="ul_li">
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f1.jpg" alt=""></p>
                                <span>T恤</span>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2.jpg" alt=""></p>
                                <span>衬衫</span>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f3.jpg" alt=""></p>
                                <span>夹克</span>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f4.jpg" alt=""></p>
                                <span>卫衣</span>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f5.jpg" alt=""></p>
                                <span>鞋履</span>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f6.jpg" alt=""></p>
                                <span>裤装</span>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f7.jpg" alt=""></p>
                                <span>外套</span>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f8.jpg" alt=""></p>
                                <span>毛衫</span>
                            </div>


                        </div>
                    </div>
                    <div class="f2">
                        <p class="u-title">—&nbsp;热门品类&nbsp;—</p>
                        <div class="ul_li">

                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/b1.jpg" alt=""></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/b2.jpg" alt=""></p>
                               
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/b3.jpg" alt=""></p>
                         
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/b4.jpg" alt=""></p>
                              
                            </div>

                        </div>
                    </div>
                    <div class="f2">
                        <p class="u-title">—&nbsp;编辑推荐&nbsp;—</p>
                         <div class="img_new">
                        <a href="javascript:;"> <img src="../../assets/nan/tab1/f21.jpg" alt=""></a>
                        </div>
                        <div class="ul_li">
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b1.jpg" alt=""></p>
    
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b2.jpg" alt=""></p>
                               
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b3.jpg" alt=""></p>
                         
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b4.jpg" alt=""></p>
                              
                            </div>

                             <div class="img_new">
                        <a href="javascript:;"> <img src="../../assets/nan/tab1/f223.jpg" alt=""></a>
                             </div>

                             <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b5.jpg" alt=""></p>
    
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b6.jpg" alt=""></p>
                               
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b7.jpg" alt=""></p>
                         
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b8.jpg" alt=""></p>
                            </div>

                              <div class="img_new">
                        <a href="javascript:;"> <img src="../../assets/nan/tab1/f22.jpg" alt=""></a>
                             </div>

                              <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b9.jpg" alt=""></p>
    
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b10.jpg" alt=""></p>
                               
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b11.jpg" alt=""></p>
                         
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b12.jpg" alt=""></p>
                            </div>

                              <div class="img_new">
                        <a href="javascript:;"> <img src="../../assets/nan/tab1/f23.jpg" alt=""></a>
                             </div>

                              <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b13.jpg" alt=""></p>
    
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b14.jpg" alt=""></p>
                               
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b15.jpg" alt=""></p>
                         
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f2b16.jpg" alt=""></p>
                            </div>
                        </div>
                    </div>
                    <div class="f2">
                        <p class="u-title">—&nbsp;热门品类&nbsp;—</p>

                           <div class="img_new">
                        <a href="javascript:;"> <img src="../../assets/nan/tab1/hot.jpg" alt=""></a>
                           </div>
                           <p class="u-text"><a href="javascript:;">潮是一种态度，1WOR，每个人都是一种生活方式！ </a></p>
                           <p class="u-date">03-27 10:00</p>
                        
                    </div>
                    <div class="f2 f3">
                        <p class="u-title">—&nbsp;热门品类&nbsp;—</p>
                        <div class="ul_li">

                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f3b1.jpg" alt=""></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f3b2.jpg" alt=""></p>
                               
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f3b3.jpg" alt=""></p>
                         
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/f3b4.jpg" alt=""></p>
                              
                            </div>

                        </div>
                    </div>


                    <div class=" f4">
                        <p class="u-title">—&nbsp;热门品类&nbsp;—</p>
                        <div class="ul_li">
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/1.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/2.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/3.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/4.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/5.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/6.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/7.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/8.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/9.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                            <div class="item">
                                <p> <img src="../../assets/nan/tab1/10.jpg" alt=""></p>
                                <p>Gro新款男士白色亚麻休闲短裤</p>
                                <p>￥639 <button>BUY NOW></button></p>
                            </div>
                         
                           

                        </div>
                    </div>
                    <div style="height:200px"></div>
                </div>

            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <div class="tab2">
                    <div class="sex">
                        <div :class="ac_sex=='women'?'undeline':''" @click="changesex('women')">女士</div>
                        <div :class="ac_sex=='man'?'undeline':''" @click="changesex('man')">男士</div>
                    </div>
                    <!-- 这是分类下的面板 -->
                    <div v-show="active_tab2=='ac_tab1'?true:false" class="list_ul" :style="heightoff">
                        <ul class="list_ul_left">
                            <li @click="selected_li('li1')" :class="selected=='li1'?'seled':''">时装</li>
                            <li @click="selected_li('li2')" :class="selected=='li2'?'seled':''">鞋履</li>
                            <li @click="selected_li('li3')" :class="selected=='li3'?'seled':''">包袋</li>
                            <li @click="selected_li('li4')" :class="selected=='li4'?'seled':''">服饰</li>
                            <li @click="selected_li('li5')" :class="selected=='li5'?'seled':''"
                                v-show="ac_sex=='women'?false:true">短袖</li>
                        </ul>
                        <div class="list_right" v-show="ac_sex=='women'?true:false">
                            <div class="ul_li" v-show="selected=='li1'?true:false">
                                <div class="item">
                                    <img src="../../assets/nan/tab2/waitao.png" alt="">
                                    <span>外套</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/maoshan.png" alt="">
                                    <span>毛衫</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/duanku.png" alt="">
                                    <span>短裤</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/banshenqun.png" alt="">
                                    <span>半身裙</span>
                                </div>

                                <div class="item">
                                    <img src="../../assets/nan/tab2/taozhuang.png" alt="">
                                    <span>套装</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/waitao.png" alt="">
                                    <span>外套</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/waitao.png" alt="">
                                    <span>外套</span>
                                </div>

                            </div>
                            <div class="ul_li" v-show="selected=='li2'?true:false">
                                <div class="item">
                                    <img src="../../assets/nan/tab2/x1.png" alt="">
                                    <span>休闲鞋</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/x2.png" alt="">
                                    <span>平底鞋</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/x3.png" alt="">
                                    <span>时尚高跟</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/x4.png" alt="">
                                    <span>运动鞋</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/x5.png" alt="">
                                    <span>高跟鞋</span>
                                </div>
                                <!-- <div class="item">
                                    <img src="../../assets/nan/tab2/x6.png" alt="">
                                    <span>外套</span>
                                </div> -->
                                <div class="item">
                                    <img src="../../assets/nan/tab2/x7.png" alt="">
                                    <span>凉鞋</span>
                                </div>


                            </div>
                            <div class="ul_li" v-show="selected=='li3'?true:false">
                                <div class="item">
                                    <img src="../../assets/nan/tab2/b1.png" alt="">
                                    <span>钱包/卡包/...</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/b2.png" alt="">
                                    <span>手拎包/单...</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/b3.png" alt="">
                                    <span>双肩包</span>
                                </div>
                            </div>
                            <div class="ul_li" v-show="selected=='li4'?true:false">
                                <div class="item">
                                    <img src="../../assets/nan/tab2/p1.png" alt="">
                                    <span>耳环/耳钉</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/p2.png" alt="">
                                    <span>戒指</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/p3.png" alt="">
                                    <span>项链</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/p4.png" alt="">
                                    <span>胸针</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/p5.png" alt="">
                                    <span>头饰</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/p6.jpg" alt="">
                                    <span>挂件</span>
                                </div>
                            </div>
                        </div>
                        <div class="list_right" v-show="ac_sex=='women'?false:true">
                            <div class="ul_li" v-show="selected=='li1'?true:false">
                                <div class="item">
                                    <img src="../../assets/nan/tab2/s1.png" alt="">
                                    <span>T恤</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/s2.png" alt="">
                                    <span>外套</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/s3.png" alt="">
                                    <span>大衣</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/s4.png" alt="">
                                    <span>上衣</span>
                                </div>

                                <div class="item">
                                    <img src="../../assets/nan/tab2/s5.png" alt="">
                                    <span>针织衫</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/s6.png" alt="">
                                    <span>裤子</span>
                                </div>


                            </div>
                            <div class="ul_li" v-show="selected=='li2'?true:false">
                                <div class="item">
                                    <img src="../../assets/nan/tab2/nx1.png" alt="">
                                    <span>休闲鞋</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/x4.png" alt="">
                                    <span>平底鞋</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/nx3.png" alt="">
                                    <span>时尚高跟</span>
                                </div>

                                <div class="item">
                                    <img src="../../assets/nan/tab2/x7.png" alt="">
                                    <span>凉鞋</span>
                                </div>


                            </div>
                            <div class="ul_li" v-show="selected=='li3'?true:false">
                                <div class="item">
                                    <img src="../../assets/nan/tab2/nb1.png" alt="">
                                    <span>男士包袋</span>
                                </div>

                            </div>
                            <div class="ul_li" v-show="selected=='li4'?true:false">
                                <div class="item">
                                    <img src="../../assets/nan/tab2/np1.png" alt="">
                                    <span>袜子</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/np2.png" alt="">
                                    <span>手表</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/np3.png" alt="">
                                    <span>戒指</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/np4.png" alt="">
                                    <span>胸针/胸章</span>
                                </div>

                            </div>
                            <div class="ul_li" v-show="selected=='li5'?true:false">
                                <div class="item">
                                    <img src="../../assets/nan/tab2/d1.jpg" alt="">
                                    <span>纯白</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/d2.jpg" alt="">
                                    <span>红纹</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/d3.jpg" alt="">
                                    <span>典雅长袖</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/nan/tab2/d4.jpg" alt="">
                                    <span>灰色</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <!-- 这是品牌的面板 -->
                    <div v-show="active_tab2=='ac_tab2'?true:false" class="ac_tab2" :style="heightoff">
                        <div class="ac_women" v-show="ac_sex=='women'?true:false">
                            <mt-swipe :auto="4000" class="swipe">
                                <mt-swipe-item class="swipe_item">
                                    <img src="../../assets/nan/tab2/nl1.jpg" alt="" class="full">
                                </mt-swipe-item>
                                <mt-swipe-item class="swipe_item">
                                    <img src="../../assets/nan/tab2/nl2.jpg" alt="" class="full">
                                </mt-swipe-item>
                                <mt-swipe-item class="swipe_item">
                                    <img src="../../assets/nan/tab2/nl3.jpg" alt="" class="full">
                                </mt-swipe-item>
                                <mt-swipe-item class="swipe_item">
                                    <img src="../../assets/nan/tab2/nl4.jpg" alt="" class="full">
                                </mt-swipe-item>
                            </mt-swipe>
                            <div class="pinpai">
                                <img src="../../assets/nan/tab2/y1.jpg" alt="">
                                <img src="../../assets/nan/tab2/y4.jpg" alt="">
                                <img src="../../assets/nan/tab2/y3.jpg" alt="">
                                <img src="../../assets/nan/tab2/y2.jpg" alt="">
                                <ul class="pin_ul">
                                    <li class="li_title">#</li>
                                    <li class="lis">羲</li>
                                    <li class="lis"> 1WOR</li>
                                    <li class="lis"> 2201</li>
                                    <li class="lis"> ALEXSTORM</li>
                                    <li class="lis"> ANDERLOS</li>
                                    <li class="lis"> ANGLE M &amp; ZOE NIU</li>
                                    <li class="lis">I :MWHOIM </li>
                                    <li class="lis"> 奕然</li>
                                    <li class="li_title">A</li>

                                    <li class="lis"> ALL COMES FROM NOTHING</li>
                                    <li class="li_title">B</li>

                                    <li class="lis"> BOLO&amp;INTLS</li>
                                    <li class="lis"> BeClothoPeople</li>
                                    <li class="lis"> BLACK TAILORS</li>
                                    <li class="li_title">C</li>

                                    <li class="lis"> CLAVECHENG PAI CHENG</li>
                                    <li class="lis"> C.J. YAO</li>

                                    <li class="li_title">D</li>
                                    <li class="lis"> DELCHEN</li>
                                    <li class="lis"> DLYANG</li>
                                    <li class="li_title">E</li>
                                    <li class="lis"> ELSA LIU</li>
                                    <li class="lis"> ECHENG PAI CHENG</li>
                                    <li class="li_title">F</li>
                                    <li class="lis"> FAITH&amp;FEARLESS</li>
                                    <li class="lis"> Frency &amp; Mercur</li>
                                    <li class="li_title">G</li>
                                    <li class="lis"> GEST</li>
                                    <li class="li_title">H</li>
                                    <li class="lis"> HINITOM</li>
                                    <li class="lis"> Hua Jia Studio</li>
                                    <li class="lis"> HANSHSU</li>
                                    <li class="li_title">J</li>
                                    <li class="lis"> ISABELLE BLANCHE</li>
                                    <li class="lis"> JANETCHEN</li>
                                    <li class="lis"> Jade Chiu</li>
                                    <li class="lis"> JUNNE</li>
                                    <li class="li_title">K</li>
                                    <li class="lis"> kamlionsrm</li>
                                    <li class="lis"> KQW Jewel Studio</li>
                                    <li class="lis"> Kotipesä</li>
                                    <li class="lis"> kc.k&amp;lion</li>
                                    <li class="li_title">L</li>
                                    <li class="lis"> LIYIHAN</li>
                                    <li class="lis"> LYX Beautiful Affair bijoux</li>
                                    <li class="lis"> LLAGUT</li>
                                    <li class="li_title">M</li>
                                    <li class="lis"> MARINO XIA</li>
                                    <li class="lis"> MISSY SKINS</li>
                                    <li class="lis"> MORNER</li>
                                    <li class="lis"> moi non plus</li>
                                  
                                    <li class="li_title">N</li>
                                    <li class="lis">Naim Josefi </li>
                                    <li class="li_title">O</li>
                                    <li class="lis">O.YANG </li>
                                    <li class="li_title">P</li>
                                    <li class="lis"> PencilUnisex</li>
                                    <li class="lis"> Pared</li>
                                    <li class="li_title">S</li>
                                    <li class="lis"> Sans Nuages</li>
                                    <li class="lis"> SOPHIA WU</li>
                                    <li class="lis"> SchulzWorks Jewelry</li>
                                    <li class="li_title">T</li>
                                    <li class="lis"> TURGALE</li>
                                    <li class="li_title">G</li>
                                    <li class="lis"> Gro</li>
                                    <li class="li_title">U</li>
                                    <li class="lis"> uigeoll</li>
                                    <li class="lis"> VIVIAN CHAN</li>
                                    <li class="lis"> VESSI APPAREL</li>
                                    <li class="li_title">X</li>
                                    <li class="lis"> XINNATEX</li>
                                    <li class="lis"> Xi</li>
                                  
                                    <li class="li_title">Y</li>
                                    <li class="lis">Youppie! </li>
                                    <li class="lis"> YOUYILUO</li>
                                    <li class="lis"> Y-VISON</li>
                                    <li class="lis"> YUWE</li>
                                    <li class="li_title">Z</li>
                                    <li class="lis"> ZEROSIGN</li>
                           
                                </ul>
                            </div>

                        </div>
                        <div class="ac_man" v-show="ac_sex=='women'?false:true">
                           <mt-swipe :auto="4000" class="swipe">
                                <mt-swipe-item class="swipe_item">
                                    <img src="../../assets/nan/tab2/ml1.jpg" alt="" class="full">
                                </mt-swipe-item>
                                <mt-swipe-item class="swipe_item">
                                    <img src="../../assets/nan/tab2/ml2.jpg" alt="" class="full">
                                </mt-swipe-item>
                                <mt-swipe-item class="swipe_item">
                                    <img src="../../assets/nan/tab2/nl3.jpg" alt="" class="full">
                                </mt-swipe-item>
                                <mt-swipe-item class="swipe_item">
                                    <img src="../../assets/nan/tab2/ml3.jpg" alt="" class="full">
                                </mt-swipe-item>
                            </mt-swipe>
                            <div class="pinpai">
                                <img src="../../assets/nan/tab2/y1.jpg" alt="">
                                <img src="../../assets/nan/tab2/y4.jpg" alt="">
                                <img src="../../assets/nan/tab2/y3.jpg" alt="">
                                <img src="../../assets/nan/tab2/y2.jpg" alt="">
                                <ul class="pin_ul">
                                    <li class="li_title">#</li>
                                    <li class="lis">羲</li>
                                    <li class="lis"> 1WOR</li>
                                    <li class="lis"> 2201</li>
                                    <li class="lis"> ALEXSTORM</li>
                                    <li class="lis"> ANDERLOS</li>
                                    <li class="lis"> ANGLE M &amp; ZOE NIU</li>
                                    <li class="lis">I :MWHOIM </li>
                                    <li class="lis"> 奕然</li>
                                    <li class="li_title">A</li>

                                    <li class="lis"> ALL COMES FROM NOTHING</li>
                                    <li class="li_title">B</li>

                                    <li class="lis"> BOLO&amp;INTLS</li>
                                    <li class="lis"> BeClothoPeople</li>
                                    <li class="lis"> BLACK TAILORS</li>
                                    <li class="li_title">C</li>

                                    <li class="lis"> CLAVECHENG PAI CHENG</li>
                                    <li class="lis"> C.J. YAO</li>

                                    <li class="li_title">D</li>
                                    <li class="lis"> DELCHEN</li>
                                    <li class="lis"> DLYANG</li>
                                    <li class="li_title">E</li>
                                    <li class="lis"> ELSA LIU</li>
                                    <li class="lis"> ECHENG PAI CHENG</li>
                                    <li class="li_title">F</li>
                                    <li class="lis"> FAITH&amp;FEARLESS</li>
                                    <li class="lis"> Frency &amp; Mercur</li>
                                    <li class="li_title">G</li>
                                    <li class="lis"> GEST</li>
                                    <li class="li_title">H</li>
                                    <li class="lis"> HINITOM</li>
                                    <li class="lis"> Hua Jia Studio</li>
                                    <li class="lis"> HANSHSU</li>
                                    <li class="li_title">J</li>
                                    <li class="lis"> ISABELLE BLANCHE</li>
                                    <li class="lis"> JANETCHEN</li>
                                    <li class="lis"> Jade Chiu</li>
                                    <li class="lis"> JUNNE</li>
                                    <li class="li_title">K</li>
                                    <li class="lis"> kamlionsrm</li>
                                    <li class="lis"> KQW Jewel Studio</li>
                                    <li class="lis"> Kotipesä</li>
                                    <li class="lis"> kc.k&amp;lion</li>
                                    <li class="li_title">L</li>
                                    <li class="lis"> LIYIHAN</li>
                                    <li class="lis"> LYX Beautiful Affair bijoux</li>
                                    <li class="lis"> LLAGUT</li>
                                    <li class="li_title">M</li>
                                    <li class="lis"> MARINO XIA</li>
                                    <li class="lis"> MISSY SKINS</li>
                                    <li class="lis"> MORNER</li>
                                    <li class="lis"> moi non plus</li>
                                  
                                    <li class="li_title">N</li>
                                    <li class="lis">Naim Josefi </li>
                                    <li class="li_title">O</li>
                                    <li class="lis">O.YANG </li>
                                    <li class="li_title">P</li>
                                    <li class="lis"> PencilUnisex</li>
                                    <li class="lis"> Pared</li>
                                    <li class="li_title">S</li>
                                    <li class="lis"> Sans Nuages</li>
                                    <li class="lis"> SOPHIA WU</li>
                                    <li class="lis"> SchulzWorks Jewelry</li>
                                    <li class="li_title">T</li>
                                    <li class="lis"> TURGALE</li>
                                    <li class="li_title">G</li>
                                    <li class="lis"> Gro</li>
                                    <li class="li_title">U</li>
                                    <li class="lis"> uigeoll</li>
                                    <li class="lis"> VIVIAN CHAN</li>
                                    <li class="lis"> VESSI APPAREL</li>
                                    <li class="li_title">X</li>
                                    <li class="lis"> XINNATEX</li>
                                    <li class="lis"> Xi</li>
                                  
                                    <li class="li_title">Y</li>
                                    <li class="lis">Youppie! </li>
                                    <li class="lis"> YOUYILUO</li>
                                    <li class="lis"> Y-VISON</li>
                                    <li class="lis"> YUWE</li>
                                    <li class="li_title">Z</li>
                                    <li class="lis"> ZEROSIGN</li>
                           
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- 这是设计师的面板 -->
                    <div v-show="active_tab2=='ac_tab3'?true:false" :style="heightoff">设计圈 </div>
                </div>


            </mt-tab-container-item>
            <mt-tab-container-item id="tab3" class="tab3">
                <div v-show="active_tab3=='ac_tab1'?true:false">
                    <div class="com">
                        <div class="tab3_list">
                            <div class="list_left">
                                <div><img src="../../assets/imgs/nav-icon7.png" alt=""></div>
                                <div><span>陈维</span><span>03月26日 18:19</span></div>
                                <div></div>
                            </div>
                            <div class="list_right"><span>+ 关注</span></div>
                        </div>
                        <div class="tab3_listbody">
                            <div>真的好喜欢这样的打扮！</div>
                            <div>
                                <img src="../../assets/women/women_01.jpg" alt="">
                                <img src="../../assets/women/e282b6ae193e4d375e22086a08905253fe61cba8.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="com">
                        <div class="tab3_list">
                            <div class="list_left">
                                <div><img src="../../assets/imgs/nav-icon7.png" alt=""></div>
                                <div><span>陈维</span><span>03月26日 18:19</span></div>
                                <div></div>
                            </div>
                            <div class="list_right"><span>+ 关注</span></div>
                        </div>
                        <div class="tab3_listbody">
                            <div>真的好喜欢这样的打扮！</div>
                            <div>
                                <img src="../../assets/women/women_01.jpg" alt="">
                                <img src="../../assets/women/e282b6ae193e4d375e22086a08905253fe61cba8.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="com">
                        <div class="tab3_list">
                            <div class="list_left">
                                <div><img src="../../assets/imgs/nav-icon7.png" alt=""></div>
                                <div><span>陈维</span><span>03月26日 18:19</span></div>
                                <div></div>
                            </div>
                            <div class="list_right"><span>+ 关注</span></div>
                        </div>
                        <div class="tab3_listbody">
                            <div>真的好喜欢这样的打扮！</div>
                            <div>
                                <img src="../../assets/women/women_01.jpg" alt="">
                                <img src="../../assets/women/e282b6ae193e4d375e22086a08905253fe61cba8.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="com">
                        <div class="tab3_list">
                            <div class="list_left">
                                <div><img src="../../assets/imgs/nav-icon7.png" alt=""></div>
                                <div><span>陈维</span><span>03月26日 18:19</span></div>
                                <div></div>
                            </div>
                            <div class="list_right"><span>+ 关注</span></div>
                        </div>
                        <div class="tab3_listbody">
                            <div>真的好喜欢这样的打扮！</div>
                            <div>
                                <img src="../../assets/women/women_01.jpg" alt="">
                                <img src="../../assets/women/e282b6ae193e4d375e22086a08905253fe61cba8.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div style="height:57px"></div>
                </div>

                <div v-show="active_tab3=='ac_tab2'?true:false">
                    <div class="dir">
                        <div class="tab3_list">
                            <div class="list_left">
                                <div> <img src="/img/logo2.e58b0438.png" alt=""></div>
                                <div><span>时尚达人-李琦</span><span>03月26日 18:19</span></div>
                                <div></div>
                            </div>
                            <div class="list_right"><span>+ 关注</span></div>
                        </div>
                        <div class="tab3_listbody">
                            <div>童鞋们，快来 ，开播啦！</div>
                            <div class="video">
                                <div> <span style="{color:red}">•</span>录播</div>
                                <video src="../../assets/v1.mp4" controls="controls"></video>
                            </div>
                        </div>
                    </div>
                    <div class="dir">
                        <div class="tab3_list">
                            <div class="list_left">
                                <div> <img src="/img/logo2.e58b0438.png" alt=""></div>
                                <div><span>时尚达人-李琦</span><span>03月26日 18:19</span></div>
                                <div></div>
                            </div>
                            <div class="list_right"><span>+ 关注</span></div>
                        </div>
                        <div class="tab3_listbody">
                            <div>童鞋们，快来 ，开播啦！</div>
                            <div class="video">
                                <div> <span style="{color:red}">•</span>录播</div>
                                <video src="../../assets/v1.mp4" controls="controls"></video>
                            </div>
                        </div>
                    </div>
                    <div style="height:57px"></div>
                </div>

            </mt-tab-container-item>
            <mt-tab-container-item id="tab4" class="tab4">
                <div>
                    <img src="../../assets/nan/tab4/t43.jpg" alt="">
                    <img src="../../assets/nan/tab4/t41.jpg" alt="">
                    <img src="../../assets/nan/tab4/t42.jpg" alt="">
                   
                    <img src="../../assets/nan/tab4/t44.jpg" alt="">
                   
                </div>

                <div style="height:57px"></div>
            </mt-tab-container-item>

            <!-- 我的 -->
            <mt-tab-container-item id="tab5" class="tab5">
                <div class="img_logo">
                    <img src="../../assets/man/logo2.png" alt="">
                </div>
                <div class="login" v-show="ac_login==''?true:false"> 
                    未登录
                </div>
                <div class="login" v-show="ac_login==''?false:true">
                    {{ac_login}}
                </div>
                <!-- 圈子     -->
                <ul class="item_bar">
                    <li>
                        <div>0</div>
                        <span>圈子</span>
                    </li>
                    <li>|</li>
                    <li>
                        <div>0</div>
                        <span>作品</span>
                    </li>
                    <li>|</li>
                    <li>
                        <div>0</div>
                        <span>关注</span>
                    </li>
                    <li>|</li>
                    <li>
                        <div>0</div>
                        <span>粉丝</span>
                    </li>
                </ul>
                <div>
                    <div class="item_older" @click="is_logined" data-path="/older">
                        <span>我的订单</span>
                        <span>></span>
                    </div>
                    <ul class="item_states">
                        <li>
                            <div><img src="../../assets/icon_#ccc/daifukuan.png" alt=""></div>
                            <span>待付款</span>
                        </li>
                        <li>
                            <div><img src="../../assets/icon_#ccc/daifahuo.png" alt=""></div>
                            <span>待发货</span>
                        </li>
                        <li>
                            <div><img src="../../assets/icon_#ccc/shouhuodizhi.png" alt=""></div>
                            <span>待收货</span>
                        </li>
                        <li>
                            <div><img src="../../assets/icon_#ccc/daipingjia.png" alt=""></div>
                            <span>待评价</span>
                        </li>
                        <li>
                            <div><img src="../../assets/icon_#ccc/tuihuotuikuan.png" alt=""></div>
                            <span>退货/售后</span>
                        </li>
                    </ul>
                    <ul class="item_states">
                        <li>
                            <div><img src="../../assets/icon_#ccc/gouwuche.png" alt=""></div>
                            <span>购物车</span>
                        </li>
                        <li>
                            <div><img src="../../assets/icon_#ccc/youhuiquan.png" alt=""></div>
                            <span>优惠券</span>
                        </li>
                        <li>
                            <div><img src="../../assets/imgs/nav-icon7.png" alt=""></div>
                            <span>积分</span>
                        </li>
                        <li>
                            <div><img src="../../assets/icon_#ccc/xingxing.png" alt=""></div>
                            <span>收藏</span>
                        </li>
                    </ul>

                </div>
                <div class="item_older2"   @click="is_logined" data-path="/adress">
                    <div class="p1"> <img src="../../assets/icon_#ccc/shouhuodizhi.png" alt="">
                        <div>收货地址管理</div>
                    </div>
                    <span>></span>
                </div>
                <div class="item_older3">
                    <div class="p1"> <img src="../../assets/icon_#ccc/set.png" alt="">
                        <div>设置</div>
                    </div>
                    <span>></span>
                </div>
                <div style="height:57px"></div>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar fixed v-model="active">
            <!-- 一般mintui的组件没有事件 所以想要添加点击事件  <mt-tab-item id="tab1" @click.native="add"> -->
            <mt-tab-item id="tab1">
                <img src="../../assets/nav_home.png" alt="" slot="icon" v-show="active=='tab1'?false:true">
                <img src="../../assets/nav_home1.png" alt="" slot="icon" v-show="active=='tab1'?true:false">
                <span>广场</span>
            </mt-tab-item>
            <mt-tab-item id="tab2">
                 <img src="../../assets/imgs/nav-shopping.png" alt="" slot="icon" v-show="active=='tab2'?false:true">
                <img src="../../assets/nav-shopping-boy.png" alt="" slot="icon" v-show="active=='tab2'?true:false">
                <span style="{active=='tab2'?'color:green':''}">嗨购</span>
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <img src="../../assets/imgs/nav-design.png" alt="" slot="icon" v-show="active=='tab3'?true:false">
                <img src="../../assets/imgs/nav-circle.png" alt="" slot="icon" v-show="active=='tab3'?false:true">
                <span style="{active=='tab2'?'color:green':''}">圈子</span>
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <img src="../../assets/nav_sheji.png" alt="" slot="icon" v-show="active=='tab4'?false:true">
                <img src="../../assets/nav_sheji1.png" alt="" slot="icon" v-show="active=='tab4'?true:false">
                设计
            </mt-tab-item>
            <mt-tab-item id="tab5">
              <img src="../../assets/nav_me.png" alt="" slot="icon" v-show="active=='tab5'?false:true">
                <img src="../../assets/nav_me1.png" alt="" slot="icon" v-show="active=='tab5'?true:false">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    import titlebar from './common/titlebar.vue'
    export default {
        name: 'demo',
        data() {
            return {
                num:0,//这是购物车的商品数量//当num为0时 购物车隐藏
                active: "tab1",
                msg: "1wor",
                active_tab2: "ac_tab1",
                active_tab3: "ac_tab1",
                ac_sex: 'women',
                heightoff: {
                    height: ''
                },
                heightnav: {
                    height: ''
                },
                selected: 'li1',
                ac_login:"",//这是登陆状态
                 uname:"",
                 upwd:""
            }
        },
        components: {
            "titlebar": titlebar
        },
        methods: {
            is_logined(e){
             if(this.ac_login!=undefined){//判断当前是否登录
             console.log("当前this.ac_login是："+this.ac_login)
               this.$router.push(e.target.dataset.path)//获取当前元素的data-path的值 然后跳转
            }else{
                this.$toast("请先登录")
                this.$router.push("/login")//如果没有登录 就跳转到登录页面
            }
            },
          
            change_tab(tab) {
                this.active_tab2 = tab;
                // console.log(tab)
            },
            change_tab3(tab) {
                this.active_tab3 = tab;
                // console.log("active_tab3:" + tab)
            },
            changesex(sex) {//切换性别的时候改变ac_sex的值
                this.ac_sex = sex;
                this.selected = 'li1'
            },
             selected_li(sel_ed) {//切换li时触发
                this.selected = sel_ed;
            },
             hide(e){//隐藏侧边导航
                 var nav=document.getElementsByClassName("nav")[0];//获取侧边导航的div
                 nav.style.left='-100%';
                 e.target.style.transition='all .1s'
                 e.target.style.backgroundColor='rgba(0, 12, 0, 0)';
             },
             show(){
                 var nav=document.getElementsByClassName("nav")[0];
                 nav.style.left='0%';
                  nav.children[1].style.transition='all 3s'
                 nav.children[1].style.backgroundColor='rgba(0, 12, 0, 0.4)';
                console.log("测试是否可以接受到子组件的值");
             }
        },
        beforeMount() {
            this.heightoff.height = parseInt(document.documentElement.clientHeight || document.body.clientHeight) -
                157 + 'px'; //获取当前屏幕高度 减去固定的header和底部导航高度
            this.heightnav.height = parseInt(document.documentElement.clientHeight || document.body.clientHeight)+ 'px'; 
            console.log(this.heightoff.height)
            console.log(this.heightnav.height)
            this.ac_login=this.$route.query.id;
            this.uname=localStorage.getItem(this.ac_login)
            this.upwd=localStorage.getItem(this.uname+'+'+this.uname)
            console.log(this.ac_login)
        },
        watch:{
            num(){
               if(this.num>99){
                   this.num=99;

                   this.$toast("购物车达到上限")
               } 
            }
        }
    }
</script>
<style>
.carts{
    border-radius: 50%;
    overflow: hidden;
    background: rgba(184, 180, 180,.3);
    position: fixed;
      width: 45px;
    height: 45px;
    top: 40%;
    right: 7%;
    z-index: 999;
    text-align: center;
    border:1px solid #ccc;
    padding: 5px;
}
.carts:active{
    background: #555;
}
.sum{
    text-align: center;
      min-width: 20px;
    min-height: 20px;
    border:1px solid #fff;
    color:#fff;
    background: red;
     border-radius: 50%;
    position: fixed;
     top: 40%;
    right: 7%;
}
.carts img{
    width: 90%;
}

.mint-tab-container{
        overflow: auto !important;
}
.nav_bg{
    
    background: #333;
    color:rgb(233, 233, 233);
}
    .nav{
        position: fixed;
        width: 100%;
        height: 500px;
        z-index:999;
        display: flex; 
   
         left:-100%;
        transition: left .5s;
      
    }
    .nav .nav_left_div{
        width: 43%;
        background: #fff;
        height: 100%;
        padding: 0;
    }
   .nav .nav_left_ul{
       padding:0;
       margin: 0;
       list-style: none;
   }
   .nav .nav_left_li{
       padding: 5px 0;
       border-bottom:1px solid #ddd;
       font-size: .8rem;
   }
   .nav .nav_left_ul li:nth-child(2){
       padding: 5px 0;
       border-bottom:10px solid #ddd;
       font-size: .8rem;
   }
   .nav .nav_left_li a{
       line-height: 14px;
      /* display: block; */
   }
   .nav .nav_left_li img{
       display: inline-block;
       padding-left: 15px;
       padding-right: 10px;
    vertical-align: middle;
    width: 35px;
    height: 33px;
   }
   /* .nav .nav_left_li span{
       line-height: 40px;
       padding-bottom:2px; 
   } */
   /* 
   .nav .nav_left_li */

    .nav .nav_left_div .logo{
        background: #444;
    text-align: center;
    padding: 17px 0;
    }
    .nav .nav_left_div .logo img{
        width: 33%;
    }
    .nav .nav_right{
        position: absolute;
        left: 43%;
        width: 57%;
        height: 100%;
        background-color:rgba(0, 12, 0, 0);
        transition: all 3s;
    }

    .tab1 .swipe {
        height: 230px;

    }

    .tab1 .nav_ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .tab1 .nav_li {
        box-sizing: border-box;
        width: 25%;
        padding: 10px 0
    }

    .tab1 .nav_li a {
        display: block;
        text-align: center;
        text-decoration: none;
        color: #8F8D8F;
        font-size: .7rem;
    }

    .tab1 .nav_li a p {
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 1.5rem;
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
    }

    .tab1 .nav_li a img {
        width: 90%;
        height: 90%;
    }

    .tab1 .img_new img {
        width: 100%;
    }

    .tab1 .f1,.f2,.f3 {
        text-align: center;
    }

    
    .tab1 .ul_li {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
         
    }

    .tab1 .f1 .item {
        padding: 0 10px;
        color: #8F8D8F;
        font-size: .7rem;
        width: 19%;
    }
    .tab1 .f2 .item {
        width: 50%;
    }

    .tab1 .f1 .item img {
        width: 100%;
    }
    .tab1 .f2 .item p {
       
        padding: 0;
        margin: 0;
    }
    .tab1 .f2 .item img {
        width: 97%;
    }
    .tab1 .f3 .item img {
        width: 98% !important;
    }
.tab1 .f2 .u-text {
    text-align: left;
     font-size: .8rem;
margin: 0;
padding: 5px 5px;
}
.tab1 .f2 .u-date {
    text-align: left;
     font-size: .7rem;
margin: 0;
padding: 5px 5px;
color: #8F8D8F;
}
.tab1 .f2 .u-text a{
text-decoration: none;
color: #333;
}

 .tab1 .f4 .item {
        width: 50%;
    }

    .tab1 .f4 .item p {
           padding: 7px .8rem;
    font-size: .7rem;
    margin: 0;
    }
    .tab1 .f4 .item p:nth-child(3) {
           padding: 7px 1.2rem;
    font-size: .7rem;
    margin: 0;
    }
    .tab1 .f4 .item img {
        width: 97%;
    }


.tab1 .f4 .item button{
    margin-left: 1.2rem;
    background: #000;
    color:#ddd;
    outline: none;
}
    .ac_tab2 {
        height: 100%;
    }

    .ac_women,.ac_man {
        height: 13rem;
    }

    .full {
        width: 100%;
        height: 100%;
    }

    div.tab2 {
        color: #8F8D8F;
    }

    .ac_tab2 .pinpai .pin_ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .ac_tab2 .pinpai .pin_ul .li_title {
        background: #ccc;
        padding: 0 10%;
        border: 1px solid #ccc;
    }

    .ac_tab2 .pinpai .pin_ul .lis {
        font-size: .8rem;
            color: #333333;
        padding: 7px 10%;
        border: 1px solid #eee;
    }

    .ac_tab2 .ac_women {
        background: #000;
    }

    .ac_tab2 .pinpai img {
        width: 25%;
    }

    .tab2 .sex {
        display: flex;
        width: 100%;
        font-size: 14px;
        border-bottom: 1px solid #ccc;
    }

    .tab2 .sex div {
        box-sizing: border-box;
        padding: 15px 25px;

    }

    .tab2 .sex .undeline {
        border-bottom: 3px solid #000;
    }

    .list_ul {
        display: flex;
        font-size: 0.8rem;

    }

    .list_ul .list_ul_left {
        width: 25%;
        list-style: none;
        padding: 0;
        margin: 0;
        background: #eee;
    }

    .list_ul .list_right {

        width: 75%;
        text-align: center;
    }

    .list_ul .list_right .ul_li {
        display: flex;
        flex-wrap: wrap;
    }

    .list_ul .list_right .item {
        width: 33%;
        padding-top: 5%;
        text-align: center;
        position: relative;
    }

    .list_ul .list_right .item img {
        width: 100%;
        height: 85px;

    }

    .list_ul .list_right .item span {
        display: block;
    }

    .list_ul_left li {
        text-align: center;
        border-bottom: 1px solid #fff;
        padding: 12px 20px;
    }

    .list_ul_left li.seled {
        background: #fff;
        border-left: 2px solid rgb(228, 179, 240);
    }

    .list_ul_left li.seled2 {
        background: #fff;
        border-left: 2px solid rgb(150, 203, 235);
    }

    mt-tab-container {
        width: 100%;
    }

    mt-tab-container-item {
        width: 100%;
    }

    .pageflow {
        overflow: auto;
        padding-bottom: 60px;
    }



    .mint-tabbar>.mint-tab-item.is-selected {
        background-color: rgb(26, 22, 22) !important;
        color: #159091 !important;
        margin-top: -13px;
        border-radius: 8px;
    }

    /* 设置底部导航的z轴，在最顶层显示 */
    .mint-tabbar.is-fixed {
        z-index: 998 !important;
    }

    .mint-tabbar {
        background-color: rgb(26, 22, 22) !important;
        color: snow
    }

    .tab3 .com {
        padding-bottom: 7px;
        border-bottom: 12px solid #ddd;
    }

    .tab3>div {
        width: 100%;
    }

    .tab3 .dir .tab3_listbody video {
        margin-top: -21px;
        width: 90%;
        height: 200px;
        margin-left: 15px;

    }

    .tab3 .dir .video div {
        position: absolute;
        width: 40px;
        background: #111;
        top: 37px;
        left: 24px;
        z-index: 1;
        color: aliceblue;
        font-size: 10px;
        border-radius: 10px;
        padding: 3px 5px;
        text-align: center;
        position: relative;
    }

    .tab3 .dir .video div>span:first-child {
        display: inline-block;
        color: red;
    }

    .tab3_listbody>div:first-child {
        padding: 8px 0;
        width: 90%;
        text-indent: 30px;
        margin: 0 auto;
    }

    /* .tab3_listbody div:nth-child(2){
    display: flex;
} */
    .tab3_listbody img {
        width: 44%;
        margin-left: 15px;
    }

    .tab3 .tab3_list {
        width: 95%;
        margin: 0 auto;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        border-bottom: 1px solid #ddd;
        color: grey;
    }

    .tab3 .tab3_list img {
        width: 35px;
        height: 35px;
    }

    .tab3 .list_right {
        display: inline-block;
        padding-top: 8px;
        font-size: 14px;
    }

    .tab3 .list_right span {
        display: inline-block;
        border: 1px solid #ddd;
        padding: 5px 10px;
        border-radius: 5px;
    }

    .tab3 .list_right span:active {
        background: #555858;
    }

    .tab3 .tab3_list .list_left {
        display: flex;
    }

    .tab3 .tab3_list .list_left div:first-child {
        margin-right: 9px;
        background: #000;
        border-radius: 50%;
    }

    .tab3 .tab3_list .list_left div:nth-child(2) span:first-child {
        display: inline-block;
        padding-bottom: 7px;
    }

    .tab3 .tab3_list .list_left div:nth-child(2) span:nth-child(2) {
        display: block;
        font-size: 12px;
    }

    .tab4 div {
        width: 100%;
    }

    .tab4 div img {
        width: 100%;
    }

    .tab5 .img_logo {
        width: 110px;
        margin: 20px auto;
        background: #000;
        text-align: center;
        border-radius: 50%;
        border: 4px solid #ccc;
    }
     .tab5 .login{
         text-align: center;
            width: 110px;
        margin: 10px auto;
     }

    .tab5 .img_logo img {
        width: 110px;
    }

    .tab5 .item_bar {
        display: flex;
        list-style: none;
        justify-content: space-around;
        padding-right: 20px;
        padding-left: 20px;
        margin-bottom: 12px;
        color: #ccc;
        border-bottom: 10px solid #ddd;

    }

    .tab5 .item_bar li:nth-child(2n) {
        padding-top: 8px;
        height: 40px;
        font-size: 23px;
    }

    .tab5 .item_bar li div:first-child {
        color: #ccc;
        padding-left: 10px;
        margin-bottom: 3px;
    }

    .tab5 .item_bar li span+span {
        margin-left: -5px;
        background: #000;
    }

    .tab5 .item_older {
                color:#333;
        display: flex;
        justify-content: space-between;
        padding: 0 20px 10px 20px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
    }

    .tab5 .item_older2 {
                color:#333;
        position: relative;
        height: 35px;
        line-height: 35px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px 0px 20px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
    }

    .tab5 .item_older2 .p1 {
        margin: 0;
        padding: 3px;
    }

    .tab5 .item_older2 .p1 img {
        width: 24px;
    }

    .tab5 .item_older2 .p1 div {
        position: absolute;
        display: inline-block;
        left: 52px;
    }

    .tab5 .item_older3 {
        position: relative;
        height: 35px;
        line-height: 35px;
        display: flex;
        justify-content: space-between;
        padding: 3px 20px 0px 20px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
    }

    .tab5 .item_older3 .p1{
        margin: 0;
        padding: 3px;
    }

    .tab5 .item_states {
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding-bottom: 12px;
        border-bottom: 10px solid #ddd;
        padding: 0 15px 12px 15px;
        margin: 5px 0;
        font-size: 14px;
    }

    .tab5 .item_older3 .p1 img {
        width: 24px;
    }

    .tab5 .item_older3 .p1 div {
        position: absolute;
        display: inline-block;
        left: 52px;
        color:#333;
    }

    .tab5 .item_states li {
        width: 19%;
        text-align: center;
        color:#333;
        font-size: .8rem;
    }

    /* .tab5 .item_states li div{
   
} */
    .tab5 .item_states li img {
        display: inline-block;
        margin-bottom:7px; 
        width: 28px;
    }
</style>