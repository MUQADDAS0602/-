import { motion } from "motion/react";
import { 
  MapPin, Phone, Clock, Star, ChefHat, Utensils, Menu as MenuIcon, X, 
  Car, Users, Info, CreditCard, CheckCircle2 
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '소개', id: 'about' },
    { name: '메뉴', id: 'menu' },
    { name: '갤러리', id: 'gallery' },
    { name: '이용안내', id: 'info' },
    { name: '리뷰', id: 'reviews' },
    { name: '오시는 길', id: 'location' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-orange-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <span className="font-serif text-2xl font-bold tracking-tight text-orange-900">서울본본갈비</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-stone-600 hover:text-orange-900 font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 hover:text-orange-900"
              >
                {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-stone-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-stone-600 hover:text-orange-900 hover:bg-orange-50 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ldb-phinf.pstatic.net/20251207_181/1765063810493UGjfo_JPEG/1000030231.jpg" 
            alt="Restaurant exterior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-orange-300 font-medium tracking-widest uppercase text-sm mb-4">Premium Korean BBQ</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              정성을 다해 구워내는<br />프리미엄 숯불갈비
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light">
              서울본본갈비에서 특별한 미식의 경험을 선사합니다.
            </p>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              우리의 이야기
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section - Poetic Text */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-orange-900 mb-4 leading-tight">
              진짜 갈비집!!!<br />서울 본본갈비
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-stone-800 mb-12">
              뼈에서 시작해, 본질로 완성하다!
            </h3>
            
            <div className="space-y-8 text-lg md:text-xl text-stone-600 leading-loose font-serif">
              <p>
                갈비를 잘한다는 집은 많습니다.<br />
                하지만 뼈고기를 제대로 다루는 집은 드뭅니다.
              </p>
              <p>
                서울 본본갈비는 그 뼈에서부터 시작합니다.<br />
                우리는 고기의 결을 먼저 보고, 뼈의 방향을 생각한 다음에<br />
                포를 뜨고, 온도를 맞추고, 불의 세기를 조절합니다.<br />
                그렇게 한 장 한 장, 정직한 손으로 고기를 만듭니다.
              </p>
              <p>
                대충 자르고 굽는 갈비가 아닙니다.<br />
                포질은 결을 따라 정교하게, 숙성은 정온하게,<br />
                불맛은 강하지 않게, 대신 깊게 스며들도록 잡습니다.<br />
                우리는 고기를 조리하는 게 아니라, 해석하고 설계합니다.
              </p>
              <p>
                그래서 양념갈비 하나도 다릅니다.<br />
                입에 넣으면 고기와 뼈가 준 밸런스가 느껴지고,<br />
                씹을수록 한 점의 고기 안에 깃든 결, 온기, 리듬이 살아납니다.
              </p>
              <p>
                이 모든 건 결국 한 가지 본질을 위한 일입니다.<br />
                음식이란 무엇으로 완성되는가라는 질문에<br />
                우리는 요리의 본질, 서비스의 근본, 공간의 이유로 답합니다.
              </p>
              <p>
                그래서 서울 본본갈비는 매일 같은 방식으로 고기를 손질하고,<br />
                같은 마음으로 상을 차립니다.<br />
                어느 날은 특별하게, 어느 날은 소박하게<br />
                하지만 항상 똑같이 정직하고 치열하게 준비합니다.
              </p>
              <p className="font-bold text-stone-900 text-xl md:text-2xl pt-8 border-t border-stone-200 mt-12 inline-block">
                그게 우리의 고집입니다.<br />
                그리고 그것이, 오늘 이 자리에 당신을 모신 이유입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-medium tracking-wider uppercase text-sm">Our Menu</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">대표 메뉴</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-16">
            {/* Signature Sets */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 flex items-center border-b border-stone-300 pb-4">
                <span className="bg-orange-200 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-orange-800 text-sm">01</span>
                시그니처 세트 메뉴
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { name: "2색 시그니처 돈갈비 연인세트", desc: "가성비 최고의 세트 메뉴 (2색 갈비 선택 400g + 된장찌개 또는 김치찌개 + 솥밥 2인 + 재래김 + 재래양념간장)", price: "48,000" },
                  { name: "4색 시그니처 돈갈비 가족세트", desc: "4색 갈비 800g + 된장찌개 또는 김치찌개 + 솥밥 4인 + 재래김 + 재래양념간장", price: "95,000" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-stone-900 mb-2">{item.name}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="text-xl font-bold text-orange-700 mt-4 text-right">
                      ₩{item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Raw Meat */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 flex items-center">
                  <span className="bg-orange-200 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-orange-800 text-sm">02</span>
                  소금구이 / 생고기
                </h3>
                <div className="space-y-6">
                  {[
                    { name: "돈 수제 생 삼겹 포갈비 (200g)", desc: "통뼈 삼겹을 그대로 반컷팅해 직접 포떠 내어드리는 진짜 생갈비", price: "19,000" },
                    { name: "마포식 꽃목살 소금구이 (160g)", desc: "70년대 마포식 그대로 꽃소금을 이용한 생고기 목살", price: "17,000" },
                    { name: "통항정 어슷구이 (160g)", desc: "통항정을 그대로 어슷하게 썰어 내어 드리는 항정살", price: "21,000" },
                    { name: "소 수제 생포갈비 (500g)", desc: "블랙앵거스 cab급 최고급 LA갈비를 수제로 포떠 내어 드리는 상품", price: "75,000" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex justify-between items-start border-b border-stone-200 pb-4"
                    >
                      <div className="pr-4">
                        <h4 className="text-lg font-bold text-stone-900">{item.name}</h4>
                        <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                      </div>
                      <div className="text-lg font-bold text-orange-700 whitespace-nowrap">
                        ₩{item.price}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Seasoned Meat */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 flex items-center">
                  <span className="bg-orange-200 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-orange-800 text-sm">03</span>
                  수제 양념육
                </h3>
                <div className="space-y-6">
                  {[
                    { name: "한방간장 돈갈비 (200g)", desc: "3가지 한약재료를 이용하며 48시간 끓여낸 과일 양념으로 만들어낸 진짜 돼지갈비", price: "19,000" },
                    { name: "수원식 소금양념 돈갈비 (200g)", desc: "소금과 배, 참기름, 후추만을 이용해 만든 수원식 소금 구이 양념", price: "19,000" },
                    { name: "약고추장 돈갈비 (200g)", desc: "갖가지 야채 과일과 고추장을 이용하여 48시간 숙성시킨 약고추장 돈갈비", price: "19,000" },
                    { name: "재래식 된장박이 꽃목살 (180g)", desc: "합동된장과 비법소스를 믹스하여 만든 재래된장을 이용한 꽃목살", price: "19,000" },
                    { name: "한방간장 소 수제 생포갈비 (500g)", desc: "안동식 그대로 간마늘과 발효간장을 이용해서 만든 전통적인 양념 갈비", price: "75,000" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex justify-between items-start border-b border-stone-200 pb-4"
                    >
                      <div className="pr-4">
                        <h4 className="text-lg font-bold text-stone-900">{item.name}</h4>
                        <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                      </div>
                      <div className="text-lg font-bold text-orange-700 whitespace-nowrap">
                        ₩{item.price}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lunch Specials */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 flex items-center border-b border-stone-300 pb-4">
                <span className="bg-orange-200 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-orange-800 text-sm">04</span>
                평일 점심특선 (11:30~14:00)
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  { name: "생 소갈비 우렁쌈밥 정식", price: "37,000" },
                  { name: "한방간장 소갈비 우렁쌈밥 정식", price: "37,000" },
                  { name: "생 삼겹 포갈비 우렁쌈밥 정식", price: "18,000" },
                  { name: "한방간장 돈갈비 우렁쌈밥 정식", price: "18,000" },
                  { name: "직화제육 우렁쌈밥 정식", price: "12,000" },
                  { name: "직화불백 우렁쌈밥 정식", price: "12,000" },
                  { name: "고기 가득 나주식 곰탕", price: "12,000" },
                  { name: "소고기 가득 얼큰해장국", price: "12,000" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex justify-between items-center border-b border-stone-200 pb-3"
                  >
                    <h4 className="text-base font-bold text-stone-800">{item.name}</h4>
                    <div className="text-base font-bold text-orange-700 whitespace-nowrap">
                      ₩{item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-medium tracking-wider uppercase text-sm">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">매장 전경 및 음식</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-sm"
            >
              <img 
                src="https://ldb-phinf.pstatic.net/20251207_150/1765063810483vYuve_JPEG/1000030203.jpg" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-sm"
            >
              <img 
                src="https://ldb-phinf.pstatic.net/20251207_219/1765063809468ddvqt_JPEG/1000030227.jpg" 
                alt="Delicious food" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-sm"
            >
              <img 
                src="https://ldb-phinf.pstatic.net/20251207_33/1765063809346IOVYn_JPEG/1000030230.jpg" 
                alt="Table setting" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-sm"
            >
              <img 
                src="https://ldb-phinf.pstatic.net/20251207_14/1765063809583Ycv2g_JPEG/1000030224.jpg" 
                alt="Meat grilling" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info & Facilities Section */}
      <section id="info" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-medium tracking-wider uppercase text-sm">Information</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">이용 안내 및 편의시설</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Parking */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-600 mb-6">
                <Car size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">주차 (Parking)</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>무료 주차 가능</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>장애인 주차 구역</span></li>
              </ul>
            </motion.div>

            {/* Seating */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-600 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">좌석 (Seating)</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>프라이빗 룸 (2~48인)</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>단체석 (1~120인)</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>커플석 / 일반석 / 1인석</span></li>
              </ul>
            </motion.div>

            {/* Facilities */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-600 mb-6">
                <Info size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">편의시설 (Facilities)</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>콜키지 (유료)</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>무선 인터넷 (Wi-Fi)</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>남녀 화장실 구분</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>유아의자 / 대기 공간</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>반려동물 동반 가능</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>휠체어 접근 가능</span></li>
              </ul>
            </motion.div>

            {/* Payment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-600 mb-6">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">결제 (Payment)</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>지역화폐 (카드/모바일/지류)</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>제로페이</span></li>
                <li className="flex items-start"><CheckCircle2 size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> <span>간편결제</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-medium tracking-wider uppercase text-sm">Customer Reviews</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">생생한 방문 후기</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "김**",
                date: "2023.10.15",
                text: "고기가 입에서 살살 녹아요! 양념도 자극적이지 않고 딱 좋습니다. 가족 외식으로 최고예요. 직원분들도 너무 친절하십니다."
              },
              {
                name: "이**",
                date: "2023.11.02",
                text: "휘경동에 이런 맛집이 생겨서 너무 좋아요. 직원분들이 고기를 다 구워주셔서 편하게 먹었습니다. 냉면도 전문점 못지않게 맛있네요."
              },
              {
                name: "박**",
                date: "2023.11.20",
                text: "돼지갈비 진짜 맛있어요! 숯불향이 제대로 배어있고 육즙이 가득합니다. 비빔냉면이랑 같이 먹으면 환상입니다. 재방문 의사 200%!"
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-700 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex justify-between items-center text-sm text-stone-500">
                  <span className="font-medium text-stone-900">{review.name}</span>
                  <span>{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Footer */}
      <section id="location" className="bg-stone-900 text-stone-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-8">서울본본갈비</h2>
              <p className="mb-8 text-stone-400 leading-relaxed">
                최고의 맛과 서비스로 고객님을 모십니다.<br />
                단체 예약 및 문의는 전화로 부탁드립니다.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">오시는 길</h4>
                    <p>서울 동대문구 휘경동 330</p>
                    <p className="text-sm text-stone-500 mt-1">(330 Hwigyeong-dong, Dongdaemun-gu, Seoul)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">예약 및 문의</h4>
                    <p>02-969-0211</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">영업 시간</h4>
                    <p>매일 11:30 - 22:00</p>
                    <p className="text-sm text-stone-500 mt-1">라스트 오더 21:10</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-stone-800 rounded-2xl overflow-hidden relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <MapPin size={48} className="text-orange-500 mb-4" />
                <h3 className="text-xl text-white font-bold mb-2">서울본본갈비</h3>
                <p className="text-stone-400">서울 동대문구 휘경동 330</p>
                <a 
                  href="https://naver.me/FQypfX3N" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-white text-stone-900 px-6 py-2 rounded-full font-medium hover:bg-orange-50 transition-colors"
                >
                  네이버 지도에서 보기
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-16 pt-8 text-center text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} 서울본본갈비 (Seoul Bonebon Galbi). All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
