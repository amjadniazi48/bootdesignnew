import React from 'react'

function PopularpostSidebar() {
  return (
    <aside className="widget">
          <div className="block-title-4">
            <h4 className="h5 title-arrow">
              <span>منشور مشهور</span>
            </h4>
          </div>

          <ul className="post-number list-unstyled border-bottom-last-0 rounded mb-3">
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">لماذا سينتهي العالم بدون انتخابات سياسية</a>
                  </li>
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">قابل الرجل الذي صمم وحش دوكاتي</a>
                  </li>
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">إطلاق لقطات تجسس لأودي R8 سبايدر 2020</a>
                  </li>
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">Lamborghini تجعل سباق Huracán GT3 أسرع لعام 2019</a>
                  </li>
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">تخطط ZF لدفع 14 مليار دولار للمركبة المستقلة ، مفهوم فان</a>
                  </li>
                </ul>

          <div className="gap-0"></div>
        </aside>
  )
}

export default PopularpostSidebar