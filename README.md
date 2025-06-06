# Product-Store

A simple full-stack CRUD (Create, Read, Update, Delete) web application for managing products. Built with **React**, **Node.js**, **Express**, and **PostgreSQL**.

> 🔗 **Live Demo:** [Deployed on Render](https://product-store-23dx.onrender.com)


---

## ✨ Features

* 🖼️ **View Products**: Displays product image, name, and price.
* ➕ **Add Product**: Create new products via a form.
* 📝 **Edit Product**: Update product details inline.
* ❌ **Delete Product**: Remove products from the list.
* 🎨 **Theme Toggle**: Switch between light and dark themes using DaisyUI.
* 🛡️ **Rate Limiting**: Integrated with **ArcJet** to protect against request abuse.

---

## 🔧 Tech Stack

### 🖥️ Frontend

* **React**
* **Axios** for API calls
* **Tailwind CSS** + **DaisyUI** for UI and themes

### 🌐 Backend

* **Node.js** + **Express**
* **PostgreSQL** hosted on **Neon**
* **ArcJet** for rate limiting

### 🚀 Deployment

* **Render** (Frontend & Backend)

---

## 📷 Screenshots
<table>
  <tr>
    <td>
       <strong> Product List</strong><br/><br/>
      <img src="./assets/ss1.png" alt="Product List" width="500"/>
    </td>
    <td>
       <strong> Add Product</strong><br/><br/>
      <img src="./assets/ss2.png" alt="Add Product" width="500"/>
    </td>
  </tr>
   <tr>
    <td>
       <strong> Edit Product</strong><br/><br/>
      <img src="./assets/ss3.png" alt="Product List" width="500"/>
    </td>
    <td>
       <strong> Toggle Theme</strong><br/><br/>
      <img src="./assets/ss4.png" alt="Add Product" width="500"/>
    </td>
  </tr>
   <tr>
    <td>
       <strong> Responsive </strong><br/><br/>
      <img src="./assets/ss5.png" alt="Product List" height="500"/>
    </td>
    <td>
      <img src="./assets/ss6.png" alt="Add Product" height="500"/>
    </td>
  </tr>
</table>


---

## 🛠️ Getting Started

### Prerequisites

* A free account on [Neon](https://neon.tech/) (PostgreSQL as a Service)
* A free account on [Arcjet](https://arcjet.com) for applying rate limit  

---
###  .env Setup

```env
PORT=3000
PGUSER=your_postgres_username
PGPASSWORD=your_postgres_password
PGHOST=your_neon_host
PGDATABASE=your_database_name
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```
### Setup

   ```bash
   npm run build
   npm start
   ```



## 🚀 Future Improvements

* Add user authentication
* Improve form validation
* Add product categories and filters
* Add confirmation modals for delete actions

---
