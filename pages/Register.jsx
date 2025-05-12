// src/pages/Register.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // التغيير في البيانات المدخلة
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // عند إرسال النموذج
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // إرسال البيانات إلى السيرفر
      await axios.post("http://localhost:5000/api/users/register", formData);
      alert("تم إنشاء الحساب بنجاح!");
      navigate("/login"); // الانتقال إلى صفحة تسجيل الدخول بعد التسجيل
    } catch (error) {
      alert("حدث خطأ أثناء التسجيل");
      console.error(error);
    }
  };

  return (
    <div className="register-form">
      <h2>إنشاء حساب</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="الاسم"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">إنشاء الحساب</button>
      </form>
    </div>
  );
};

export default Register;
