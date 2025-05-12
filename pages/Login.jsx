// src/pages/Login.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await axios.post("http://localhost:5000/api/users/login", formData);
      // إذا تم تسجيل الدخول بنجاح
      localStorage.setItem("token", response.data.token); // تخزين التوكن في التخزين المحلي
      alert("تم تسجيل الدخول بنجاح!");
      navigate("/dashboard"); // الانتقال إلى صفحة لوحة التحكم بعد تسجيل الدخول
    } catch (error) {
      alert("خطأ في تسجيل الدخول");
      console.error(error);
    }
  };

  return (
    <div className="login-form">
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">تسجيل الدخول</button>
      </form>
    </div>
  );
};

export default Login;
