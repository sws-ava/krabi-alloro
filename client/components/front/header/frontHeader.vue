<template>
      <header class="page-head section-top-15 section-lg-top-0">
        <!-- RD Navbar-->
        <div class="rd-navbar-wrap rd-navbar-variant-1">
          <nav class="rd-navbar" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fullwidth" data-md-layout="rd-navbar-fullwidth" data-lg-layout="rd-navbar-fullwidth" data-device-layout="rd-navbar-fixed" data-sm-device-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fullwidth" data-lg-stick-up-offset="207px">
            <button data-rd-navbar-toggle=".rd-navbar-top-panel" type="submit" class="rd-navbar-collapse-toggle"><span></span></button>
			            <div class="rd-navbar-top-panel">
              <div class="rd-navbar-top-panel-inner">
                <div class="rd-navbar-address">
                  <div class="unit unit-horizontal unit-spacing-xs">
                    <div class="unit-left"><span class="icon icon-xxs mdi mdi-map-marker"></span></div>
                    <div class="unit-body"><a href="#" class="text-base">г. Одесса, Греческая площадь / Дерибасовская</a></div>
					<div class="unit-left">
						<a target="_blank" style="padding-left: 2em;" href="https://www.facebook.com/krabisushicafe/">
							<span class="icon icon-sm mdi mdi-facebook"></span>
						</a>
						<a target="_blank" style="padding-left: 2em;" href="https://www.instagram.com/krabicafe/">
							<span class="icon icon-sm mdi mdi-instagram"></span>
						</a>
					</div>
                  </div>
                </div>
                <div class="rd-navbar-address">
                  <div class="unit unit-horizontal unit-spacing-xs">
                    <div class="unit-left"><span class="icon icon-xxs mdi mdi-phone"></span></div>
                    <div class="unit-body">
						<a href="tel:+380681689695" class="text-base">(068) 168 96 95</a>
						&nbsp;&nbsp;&nbsp;
						<a href="tel:+380638777851" class="text-base">(063) 877 78 51</a>
					</div>
                  </div> 
                  <div class="unit unit-horizontal unit-spacing-xs">
                    <div class="unit-left"><span class="icon icon-xxs mdi mdi-clock"></span></div>
                    <div class="unit-body">
                    	<time datetime="2016">10:00 - 23:30</time>
						<div style="margin-top: 10px; text-align: revert; display: flex; justify-content: flex-end; gap: 6px;">
							<a href="/">RU</a> | <a href="http://ua.sushi-krabi.od.ua">UKR</a>
						</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rd-navbar-main-panel">
              <div class="rd-navbar-inner">
                <!-- RD Navbar Panel-->
                <div class="rd-navbar-panel">
                  <!-- RD Navbar Toggle-->
                  <button data-rd-navbar-toggle=".rd-navbar-nav-wrap" type="submit" class="rd-navbar-toggle"><span></span></button>
                  <!-- Little logo-->
				  

				  <a class="little-logo" href="/"><img src="/images/logo-mini.png"></a>
				  <!-- RD Navbar Brand-->
                  <div class="rd-navbar-brand">
					<router-link 
						:to="{ path: '/' }" 
						class="brand-name" 
					>
						<span title="Кафе Краби, кафе krabi, суши краби, sushi krabi" alt="Кафе Краби, кафе krabi, суши краби, sushi krabi" >Sushi Krabi</span>
						<span>Thai & Japanese Cafe</span>
                    	<div class="rd-navbar-address"></div>
					</router-link>
					<!-- <a href="/" class="brand-name"></a> -->
					</div>
                </div>
              </div>
              <div class="rd-navbar-nav-inner justify-around display-flex align-center">
                <div class="rd-navbar-nav-wrap">
                  <!-- RD Navbar Nav-->
					<ul class="rd-navbar-nav">
						<li><a href="/menyu">Меню</a></li>
						<li>
							<router-link 
								:to="{ path: '/kontseptsiya' }" 
							>
								Концепция
							</router-link>
						</li>
						<li><a href="/interer">Интерьер</a></li>
						<li>
							<router-link 
								:to="{ path: '/dostavka' }" 
							>
								Доставка
							</router-link>
						</li>
						<li><a href="/novosti">Новости</a></li>
						<li><a href="/aktsii">Акции</a></li>
						<li><a href="/galereya">Галерея</a></li>
						<li>
							<router-link 
								:to="{ path: '/kontakty' }" 
							>
								Контакты
							</router-link>
						</li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>


</template>

<script>


export default {
  	
}

</script>