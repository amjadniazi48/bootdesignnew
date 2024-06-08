import React from "react";

const Contactus = () => {
  return (
    <div class="container content-space-t-1 p-4 mt-20 ">
      <div className="block-title-6 text-center">
        <h4 className="h5 border-primary mb-5">
          <span className="bg-primary text-white">ہم سے رابطہ کریں</span>
        </h4>
      </div>

    
        <div class="row">   
              <div class="col-12">
                <h4 className="fw-bold">رابطہ برائے خط وکتابت</h4>
              </div>
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
                  <i class="bi-telephone me-2"></i> 03006664552
                </div>
              </div>
          </div>

  );
};

export default Contactus;
