import React from "react";

const Contactus = () => {
  return (
    <div class="container content-space-t-1 p-4 mt-20 ">
      <div className="block-title-6 text-center">
        <h4 className="h5 border-primary mb-5">
          <span className="bg-primary text-white">ہم سے رابطہ کریں</span>
        </h4>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center">
        <div class="col-4 mb-4 mb-lg-0">
          <div class="card card-lg text-center h-100">
            <div class="card-body">
             

              <div class="row mb-5">
                <h4 className="fw-bold">رابطہ برائے خط وکتابت</h4>
              </div>

              <div class="mb-5 row">
                <span class="d-block">
                  امام خمینی ٹرسٹ پکی شاہ مردان ،میانوالی، لاہور، پاکستان
                </span>
              </div>

              <div className="row">
                <div classNa="col-6" href="mailto: info@ssdo.org.pk ">
                  ہیڈ آفس نمبر
                </div>

                <div className="col-6">
                  <i class="bi-telephone me-2"></i> 0459395550
                </div>
              </div>
              <div className="row">
                <div classNa="col-6" href="mailto: info@ssdo.org.pk ">
                  سید ابرا حسین نقوی
                </div>

                <div className="col-6">
                  <i class="bi-telephone me-2"></i> s03006664552
                </div>
              </div>
            </div>
          </div>
       
          <div class="col-4 mb-4 mb-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13275.493038276814!2d73.0372902!3d33.7122283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe52c5555555%3A0xb598d31787fafb36!2sSustainable%20Social%20Development%20Organization%20(SSDO)!5e0!3m2!1sen!2s!4v1680010412451!5m2!1sen!2s"
              style={{ border: "0", width: "100%", height: "450px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              async
              defer
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
